"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-slider-section" aria-label="Hero slideshow">
      <div className="hero-slider-shell">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`hero-slide${index === activeIndex ? " is-active" : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Motoroptimering og moderne værksted</p>
          <h1>Mere kraft. Bedre kørsel</h1>
          <p className="lead">
            MH AutoTeknik og Optimering leverer chiptuning, motoroptimering og værkstedsservice med
            fokus på performance, kvalitet og en professionel dansk kundeoplevelse.
          </p>
          <div className="button-row">
            <Link className="button" href="/find-din-bil">
              Find din bil
            </Link>
            <Link className="button secondary" href="/kontakt">
              Kontakt os
            </Link>
          </div>
        </div>

        <div className="hero-controls">
          <button
            className="slider-button"
            type="button"
            aria-label="Forrige slide"
            onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
          >
            &larr;
          </button>

          <div className="slider-dots" aria-label="Slide navigation">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                className={`slider-dot${index === activeIndex ? " is-active" : ""}`}
                type="button"
                aria-label={`Gå til slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            className="slider-button"
            type="button"
            aria-label="Næste slide"
            onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
