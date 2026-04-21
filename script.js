const isBlogPage = window.location.pathname.includes("/blog/");
const pagePrefix = isBlogPage ? ".." : ".";

function resolvePageHref(path) {
  return `${pagePrefix}/${path}`;
}

function resolveAssetHref(path) {
  return `${pagePrefix}/${path}`;
}

const socialPlatforms = [
  {
    name: "Facebook",
    href: "",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 4V11H7.5v3H10V21h3.5Z" fill="currentColor"/></svg>'
  },
  {
    name: "LinkedIn",
    href: "",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.8 8.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm1.7 2.1H5.1V21h3.4V10.4Zm5.4 0h-3.4V21H14v-5.5c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V21h3.4v-6.1c0-3-1.3-5.2-4.5-5.2-1.5 0-2.6.8-3 1.6h-.1v-1Z" fill="currentColor"/></svg>'
  },
  {
    name: "Instagram",
    href: "",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 8A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Zm6.1-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" fill="currentColor"/><path d="M12 3.8c2.7 0 3 .1 4.1.1 1 0 1.6.2 2 .4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1 .4 2 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.6-.4 2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1 .4-2 .4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2-.4a4 4 0 0 1-1.4-.9 4 4 0 0 1-.9-1.4c-.2-.5-.4-1-.4-2C3.9 15 3.8 14.7 3.8 12s.1-3 .1-4.1c0-1 .2-1.6.4-2 .2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1-.4 2-.4 1.1-.1 1.4-.1 4.1-.1Zm0-1.8c-2.7 0-3 0-4.2.1-1.2 0-2 .2-2.7.5A5.7 5.7 0 0 0 3 4a5.7 5.7 0 0 0-1.4 2.1C1.3 6.8 1.1 7.6 1 8.8.9 10 .9 10.3.9 13s0 3 .1 4.2c0 1.2.2 2 .5 2.7A5.7 5.7 0 0 0 3 22a5.7 5.7 0 0 0 2.1 1.4c.7.3 1.5.5 2.7.5 1.2.1 1.5.1 4.2.1s3 0 4.2-.1c1.2 0 2-.2 2.7-.5A5.7 5.7 0 0 0 21 22a5.7 5.7 0 0 0 1.4-2.1c.3-.7.5-1.5.5-2.7.1-1.2.1-1.5.1-4.2s0-3-.1-4.2c0-1.2-.2-2-.5-2.7A5.7 5.7 0 0 0 21 4a5.7 5.7 0 0 0-2.1-1.4c-.7-.3-1.5-.5-2.7-.5C15 2 14.7 2 12 2Z" fill="currentColor"/></svg>'
  }
];

function renderSocialLinks() {
  return socialPlatforms
    .map(({ name, href, icon }) =>
      href
        ? `<a class="social-link" href="${href}" target="_blank" rel="noreferrer" aria-label="${name}">${icon}<span>${name}</span></a>`
        : `<span class="social-link is-disabled" aria-label="${name} kommer snart">${icon}<span>${name}</span></span>`
    )
    .join("");
}

function renderQuickBarLinks() {
  return [
    {
      label: "Ring nu",
      href: "tel:+4552807011",
      icon:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 4.5h3.2l1.2 4-1.8 1.8a15 15 0 0 0 4.6 4.6l1.8-1.8 4 1.2v3.2c0 .7-.6 1.3-1.3 1.3C10.3 18.8 5.2 13.7 5.2 5.8c0-.7.6-1.3 1.4-1.3Z" fill="currentColor"/></svg>'
    },
    {
      label: "Få tilbud",
      href: resolvePageHref("kontakt.html"),
      icon:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6.5h18v11H3v-11Zm2.2 1.5 6.8 5.1L18.8 8H5.2Zm14.3 8V9.2l-7 5.2-7-5.2V16h14Z" fill="currentColor"/></svg>'
    },
    {
      label: "Find bil",
      href: resolvePageHref("find-din-bil.html"),
      icon:
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 10.8 12 4l8 6.8V20h-5.2v-5.7H9.2V20H4v-9.2Z" fill="currentColor"/></svg>'
    }
  ]
    .map(
      ({ label, href, icon }) => `
        <a class="mobile-quickbar-link" href="${href}">
          <span class="mobile-quickbar-icon">${icon}</span>
          <span class="mobile-quickbar-label">${label}</span>
        </a>
      `
    )
    .join("");
}

const sharedHeader = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${resolvePageHref("index.html")}">
        <span class="brand-logo">
          <img
            src="${resolveAssetHref("images/logo-mh-autoteknik.jpg")}"
            alt="MH AutoTeknik og Optimering logo"
            onerror="this.style.display='none'; this.parentElement.classList.add('logo-fallback');"
          />
          <span class="brand-monogram">MH</span>
        </span>
        <span class="brand-text">
          <strong>MH AutoTeknik</strong>
          <small>og Optimering</small>
        </span>
      </a>

      <button class="nav-toggle" type="button" aria-expanded="false" aria-label="&Aring;bn menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" aria-label="Hovednavigation">
        <a href="${resolvePageHref("index.html")}">Forside</a>
        <div class="nav-item-services">
          <a href="${resolvePageHref("services.html")}">Services</a>
          <div class="services-subnav" aria-label="Undermenu for services">
            <a href="${resolvePageHref("service-ac-service.html")}">AC service</a>
            <a href="${resolvePageHref("service-synstjek.html")}">Synstjek</a>
            <a href="${resolvePageHref("service-diagnostik-fejlsoegning.html")}">Diagnostik og fejlsøgning</a>
            <a href="${resolvePageHref("service-vedligehold-bremser.html")}">Service og bremser</a>
            <a href="${resolvePageHref("service-klargoering-optimering.html")}">Klargøring før optimering</a>
            <a href="${resolvePageHref("service-dpf-rens.html")}">DPF rens</a>
            <a href="${resolvePageHref("service-turbo-kontrol.html")}">Turbo kontrol</a>
            <a href="${resolvePageHref("service-motoroptimering.html")}">Motoroptimering</a>
          </div>
        </div>
        <a href="${resolvePageHref("find-din-bil.html")}">Find din bil</a>
        <a href="${resolvePageHref("chiptuning.html")}">Chiptuning</a>
        <a href="${resolvePageHref("blog/index.html")}">Blog</a>
        <a href="${resolvePageHref("om-os.html")}">Om os</a>
        <a href="${resolvePageHref("kontakt.html")}">Kontakt</a>
      </nav>
      <a class="header-cta" href="${resolvePageHref("kontakt.html")}">Få tilbud</a>
    </div>
  </header>
`;

const sharedFooter = `
  <footer class="footer">
    <div class="container footer-grid">
      <section class="footer-col footer-col-brand">
        <a class="brand footer-brand" href="${resolvePageHref("index.html")}">
          <span class="brand-logo">
            <img
              src="${resolveAssetHref("images/logo-mh-autoteknik.jpg")}"
              alt="MH AutoTeknik og Optimering logo"
              onerror="this.style.display='none'; this.parentElement.classList.add('logo-fallback');"
            />
            <span class="brand-monogram">MH</span>
          </span>
          <span class="brand-text">
            <strong>MH AutoTeknik</strong>
            <small>og Optimering</small>
          </span>
        </a>
        <p class="footer-brand-copy">
          Service, fejls&oslash;gning, v&aelig;rkstedsarbejde og motoroptimering med fokus p&aring; kvalitet,
          at bilen kører stabilt og en trov&aelig;rdig dansk kundeoplevelse.
        </p>
      </section>
      <section class="footer-col footer-col-links">
        <h3>Hurtige links</h3>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="${resolvePageHref("services.html")}">Services</a>
          <a href="${resolvePageHref("find-din-bil.html")}">Find din bil</a>
          <a href="${resolvePageHref("chiptuning.html")}">Chiptuning</a>
          <a href="${resolvePageHref("blog/index.html")}">Blog</a>
          <a href="${resolvePageHref("kontakt.html")}">Kontakt</a>
        </nav>
      </section>
      <section class="footer-col footer-col-contact">
        <h3>Kontakt</h3>
        <p>Ring p&aring; <a href="tel:+4552807011">52 80 70 11</a> eller skriv til <a href="mailto:kontakt@mhautoteknik.dk">kontakt@mhautoteknik.dk</a> for en konkret vurdering.</p>
        <p>Adresse: Hobrovej 51, 2610 Rødovre</p>
        <div class="footer-map-wrap">
          <iframe
            title="Kort over MH AutoTeknik og Optimering"
            src="https://www.google.com/maps?q=Hobrovej+51,+2610+R%C3%B8dovre&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
        <a class="footer-map-link" href="https://www.google.com/maps?q=Hobrovej+51,+2610+R%C3%B8dovre" target="_blank" rel="noreferrer">&Aring;bn i Google Maps</a>
        <a class="footer-contact-link" href="${resolvePageHref("kontakt.html")}">G&aring; til kontakt</a>
      </section>
      <section class="footer-col footer-col-social">
        <h3>Socials</h3>
        <p>Profilerne er p&aring; vej. Ikonerne er klar, s&aring; linksene kan aktiveres senere.</p>
        <div class="social-links" aria-label="Sociale medier">
          ${renderSocialLinks()}
        </div>
      </section>
    </div>
  </footer>
`;

const sharedMobileQuickBar = `
  <div class="mobile-quickbar" aria-label="Hurtig navigation">
    <div class="mobile-quickbar-sheet" id="mobileQuickbarSheet" hidden>
      <div class="mobile-quickbar-sheet-head">
        <span>Menu</span>
        <button class="mobile-quickbar-close" type="button" aria-label="Luk menu">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6 10.6 12 5 6.4 6.4 5Z" fill="currentColor"/></svg>
        </button>
      </div>
      <nav class="mobile-quickbar-menu" aria-label="Mobilmenu"></nav>
    </div>
    <div class="mobile-quickbar-bar">
      ${renderQuickBarLinks()}
      <button
        class="mobile-quickbar-link mobile-quickbar-menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="mobileQuickbarSheet"
      >
        <span class="mobile-quickbar-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16v2H4V7Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" fill="currentColor"/></svg>
        </span>
        <span class="mobile-quickbar-label">Menu</span>
      </button>
    </div>
  </div>
`;

const sharedDesktopPhoneFloat = `
  <a class="desktop-phone-float" href="tel:+4552807011" aria-label="Ring til MH AutoTeknik p&aring; 52 80 70 11">
    <span class="desktop-phone-float-copy">
      <span class="desktop-phone-float-label">Ring hurtigt</span>
      <strong>52 80 70 11</strong>
    </span>
    <span class="desktop-phone-float-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M6.6 4.5h3.2l1.2 4-1.8 1.8a15 15 0 0 0 4.6 4.6l1.8-1.8 4 1.2v3.2c0 .7-.6 1.3-1.3 1.3C10.3 18.8 5.2 13.7 5.2 5.8c0-.7.6-1.3 1.4-1.3Z" fill="currentColor"/>
      </svg>
    </span>
  </a>
`;

const heroSlides = [
  {
    src: resolveAssetHref("images/ejer-bil.jpg"),
    alt: "Hvid performancebil fotograferet udendørs"
  },
  {
    src: resolveAssetHref("images/vaerktoejstavle.jpg"),
    alt: "Ryddelig værktøjsvæg og arbejdsstation på værksted"
  },
  {
    src: "https://images.pexels.com/photos/11291684/pexels-photo-11291684.jpeg?cs=srgb&dl=pexels-danmds-11291684.jpg&fm=jpg",
    alt: "Hvid bil i mørkt garage-miljø"
  }
];

const blogSpotlightPosts = [
  {
    category: "Motoroptimering",
    title: "Motoroptimering",
    excerpt:
      "Læs hvordan softwareoptimering kan give bedre respons, mere moment og et mere jævn kraft i hverdagen i hverdagen.",
    cardCopy:
      "Et rådgivende indblik i, hvordan en sund bil kan få bedre respons og mere overskud uden at miste fokus på at bilen kører stabilt.",
    href: resolvePageHref("service-motoroptimering.html")
  },
  {
    category: "Chiptuning",
    title: "Chiptuning",
    excerpt:
      "Få overblik over ECU tuning, flere hestekræfter og forskellen på stage 1 og stage 2.",
    cardCopy:
      "Et stærkt startpunkt for bilejere, der vil forstå forskellen på stage 1, stage 2 og realistiske forventninger.",
    href: resolvePageHref("chiptuning.html")
  },
  {
    category: "Diagnostik",
    title: "Diagnostik og fejlsøgning",
    excerpt:
      "Se hvorfor korrekt fejlsøgning er vigtigere end at gætte, når bilen har motorlampe eller tab af effekt.",
    cardCopy:
      "Et praktisk indlæg om hvorfor grundig fejlsøgning næsten altid er bedre end at skifte dele på må og få.",
    href: resolvePageHref("service-diagnostik-fejlsoegning.html")
  },
  {
    category: "Vedligehold",
    title: "Service og vedligehold",
    excerpt:
      "Lær hvorfor servicehistorik, olie, filtre og generel teknisk stand betyder mere for resultatet end mange bilejere tror.",
    cardCopy:
      "Et roligt overblik over, hvorfor korrekt vedligeholdelse er et vigtigere fundament end mange forventer.",
    href: resolvePageHref("service-vedligehold-bremser.html")
  },
  {
    category: "Gennemgang før",
    title: "Klargøring før optimering",
    excerpt:
      "Se hvad der bør kontrolleres, før en bil får ECU tuning, og hvorfor en sund bil altid er det bedste udgangspunkt.",
    cardCopy:
      "Et nyttigt indlæg for bilejere, der vil undgå at optimere oven på skjulte fejl eller et usikkert setup.",
    href: resolvePageHref("service-klargoering-optimering.html")
  },
  {
    category: "Setup",
    title: "Rådgivning om setup",
    excerpt:
      "Få et bedre beslutningsgrundlag, hvis du overvejer stage 1, stage 2 eller hardwareændringer og vil undgå fejlinvesteringer.",
    cardCopy:
      "Et gennemtænkt blik på, hvordan man bygger bilen op i trin og vælger de rigtige næste skridt.",
    href: resolvePageHref("service-motoroptimering.html")
  }
];

const vehicleData = {
  Personbil: {
    Audi: {
      A4: { 2018: { "2.0 TDI 190": { stockHp: 190, tunedHp: 228, torque: "460 Nm", description: "Et stærkt og balanceret eksempel med bedre mellemtræk og mere overskud ved motorvejskørsel." } } },
      A6: { 2019: { "3.0 TDI 272": { stockHp: 272, tunedHp: 320, torque: "660 Nm", description: "Mere rolig kraftlevering og tydelig forbedring i trækkraft uden at miste komfortfornemmelsen." } } }
    },
    BMW: {
      "320d": { 2017: { "2.0d 190": { stockHp: 190, tunedHp: 225, torque: "450 Nm", description: "Et populært setup for føreren, der ønsker hurtigere respons og et mere fleksibelt momentområde." } } },
      "530d": { 2020: { "3.0d 265": { stockHp: 265, tunedHp: 315, torque: "680 Nm", description: "Giver bilen en mere beslutsom karakter ved acceleration og bedre overskud ved højere belastning." } } }
    },
    Volkswagen: {
      Golf: { 2018: { "2.0 TDI 184": { stockHp: 184, tunedHp: 220, torque: "450 Nm", description: "Et stærkt eksempel på en hverdagsbil, der får mere punch og mere brugbar fleksibilitet." } } },
      Passat: { 2020: { "2.0 TDI 200": { stockHp: 200, tunedHp: 238, torque: "500 Nm", description: "Velegnet til dig, der ønsker bedre mellemacceleration og en mere effektiv, afslappet køreoplevelse." } } }
    }
  },
  Varebil: {
    Ford: {
      Transit: { 2021: { "2.0 EcoBlue 170": { stockHp: 170, tunedHp: 205, torque: "470 Nm", description: "Kan give en mærkbar forbedring i bundtræk og gøre bilen mere afslappet under last." } } }
    },
    Mercedes: {
      Vito: { 2020: { "119 CDI 190": { stockHp: 190, tunedHp: 225, torque: "510 Nm", description: "Et realistisk eksempel på mere overskud i arbejdsdagen med bedre trækkraft og respons." } } }
    }
  }
};

const additionalPersonBrands = [
  "Alfa Romeo",
  "Audi",
  "Bentley",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dacia",
  "Dodge",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Iveco",
  "Jaguar",
  "Jeep",
  "Kia",
  "Land Rover",
  "Lexus",
  "MAN",
  "Mazda",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Renault",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "Subaru",
  "Suzuki",
  "Toyota",
  "Volkswagen",
  "Volvo"
];

additionalPersonBrands.forEach((brand) => {
  if (!vehicleData.Personbil[brand]) {
    vehicleData.Personbil[brand] = {};
  }
});

const inferredBrandDefaults = {
  "Alfa Romeo": {
    Giulietta: {
      2018: {
        "1.4 TB 120": { stockHp: 120, tunedHp: 155, torque: "250 Nm", description: "Et vejledende normal-setup med bedre bundtræk og mere respons i daglig kørsel." }
      }
    }
  },
  Bentley: {
    Continental: {
      2019: {
        "4.0 V8 550": { stockHp: 550, tunedHp: 640, torque: "850 Nm", description: "Et vejledende normal-setup med markant overskud, men stadig fokus på harmonisk levering." }
      }
    }
  },
  Chevrolet: {
    Cruze: {
      2017: {
        "2.0 VCDi 163": { stockHp: 163, tunedHp: 195, torque: "420 Nm", description: "Et vejledende normal-setup for bedre mellemacceleration og mere fleksibel motorkarakter." }
      }
    }
  },
  Chrysler: {
    "300C": {
      2016: {
        "3.0 CRD 218": { stockHp: 218, tunedHp: 265, torque: "600 Nm", description: "Et vejledende normal-setup med tydelig forbedring i træk under belastning." }
      }
    }
  },
  Citroen: {
    C4: {
      2018: {
        "1.6 HDi 120": { stockHp: 120, tunedHp: 145, torque: "330 Nm", description: "Et vejledende normal-setup med mere rolig og brugbar kraftlevering." }
      }
    }
  },
  Dacia: {
    Duster: {
      2019: {
        "1.5 dCi 115": { stockHp: 115, tunedHp: 140, torque: "320 Nm", description: "Et vejledende normal-setup med bedre bundtræk og mere overskud i hverdagen." }
      }
    }
  },
  Dodge: {
    RAM: {
      2018: {
        "5.7 HEMI 395": { stockHp: 395, tunedHp: 430, torque: "620 Nm", description: "Et vejledende normal-setup med mere respons og stærkere træk i mellemområdet." }
      }
    }
  },
  Fiat: {
    "500X": {
      2018: {
        "1.4 T-Jet 140": { stockHp: 140, tunedHp: 170, torque: "280 Nm", description: "Et vejledende normal-setup med mærkbart bedre fleksibilitet i daglig kørsel." }
      }
    }
  },
  Ford: {
    Focus: {
      2019: {
        "1.5 EcoBlue 120": { stockHp: 120, tunedHp: 145, torque: "340 Nm", description: "Et vejledende normal-setup med stærkere mellemtræk og mere overskud." }
      }
    }
  },
  Honda: {
    Civic: {
      2018: {
        "1.6 i-DTEC 120": { stockHp: 120, tunedHp: 145, torque: "330 Nm", description: "Et vejledende normal-setup med bedre respons og mere brugbar trækkraft." }
      }
    }
  },
  Hyundai: {
    i30: {
      2019: {
        "1.6 CRDi 136": { stockHp: 136, tunedHp: 165, torque: "360 Nm", description: "Et vejledende normal-setup med tydeligt bedre mellemacceleration." }
      }
    }
  },
  Iveco: {
    Daily: {
      2020: {
        "2.3 HPI 136": { stockHp: 136, tunedHp: 170, torque: "430 Nm", description: "Et vejledende normal-setup med mere trækkraft ved last og landevejskørsel." }
      }
    }
  },
  Jaguar: {
    XF: {
      2018: {
        "2.0 D 180": { stockHp: 180, tunedHp: 220, torque: "460 Nm", description: "Et vejledende normal-setup med stærkere moment og mere afslappet karakter." }
      }
    }
  },
  Jeep: {
    "Grand Cherokee": {
      2019: {
        "3.0 CRD 250": { stockHp: 250, tunedHp: 300, torque: "680 Nm", description: "Et vejledende normal-setup med mere robust træk under belastning." }
      }
    }
  },
  Kia: {
    Ceed: {
      2019: {
        "1.6 CRDi 136": { stockHp: 136, tunedHp: 170, torque: "370 Nm", description: "Et vejledende normal-setup med bedre bundtræk og mere elastisk motorgang." }
      }
    }
  },
  "Land Rover": {
    "Discovery Sport": {
      2018: {
        "2.0 TD4 180": { stockHp: 180, tunedHp: 220, torque: "470 Nm", description: "Et vejledende normal-setup med tydeligt mere overskud i mellemområdet." }
      }
    }
  },
  Lexus: {
    IS: {
      2018: {
        "200t 245": { stockHp: 245, tunedHp: 290, torque: "420 Nm", description: "Et vejledende normal-setup med skarpere respons og bedre acceleration." }
      }
    }
  },
  MAN: {
    TGE: {
      2020: {
        "2.0 TDI 177": { stockHp: 177, tunedHp: 215, torque: "460 Nm", description: "Et vejledende normal-setup med bedre trækkraft i arbejdsbrug." }
      }
    }
  },
  Mazda: {
    "6": {
      2018: {
        "2.2 Skyactiv-D 150": { stockHp: 150, tunedHp: 185, torque: "420 Nm", description: "Et vejledende normal-setup med mere fleksibilitet og bedre mellemtræk." }
      }
    }
  },
  "Mercedes-Benz": {
    "C-Class": {
      2019: {
        "C220d 194": { stockHp: 194, tunedHp: 235, torque: "500 Nm", description: "Et vejledende normal-setup med mere overskud uden at gå på kompromis med komfort." }
      }
    }
  },
  Mitsubishi: {
    Outlander: {
      2018: {
        "2.2 DI-D 150": { stockHp: 150, tunedHp: 180, torque: "400 Nm", description: "Et vejledende normal-setup med bedre kraftlevering i hverdagen." }
      }
    }
  },
  Nissan: {
    Qashqai: {
      2019: {
        "1.5 dCi 115": { stockHp: 115, tunedHp: 140, torque: "320 Nm", description: "Et vejledende normal-setup med mere træk og roligere kørefølelse." }
      }
    }
  },
  Opel: {
    Insignia: {
      2018: {
        "2.0 CDTi 170": { stockHp: 170, tunedHp: 205, torque: "450 Nm", description: "Et vejledende normal-setup med stærkere mellemacceleration." }
      }
    }
  },
  Peugeot: {
    "308": {
      2019: {
        "1.5 BlueHDi 130": { stockHp: 130, tunedHp: 160, torque: "360 Nm", description: "Et vejledende normal-setup med mere bundtræk og bedre respons." }
      }
    }
  },
  Porsche: {
    Macan: {
      2019: {
        "2.0 Turbo 252": { stockHp: 252, tunedHp: 300, torque: "460 Nm", description: "Et vejledende normal-setup med markant bedre mellemtræk." }
      }
    }
  },
  Renault: {
    Megane: {
      2018: {
        "1.5 dCi 110": { stockHp: 110, tunedHp: 135, torque: "320 Nm", description: "Et vejledende normal-setup med bedre fleksibilitet og mere brugbart træk." }
      }
    }
  },
  Saab: {
    "9-3": {
      2011: {
        "1.9 TTiD 180": { stockHp: 180, tunedHp: 220, torque: "460 Nm", description: "Et vejledende normal-setup med tydeligt bedre moment og respons." }
      }
    }
  },
  Seat: {
    Leon: {
      2019: {
        "2.0 TDI 150": { stockHp: 150, tunedHp: 190, torque: "400 Nm", description: "Et vejledende normal-setup med stærkere træk og bedre overskud." }
      }
    }
  },
  Skoda: {
    Octavia: {
      2019: {
        "2.0 TDI 150": { stockHp: 150, tunedHp: 190, torque: "400 Nm", description: "Et vejledende normal-setup med bedre mellemacceleration." }
      }
    }
  },
  Smart: {
    ForTwo: {
      2018: {
        "0.9 Turbo 90": { stockHp: 90, tunedHp: 115, torque: "190 Nm", description: "Et vejledende normal-setup med kvikkere respons i bykørsel." }
      }
    }
  },
  Subaru: {
    Forester: {
      2017: {
        "2.0D 147": { stockHp: 147, tunedHp: 175, torque: "390 Nm", description: "Et vejledende normal-setup med bedre trækkraft under belastning." }
      }
    }
  },
  Suzuki: {
    Vitara: {
      2019: {
        "1.4 Boosterjet 140": { stockHp: 140, tunedHp: 165, torque: "270 Nm", description: "Et vejledende normal-setup med bedre bundtræk og mere smidig karakter." }
      }
    }
  },
  Toyota: {
    Avensis: {
      2017: {
        "2.0 D-4D 124": { stockHp: 124, tunedHp: 150, torque: "360 Nm", description: "Et vejledende normal-setup med bedre brugbar effekt i hverdagen." }
      }
    }
  },
  Volvo: {
    V60: {
      2019: {
        "D4 190": { stockHp: 190, tunedHp: 225, torque: "470 Nm", description: "Et vejledende normal-setup med stærkere momentkurve og mere overskud." }
      }
    }
  }
};

Object.entries(inferredBrandDefaults).forEach(([brand, models]) => {
  if (!vehicleData.Personbil[brand]) {
    vehicleData.Personbil[brand] = {};
  }
  Object.entries(models).forEach(([model, years]) => {
    if (!vehicleData.Personbil[brand][model]) {
      vehicleData.Personbil[brand][model] = years;
    }
  });
});

Object.keys(vehicleData.Personbil).forEach((brand) => {
  if (Object.keys(vehicleData.Personbil[brand]).length > 0) return;
  vehicleData.Personbil[brand] = {
    Standardmodel: {
      2018: {
        "2.0 TDI 150": {
          stockHp: 150,
          tunedHp: 185,
          torque: "390 Nm",
          description: "Vejledende standardeksempel for maerket. Kontakt os for specifik model/motor."
        }
      }
    }
  };
});

const brandModelPresets = {
  "Alfa Romeo": ["MiTo", "Giulietta", "Giulia", "Stelvio", "Tonale"],
  Audi: ["A1", "A3", "A4", "A5", "A6", "Q2", "Q3", "Q5", "Q7"],
  Bentley: ["Continental", "Flying Spur", "Bentayga"],
  BMW: ["1-serie", "3-serie", "5-serie", "X1", "X3", "X5", "i4", "iX3"],
  Chevrolet: ["Spark", "Aveo", "Cruze", "Orlando", "Captiva"],
  Chrysler: ["Ypsilon", "200", "300C", "Voyager", "Pacifica"],
  Citroen: ["C1", "C3", "C4", "C4 Cactus", "C5 Aircross", "Berlingo"],
  Dacia: ["Sandero", "Logan", "Duster", "Lodgy", "Jogger"],
  Dodge: ["Caliber", "Charger", "Challenger", "Durango", "RAM"],
  Fiat: ["500", "500X", "Panda", "Punto", "Tipo", "Doblo"],
  Ford: ["Fiesta", "Focus", "Mondeo", "Kuga", "S-Max", "Galaxy", "Mustang"],
  Honda: ["Jazz", "Civic", "Accord", "HR-V", "CR-V"],
  Hyundai: ["i10", "i20", "i30", "i40", "Kona", "Tucson", "Santa Fe", "IONIQ"],
  Iveco: ["Daily", "Daily Van", "Daily Hi-Matic"],
  Jaguar: ["XE", "XF", "XJ", "E-Pace", "F-Pace", "I-Pace"],
  Jeep: ["Renegade", "Compass", "Cherokee", "Grand Cherokee", "Wrangler"],
  Kia: ["Picanto", "Rio", "Ceed", "ProCeed", "Sportage", "Sorento", "Niro"],
  "Land Rover": ["Discovery Sport", "Discovery", "Range Rover Evoque", "Range Rover Velar", "Range Rover Sport"],
  Lexus: ["CT", "IS", "ES", "NX", "RX", "UX"],
  MAN: ["TGE Van", "TGE Kombi", "TGE"],
  Mazda: ["2", "3", "6", "CX-3", "CX-5", "CX-60"],
  "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "E-Class", "GLA", "GLC", "GLE"],
  Mitsubishi: ["Colt", "Lancer", "ASX", "Outlander", "Eclipse Cross", "L200"],
  Nissan: ["Micra", "Juke", "Qashqai", "X-Trail", "Leaf", "Navara"],
  Opel: ["Corsa", "Astra", "Insignia", "Crossland", "Grandland", "Mokka"],
  Peugeot: ["108", "208", "308", "3008", "5008", "508", "Partner"],
  Porsche: ["Cayman", "Boxster", "Macan", "Cayenne", "Panamera", "911"],
  Renault: ["Twingo", "Clio", "Megane", "Captur", "Kadjar", "Scenic"],
  Saab: ["9-3", "9-3 SportCombi", "9-5"],
  Seat: ["Mii", "Ibiza", "Leon", "Arona", "Ateca", "Tarraco"],
  Skoda: ["Citigo", "Fabia", "Scala", "Octavia", "Superb", "Karoq", "Kodiaq"],
  Smart: ["ForTwo", "ForTwo Cabrio", "ForFour"],
  Subaru: ["Impreza", "Legacy", "Forester", "XV", "Outback"],
  Suzuki: ["Swift", "Baleno", "Vitara", "S-Cross", "SX4"],
  Toyota: ["Aygo", "Yaris", "Corolla", "Auris", "Avensis", "C-HR", "RAV4"],
  Volkswagen: ["Polo", "Golf", "Passat", "T-Roc", "Tiguan", "Touran", "Arteon"],
  Volvo: ["V40", "V60", "V90", "S60", "XC40", "XC60", "XC90"]
};

const brandYearSpan = {
  "Alfa Romeo": [2008, 2024],
  Audi: [2008, 2024],
  Bentley: [2010, 2024],
  BMW: [2008, 2024],
  Chevrolet: [2008, 2021],
  Chrysler: [2008, 2024],
  Citroen: [2008, 2024],
  Dacia: [2010, 2024],
  Dodge: [2008, 2024],
  Fiat: [2008, 2024],
  Ford: [2008, 2024],
  Honda: [2008, 2024],
  Hyundai: [2009, 2024],
  Iveco: [2008, 2024],
  Jaguar: [2008, 2024],
  Jeep: [2008, 2024],
  Kia: [2009, 2024],
  "Land Rover": [2008, 2024],
  Lexus: [2008, 2024],
  MAN: [2016, 2024],
  Mazda: [2008, 2024],
  "Mercedes-Benz": [2008, 2024],
  Mitsubishi: [2008, 2024],
  Nissan: [2008, 2024],
  Opel: [2008, 2024],
  Peugeot: [2008, 2024],
  Porsche: [2008, 2024],
  Renault: [2008, 2024],
  Saab: [2008, 2012],
  Seat: [2008, 2024],
  Skoda: [2008, 2024],
  Smart: [2008, 2024],
  Subaru: [2008, 2024],
  Suzuki: [2008, 2024],
  Toyota: [2008, 2024],
  Volkswagen: [2008, 2024],
  Volvo: [2008, 2024]
};

const personbilBrandEngines = {
  "Alfa Romeo": [
    { engineName: "1.4 TB 120", stockHp: 120, tunedHp: 155, torqueNm: 250 },
    { engineName: "2.0 JTD 170", stockHp: 170, tunedHp: 205, torqueNm: 430 }
  ],
  Audi: [
    { engineName: "1.4 TFSI 150", stockHp: 150, tunedHp: 185, torqueNm: 290 },
    { engineName: "2.0 TDI 190", stockHp: 190, tunedHp: 228, torqueNm: 460 },
    { engineName: "3.0 TDI 272", stockHp: 272, tunedHp: 320, torqueNm: 660 }
  ],
  Bentley: [
    { engineName: "4.0 V8 550", stockHp: 550, tunedHp: 640, torqueNm: 850 }
  ],
  BMW: [
    { engineName: "2.0d 190", stockHp: 190, tunedHp: 225, torqueNm: 450 },
    { engineName: "3.0d 265", stockHp: 265, tunedHp: 315, torqueNm: 680 },
    { engineName: "2.0i 184", stockHp: 184, tunedHp: 225, torqueNm: 360 }
  ],
  Chevrolet: [
    { engineName: "1.8 141", stockHp: 141, tunedHp: 170, torqueNm: 250 },
    { engineName: "2.0 VCDi 163", stockHp: 163, tunedHp: 195, torqueNm: 420 }
  ],
  Chrysler: [
    { engineName: "3.0 CRD 218", stockHp: 218, tunedHp: 265, torqueNm: 600 }
  ],
  Citroen: [
    { engineName: "1.6 HDi 120", stockHp: 120, tunedHp: 145, torqueNm: 330 },
    { engineName: "2.0 BlueHDi 180", stockHp: 180, tunedHp: 215, torqueNm: 450 }
  ],
  Dacia: [
    { engineName: "1.3 TCe 130", stockHp: 130, tunedHp: 160, torqueNm: 280 },
    { engineName: "1.5 dCi 115", stockHp: 115, tunedHp: 140, torqueNm: 320 }
  ],
  Dodge: [
    { engineName: "3.6 V6 305", stockHp: 305, tunedHp: 340, torqueNm: 500 },
    { engineName: "5.7 HEMI 395", stockHp: 395, tunedHp: 430, torqueNm: 620 }
  ],
  Fiat: [
    { engineName: "1.4 T-Jet 140", stockHp: 140, tunedHp: 170, torqueNm: 280 },
    { engineName: "1.6 Multijet 120", stockHp: 120, tunedHp: 145, torqueNm: 330 }
  ],
  Ford: [
    { engineName: "1.0 EcoBoost 125", stockHp: 125, tunedHp: 150, torqueNm: 240 },
    { engineName: "1.5 EcoBlue 120", stockHp: 120, tunedHp: 145, torqueNm: 340 },
    { engineName: "2.0 TDCi 180", stockHp: 180, tunedHp: 215, torqueNm: 440 }
  ],
  Honda: [
    { engineName: "1.5 VTEC Turbo 182", stockHp: 182, tunedHp: 220, torqueNm: 340 },
    { engineName: "1.6 i-DTEC 120", stockHp: 120, tunedHp: 145, torqueNm: 330 }
  ],
  Hyundai: [
    { engineName: "1.0 T-GDi 120", stockHp: 120, tunedHp: 145, torqueNm: 240 },
    { engineName: "1.6 CRDi 136", stockHp: 136, tunedHp: 165, torqueNm: 360 }
  ],
  Iveco: [
    { engineName: "2.3 HPI 136", stockHp: 136, tunedHp: 170, torqueNm: 430 }
  ],
  Jaguar: [
    { engineName: "2.0 D 180", stockHp: 180, tunedHp: 220, torqueNm: 460 },
    { engineName: "2.0 P250 250", stockHp: 250, tunedHp: 300, torqueNm: 440 }
  ],
  Jeep: [
    { engineName: "2.0 MultiJet 170", stockHp: 170, tunedHp: 205, torqueNm: 430 },
    { engineName: "3.0 CRD 250", stockHp: 250, tunedHp: 300, torqueNm: 680 }
  ],
  Kia: [
    { engineName: "1.6 CRDi 136", stockHp: 136, tunedHp: 170, torqueNm: 370 },
    { engineName: "1.6 T-GDi 177", stockHp: 177, tunedHp: 215, torqueNm: 330 }
  ],
  "Land Rover": [
    { engineName: "2.0 TD4 180", stockHp: 180, tunedHp: 220, torqueNm: 470 },
    { engineName: "3.0 SDV6 306", stockHp: 306, tunedHp: 350, torqueNm: 760 }
  ],
  Lexus: [
    { engineName: "200t 245", stockHp: 245, tunedHp: 290, torqueNm: 420 }
  ],
  MAN: [
    { engineName: "2.0 TDI 177", stockHp: 177, tunedHp: 215, torqueNm: 460 }
  ],
  Mazda: [
    { engineName: "2.2 Skyactiv-D 150", stockHp: 150, tunedHp: 185, torqueNm: 420 },
    { engineName: "2.0 Skyactiv-G 165", stockHp: 165, tunedHp: 195, torqueNm: 290 }
  ],
  "Mercedes-Benz": [
    { engineName: "C220d 194", stockHp: 194, tunedHp: 235, torqueNm: 500 },
    { engineName: "E220d 194", stockHp: 194, tunedHp: 230, torqueNm: 500 }
  ],
  Mitsubishi: [
    { engineName: "2.2 DI-D 150", stockHp: 150, tunedHp: 180, torqueNm: 400 },
    { engineName: "1.5 T 163", stockHp: 163, tunedHp: 195, torqueNm: 320 }
  ],
  Nissan: [
    { engineName: "1.5 dCi 115", stockHp: 115, tunedHp: 140, torqueNm: 320 },
    { engineName: "1.3 DIG-T 140", stockHp: 140, tunedHp: 170, torqueNm: 290 }
  ],
  Opel: [
    { engineName: "1.6 CDTi 136", stockHp: 136, tunedHp: 165, torqueNm: 360 },
    { engineName: "2.0 CDTi 170", stockHp: 170, tunedHp: 205, torqueNm: 450 }
  ],
  Peugeot: [
    { engineName: "1.5 BlueHDi 130", stockHp: 130, tunedHp: 160, torqueNm: 360 },
    { engineName: "2.0 BlueHDi 180", stockHp: 180, tunedHp: 215, torqueNm: 450 }
  ],
  Porsche: [
    { engineName: "2.0 Turbo 252", stockHp: 252, tunedHp: 300, torqueNm: 460 },
    { engineName: "3.0 V6 340", stockHp: 340, tunedHp: 390, torqueNm: 560 }
  ],
  Renault: [
    { engineName: "1.5 dCi 110", stockHp: 110, tunedHp: 135, torqueNm: 320 },
    { engineName: "1.3 TCe 140", stockHp: 140, tunedHp: 170, torqueNm: 280 }
  ],
  Saab: [
    { engineName: "1.9 TTiD 180", stockHp: 180, tunedHp: 220, torqueNm: 460 }
  ],
  Seat: [
    { engineName: "1.5 TSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
    { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 }
  ],
  Skoda: [
    { engineName: "1.5 TSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
    { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 }
  ],
  Smart: [
    { engineName: "0.9 Turbo 90", stockHp: 90, tunedHp: 115, torqueNm: 190 }
  ],
  Subaru: [
    { engineName: "2.0D 147", stockHp: 147, tunedHp: 175, torqueNm: 390 },
    { engineName: "2.0i 150", stockHp: 150, tunedHp: 180, torqueNm: 290 }
  ],
  Suzuki: [
    { engineName: "1.0 Boosterjet 111", stockHp: 111, tunedHp: 135, torqueNm: 230 },
    { engineName: "1.4 Boosterjet 140", stockHp: 140, tunedHp: 165, torqueNm: 270 }
  ],
  Toyota: [
    { engineName: "1.6 Valvematic 132", stockHp: 132, tunedHp: 160, torqueNm: 240 },
    { engineName: "2.0 D-4D 124", stockHp: 124, tunedHp: 150, torqueNm: 360 }
  ],
  Volkswagen: [
    { engineName: "1.5 TSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
    { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 },
    { engineName: "2.0 TDI 200", stockHp: 200, tunedHp: 238, torqueNm: 500 }
  ],
  Volvo: [
    { engineName: "D3 150", stockHp: 150, tunedHp: 185, torqueNm: 400 },
    { engineName: "D4 190", stockHp: 190, tunedHp: 225, torqueNm: 470 }
  ]
};

function cloneBaseEntry(baseEntry) {
  return {
    stockHp: baseEntry.stockHp,
    tunedHp: baseEntry.tunedHp,
    torque: baseEntry.torque,
    description: baseEntry.description
  };
}

function ensureYearRange(yearsNode, startYear, endYear, engineName, entry) {
  for (let year = startYear; year <= endYear; year += 1) {
    if (!yearsNode[year]) {
      yearsNode[year] = { [engineName]: cloneBaseEntry(entry) };
    }
  }
}

function parseTorqueNm(torqueText) {
  const match = String(torqueText || "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function buildEntry(engineSpec, fallbackEntry) {
  const stockHp = Number(engineSpec?.stockHp) || Number(fallbackEntry?.stockHp) || 140;
  const tunedHpRaw = Number(engineSpec?.tunedHp) || Number(fallbackEntry?.tunedHp) || Math.round(stockHp * 1.2);
  const tunedHp = tunedHpRaw > stockHp ? tunedHpRaw : stockHp + Math.max(20, Math.round(stockHp * 0.15));
  const torqueNm = Number(engineSpec?.torqueNm) || parseTorqueNm(fallbackEntry?.torque) || Math.round(stockHp * 2.6);
  return {
    stockHp,
    tunedHp,
    torque: `${torqueNm} Nm`,
    description: "Vejledende modelspecifikt normal-setup. Endeligt resultat afhænger af bilens stand og konkrete variant."
  };
}

function pickEngineSpec(modelName, specs, fallbackSpec) {
  if (!specs || specs.length === 0) return fallbackSpec;
  let hash = 0;
  for (const ch of String(modelName || "")) {
    hash += ch.charCodeAt(0);
  }
  return specs[hash % specs.length];
}

function pickEngineSet(modelName, specs, fallbackSpec, maxItems = 3) {
  const source = specs && specs.length ? specs : [fallbackSpec];
  if (source.length <= maxItems) return source;
  let hash = 0;
  for (const ch of String(modelName || "")) {
    hash += ch.charCodeAt(0);
  }
  const start = hash % source.length;
  const picked = [];
  for (let i = 0; i < maxItems; i += 1) {
    picked.push(source[(start + i) % source.length]);
  }
  return picked;
}

function buildYearEngines(engineSpecs, fallbackEntry) {
  const engines = {};
  engineSpecs.forEach((spec) => {
    engines[spec.engineName] = buildEntry(spec, fallbackEntry);
  });
  return engines;
}

function getPersonbilModelSpecs(brand, modelName, brandSpecs, fallbackSpec) {
  const model = String(modelName || "").toLowerCase();
  if (brand === "Volkswagen") {
    if (model.includes("passat")) return [
      { engineName: "1.4 TSI 150", stockHp: 150, tunedHp: 180, torqueNm: 300, toYear: 2018 },
      { engineName: "1.5 TSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300, fromYear: 2019 },
      { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 },
      { engineName: "2.0 TDI 190", stockHp: 190, tunedHp: 225, torqueNm: 460, toYear: 2019 },
      { engineName: "2.0 TDI 200", stockHp: 200, tunedHp: 238, torqueNm: 500, fromYear: 2020 }
    ];
    if (model.includes("golf")) return [
      { engineName: "1.4 TSI 122", stockHp: 122, tunedHp: 150, torqueNm: 250, toYear: 2012 },
      { engineName: "1.4 TSI 140", stockHp: 140, tunedHp: 170, torqueNm: 280, toYear: 2018 },
      { engineName: "1.5 TSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300, fromYear: 2019 },
      { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 },
      { engineName: "2.0 TDI 184", stockHp: 184, tunedHp: 220, torqueNm: 450, toYear: 2020 }
    ];
    if (model.includes("tiguan") || model.includes("t-roc") || model.includes("touran") || model.includes("arteon")) {
      return [
        { engineName: "1.5 TSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
        { engineName: "2.0 TSI 190", stockHp: 190, tunedHp: 235, torqueNm: 390 },
        { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 },
        { engineName: "2.0 TDI 190", stockHp: 190, tunedHp: 230, torqueNm: 470 }
      ];
    }
    return brandSpecs;
  }

  if (brand === "Audi") {
    if (model.includes("a4") || model.includes("a5") || model.includes("a6")) return [
      { engineName: "2.0 TFSI 190", stockHp: 190, tunedHp: 235, torqueNm: 380 },
      { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 },
      { engineName: "2.0 TDI 190", stockHp: 190, tunedHp: 228, torqueNm: 460 },
      { engineName: "3.0 TDI 272", stockHp: 272, tunedHp: 320, torqueNm: 660 }
    ];
    if (model.includes("q")) return [
      { engineName: "1.5 TFSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
      { engineName: "2.0 TFSI 190", stockHp: 190, tunedHp: 235, torqueNm: 390 },
      { engineName: "2.0 TDI 190", stockHp: 190, tunedHp: 225, torqueNm: 460 }
    ];
    return brandSpecs;
  }

  if (brand === "BMW") {
    if (model.includes("1-serie") || model.includes("3-serie") || model.includes("x1")) return [
      { engineName: "118i 136", stockHp: 136, tunedHp: 170, torqueNm: 280 },
      { engineName: "120i 184", stockHp: 184, tunedHp: 225, torqueNm: 360 },
      { engineName: "318d 150", stockHp: 150, tunedHp: 185, torqueNm: 390 },
      { engineName: "320d 190", stockHp: 190, tunedHp: 225, torqueNm: 450 }
    ];
    if (model.includes("5-serie") || model.includes("x3") || model.includes("x5")) return [
      { engineName: "520i 184", stockHp: 184, tunedHp: 225, torqueNm: 360 },
      { engineName: "530i 252", stockHp: 252, tunedHp: 300, torqueNm: 450 },
      { engineName: "520d 190", stockHp: 190, tunedHp: 225, torqueNm: 450 },
      { engineName: "530d 265", stockHp: 265, tunedHp: 315, torqueNm: 680 }
    ];
    return brandSpecs;
  }

  if (brand === "Mercedes-Benz") {
    if (model.includes("a-class") || model.includes("b-class") || model.includes("gla")) return [
      { engineName: "A180 136", stockHp: 136, tunedHp: 170, torqueNm: 280 },
      { engineName: "A200 163", stockHp: 163, tunedHp: 200, torqueNm: 320 },
      { engineName: "A200d 150", stockHp: 150, tunedHp: 185, torqueNm: 390 }
    ];
    if (model.includes("c-class") || model.includes("e-class") || model.includes("glc") || model.includes("gle")) return [
      { engineName: "C200 184", stockHp: 184, tunedHp: 225, torqueNm: 360 },
      { engineName: "C220d 194", stockHp: 194, tunedHp: 235, torqueNm: 500 },
      { engineName: "E220d 194", stockHp: 194, tunedHp: 230, torqueNm: 500 },
      { engineName: "E300d 245", stockHp: 245, tunedHp: 290, torqueNm: 620 }
    ];
    return brandSpecs;
  }

  if (brand === "Skoda" || brand === "Seat") {
    return [
      { engineName: "1.0 TSI 110", stockHp: 110, tunedHp: 135, torqueNm: 230 },
      { engineName: "1.5 TSI 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
      { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 190, torqueNm: 400 }
    ];
  }

  if (brand === "Volvo") {
    return [
      { engineName: "T4 190", stockHp: 190, tunedHp: 230, torqueNm: 390 },
      { engineName: "D3 150", stockHp: 150, tunedHp: 185, torqueNm: 400 },
      { engineName: "D4 190", stockHp: 190, tunedHp: 225, torqueNm: 470 }
    ];
  }

  if (brand === "Ford") {
    return [
      { engineName: "1.0 EcoBoost 125", stockHp: 125, tunedHp: 150, torqueNm: 240 },
      { engineName: "1.5 EcoBoost 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
      { engineName: "1.5 EcoBlue 120", stockHp: 120, tunedHp: 145, torqueNm: 340 },
      { engineName: "2.0 TDCi 180", stockHp: 180, tunedHp: 215, torqueNm: 440 }
    ];
  }

  if (brand === "Peugeot" || brand === "Renault" || brand === "Opel" || brand === "Toyota" || brand === "Nissan" || brand === "Hyundai" || brand === "Kia") {
    return [
      { engineName: "1.2/1.3 Turbo 130", stockHp: 130, tunedHp: 160, torqueNm: 260, fromYear: 2016 },
      { engineName: "1.5/1.6 Diesel 120", stockHp: 120, tunedHp: 145, torqueNm: 340 },
      { engineName: "2.0 Diesel 150", stockHp: 150, tunedHp: 185, torqueNm: 400 },
      { engineName: "1.0 Turbo 100", stockHp: 100, tunedHp: 125, torqueNm: 220, toYear: 2018 }
    ];
  }

  if (brand === "Alfa Romeo" || brand === "Fiat" || brand === "Abarth") {
    return [
      { engineName: "1.4 Turbo 120", stockHp: 120, tunedHp: 150, torqueNm: 260, toYear: 2016 },
      { engineName: "1.4 Turbo 170", stockHp: 170, tunedHp: 205, torqueNm: 330, toYear: 2020 },
      { engineName: "1.3 Turbo 130", stockHp: 130, tunedHp: 160, torqueNm: 280, fromYear: 2018 },
      { engineName: "2.0 Diesel 170", stockHp: 170, tunedHp: 205, torqueNm: 430 }
    ];
  }

  if (brand === "Mazda" || brand === "Honda" || brand === "Mitsubishi" || brand === "Suzuki" || brand === "Subaru") {
    return [
      { engineName: "1.6/2.0 Benzin 150", stockHp: 150, tunedHp: 180, torqueNm: 290, toYear: 2018 },
      { engineName: "2.0 Turbo Benzin 180", stockHp: 180, tunedHp: 220, torqueNm: 360, fromYear: 2016 },
      { engineName: "2.2 Diesel 150", stockHp: 150, tunedHp: 185, torqueNm: 400 },
      { engineName: "2.5 Benzin 194", stockHp: 194, tunedHp: 230, torqueNm: 360, fromYear: 2019 }
    ];
  }

  if (brand === "Citroen" || brand === "Dacia" || brand === "Chevrolet") {
    return [
      { engineName: "1.2 Turbo 110", stockHp: 110, tunedHp: 135, torqueNm: 230 },
      { engineName: "1.5/1.6 Diesel 120", stockHp: 120, tunedHp: 145, torqueNm: 340 },
      { engineName: "2.0 Diesel 150", stockHp: 150, tunedHp: 185, torqueNm: 400 },
      { engineName: "1.3 Turbo 130", stockHp: 130, tunedHp: 160, torqueNm: 280, fromYear: 2018 }
    ];
  }

  if (brand === "Jeep" || brand === "Dodge" || brand === "Chrysler") {
    return [
      { engineName: "1.3/1.4 Turbo 150", stockHp: 150, tunedHp: 185, torqueNm: 300 },
      { engineName: "2.0 Diesel 170", stockHp: 170, tunedHp: 205, torqueNm: 430 },
      { engineName: "2.0 Turbo Benzin 270", stockHp: 270, tunedHp: 315, torqueNm: 470, fromYear: 2017 },
      { engineName: "3.0 Diesel 250", stockHp: 250, tunedHp: 300, torqueNm: 680 }
    ];
  }

  if (brand === "Jaguar" || brand === "Land Rover" || brand === "Lexus") {
    return [
      { engineName: "2.0 Diesel 180", stockHp: 180, tunedHp: 220, torqueNm: 460 },
      { engineName: "2.0 Turbo Benzin 250", stockHp: 250, tunedHp: 300, torqueNm: 440 },
      { engineName: "3.0 Diesel 300", stockHp: 300, tunedHp: 350, torqueNm: 760 },
      { engineName: "3.0 Benzin 340", stockHp: 340, tunedHp: 390, torqueNm: 560 }
    ];
  }

  if (brand === "Porsche" || brand === "Bentley") {
    return [
      { engineName: "2.0 Turbo 252", stockHp: 252, tunedHp: 300, torqueNm: 460, toYear: 2020 },
      { engineName: "2.9/3.0 V6 340", stockHp: 340, tunedHp: 390, torqueNm: 560 },
      { engineName: "4.0 V8 550", stockHp: 550, tunedHp: 640, torqueNm: 850 },
      { engineName: "3.0 Hybrid 462", stockHp: 462, tunedHp: 520, torqueNm: 780, fromYear: 2018 }
    ];
  }

  if (brand === "Saab" || brand === "Smart") {
    return [
      { engineName: "0.9 Turbo 90", stockHp: 90, tunedHp: 115, torqueNm: 190, fromYear: 2014 },
      { engineName: "1.9 Diesel 150", stockHp: 150, tunedHp: 185, torqueNm: 390, toYear: 2012 },
      { engineName: "2.0 Turbo 210", stockHp: 210, tunedHp: 250, torqueNm: 400, toYear: 2012 }
    ];
  }

  if (brand === "Iveco" || brand === "MAN") {
    return [
      { engineName: "2.0 Diesel 150", stockHp: 150, tunedHp: 185, torqueNm: 420 },
      { engineName: "2.3 Diesel 180", stockHp: 180, tunedHp: 220, torqueNm: 500 },
      { engineName: "3.0 Diesel 210", stockHp: 210, tunedHp: 250, torqueNm: 580 }
    ];
  }

  return brandSpecs && brandSpecs.length ? brandSpecs : [fallbackSpec];
}

function filterSpecsByYear(specs, year) {
  if (!specs || specs.length === 0) return [];
  const explicitlyBound = specs.some((spec) => spec.fromYear || spec.toYear);
  if (explicitlyBound) {
    const filtered = specs.filter((spec) => {
      const fromYear = spec.fromYear || 1900;
      const toYear = spec.toYear || 2999;
      return year >= fromYear && year <= toYear;
    });
    return filtered.length ? filtered : specs;
  }

  if (specs.length <= 2) return specs;
  if (year <= 2013) return specs.slice(0, Math.min(2, specs.length));
  if (year <= 2018) {
    const mid = Math.floor(specs.length / 2);
    return specs.slice(Math.max(0, mid - 1), Math.min(specs.length, mid + 1));
  }
  return specs.slice(Math.max(0, specs.length - 2));
}

function pickEngineSetForYear(modelName, specs, fallbackSpec, year, maxItems = 3) {
  const yearFiltered = filterSpecsByYear(specs, year);
  return pickEngineSet(modelName, yearFiltered, fallbackSpec, maxItems);
}

Object.keys(vehicleData.Personbil).forEach((brand) => {
  const models = vehicleData.Personbil[brand];
  const modelNames = Object.keys(models);
  if (modelNames.length === 0) return;

  const baseModel = modelNames[0];
  const baseYears = Object.keys(models[baseModel]);
  if (baseYears.length === 0) return;
  const baseYear = baseYears[0];
  const baseEngines = Object.keys(models[baseModel][baseYear]);
  if (baseEngines.length === 0) return;
  const baseEngineName = baseEngines[0];
  const baseEntry = models[baseModel][baseYear][baseEngineName];

  const preferredModels = brandModelPresets[brand] || [baseModel, `${baseModel} Plus`, `${baseModel} Sport`];
  const [startYear, endYear] = brandYearSpan[brand] || [2010, 2024];
  const fallbackSpec = {
    engineName: baseEngineName,
    stockHp: baseEntry.stockHp,
    tunedHp: baseEntry.tunedHp,
    torqueNm: parseTorqueNm(baseEntry.torque)
  };
  const brandSpecs = personbilBrandEngines[brand] || [fallbackSpec];
  preferredModels.forEach((modelName) => {
    if (!models[modelName]) {
      models[modelName] = {};
      for (let year = startYear; year <= endYear; year += 1) {
      const sourceSpecs = getPersonbilModelSpecs(brand, modelName, brandSpecs, fallbackSpec);
      const modelSpecs = pickEngineSetForYear(modelName, sourceSpecs, fallbackSpec, year, 8);
      models[modelName][year] = buildYearEngines(modelSpecs, baseEntry);
      }
    }
  });

  Object.keys(models).forEach((modelName) => {
    const yearsNode = models[modelName];
    const existingYears = Object.keys(yearsNode);
    if (existingYears.length === 0) {
      for (let year = startYear; year <= endYear; year += 1) {
        const sourceSpecs = getPersonbilModelSpecs(brand, modelName, brandSpecs, fallbackSpec);
        const modelSpecs = pickEngineSetForYear(modelName, sourceSpecs, fallbackSpec, year, 8);
        yearsNode[year] = buildYearEngines(modelSpecs, baseEntry);
      }
      return;
    }

    for (let year = startYear; year <= endYear; year += 1) {
      const sourceSpecs = getPersonbilModelSpecs(brand, modelName, brandSpecs, fallbackSpec);
      const modelSpecs = pickEngineSetForYear(modelName, sourceSpecs, fallbackSpec, year, 8);
      const yearEngines = buildYearEngines(modelSpecs, baseEntry);
      yearsNode[year] = {
        ...(yearsNode[year] || {}),
        ...yearEngines
      };
    }
  });
});

const additionalVarebilBrands = [
  "Ford",
  "Mercedes",
  "Volkswagen",
  "Renault",
  "Opel",
  "Peugeot",
  "Citroen",
  "Fiat",
  "Iveco",
  "MAN",
  "Nissan",
  "Toyota"
];

additionalVarebilBrands.forEach((brand) => {
  if (!vehicleData.Varebil[brand]) {
    vehicleData.Varebil[brand] = {};
  }
});

const inferredVarebilDefaults = {
  Ford: {
    Transit: {
      2021: {
        "2.0 EcoBlue 170": {
          stockHp: 170,
          tunedHp: 205,
          torque: "470 Nm",
          description: "Vejledende normal-setup for varebil med fokus paa traekkraft og daglig drift."
        }
      }
    }
  },
  Mercedes: {
    Vito: {
      2020: {
        "119 CDI 190": {
          stockHp: 190,
          tunedHp: 225,
          torque: "510 Nm",
          description: "Vejledende normal-setup for varebil med bedre bundtraek og fleksibilitet."
        }
      }
    }
  },
  Volkswagen: {
    Transporter: {
      2020: {
        "2.0 TDI 150": {
          stockHp: 150,
          tunedHp: 185,
          torque: "410 Nm",
          description: "Vejledende normal-setup for varebil med bedre mellemacceleration."
        }
      }
    }
  },
  Renault: {
    Trafic: {
      2020: {
        "2.0 dCi 145": {
          stockHp: 145,
          tunedHp: 175,
          torque: "400 Nm",
          description: "Vejledende normal-setup for varebil i service- og haandvaerksbrug."
        }
      }
    }
  },
  Opel: {
    Vivaro: {
      2020: {
        "2.0 CDTI 150": {
          stockHp: 150,
          tunedHp: 180,
          torque: "420 Nm",
          description: "Vejledende normal-setup for varebil med mere overskud under last."
        }
      }
    }
  },
  Peugeot: {
    Expert: {
      2020: {
        "2.0 BlueHDi 150": {
          stockHp: 150,
          tunedHp: 180,
          torque: "420 Nm",
          description: "Vejledende normal-setup for varebil med tydelig forbedring i traekkraft."
        }
      }
    }
  },
  Citroen: {
    Jumpy: {
      2020: {
        "2.0 BlueHDi 150": {
          stockHp: 150,
          tunedHp: 180,
          torque: "420 Nm",
          description: "Vejledende normal-setup for varebil til daglig erhvervskoersel."
        }
      }
    }
  },
  Fiat: {
    Ducato: {
      2020: {
        "2.3 Multijet 140": {
          stockHp: 140,
          tunedHp: 170,
          torque: "400 Nm",
          description: "Vejledende normal-setup for varebil med fokus paa robust drift."
        }
      }
    }
  },
  Iveco: {
    Daily: {
      2020: {
        "2.3 HPI 136": {
          stockHp: 136,
          tunedHp: 170,
          torque: "430 Nm",
          description: "Vejledende normal-setup for varebil med bedre traek ved hoej belastning."
        }
      }
    }
  },
  MAN: {
    TGE: {
      2020: {
        "2.0 TDI 177": {
          stockHp: 177,
          tunedHp: 215,
          torque: "460 Nm",
          description: "Vejledende normal-setup for varebil i tungere arbejdsbrug."
        }
      }
    }
  },
  Nissan: {
    NV300: {
      2020: {
        "2.0 dCi 145": {
          stockHp: 145,
          tunedHp: 175,
          torque: "400 Nm",
          description: "Vejledende normal-setup for varebil med bedre mellemtraek."
        }
      }
    }
  },
  Toyota: {
    Proace: {
      2020: {
        "2.0 D-4D 150": {
          stockHp: 150,
          tunedHp: 180,
          torque: "420 Nm",
          description: "Vejledende normal-setup for varebil med mere overskud i daglig drift."
        }
      }
    }
  }
};

Object.entries(inferredVarebilDefaults).forEach(([brand, models]) => {
  Object.entries(models).forEach(([model, years]) => {
    if (!vehicleData.Varebil[brand][model]) {
      vehicleData.Varebil[brand][model] = years;
    }
  });
});

const varebilModelPresets = {
  Ford: ["Transit Connect", "Transit Custom", "Transit"],
  Mercedes: ["Citan", "Vito", "Sprinter"],
  Volkswagen: ["Caddy", "Transporter", "Crafter"],
  Renault: ["Kangoo", "Trafic", "Master"],
  Opel: ["Combo", "Vivaro", "Movano"],
  Peugeot: ["Partner", "Expert", "Boxer"],
  Citroen: ["Berlingo", "Jumpy", "Jumper"],
  Fiat: ["Doblo", "Scudo", "Ducato"],
  Iveco: ["Daily Van", "Daily Chassis", "Daily"],
  MAN: ["TGE Van", "TGE Kombi", "TGE Chassis"],
  Nissan: ["NV250", "NV300", "Interstar"],
  Toyota: ["Proace City", "Proace", "Proace Max"]
};

const varebilYearSpan = {
  Ford: [2010, 2024],
  Mercedes: [2010, 2024],
  Volkswagen: [2010, 2024],
  Renault: [2010, 2024],
  Opel: [2010, 2024],
  Peugeot: [2010, 2024],
  Citroen: [2010, 2024],
  Fiat: [2010, 2024],
  Iveco: [2010, 2024],
  MAN: [2016, 2024],
  Nissan: [2010, 2024],
  Toyota: [2012, 2024]
};

const varebilBrandEngines = {
  Ford: [
    { engineName: "2.0 EcoBlue 130", stockHp: 130, tunedHp: 160, torqueNm: 390 },
    { engineName: "2.0 EcoBlue 170", stockHp: 170, tunedHp: 205, torqueNm: 470 }
  ],
  Mercedes: [
    { engineName: "114 CDI 136", stockHp: 136, tunedHp: 165, torqueNm: 390 },
    { engineName: "119 CDI 190", stockHp: 190, tunedHp: 225, torqueNm: 510 }
  ],
  Volkswagen: [
    { engineName: "2.0 TDI 110", stockHp: 110, tunedHp: 140, torqueNm: 330 },
    { engineName: "2.0 TDI 150", stockHp: 150, tunedHp: 185, torqueNm: 410 }
  ],
  Renault: [
    { engineName: "2.0 dCi 120", stockHp: 120, tunedHp: 150, torqueNm: 360 },
    { engineName: "2.0 dCi 145", stockHp: 145, tunedHp: 175, torqueNm: 400 }
  ],
  Opel: [
    { engineName: "1.5 CDTI 120", stockHp: 120, tunedHp: 145, torqueNm: 340 },
    { engineName: "2.0 CDTI 150", stockHp: 150, tunedHp: 180, torqueNm: 420 }
  ],
  Peugeot: [
    { engineName: "1.5 BlueHDi 120", stockHp: 120, tunedHp: 145, torqueNm: 340 },
    { engineName: "2.0 BlueHDi 150", stockHp: 150, tunedHp: 180, torqueNm: 420 }
  ],
  Citroen: [
    { engineName: "1.5 BlueHDi 120", stockHp: 120, tunedHp: 145, torqueNm: 340 },
    { engineName: "2.0 BlueHDi 150", stockHp: 150, tunedHp: 180, torqueNm: 420 }
  ],
  Fiat: [
    { engineName: "2.2 Multijet 140", stockHp: 140, tunedHp: 170, torqueNm: 400 }
  ],
  Iveco: [
    { engineName: "2.3 HPI 136", stockHp: 136, tunedHp: 170, torqueNm: 430 },
    { engineName: "3.0 HPT 180", stockHp: 180, tunedHp: 220, torqueNm: 520 }
  ],
  MAN: [
    { engineName: "2.0 TDI 140", stockHp: 140, tunedHp: 175, torqueNm: 400 },
    { engineName: "2.0 TDI 177", stockHp: 177, tunedHp: 215, torqueNm: 460 }
  ],
  Nissan: [
    { engineName: "2.0 dCi 130", stockHp: 130, tunedHp: 160, torqueNm: 380 },
    { engineName: "2.0 dCi 145", stockHp: 145, tunedHp: 175, torqueNm: 400 }
  ],
  Toyota: [
    { engineName: "2.0 D-4D 145", stockHp: 145, tunedHp: 175, torqueNm: 400 },
    { engineName: "2.0 D-4D 150", stockHp: 150, tunedHp: 180, torqueNm: 420 }
  ]
};

Object.keys(vehicleData.Varebil).forEach((brand) => {
  const models = vehicleData.Varebil[brand];
  const modelNames = Object.keys(models);
  if (modelNames.length === 0) return;

  const baseModel = modelNames[0];
  const baseYears = Object.keys(models[baseModel]);
  if (baseYears.length === 0) return;
  const baseYear = baseYears[0];
  const baseEngines = Object.keys(models[baseModel][baseYear]);
  if (baseEngines.length === 0) return;
  const baseEngineName = baseEngines[0];
  const baseEntry = models[baseModel][baseYear][baseEngineName];

  const preferredModels = varebilModelPresets[brand] || [baseModel, `${baseModel} Plus`, `${baseModel} XL`];
  const [startYear, endYear] = varebilYearSpan[brand] || [2010, 2024];
  const fallbackSpec = {
    engineName: baseEngineName,
    stockHp: baseEntry.stockHp,
    tunedHp: baseEntry.tunedHp,
    torqueNm: parseTorqueNm(baseEntry.torque)
  };
  const brandSpecs = varebilBrandEngines[brand] || [fallbackSpec];

  preferredModels.forEach((modelName) => {
    if (!models[modelName]) {
      models[modelName] = {};
      for (let year = startYear; year <= endYear; year += 1) {
        const modelSpecs = pickEngineSetForYear(modelName, brandSpecs, fallbackSpec, year, 2);
        models[modelName][year] = buildYearEngines(modelSpecs, baseEntry);
      }
    }
  });

  Object.keys(models).forEach((modelName) => {
    const yearsNode = models[modelName];
    const existingYears = Object.keys(yearsNode);
    if (existingYears.length === 0) {
      for (let year = startYear; year <= endYear; year += 1) {
        const modelSpecs = pickEngineSetForYear(modelName, brandSpecs, fallbackSpec, year, 2);
        yearsNode[year] = buildYearEngines(modelSpecs, baseEntry);
      }
      return;
    }

    for (let year = startYear; year <= endYear; year += 1) {
      const modelSpecs = pickEngineSetForYear(modelName, brandSpecs, fallbackSpec, year, 2);
      const yearEngines = buildYearEngines(modelSpecs, baseEntry);
      yearsNode[year] = {
        ...(yearsNode[year] || {}),
        ...yearEngines
      };
    }
  });
});

function injectSharedLayout() {
  document.querySelectorAll('[data-include="header"]').forEach((node) => {
    node.outerHTML = sharedHeader;
  });

  document.querySelectorAll('[data-include="footer"]').forEach((node) => {
    node.outerHTML = sharedFooter;
  });

  if (!document.querySelector(".mobile-quickbar")) {
    document.body.insertAdjacentHTML("beforeend", sharedMobileQuickBar);
  }

  if (!document.querySelector(".desktop-phone-float")) {
    document.body.insertAdjacentHTML("afterbegin", sharedDesktopPhoneFloat);
  }
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  const pageTargets = {
    home: "index.html",
    services: "services.html",
    "service-ac": "service-ac-service.html",
    "service-syn": "service-synstjek.html",
    "service-fejlfinding": "service-diagnostik-fejlsoegning.html",
    "service-vedligehold": "service-vedligehold-bremser.html",
    "service-klargoering": "service-klargoering-optimering.html",
    "service-dpf": "service-dpf-rens.html",
    "service-turbo": "service-turbo-kontrol.html",
    "service-motoroptimering": "service-motoroptimering.html",
    "find-bil": "find-din-bil.html",
    chiptuning: "chiptuning.html",
    blog: "blog/index.html",
    "om-os": "om-os.html",
    kontakt: "kontakt.html"
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  const page = document.body.dataset.page;
  const expectedTarget = pageTargets[page];
  nav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    const normalizedHref = href.replace(/^\.\//, "").replace(/^\.\.\//, "");
    const active = Boolean(expectedTarget && normalizedHref === expectedTarget);

    if (active) link.classList.add("is-active");
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initMobileQuickBar() {
  const quickBar = document.querySelector(".mobile-quickbar");
  const sheet = document.querySelector("#mobileQuickbarSheet");
  const sheetNav = document.querySelector(".mobile-quickbar-menu");
  const menuToggle = document.querySelector(".mobile-quickbar-menu-toggle");
  const closeButton = document.querySelector(".mobile-quickbar-close");
  const siteNav = document.querySelector(".site-nav");
  if (!quickBar || !sheet || !sheetNav || !menuToggle || !closeButton || !siteNav) return;

  if (!sheetNav.children.length) {
    const seen = new Set();
    const flatLinks = [];
    siteNav.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      const label = link.textContent.trim();
      if (!href || !label || seen.has(href)) return;
      seen.add(href);
      flatLinks.push(`<a href="${href}">${label}</a>`);
    });
    sheetNav.innerHTML = flatLinks.join("");
  }

  let lastScrollY = window.scrollY;
  let ticking = false;
  const scrollThreshold = 14;

  const setOpen = (isOpen) => {
    sheet.hidden = !isOpen;
    quickBar.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("mobile-quickbar-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setOpen(sheet.hidden);
  });

  closeButton.addEventListener("click", () => {
    setOpen(false);
  });

  sheetNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setOpen(false);
    });
  });

  const syncQuickBarVisibility = () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;
    const nearTop = currentScrollY < 24;

    if (nearTop || delta < -scrollThreshold) {
      quickBar.classList.remove("is-hidden");
    } else if (delta > scrollThreshold && !quickBar.classList.contains("is-open")) {
      quickBar.classList.add("is-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(syncQuickBarVisibility);
        ticking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      setOpen(false);
    }
  });
}

function initHeroSlider() {
  const shell = document.querySelector("#heroSliderShell");
  const dotsContainer = document.querySelector("#sliderDots");
  const prevButton = document.querySelector("#prevSlide");
  const nextButton = document.querySelector("#nextSlide");
  if (!shell || !dotsContainer || !prevButton || !nextButton) return;

  let activeIndex = 0;
  let timer;

  heroSlides.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = `hero-slide${index === 0 ? " is-active" : ""}`;

    const image = document.createElement("img");
    image.src = slide.src;
    image.alt = slide.alt;
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";
    if (index === 0) image.fetchPriority = "high";

    if (slide.fallback) {
      image.addEventListener("error", () => {
        image.src = slide.fallback;
      });
    }

    slideElement.appendChild(image);
    shell.appendChild(slideElement);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `slider-dot${index === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `Gå til slide ${index + 1}`);
    dot.addEventListener("click", () => {
      activeIndex = index;
      update();
      restart();
    });
    dotsContainer.appendChild(dot);
  });

  function update() {
    shell.querySelectorAll(".hero-slide").forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });
    dotsContainer.querySelectorAll(".slider-dot").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => {
      activeIndex = (activeIndex + 1) % heroSlides.length;
      update();
    }, 4200);
  }

  prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + heroSlides.length) % heroSlides.length;
    update();
    restart();
  });

  nextButton.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % heroSlides.length;
    update();
    restart();
  });

  restart();
}

function initBlogSpotlight() {
  const spotlight = document.querySelector("[data-blog-spotlight]");
  if (!spotlight) return;

  const category = spotlight.querySelector("[data-blog-category]");
  const indexLabel = spotlight.querySelector("[data-blog-index]");
  const title = spotlight.querySelector("[data-blog-title]");
  const excerpt = spotlight.querySelector("[data-blog-excerpt]");
  const link = spotlight.querySelector("[data-blog-link]");
  const cardTitle = spotlight.querySelector("[data-blog-card-title]");
  const cardCopy = spotlight.querySelector("[data-blog-card-copy]");
  const prevButton = document.querySelector("#prevBlogSlide");
  const nextButton = document.querySelector("#nextBlogSlide");
  const dotsContainer = document.querySelector("#blogSpotlightDots");

  if (!category || !indexLabel || !title || !excerpt || !link || !cardTitle || !cardCopy || !prevButton || !nextButton || !dotsContainer) {
    return;
  }

  let activeIndex = 0;
  let timer;

  blogSpotlightPosts.forEach((post, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `slider-dot${index === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `Gå til blogindlæg ${index + 1}`);
    dot.addEventListener("click", () => {
      activeIndex = index;
      update();
      restart();
    });
    dotsContainer.appendChild(dot);
  });

  function update() {
    const post = blogSpotlightPosts[activeIndex];
    category.textContent = post.category;
    indexLabel.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(blogSpotlightPosts.length).padStart(2, "0")}`;
    title.textContent = post.title;
    excerpt.textContent = post.excerpt;
    link.href = post.href;
    cardTitle.textContent = post.title;
    cardCopy.textContent = post.cardCopy;
    dotsContainer.querySelectorAll(".slider-dot").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => {
      activeIndex = (activeIndex + 1) % blogSpotlightPosts.length;
      update();
    }, 4800);
  }

  prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + blogSpotlightPosts.length) % blogSpotlightPosts.length;
    update();
    restart();
  });

  nextButton.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % blogSpotlightPosts.length;
    update();
    restart();
  });

  update();
  restart();
}

function initRevealAnimations() {
  const revealTargets = document.querySelectorAll(
    [
      ".section-header",
      ".editorial-panel",
      ".media-feature",
      ".service-row",
      ".services-notes .card",
      ".owner-story",
      ".blog-spotlight",
      ".accent-panel",
      ".finder-layout",
      ".contact-layout > .content-stack",
      ".preview-grid > *",
      ".faq-item"
    ].join(", ")
  );

  if (!revealTargets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    target.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
    observer.observe(target);
  });
}

function buildFinderMarkup(compact) {
  return `
    <div class="finder-layout">
      <form class="finder-form">
        <div class="field-grid">
          <label>Type<select name="type"><option value="">Vælg type</option></select></label>
          <label>Mærke<select name="brand" disabled><option value="">Vælg mærke</option></select></label>
          <label>Model<select name="model" disabled><option value="">Vælg model</option></select></label>
          <label>Årgang<select name="year" disabled><option value="">Vælg årgang</option></select></label>
          <label class="field-span">Motor<select name="engine" disabled><option value="">Vælg motor</option></select></label>
        </div>
        <button class="button finder-button" type="submit">${compact ? "Se eksempel" : "Søg bil"}</button>
        <p class="helper-text">Vælg bilens oplysninger for at få et vejledende eksempel på effekt, moment og hvad der typisk kan mærkes i praksis.</p>
      </form>
      <aside class="finder-result" aria-live="polite">
        <div class="result-head">
          <span class="result-label">Eksempel på resultat</span>
          <h3>Vælg en bil for at se data</h3>
        </div>
        <div class="stats-grid">
          <article class="stat"><span>Standard effekt</span><strong>-</strong></article>
          <article class="stat"><span>Optimeret effekt</span><strong>-</strong></article>
          <article class="stat"><span>Moment</span><strong>-</strong></article>
        </div>
        <p class="section-copy spaced">Her vises et realistisk eksempel på effekt og moment for den valgte bil.</p>
        <p class="disclaimer">Disclaimer: Viste data er vejledende eksempler. Endeligt resultat afhænger af bilens tilstand, softwareversion, brændstofkvalitet og eventuelle hardwareændringer.</p>
      </aside>
    </div>
  `;
}

function setOptions(select, options, placeholder) {
  select.innerHTML = "";
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  select.appendChild(placeholderOption);
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
  select.disabled = options.length === 0;
}

function initCarFinders() {
  document.querySelectorAll(".car-finder").forEach((container) => {
    const compact = container.dataset.compact === "true";
    container.innerHTML = buildFinderMarkup(compact);

    const form = container.querySelector(".finder-form");
    const result = container.querySelector(".finder-result");
    const typeSelect = form.querySelector('[name="type"]');
    const brandSelect = form.querySelector('[name="brand"]');
    const modelSelect = form.querySelector('[name="model"]');
    const yearSelect = form.querySelector('[name="year"]');
    const engineSelect = form.querySelector('[name="engine"]');

    setOptions(typeSelect, Object.keys(vehicleData), "Vælg type");

    typeSelect.addEventListener("change", () => {
      const brands = typeSelect.value ? Object.keys(vehicleData[typeSelect.value]) : [];
      setOptions(brandSelect, brands, "Vælg mærke");
      setOptions(modelSelect, [], "Vælg model");
      setOptions(yearSelect, [], "Vælg årgang");
      setOptions(engineSelect, [], "Vælg motor");
    });

    brandSelect.addEventListener("change", () => {
      const models =
        typeSelect.value && brandSelect.value
          ? Object.keys(vehicleData[typeSelect.value][brandSelect.value])
          : [];
      setOptions(modelSelect, models, "Vælg model");
      setOptions(yearSelect, [], "Vælg årgang");
      setOptions(engineSelect, [], "Vælg motor");
    });

    modelSelect.addEventListener("change", () => {
      const years =
        typeSelect.value && brandSelect.value && modelSelect.value
          ? Object.keys(vehicleData[typeSelect.value][brandSelect.value][modelSelect.value])
          : [];
      setOptions(yearSelect, years, "Vælg årgang");
      setOptions(engineSelect, [], "Vælg motor");
    });

    yearSelect.addEventListener("change", () => {
      const engines =
        typeSelect.value && brandSelect.value && modelSelect.value && yearSelect.value
          ? Object.keys(vehicleData[typeSelect.value][brandSelect.value][modelSelect.value][yearSelect.value])
          : [];
      setOptions(engineSelect, engines, "Vælg motor");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (![typeSelect, brandSelect, modelSelect, yearSelect, engineSelect].every((field) => field.value)) {
        result.innerHTML = `
          <div class="result-head">
            <span class="result-label">Vælg alle felter</span>
            <h3>Vi mangler stadig nogle oplysninger</h3>
          </div>
          <p class="section-copy spaced">Vælg type, mærke, model, årgang og motor for at se et eksempel på resultatvisning.</p>
          <p class="disclaimer">Disclaimer: Viste data er vejledende eksempler. Endeligt resultat afhænger altid af bilens tilstand, softwareversion og det konkrete setup.</p>
        `;
        return;
      }

      const data =
        vehicleData[typeSelect.value][brandSelect.value][modelSelect.value][yearSelect.value][engineSelect.value];

      result.innerHTML = `
        <div class="result-head">
          <span class="result-label">Eksempel på resultat</span>
          <h3>${brandSelect.value} ${modelSelect.value} ${yearSelect.value}</h3>
        </div>
        <div class="stats-grid">
          <article class="stat"><span>Standard effekt</span><strong>${data.stockHp} hk</strong></article>
          <article class="stat"><span>Optimeret effekt</span><strong>${data.tunedHp} hk</strong></article>
          <article class="stat"><span>Moment</span><strong>${data.torque}</strong></article>
        </div>
        <p class="section-copy spaced">${data.description}</p>
        <p class="helper-text"><strong>Motor:</strong> ${engineSelect.value}</p>
        <p class="disclaimer">Disclaimer: Viste data er vejledende eksempler. Endeligt resultat afhænger af bilens tilstand, softwareversion, brændstofkvalitet og eventuelle hardwareændringer.</p>
      `;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectSharedLayout();
  initNav();
  initMobileQuickBar();
  initHeroSlider();
  initBlogSpotlight();
  initCarFinders();
  initRevealAnimations();
});
