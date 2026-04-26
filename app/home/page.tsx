import { redirect } from "next/navigation";

// /home redirects to / to avoid a duplicate homepage route with identical content
export default function HomePage() {
  redirect("/");
}
