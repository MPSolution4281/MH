import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MH AutoTeknik og Optimering | Motoroptimering, chiptuning og værksted",
    template: "%s | MH AutoTeknik og Optimering"
  },
  description:
    "MH AutoTeknik og Optimering tilbyder chiptuning, motoroptimering og værkstedsservice med fokus på performance, driftssikkerhed og en professionel dansk kundeoplevelse.",
  keywords: [
    "chiptuning",
    "motoroptimering",
    "værksted",
    "flere hestekræfter",
    "optimering af bil",
    "MH AutoTeknik og Optimering"
  ],
  openGraph: {
    title: "MH AutoTeknik og Optimering",
    description:
      "Professionel motoroptimering, chiptuning og værkstedsservice med fokus på kvalitet og performance.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "da_DK",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
