"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  const [position, setPosition] = useState(60);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      isDragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onContainerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.closest("button")) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  }, []);

  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section id="before-after" className={styles.section}>
      <div className={styles.header} data-reveal>
        <h2 className={styles.heading}>Before &amp; After</h2>
        <p className={styles.sub}>Drag to compare.</p>
      </div>

      <div
        ref={containerRef}
        className={styles.compare}
        onClick={onContainerClick}
        aria-hidden="true"
        data-reveal
        data-reveal-delay="150"
      >
        <div className={styles.imageBase}>
          <Image
            src="/images/broken.jpeg"
            alt="Broken surfboard before repair"
            fill
            className={styles.photo}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <span className={styles.labelBefore}>BEFORE</span>
        </div>

        <div
          className={styles.imageAfter}
          style={{
            clipPath: `inset(0 0 0 ${position}%)`,
            transition: prefersReduced ? "none" : undefined,
          }}
        >
          <Image
            src="/images/fixed.jpeg"
            alt="Repaired surfboard after fix"
            fill
            className={styles.photo}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <span className={styles.labelAfter}>AFTER</span>
        </div>

        <button
          className={styles.handle}
          style={{ left: `${position}%` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
          aria-label="Drag to compare before and after repair"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
        >
          <div className={styles.line} />
          <div className={styles.disc}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 10L3 6M7 10L3 14M13 10L17 6M13 10L17 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      <p className={styles.srOnly}>
        Interactive before-and-after comparison of a surfboard repair. Use the
        slider to reveal the repaired board.
      </p>
    </section>
  );
}
