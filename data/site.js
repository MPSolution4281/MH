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
  preferredModels.forEach((modelName) => {
    if (!models[modelName]) {
      models[modelName] = {};
      ensureYearRange(models[modelName], startYear, endYear, baseEngineName, baseEntry);
    }
  });

  Object.keys(models).forEach((modelName) => {
    const yearsNode = models[modelName];
    const existingYears = Object.keys(yearsNode);
    if (existingYears.length === 0) {
      ensureYearRange(yearsNode, startYear, endYear, baseEngineName, baseEntry);
      return;
    }

    const sampleYear = existingYears[0];
    const sampleEngines = Object.keys(yearsNode[sampleYear]);
    const sampleEngine = sampleEngines[0] || baseEngineName;
    const sampleEntry = yearsNode[sampleYear][sampleEngine] || baseEntry;

    ensureYearRange(yearsNode, startYear, endYear, sampleEngine, sampleEntry);
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

  preferredModels.forEach((modelName) => {
    if (!models[modelName]) {
      models[modelName] = {};
      ensureYearRange(models[modelName], startYear, endYear, baseEngineName, baseEntry);
    }
  });

  Object.keys(models).forEach((modelName) => {
    const yearsNode = models[modelName];
    const existingYears = Object.keys(yearsNode);
    if (existingYears.length === 0) {
      ensureYearRange(yearsNode, startYear, endYear, baseEngineName, baseEntry);
      return;
    }

    const sampleYear = existingYears[0];
    const sampleEngines = Object.keys(yearsNode[sampleYear]);
    const sampleEngine = sampleEngines[0] || baseEngineName;
    const sampleEntry = yearsNode[sampleYear][sampleEngine] || baseEntry;
    ensureYearRange(yearsNode, startYear, endYear, sampleEngine, sampleEntry);
  });
});

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
