"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    // Hide elements via JS — so without JS they remain fully visible
    els.forEach((el) => {
      const dir = el.dataset.reveal;
      el.style.opacity = "0";
      if (dir === "left")  el.style.transform = "translateX(-32px)";
      else if (dir === "right") el.style.transform = "translateX(32px)";
      else if (dir === "scale") el.style.transform = "scale(0.95)";
      else el.style.transform = "translateY(28px)";
      el.style.transition =
        "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay ?? "0";
          el.style.transitionDelay = `${delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.unobserve(el);
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
