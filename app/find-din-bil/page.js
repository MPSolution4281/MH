import PageIntro from "@/components/PageIntro";
import CarFinder from "@/components/CarFinder";
import { vehicleData } from "@/data/site";

export const metadata = {
  title: "Find din bil",
  description:
    "Find din bil og se et eksempel på standard effekt, optimeret effekt og moment. En enkel vej ind til chiptuning og motoroptimering.",
  alternates: {
    canonical: "/find-din-bil"
  }
};

export default function FindDinBilPage() {
  return (
    <>
      <PageIntro
        eyebrow="Find din bil"
        title="Se et eksempel på potentialet for netop din bil."
        description="Vælg type, mærke, model, årgang og motor for at få en enkel og overskuelig visning af standard effekt, optimeret effekt og moment."
      />

      <section className="section">
        <div className="container">
          <CarFinder vehicleData={vehicleData} />
        </div>
      </section>
    </>
  );
}
