import { seoUtils } from "@/lib/seos";
import ContactClientComponent from "./ContactClient";

import configPromise from "@/lib/config";

export const generateMetadata = seoUtils.contact;

export default async function ContactPage() {
  const config = await configPromise;
  
  return <ContactClientComponent contactHrefs={config.contactHrefs} />;
}