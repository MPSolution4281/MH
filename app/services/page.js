import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata = {
  title: "Services",
  description:
    "Se services hos MH AutoTeknik og Optimering: chiptuning, motoroptimering, fejlfinding, service og rådgivning med fokus på kvalitet og performance.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Ydelser til både performance, drift og professionel rådgivning."
        description="Her finder du et samlet overblik over vores services inden for chiptuning, motoroptimering og moderne værkstedsarbejde."
      />

      <section className="section">
        <div className="container">
          <div className="preview-grid cards-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="button-row">
            <Link className="button" href="/kontakt">
              Kontakt os
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
