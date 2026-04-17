import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontakt MH AutoTeknik og Optimering for spørgsmål om chiptuning, motoroptimering, service og fejlsøgning. Se kontaktinfo, åbningstider og formular.",
  alternates: {
    canonical: "/kontakt"
  }
};

export default function KontaktPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kontakt"
        title="Kontakt os for spørgsmål om din bil."
        description="Her finder du kontaktinfo, formular, åbningstider og en placeholder til Google Maps, så siden er klar til videre integration."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="content-stack">
            <div className="card">
              <h2>Kontaktoplysninger</h2>
              <p className="section-copy" style={{ marginTop: 14 }}>
                {/* Udskift kontaktdata her */}
                Telefon: +45 00 00 00 00
              </p>
              <p className="section-copy">E-mail: kontakt@mhautoteknik.dk</p>
              <p className="section-copy">Adresse: Industrivej 00, 0000 By</p>
            </div>

            <div className="card">
              <h2>Åbningstider</h2>
              <p className="section-copy" style={{ marginTop: 14 }}>
                Mandag - fredag: 08.00 - 17.00
              </p>
              <p className="section-copy">Lørdag: Efter aftale</p>
              <p className="section-copy">Søndag: Lukket</p>
            </div>
          </div>

          <div className="content-stack">
            <form className="contact-form">
              <label>
                Navn
                <input type="text" name="name" placeholder="Dit navn" />
              </label>
              <label>
                Telefon
                <input type="tel" name="phone" placeholder="Dit telefonnummer" />
              </label>
              <label>
                E-mail
                <input type="email" name="email" placeholder="Din e-mail" />
              </label>
              <label>
                Besked
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Fortæl kort om din bil eller hvad du ønsker hjælp til"
                />
              </label>
              <button className="button" type="submit">
                Send forespørgsel
              </button>
              <p className="helper-text">
                Formularen er designklar og kan senere kobles til mail, booking eller CRM.
              </p>
            </form>

            <div className="map-placeholder">
              <h3>Google Maps placeholder</h3>
              <p className="section-copy" style={{ marginTop: 12 }}>
                Her kan der senere indsættes et kort eller en embed-løsning med jeres endelige
                adresse og lokation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
