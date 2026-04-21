import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import { blogPosts, heroSlides, services, vehicleData } from "@/data/site";
import CarFinder from "@/components/CarFinder";

export const metadata = {
  title: "Forside",
  description:
    "MH AutoTeknik og Optimering tilbyder chiptuning, motoroptimering og værkstedsservice. Se services, find din bil og læs mere om performance og flere hestekræfter.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="section">
        <div className="container split-grid">
          <div className="content-stack">
            <p className="eyebrow">Kort intro</p>
            <h2>Et værksted for kunder, der vil have et professionelt resultat</h2>
          </div>
          <div className="content-stack">
            <p>
              Hos MH AutoTeknik og Optimering arbejder vi med motoroptimering, chiptuning og
              værkstedsservices, hvor kvalitet, respons og troværdig rådgivning er i centrum.
            </p>
            <p>
              Vores hjemmeside er bygget som en SEO-klar struktur med tydelige undersider, så både
              kunder og søgemaskiner hurtigt kan finde information om chiptuning, services, kontakt
              og din bils potentielle optimering.
            </p>
            <p>
              <Link className="text-link" href="/om-os">
                Læs mere om os
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Find din bil</p>
            <h2>Et hurtigt preview af mulighederne for motoroptimering</h2>
            <p>
              Brug søgningen som en første indikation og gå videre til den dedikerede side for flere
              detaljer om motoroptimering og mulige resultater.
            </p>
          </div>
          <CarFinder vehicleData={vehicleData} compact />
          <div className="button-row">
            <Link className="button secondary" href="/find-din-bil">
              Gå til Find din bil
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Services preview</p>
            <h2>Ydelser bygget til både performance og drift</h2>
          </div>
          <div className="preview-grid cards-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="button-row">
            <Link className="button secondary" href="/services">
              Se alle services
            </Link>
            <Link className="button secondary" href="/chiptuning">
              Læs om chiptuning
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Seneste artikler</p>
            <h2>Indhold, der understøtter SEO, intern linking og linkbuilding</h2>
            <p>
              Bloggen gør det nemt at udvide sitet med mere indhold om chiptuning, motoroptimering og
              relevante emner for danske bilejere.
            </p>
          </div>
          <div className="preview-grid cards-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container accent-panel">
          <p className="eyebrow">Næste skridt</p>
          <h2>Klar til at høre mere om din bil?</h2>
          <p className="lead">
            Kontakt os for en konkret vurdering, eller gå videre til siden om chiptuning for at læse
            mere om Stage 1, Stage 2, flere hestekræfter og hvordan motoroptimering fungerer.
          </p>
          <div className="button-row">
            <Link className="button" href="/kontakt">
              Kontakt os
            </Link>
            <Link className="button secondary" href="/chiptuning">
              Læs om chiptuning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
