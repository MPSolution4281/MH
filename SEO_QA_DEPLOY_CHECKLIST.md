# SEO QA + Deploy Checklist

## 1) QA i browser (desktop + mobil)
- Forside: tjek hero, service-links, kontaktknapper.
- Services: tjek alle servicekort og lokale Rødovre-links.
- Find din bil: tjek formularflow + FAQ + CTA-links.
- Kontakt: tjek telefon, mail, adresse (`Hobrovej 51, 2610 Rødovre`).
- Blog: tjek artikelbyline, relaterede links, CTA.
- Serviceundersider: tjek "Læs også"-sektion og knapper.

## 2) SEO-teknisk QA
- Verificér canonical på alle sider.
- Verificér `og:*` og `twitter:*` tags.
- Verificér JSON-LD validerer i Rich Results Test.
- Verificér `sitemap.xml` indeholder alle vigtige URLs.
- Verificér `robots.txt` peger på sitemap.

## 3) Publicering
- Upload alle ændrede filer til produktion.
- Tøm evt. cache/CDN cache.
- Kør smoke test på live-site efter deploy.

## 4) Google Search Console
- Åbn Sitemaps -> indsend `https://www.mhautoteknik.dk/sitemap.xml`.
- URL-inspect de vigtigste sider:
  - `/`
  - `/services`
  - `/find-din-bil`
  - `/kontakt`
  - `/autovaerksted-roedovre`
  - `/diagnostik-roedovre`
  - `/motoroptimering-roedovre`
- Anmod om indeksering på nye/ændrede sider.

## 5) KPI-opfølgning (uge 1-4)
- Klik og visninger pr. side i Search Console.
- Queries med lokal intent:
  - `autoværksted rødovre`
  - `bildiagnostik rødovre`
  - `motoroptimering rødovre`
- CTR på servicesider og lokale landingssider.
- Indekseringsstatus for alle nye URL'er.

## 6) Lighthouse/PageSpeed baseline
- Kør tests på:
  - `/`
  - `/services`
  - `/find-din-bil`
  - `/kontakt`
  - `/autovaerksted-roedovre`
- Gem score for Performance, Accessibility, Best Practices, SEO.
- Re-test efter næste indholds- og billedoptimeringsrunde.
