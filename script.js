const sharedHeader = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/index.html">
        <span class="brand-logo">
          <img
            src="/images/logo-mh-autoteknik.jpg"
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
        <a href="/index.html">Forside</a>
        <a href="/chiptuning.html">Chiptuning</a>
        <a href="/services.html">Services</a>
        <a href="/find-din-bil.html">Find din bil</a>
        <a href="/blog/index.html">Blog</a>
        <a href="/om-os.html">Om os</a>
        <a href="/kontakt.html">Kontakt</a>
      </nav>
    </div>
  </header>
`;

const sharedFooter = `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="/index.html">
          <span class="brand-logo">
            <img
              src="/images/logo-mh-autoteknik.jpg"
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
          Premium motoroptimering, chiptuning og v&aelig;rkstedsservice med fokus p&aring; kvalitet,
          performance og en trov&aelig;rdig dansk kundeoplevelse.
        </p>
      </div>
      <div>
        <h3>Hurtige links</h3>
        <a href="/chiptuning.html">Chiptuning</a>
        <a href="/services.html">Services</a>
        <a href="/find-din-bil.html">Find din bil</a>
        <a href="/blog/index.html">Blog</a>
        <a href="/kontakt.html">Kontakt</a>
      </div>
      <div>
        <h3>Kontakt</h3>
        <p>Ring p&aring; <a href="tel:+4530130058">30 13 00 58</a> eller brug formularen for en konkret vurdering.</p>
        <p>Omr&aring;de: 3540 Lynge</p>
        <a href="/kontakt.html">G&aring; til kontakt</a>
      </div>
    </div>
  </footer>
`;

const heroSlides = [
  {
    src: "/images/ejer-bil.jpg",
    alt: "Hvid performancebil fotograferet udendørs"
  },
  {
    src: "/images/vaerktoejstavle.jpg",
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
      "Læs hvordan softwareoptimering kan give bedre respons, mere moment og et mere harmonisk effektforløb i hverdagen.",
    cardCopy:
      "Et rådgivende indblik i, hvordan en sund bil kan få bedre respons og mere overskud uden at miste fokus på driftssikkerhed.",
    href: "/blog/motoroptimering.html"
  },
  {
    category: "Chiptuning",
    title: "Chiptuning",
    excerpt:
      "Få overblik over ECU tuning, flere hestekræfter og forskellen på stage 1 og stage 2.",
    cardCopy:
      "Et stærkt startpunkt for bilejere, der vil forstå forskellen på stage 1, stage 2 og realistiske forventninger.",
    href: "/blog/hvad-er-chiptuning.html"
  },
  {
    category: "Diagnostik",
    title: "Diagnostik og fejlsøgning",
    excerpt:
      "Se hvorfor korrekt fejlsøgning er vigtigere end at gætte, når bilen har motorlampe eller tab af effekt.",
    cardCopy:
      "Et praktisk indlæg om hvorfor systematisk fejlsøgning næsten altid er bedre end at skifte dele på må og få.",
    href: "/blog/diagnostik-og-fejlsoegning.html"
  },
  {
    category: "Vedligehold",
    title: "Service og vedligehold",
    excerpt:
      "Lær hvorfor servicehistorik, olie, filtre og generel teknisk stand betyder mere for resultatet end mange bilejere tror.",
    cardCopy:
      "Et roligt overblik over, hvorfor korrekt vedligeholdelse er et vigtigere fundament end mange forventer.",
    href: "/blog/service-og-vedligehold.html"
  },
  {
    category: "Klargøring",
    title: "Klargøring før optimering",
    excerpt:
      "Se hvad der bør kontrolleres, før en bil får ECU tuning, og hvorfor en sund bil altid er det bedste udgangspunkt.",
    cardCopy:
      "Et nyttigt indlæg for bilejere, der vil undgå at optimere oven på skjulte fejl eller et usikkert setup.",
    href: "/blog/klargoering-foer-optimering.html"
  },
  {
    category: "Setup",
    title: "Rådgivning om setup",
    excerpt:
      "Få et bedre beslutningsgrundlag, hvis du overvejer stage 1, stage 2 eller hardwareændringer og vil undgå fejlinvesteringer.",
    cardCopy:
      "Et gennemtænkt blik på, hvordan man bygger bilen op i trin og vælger de rigtige næste skridt.",
    href: "/blog/raadgivning-om-setup.html"
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

function injectSharedLayout() {
  document.querySelectorAll('[data-include="header"]').forEach((node) => {
    node.outerHTML = sharedHeader;
  });

  document.querySelectorAll('[data-include="footer"]').forEach((node) => {
    node.outerHTML = sharedFooter;
  });
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  const page = document.body.dataset.page;
  nav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    const active =
      (page === "home" && href === "/index.html") ||
      (page === "blog" && href === "/blog/index.html") ||
      (page === "chiptuning" && href === "/chiptuning.html") ||
      (page === "services" && href === "/services.html") ||
      (page === "find-bil" && href === "/find-din-bil.html") ||
      (page === "om-os" && href === "/om-os.html") ||
      (page === "kontakt" && href === "/kontakt.html");

    if (active) link.classList.add("is-active");
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
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
  initHeroSlider();
  initBlogSpotlight();
  initCarFinders();
  initRevealAnimations();
});




