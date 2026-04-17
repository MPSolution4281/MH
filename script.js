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
        <a href="${resolvePageHref("services.html")}">Services</a>
        <a href="${resolvePageHref("find-din-bil.html")}">Find din bil</a>
        <a href="${resolvePageHref("chiptuning.html")}">Chiptuning</a>
        <a href="${resolvePageHref("blog/index.html")}">Blog</a>
        <a href="${resolvePageHref("om-os.html")}">Om os</a>
        <a href="${resolvePageHref("kontakt.html")}">Kontakt</a>
      </nav>
    </div>
  </header>
`;

const sharedFooter = `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
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
          driftssikkerhed og en trov&aelig;rdig dansk kundeoplevelse.
        </p>
      </div>
      <div>
        <h3>Hurtige links</h3>
        <a href="${resolvePageHref("services.html")}">Services</a>
        <a href="${resolvePageHref("find-din-bil.html")}">Find din bil</a>
        <a href="${resolvePageHref("chiptuning.html")}">Chiptuning</a>
        <a href="${resolvePageHref("blog/index.html")}">Blog</a>
        <a href="${resolvePageHref("kontakt.html")}">Kontakt</a>
      </div>
      <div>
        <h3>Kontakt</h3>
        <p>Ring p&aring; <a href="tel:+4530130058">30 13 00 58</a> eller brug formularen for en konkret vurdering.</p>
        <p>Omr&aring;de: 3540 Lynge</p>
        <a href="${resolvePageHref("kontakt.html")}">G&aring; til kontakt</a>
      </div>
      <div>
        <h3>Socials</h3>
        <p>Profilerne er p&aring; vej. Ikonerne er klar, s&aring; linksene kan aktiveres senere.</p>
        <div class="social-links" aria-label="Sociale medier">
          ${renderSocialLinks()}
        </div>
      </div>
    </div>
  </footer>
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
      "Læs hvordan softwareoptimering kan give bedre respons, mere moment og et mere harmonisk effektforløb i hverdagen.",
    cardCopy:
      "Et rådgivende indblik i, hvordan en sund bil kan få bedre respons og mere overskud uden at miste fokus på driftssikkerhed.",
    href: resolvePageHref("blog/motoroptimering.html")
  },
  {
    category: "Chiptuning",
    title: "Chiptuning",
    excerpt:
      "Få overblik over ECU tuning, flere hestekræfter og forskellen på stage 1 og stage 2.",
    cardCopy:
      "Et stærkt startpunkt for bilejere, der vil forstå forskellen på stage 1, stage 2 og realistiske forventninger.",
    href: resolvePageHref("blog/hvad-er-chiptuning.html")
  },
  {
    category: "Diagnostik",
    title: "Diagnostik og fejlsøgning",
    excerpt:
      "Se hvorfor korrekt fejlsøgning er vigtigere end at gætte, når bilen har motorlampe eller tab af effekt.",
    cardCopy:
      "Et praktisk indlæg om hvorfor systematisk fejlsøgning næsten altid er bedre end at skifte dele på må og få.",
    href: resolvePageHref("blog/diagnostik-og-fejlsoegning.html")
  },
  {
    category: "Vedligehold",
    title: "Service og vedligehold",
    excerpt:
      "Lær hvorfor servicehistorik, olie, filtre og generel teknisk stand betyder mere for resultatet end mange bilejere tror.",
    cardCopy:
      "Et roligt overblik over, hvorfor korrekt vedligeholdelse er et vigtigere fundament end mange forventer.",
    href: resolvePageHref("blog/service-og-vedligehold.html")
  },
  {
    category: "Klargøring",
    title: "Klargøring før optimering",
    excerpt:
      "Se hvad der bør kontrolleres, før en bil får ECU tuning, og hvorfor en sund bil altid er det bedste udgangspunkt.",
    cardCopy:
      "Et nyttigt indlæg for bilejere, der vil undgå at optimere oven på skjulte fejl eller et usikkert setup.",
    href: resolvePageHref("blog/klargoering-foer-optimering.html")
  },
  {
    category: "Setup",
    title: "Rådgivning om setup",
    excerpt:
      "Få et bedre beslutningsgrundlag, hvis du overvejer stage 1, stage 2 eller hardwareændringer og vil undgå fejlinvesteringer.",
    cardCopy:
      "Et gennemtænkt blik på, hvordan man bygger bilen op i trin og vælger de rigtige næste skridt.",
    href: resolvePageHref("blog/raadgivning-om-setup.html")
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

  const pageTargets = {
    home: "index.html",
    services: "services.html",
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
