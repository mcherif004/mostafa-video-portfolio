import { Suspense } from "react";
import dynamicImport from "next/dynamic";
import { Pricing, PricingSkeleton } from "@/components/pricing";
import { PricingPacks } from "@/components/pricing-packs";
import { Work, WorkSkeleton } from "@/components/work";

export const dynamic = "force-dynamic";

const Hero = dynamicImport(() => import("@/components/hero").then((mod) => mod.Hero));
const FeaturedVideo = dynamicImport(() =>
  import("@/components/featured-video").then((mod) => mod.FeaturedVideo)
);
const Services = dynamicImport(() => import("@/components/services").then((mod) => mod.Services));
const Contact = dynamicImport(() => import("@/components/contact").then((mod) => mod.Contact));
const ClientsMarquee = dynamicImport(() =>
  import("@/components/clients-marquee").then((mod) => mod.ClientsMarquee)
);
const TrackingReport = dynamicImport(() =>
  import("@/components/tracking-report").then((mod) => mod.TrackingReport)
);

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedVideo />
      <Services />
      <ClientsMarquee />
      <Suspense fallback={<WorkSkeleton />}>
        <Work />
      </Suspense>
      <PricingPacks />
      <Suspense fallback={<PricingSkeleton />}>
        <Pricing />
      </Suspense>
      <TrackingReport />
      <Contact />
    </main>
  );
}
