export const siteConfig = {
  name: "MH AutoTeknik og Optimering",
  url: "https://www.mhautoteknik.dk"
};

export const navigation = [
  { label: "Forside", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Find din bil", href: "/find-din-bil" },
  { label: "Chiptuning", href: "/chiptuning" },
  { label: "Blog", href: "/blog" },
  { label: "Om os", href: "/om-os" },
  { label: "Kontakt", href: "/kontakt" }
];

export const heroSlides = [
  {
    src: "/images/hero-mercedes.avif",
    alt: "Sportsvogn i showroom"
  },
  {
    src: "/images/hero-audi-exterior.avif",
    alt: "Audi set udefra"
  },
  {
    src: "/images/hero-audi-interior.webp",
    alt: "Audi interiør med cockpit og skærm"
  }
];

export const vehicleData = {
  Personbil: {
    Audi: {
      A4: {
        2018: {
          "2.0 TDI 190": {
            stockHp: 190,
            tunedHp: 228,
            torque: "460 Nm",
            description:
              "Et stærkt og balanceret eksempel med bedre mellemtræk og mere overskud ved motorvejskørsel."
          }
        }
      },
      A6: {
        2019: {
          "3.0 TDI 272": {
            stockHp: 272,
            tunedHp: 320,
            torque: "660 Nm",
            description:
              "Mere rolig kraftlevering og tydelig forbedring i trækkraft uden at miste komfortfornemmelsen."
          }
        }
      }
    },
    BMW: {
      "320d": {
        2017: {
          "2.0d 190": {
            stockHp: 190,
            tunedHp: 225,
            torque: "450 Nm",
            description:
              "Et populært setup for føreren, der ønsker hurtigere respons og et mere fleksibelt momentområde."
          }
        }
      },
      "530d": {
        2020: {
          "3.0d 265": {
            stockHp: 265,
            tunedHp: 315,
            torque: "680 Nm",
            description:
              "Giver bilen en mere beslutsom karakter ved acceleration og bedre overskud ved højere belastning."
          }
        }
      }
    },
    Volkswagen: {
      Golf: {
        2018: {
          "2.0 TDI 184": {
            stockHp: 184,
            tunedHp: 220,
            torque: "450 Nm",
            description:
              "Et stærkt eksempel på en hverdagsbil, der får mere punch og mere brugbar fleksibilitet."
          }
        }
      },
      Passat: {
        2020: {
          "2.0 TDI 200": {
            stockHp: 200,
            tunedHp: 238,
            torque: "500 Nm",
            description:
              "Velegnet til dig, der ønsker bedre mellemacceleration og en mere effektiv, afslappet køreoplevelse."
          }
        }
      }
    }
  },
  Varebil: {
    Ford: {
      Transit: {
        2021: {
          "2.0 EcoBlue 170": {
            stockHp: 170,
            tunedHp: 205,
            torque: "470 Nm",
            description:
              "Kan give en mærkbar forbedring i bundtræk og gøre bilen mere afslappet under last."
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
            description:
              "Et realistisk eksempel på mere overskud i arbejdsdagen med bedre trækkraft og respons."
          }
        }
      }
    }
  }
};

export const services = [
  {
    title: "Motoroptimering",
    description:
      "Softwareoptimering med fokus på et harmonisk effektforløb, bedre respons og et resultat, der fungerer i den virkelige verden.",
    link: { label: "Læs om chiptuning", href: "/chiptuning" }
  },
  {
    title: "Chiptuning",
    description:
      "Professionel tuning for bilejere, der ønsker flere hestekræfter, stærkere moment og en mere levende køreoplevelse.",
    link: { label: "Se hvordan det fungerer", href: "/chiptuning" }
  },
  {
    title: "Diagnostik og fejlsøgning",
    description:
      "Metodisk fejlsøgning ved motorlamper, tab af effekt og ujævn motorgang med fokus på at løse årsagen."
  },
  {
    title: "Service og vedligehold",
    description:
      "Værkstedsservice med fokus på driftssikkerhed, overblik og gennemsigtige anbefalinger."
  },
  {
    title: "Klargøring før optimering",
    description:
      "Vi vurderer bilens tekniske udgangspunkt, så motoroptimering kun udføres på et sundt og realistisk fundament."
  },
  {
    title: "Rådgivning om setup",
    description:
      "Sparring om hardware, software og næste skridt, hvis du vil bygge videre på bilen på en gennemtænkt måde."
  }
];

export const blogPosts = [
  {
    slug: "hvad-er-chiptuning",
    title: "Hvad er chiptuning?",
    excerpt:
      "En grundig introduktion til, hvad chiptuning er, hvordan motoroptimering fungerer, og hvorfor software spiller en så stor rolle for bilens karakter.",
    category: "Chiptuning",
    metaTitle: "Hvad er chiptuning? | Guide til motoroptimering",
    metaDescription:
      "Læs hvad chiptuning er, hvordan motoroptimering fungerer, og hvilke fordele du kan få med flere hestekræfter og bedre respons.",
    content: [
      "Chiptuning er en form for motoroptimering, hvor bilens software justeres for at forbedre effekt, moment og respons. Det handler ikke kun om flere hestekræfter, men også om at skabe et mere harmonisk og brugbart setup.",
      "I moderne biler styres store dele af motorens adfærd af software. Når man justerer parametre som brændstofmængde, ladetryk og momentbegrænsninger, kan bilen opleves mere levende og mere fleksibel i daglig kørsel.",
      "Hos MH AutoTeknik og Optimering handler chiptuning om balance. Vi ser på bilens tilstand, motorvariant og anvendelse, før vi anbefaler en løsning. Derfor passer motoroptimering sjældent ind i en standardskabelon, hvis resultatet også skal være troværdigt på længere sigt."
    ]
  },
  {
    slug: "er-chiptuning-lovligt-i-danmark",
    title: "Er chiptuning lovligt i Danmark?",
    excerpt:
      "Et overblik over de typiske spørgsmål om lovlighed, ansvar og hvorfor dokumentation og rådgivning betyder noget ved tuning i Danmark.",
    category: "Lovgivning",
    metaTitle: "Er chiptuning lovligt i Danmark? | MH AutoTeknik",
    metaDescription:
      "Få overblik over spørgsmål om lovlighed, ansvar og forhold du bør kende, før du vælger chiptuning eller motoroptimering i Danmark.",
    content: [
      "Spørgsmålet om, hvorvidt chiptuning er lovligt i Danmark, afhænger af flere forhold. Derfor er det vigtigt at få konkret rådgivning om netop din bil og det ønskede setup, før der træffes en beslutning.",
      "Når man arbejder med motoroptimering, bør man ikke kun fokusere på effekt. Man bør også se på dokumentation, bilens anvendelse og hvilke krav der gælder for den enkelte løsning. Det er netop her, professionel rådgivning skaber tryghed.",
      "Hos MH AutoTeknik og Optimering anbefaler vi altid, at spørgsmål om lovlighed og godkendelser afklares konkret. Det giver et mere ansvarligt forløb og et bedre grundlag for den rigtige løsning."
    ]
  },
  {
    slug: "hvor-meget-effekt-kan-man-faa",
    title: "Hvor meget effekt kan man få?",
    excerpt:
      "Læs hvad der påvirker potentialet for flere hestekræfter, og hvorfor motor, drivlinje og bilens stand spiller en afgørende rolle.",
    category: "Performance",
    metaTitle: "Hvor meget effekt kan man få? | Flere hestekræfter med tuning",
    metaDescription:
      "Læs hvad der påvirker potentialet for flere hestekræfter og mere moment ved chiptuning og motoroptimering.",
    content: [
      "Hvor meget effekt man kan få ved chiptuning, afhænger af bilens motor, software, drivlinje og generelle mekaniske stand. Derfor vil to biler med samme modelnavn ikke nødvendigvis have præcis samme potentiale.",
      "Turbo-motorer har ofte et tydeligt potentiale for forbedringer i både hestekræfter og moment, mens resultatet på andre opsætninger kan være mere moderat. Det vigtigste er, at forventningerne bliver sat rigtigt fra begyndelsen.",
      "Vil du have en konkret idé om potentialet i din bil, er den bedste vej ofte at bruge vores side Find din bil eller kontakte os direkte. Så kan vi tage udgangspunkt i den rigtige motorvariant i stedet for generelle antagelser."
    ]
  }
];

export const faqItems = [
  {
    question: "Hvad er forskellen på Stage 1 og Stage 2?",
    answer:
      "Stage 1 er normalt softwarebaseret motoroptimering på en bil med standard eller næsten standard hardware. Stage 2 indebærer typisk, at bilen også har relevante hardwareændringer, så setup og forventninger skal vurderes mere konkret."
  },
  {
    question: "Kan man mærke forskel i hverdagen?",
    answer:
      "Ja, i mange tilfælde mærkes forskellen især i respons, mellemtræk og den måde bilen trækker under almindelig kørsel. Det handler ikke kun om topydelse."
  },
  {
    question: "Er flere hestekræfter altid målet?",
    answer:
      "Nej. En god motoroptimering handler lige så meget om balance, køreegenskaber og et resultat, der passer til bilens tilstand og ejerens behov."
  }
];
