import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory store for rate limiting
// Note: In production serverless (like Netlify), this memory is not shared between lambdas.
// For strict enforcement, use KV/Redis. For basic protection, this works per-instance.
const rateLimit = new Map<string, { count: number; lastReset: number }>()

const LIMIT = 5 // requests
const WINDOW = 60 * 60 * 1000 // 1 hour

export function proxy(request: NextRequest) {
  // Only apply to contact API
  if (request.nextUrl.pathname.startsWith('/api/contact')) {
    const ip = request.headers.get('x-forwarded-for') || 'ip'

    const now = Date.now()
    const record = rateLimit.get(ip) || { count: 0, lastReset: now }

    if (now - record.lastReset > WINDOW) {
      record.count = 0
      record.lastReset = now
    }

    if (record.count >= LIMIT) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again in an hour.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } },
      )
    }

    record.count++
    rateLimit.set(ip, record)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/contact',
}
