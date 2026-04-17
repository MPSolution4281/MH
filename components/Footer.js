import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-logo logo-fallback">
              <span className="brand-monogram">MH</span>
            </span>
            <span className="brand-text">
              <strong>MH AutoTeknik</strong>
              <small>og Optimering</small>
            </span>
          </Link>
          <p>
            Service, fejlsøgning, værkstedsarbejde og motoroptimering med fokus på kvalitet,
            driftssikkerhed og en troværdig dansk kundeoplevelse.
          </p>
        </div>

        <div>
          <h3>Hurtige links</h3>
          <Link href="/services">Services</Link>
          <Link href="/find-din-bil">Find din bil</Link>
          <Link href="/chiptuning">Chiptuning</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>

        <div>
          <h3>Kontakt</h3>
          <a href="tel:+4500000000">+45 00 00 00 00</a>
          <a href="mailto:kontakt@mhautoteknik.dk">kontakt@mhautoteknik.dk</a>
          <p>Industrivej 00, 0000 By</p>
        </div>
      </div>
    </footer>
  );
}
