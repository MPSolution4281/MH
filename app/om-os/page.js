import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Om os",
  description:
    "Læs om MH AutoTeknik og Optimering, vores passion for biler, fokus på kvalitet og hvorfor troværdig rådgivning er en vigtig del af vores værksted.",
  alternates: {
    canonical: "/om-os"
  }
};

export default function OmOsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Om os"
        title="Et moderne værksted med passion for teknik, kvalitet og troværdighed."
        description="MH AutoTeknik og Optimering er bygget omkring respekt for bilen, ordentlig kommunikation og løsninger, der skal fungere i den virkelige verden."
      />

      <section className="section">
        <div className="container split-grid">
          <article className="content-stack">
            <h2>Erfaring og faglighed</h2>
            <p>
              Vi arbejder med biler for kunder, der forventer mere end en hurtig standardløsning.
              Derfor prioriterer vi teknisk forståelse, gennemsigtighed og en professionel proces.
            </p>
            <p>
              Uanset om du kommer for chiptuning, motoroptimering, diagnostik eller værkstedsservice,
              er målet det samme: at levere et resultat, du kan mærke og have tillid til.
            </p>
          </article>

          <article className="content-stack">
            <h2>Passion og kvalitet</h2>
            <p>
              Vi tror på, at de bedste løsninger opstår i spændet mellem performance og ansvarlighed.
              Derfor ser vi på både det ønskede resultat og bilens reelle udgangspunkt.
            </p>
            <p>
              Det gør os til en samarbejdspartner for bilejere, der ønsker kvalitet, ærlig rådgivning
              og et værksted med ro på processen.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container accent-panel">
          <p className="eyebrow">Videre herfra</p>
          <h2>Se vores services eller tag direkte kontakt.</h2>
          <p className="lead">
            Du kan læse mere om <Link className="text-link" href="/services">vores services</Link> eller
            bruge <Link className="text-link" href="/kontakt">kontaktsiden</Link>, hvis du vil have en
            konkret vurdering.
          </p>
        </div>
      </section>
    </>
  );
}
