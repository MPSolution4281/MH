import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { faqItems } from "@/data/site";

export const metadata = {
  title: "Chiptuning",
  description:
    "Læs hvad chiptuning er, hvordan motoroptimering fungerer, forskellen på Stage 1 og Stage 2, og hvordan du kan få flere hestekræfter på en professionel måde.",
  keywords: ["chiptuning", "motoroptimering", "flere hestekræfter"],
  alternates: {
    canonical: "/chiptuning"
  }
};

export default function ChiptuningPage() {
  return (
    <>
      <PageIntro
        eyebrow="Chiptuning"
        title="Chiptuning og motoroptimering forklaret enkelt og professionelt."
        description="Her får du et klart overblik over, hvordan chiptuning fungerer, hvad forskellen er på Stage 1 og Stage 2, og hvorfor flere hestekræfter altid bør ses i sammenhæng med kvalitet og at bilen kører stabilt."
      />

      <section className="section">
        <div className="container split-grid">
          <article className="content-stack">
            <h2>Hvad er chiptuning?</h2>
            <p>
              Chiptuning er en form for motoroptimering, hvor bilens software justeres for at
              forbedre effekt, moment og respons. Målet er ikke kun flere hestekræfter, men også en
              mere harmonisk og brugbar køreoplevelse.
            </p>
            <p>
              Moderne biler styres i høj grad af software, og derfor kan en præcis kalibrering gøre
              en markant forskel for, hvordan bilen føles i praksis.
            </p>
          </article>

          <article className="content-stack">
            <h2>Hvordan fungerer det?</h2>
            <p>
              Når vi arbejder med motoroptimering, justeres relevante parametre i styringen, så
              bilen kan levere mere overskud, bedre mellemtræk og en skarpere respons.
            </p>
            <p>
              Resultatet afhænger altid af motorvariant, softwareversion og bilens generelle stand,
              og derfor bør chiptuning altid ses som en konkret vurdering og ikke bare et standardtal.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Fordele</p>
            <h2>Hvorfor vælger bilejere motoroptimering?</h2>
          </div>
          <div className="preview-grid cards-4">
            <article className="card">
              <h3>Flere hestekræfter</h3>
              <p className="section-copy">Et mærkbart løft i effekt for mange turbo-motorer.</p>
            </article>
            <article className="card">
              <h3>Mere moment</h3>
              <p className="section-copy">
                Stærkere mellemtræk og bedre fleksibilitet i hverdagen.
              </p>
            </article>
            <article className="card">
              <h3>Bedre respons</h3>
              <p className="section-copy">
                En mere direkte og levende bil, især ved almindelig kørsel.
              </p>
            </article>
            <article className="card">
              <h3>Professionel rådgivning</h3>
              <p className="section-copy">
                Den rigtige løsning afhænger altid af bilens stand og det ønskede setup.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h2>Stage 1</h2>
            <p className="section-copy" style={{ marginTop: 14 }}>
              Stage 1 er typisk softwarebaseret chiptuning på en bil med standard eller næsten
              standard hardware. Her er fokus på et sikkert og brugbart resultat med bedre effekt og
              respons.
            </p>
          </article>
          <article className="card">
            <h2>Stage 2</h2>
            <p className="section-copy" style={{ marginTop: 14 }}>
              Stage 2 er normalt næste skridt, hvor software og hardware arbejder sammen. Derfor
              kræver Stage 2 mere konkret vurdering af bilens setup, mål og mekaniske grundlag.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">FAQ</p>
            <h2>Typiske spørgsmål om chiptuning</h2>
          </div>
          <div className="content-stack">
            {faqItems.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p className="section-copy" style={{ marginTop: 12 }}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container accent-panel">
          <p className="eyebrow">Call to action</p>
          <h2>Vil du se potentialet i din bil?</h2>
          <p className="lead">
            Gå videre til <Link className="text-link" href="/find-din-bil">Find din bil</Link> eller{" "}
            <Link className="text-link" href="/kontakt">kontakt os</Link> for en konkret vurdering af
            chiptuning og motoroptimering.
          </p>
        </div>
      </section>
    </>
  );
}
