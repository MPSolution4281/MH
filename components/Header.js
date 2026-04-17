"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <span className="brand-logo">
            {/* Udskift logo-filen her, når den endelige version er tilgængelig */}
            <img
              src="/images/logo-mh-autoteknik.jpg"
              alt="MH AutoTeknik og Optimering logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement.classList.add("logo-fallback");
              }}
            />
            <span className="brand-monogram">MH</span>
          </span>
          <span className="brand-text">
            <strong>MH AutoTeknik</strong>
            <small>og Optimering</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label="Åbn menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Hovednavigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                className={isActive ? "is-active" : ""}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
