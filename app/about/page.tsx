import { seoUtils } from "@/lib/seos";
import AboutClient from "./AboutClient";

export const generateMetadata = seoUtils.about;

export default function AboutPage() {
  return <AboutClient />;
}
