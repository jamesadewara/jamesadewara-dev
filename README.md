# jamesadewara.me

**Live Site:** [https://jamesadewara.me/](https://jamesadewara.me/)

Minimalist, performance-focused personal portfolio and contact portal built with Next.js 16.2.4, Tailwind CSS v4, and Nodemailer.

> **A quick note on source code visibility:**
> I do not normally make my clients' work or production source code public out of respect for confidentiality and proprietary systems. However, since this website is built entirely for myself, I've decided to make this repository public. Feel free to use it as a reference for how I structure and ship full-stack web applications.

## Built With
- **Framework**: Next.js 16.2.4 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Email/API**: Nodemailer (Serverless API Route)

## Running Locally

1. Clone the repository and install dependencies:
   ```bash
   pnpm install
   ```

2. Copy the example `.env` file (if applicable) and populate your SMTP credentials:
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   SMTP_SECURE=false
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

## Contact
If you're looking for a developer to help launch your MVP, reach out via the contact form on my live site or at [cs@jamesadewara.me](mailto:cs@jamesadewara.me).
