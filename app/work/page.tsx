import { seoUtils } from "@/lib/seos";
import WorkClient from "./WorkClient";

export const generateMetadata = seoUtils.work;

export default function WorkPage() {
  return <WorkClient />;
}