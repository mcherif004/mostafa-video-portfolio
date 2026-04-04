import { Suspense } from "react";
import dynamicImport from "next/dynamic";
import { Pricing, PricingSkeleton } from "@/components/pricing";
import { Work, WorkSkeleton } from "@/components/work";

export const dynamic = "force-dynamic";

const Hero = dynamicImport(() => import("@/components/hero").then((mod) => mod.Hero));
const Services = dynamicImport(() => import("@/components/services").then((mod) => mod.Services));
const Contact = dynamicImport(() => import("@/components/contact").then((mod) => mod.Contact));
const ClientsMarquee = dynamicImport(() =>
  import("@/components/clients-marquee").then((mod) => mod.ClientsMarquee)
);
const Conditions = dynamicImport(() => import("@/components/conditions").then((mod) => mod.Conditions));
const TrackingReport = dynamicImport(() =>
  import("@/components/tracking-report").then((mod) => mod.TrackingReport)
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Suspense fallback={<WorkSkeleton />}>
        <Work />
      </Suspense>
      <Suspense fallback={<PricingSkeleton />}>
        <Pricing />
      </Suspense>
      <TrackingReport />
      <Contact />
      <ClientsMarquee />
      <Conditions />
    </main>
  );
}
