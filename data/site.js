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
        "1.4 TB 120": {
          stockHp: 120,
          tunedHp: 155,
          torque: "250 Nm",
          description: "Et vejledende normal-setup med bedre bundtræk og mere respons i daglig kørsel."
        }
      }
    }
  },
  Bentley: {
    Continental: {
      2019: {
        "4.0 V8 550": {
          stockHp: 550,
          tunedHp: 640,
          torque: "850 Nm",
          description: "Et vejledende normal-setup med markant overskud, men stadig fokus på harmonisk levering."
        }
      }
    }
  },
  Chevrolet: {
    Cruze: {
      2017: {
        "2.0 VCDi 163": {
          stockHp: 163,
          tunedHp: 195,
          torque: "420 Nm",
          description: "Et vejledende normal-setup for bedre mellemacceleration og mere fleksibel motorkarakter."
        }
      }
    }
  },
  Chrysler: {
    "300C": {
      2016: {
        "3.0 CRD 218": {
          stockHp: 218,
          tunedHp: 265,
          torque: "600 Nm",
          description: "Et vejledende normal-setup med tydelig forbedring i træk under belastning."
        }
      }
    }
  },
  Citroen: {
    C4: {
      2018: {
        "1.6 HDi 120": {
          stockHp: 120,
          tunedHp: 145,
          torque: "330 Nm",
          description: "Et vejledende normal-setup med mere rolig og brugbar kraftlevering."
        }
      }
    }
  },
  Dacia: {
    Duster: {
      2019: {
        "1.5 dCi 115": {
          stockHp: 115,
          tunedHp: 140,
          torque: "320 Nm",
          description: "Et vejledende normal-setup med bedre bundtræk og mere overskud i hverdagen."
        }
      }
    }
  },
  Dodge: {
    RAM: {
      2018: {
        "5.7 HEMI 395": {
          stockHp: 395,
          tunedHp: 430,
          torque: "620 Nm",
          description: "Et vejledende normal-setup med mere respons og stærkere træk i mellemområdet."
        }
      }
    }
  },
  Fiat: {
    "500X": {
      2018: {
        "1.4 T-Jet 140": {
          stockHp: 140,
          tunedHp: 170,
          torque: "280 Nm",
          description: "Et vejledende normal-setup med mærkbart bedre fleksibilitet i daglig kørsel."
        }
      }
    }
  },
  Ford: {
    Focus: {
      2019: {
        "1.5 EcoBlue 120": {
          stockHp: 120,
          tunedHp: 145,
          torque: "340 Nm",
          description: "Et vejledende normal-setup med stærkere mellemtræk og mere overskud."
        }
      }
    }
  },
  Honda: {
    Civic: {
      2018: {
        "1.6 i-DTEC 120": {
          stockHp: 120,
          tunedHp: 145,
          torque: "330 Nm",
          description: "Et vejledende normal-setup med bedre respons og mere brugbar trækkraft."
        }
      }
    }
  },
  Hyundai: {
    i30: {
      2019: {
        "1.6 CRDi 136": {
          stockHp: 136,
          tunedHp: 165,
          torque: "360 Nm",
          description: "Et vejledende normal-setup med tydeligt bedre mellemacceleration."
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
          description: "Et vejledende normal-setup med mere trækkraft ved last og landevejskørsel."
        }
      }
    }
  },
  Jaguar: {
    XF: {
      2018: {
        "2.0 D 180": {
          stockHp: 180,
          tunedHp: 220,
          torque: "460 Nm",
          description: "Et vejledende normal-setup med stærkere moment og mere afslappet karakter."
        }
      }
    }
  },
  Jeep: {
    "Grand Cherokee": {
      2019: {
        "3.0 CRD 250": {
          stockHp: 250,
          tunedHp: 300,
          torque: "680 Nm",
          description: "Et vejledende normal-setup med mere robust træk under belastning."
        }
      }
    }
  },
  Kia: {
    Ceed: {
      2019: {
        "1.6 CRDi 136": {
          stockHp: 136,
          tunedHp: 170,
          torque: "370 Nm",
          description: "Et vejledende normal-setup med bedre bundtræk og mere elastisk motorgang."
        }
      }
    }
  },
  "Land Rover": {
    "Discovery Sport": {
      2018: {
        "2.0 TD4 180": {
          stockHp: 180,
          tunedHp: 220,
          torque: "470 Nm",
          description: "Et vejledende normal-setup med tydeligt mere overskud i mellemområdet."
        }
      }
    }
  },
  Lexus: {
    IS: {
      2018: {
        "200t 245": {
          stockHp: 245,
          tunedHp: 290,
          torque: "420 Nm",
          description: "Et vejledende normal-setup med skarpere respons og bedre acceleration."
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
          description: "Et vejledende normal-setup med bedre trækkraft i arbejdsbrug."
        }
      }
    }
  },
  Mazda: {
    "6": {
      2018: {
        "2.2 Skyactiv-D 150": {
          stockHp: 150,
          tunedHp: 185,
          torque: "420 Nm",
          description: "Et vejledende normal-setup med mere fleksibilitet og bedre mellemtræk."
        }
      }
    }
  },
  "Mercedes-Benz": {
    "C-Class": {
      2019: {
        "C220d 194": {
          stockHp: 194,
          tunedHp: 235,
          torque: "500 Nm",
          description: "Et vejledende normal-setup med mere overskud uden at gå på kompromis med komfort."
        }
      }
    }
  },
  Mitsubishi: {
    Outlander: {
      2018: {
        "2.2 DI-D 150": {
          stockHp: 150,
          tunedHp: 180,
          torque: "400 Nm",
          description: "Et vejledende normal-setup med bedre kraftlevering i hverdagen."
        }
      }
    }
  },
  Nissan: {
    Qashqai: {
      2019: {
        "1.5 dCi 115": {
          stockHp: 115,
          tunedHp: 140,
          torque: "320 Nm",
          description: "Et vejledende normal-setup med mere træk og roligere kørefølelse."
        }
      }
    }
  },
  Opel: {
    Insignia: {
      2018: {
        "2.0 CDTi 170": {
          stockHp: 170,
          tunedHp: 205,
          torque: "450 Nm",
          description: "Et vejledende normal-setup med stærkere mellemacceleration."
        }
      }
    }
  },
  Peugeot: {
    "308": {
      2019: {
        "1.5 BlueHDi 130": {
          stockHp: 130,
          tunedHp: 160,
          torque: "360 Nm",
          description: "Et vejledende normal-setup med mere bundtræk og bedre respons."
        }
      }
    }
  },
  Porsche: {
    Macan: {
      2019: {
        "2.0 Turbo 252": {
          stockHp: 252,
          tunedHp: 300,
          torque: "460 Nm",
          description: "Et vejledende normal-setup med markant bedre mellemtræk."
        }
      }
    }
  },
  Renault: {
    Megane: {
      2018: {
        "1.5 dCi 110": {
          stockHp: 110,
          tunedHp: 135,
          torque: "320 Nm",
          description: "Et vejledende normal-setup med bedre fleksibilitet og mere brugbart træk."
        }
      }
    }
  },
  Saab: {
    "9-3": {
      2011: {
        "1.9 TTiD 180": {
          stockHp: 180,
          tunedHp: 220,
          torque: "460 Nm",
          description: "Et vejledende normal-setup med tydeligt bedre moment og respons."
        }
      }
    }
  },
  Seat: {
    Leon: {
      2019: {
        "2.0 TDI 150": {
          stockHp: 150,
          tunedHp: 190,
          torque: "400 Nm",
          description: "Et vejledende normal-setup med stærkere træk og bedre overskud."
        }
      }
    }
  },
  Skoda: {
    Octavia: {
      2019: {
        "2.0 TDI 150": {
          stockHp: 150,
          tunedHp: 190,
          torque: "400 Nm",
          description: "Et vejledende normal-setup med bedre mellemacceleration."
        }
      }
    }
  },
  Smart: {
    ForTwo: {
      2018: {
        "0.9 Turbo 90": {
          stockHp: 90,
          tunedHp: 115,
          torque: "190 Nm",
          description: "Et vejledende normal-setup med kvikkere respons i bykørsel."
        }
      }
    }
  },
  Subaru: {
    Forester: {
      2017: {
        "2.0D 147": {
          stockHp: 147,
          tunedHp: 175,
          torque: "390 Nm",
          description: "Et vejledende normal-setup med bedre trækkraft under belastning."
        }
      }
    }
  },
  Suzuki: {
    Vitara: {
      2019: {
        "1.4 Boosterjet 140": {
          stockHp: 140,
          tunedHp: 165,
          torque: "270 Nm",
          description: "Et vejledende normal-setup med bedre bundtræk og mere smidig karakter."
        }
      }
    }
  },
  Toyota: {
    Avensis: {
      2017: {
        "2.0 D-4D 124": {
          stockHp: 124,
          tunedHp: 150,
          torque: "360 Nm",
          description: "Et vejledende normal-setup med bedre brugbar effekt i hverdagen."
        }
      }
    }
  },
  Volvo: {
    V60: {
      2019: {
        "D4 190": {
          stockHp: 190,
          tunedHp: 225,
          torque: "470 Nm",
          description: "Et vejledende normal-setup med stærkere momentkurve og mere overskud."
        }
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

export const services = [
  {
    title: "Motoroptimering",
    description:
      "Softwareoptimering med fokus på et jævn kraft i hverdagen, bedre respons og et resultat, der fungerer i den virkelige verden.",
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
      "Værkstedsservice med fokus på at bilen kører stabilt, overblik og gennemsigtige anbefalinger."
  },
  {
    title: "Klargøring før optimering",
    description:
      "Vi vurderer bilens tekniske udgangspunkt, så motoroptimering kun laves på et sundt og realistisk fundament."
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
      "Stage 1 er normalt softwarebaseret motoroptimering på en bil med standard eller næsten standard hardware. Stage 2 indebærer typisk, at bilen også har relevante hardwareændringer, så setup og forventninger skal ses igennem mere konkret."
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
