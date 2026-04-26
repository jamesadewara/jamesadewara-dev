import HomeClient from "./home/HomeClient";

import configPromise from "@/lib/config";

export default async function Home() {
  const config = await configPromise;
  
  return <HomeClient contactHrefs={config.contactHrefs} />;
}
