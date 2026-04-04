import { Suspense } from "react";
import { ClientsMarquee } from "@/components/clients-marquee";
import { Conditions } from "@/components/conditions";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";
import { Pricing, PricingSkeleton } from "@/components/pricing";
import { Services } from "@/components/services";
import { Work, WorkSkeleton } from "@/components/work";

export const dynamic = "force-dynamic";

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
      <Contact />
      <ClientsMarquee />
      <Conditions />
    </main>
  );
}
