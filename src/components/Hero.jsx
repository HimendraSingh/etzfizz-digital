import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from './Stats';
import DigitalCoreVisual from './DigitalCoreVisual';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

/* ==========================================================================
   GSAP PLUGIN REGISTRATION
   Register the ScrollTrigger plugin with GSAP before initializing any timelines.
   ========================================================================== */
gsap.registerPlugin(ScrollTrigger);

export default function Hero({ navRef }) {
  // DOM element references for GSAP target selectors
  const heroSectionRef = useRef(null);
  const heroPinWrapperRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const bgGlowRef = useRef(null);

  useEffect(() => {
    /* ==========================================================================
       GSAP CONTEXT SCOPE
       gsap.context() scopes all selector queries to heroPinWrapperRef and guarantees
       proper garbage collection and removal of ScrollTrigger pins on unmount.
       ========================================================================== */
    const ctx = gsap.context(() => {
      // ------------------------------------------------------------------------
      // 1. INITIAL LOAD ENTRANCE TIMELINE
      // Orchestrates a subtle, staggered entrance choreography on first page load.
      // ------------------------------------------------------------------------
      const loadTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // (A) Smooth navbar fade-in from top
      if (navRef && navRef.current) {
        loadTl.fromTo(
          navRef.current,
          { opacity: 0, y: -25 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
        );
      }

      // (B) Tag badge scale and entrance
      if (badgeRef.current) {
        loadTl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 15, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          '-=0.5'
        );
      }

      // (C) Staggered 3D character reveal for the main heading
      const chars = headingRef.current?.querySelectorAll('.hero-char');
      if (chars && chars.length > 0) {
        loadTl.fromTo(
          chars,
          {
            opacity: 0,
            y: 40,
            rotateX: -30,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.75,
            stagger: 0.025,
            ease: 'back.out(1.2)',
          },
          '-=0.4'
        );
      }

      // (D) Supporting paragraph fade and upward slide
      if (paragraphRef.current) {
        loadTl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' },
          '-=0.45'
        );
      }

      // (E) Action buttons reveal
      if (ctaGroupRef.current) {
        loadTl.fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        );
      }

      // (F) Central 3D visual object scale and fade
      if (visualRef.current) {
        loadTl.fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.85, rotateY: -15 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1.0,
            ease: 'power2.out',
          },
          '-=0.7'
        );
      }

      // (G) Impact statistics sequential reveal (stagger: 0.14s)
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards && statCards.length > 0) {
        loadTl.fromTo(
          statCards,
          { opacity: 0, y: 25, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.14,
            ease: 'power2.out',
          },
          '-=0.5'
        );
      }

      // (H) Scroll indicator prompt fade-in
      if (scrollIndicatorRef.current) {
        loadTl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );
      }

      // ------------------------------------------------------------------------
      // 2. SCROLL-DRIVEN HERO ANIMATION (GSAP ScrollTrigger)
      // Uses scrub-based ScrollTrigger to tie GPU transforms directly to scroll depth.
      // Uses gsap.matchMedia() to ensure responsive motion across viewports.
      // ------------------------------------------------------------------------
      const mm = gsap.matchMedia();

      // --- Desktop Viewports (>= 1024px) ---
      mm.add('(min-width: 1024px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroPinWrapperRef.current,
            start: 'top top',         // Pins when top of wrapper hits top of viewport
            end: '+=160%',            // Scroll distance for the animation progress
            pin: true,                // Pinned hero viewport during scroll scrub
            scrub: 1.2,               // 1.2s smooth scrub inertia (not autoplay/timer)
            anticipatePin: 1,         // Pre-calculates pinning to eliminate visual jump
            invalidateOnRefresh: true,// Recalculates coordinates on window resize
          },
        });

        scrollTl
          // Move central visual across viewport with 3D rotation, scaling, and diagonal shift
          .to(
            visualRef.current,
            {
              x: 260,
              y: -35,
              scale: 1.16,
              rotation: 16,
              rotationY: 22,
              rotationX: 10,
              ease: 'power1.inOut',
            },
            0
          )
          // Differential parallax: Heading gently shifts left and dims
          .to(
            headingRef.current,
            {
              x: -80,
              opacity: 0.2,
              scale: 0.95,
              ease: 'power1.inOut',
            },
            0
          )
          // Supporting text and buttons parallax drift
          .to(
            [paragraphRef.current, ctaGroupRef.current, badgeRef.current],
            {
              x: -50,
              opacity: 0.25,
              ease: 'power1.inOut',
            },
            0
          )
          // Impact statistics translate downward to clear the stage for the next section
          .to(
            statsRef.current,
            {
              y: 50,
              opacity: 0.3,
              scale: 0.96,
              ease: 'power1.inOut',
            },
            0
          )
          // Scroll prompt fades away immediately
          .to(
            scrollIndicatorRef.current,
            {
              opacity: 0,
              y: 20,
              ease: 'power1.out',
            },
            0
          )
          // Ambient background glow expands and translates alongside the core
          .to(
            bgGlowRef.current,
            {
              x: 180,
              y: -40,
              scale: 1.25,
              opacity: 0.6,
              ease: 'power1.inOut',
            },
            0
          );
      });

      // --- Tablet Viewports (768px - 1023px) ---
      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroPinWrapperRef.current,
            start: 'top top',
            end: '+=130%',
            pin: true,
            scrub: 1.1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        scrollTl
          .to(
            visualRef.current,
            {
              x: 100,
              y: -25,
              scale: 1.08,
              rotation: 12,
              rotationY: 15,
              ease: 'power1.inOut',
            },
            0
          )
          .to(
            [headingRef.current, paragraphRef.current, statsRef.current],
            {
              opacity: 0.25,
              y: -20,
              ease: 'power1.inOut',
            },
            0
          )
          .to(
            scrollIndicatorRef.current,
            {
              opacity: 0,
              ease: 'power1.out',
            },
            0
          );
      });

      // --- Mobile Viewports (< 768px) ---
      mm.add('(max-width: 767px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroPinWrapperRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: 1.0,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Vertical-only transforms to prevent any horizontal overflow on mobile screens
        scrollTl
          .to(
            visualRef.current,
            {
              y: -20,
              scale: 0.95,
              rotation: 12,
              ease: 'power1.inOut',
            },
            0
          )
          .to(
            [headingRef.current, paragraphRef.current, statsRef.current],
            {
              opacity: 0.25,
              ease: 'power1.inOut',
            },
            0
          )
          .to(
            scrollIndicatorRef.current,
            {
              opacity: 0,
              ease: 'power1.out',
            },
            0
          );
      });
    }, heroPinWrapperRef);

    // Clean up all GSAP timelines and ScrollTriggers when component unmounts
    return () => ctx.revert();
  }, [navRef]);

  const headingText = 'W E L C O M E   I T Z F I Z Z';

  return (
    <section
      id="home"
      ref={heroSectionRef}
      className="hero-outer-section"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Pinned ScrollTrigger Wrapper Container */}
      <div
        ref={heroPinWrapperRef}
        className="hero-pin-wrapper"
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          paddingTop: '60px',
          paddingBottom: '40px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* Dynamic Background Ambient Glow */}
        <div
          ref={bgGlowRef}
          className="glow-orb glow-orb-primary"
          style={{
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -20%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Main Hero Grid Layout */}
          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              alignItems: 'center',
              gap: '40px',
              marginBottom: '36px',
            }}
          >
            {/* Left Column: Heading, Supporting Text, CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Tag Badge */}
              <div ref={badgeRef} style={{ alignSelf: 'flex-start' }}>
                <div className="badge">
                  <span className="badge-dot" />
                  <Sparkles size={13} style={{ color: '#06b6d4' }} />
                  <span>Next-Generation Digital Agency</span>
                </div>
              </div>

              {/* Hero Heading: Large typography with staggered characters */}
              <h1
                ref={headingRef}
                className="hero-heading"
                style={{
                  fontSize: 'clamp(2.1rem, 4.8vw, 4.4rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  margin: 0,
                  color: '#ffffff',
                  perspective: '800px',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                {headingText.split('').map((char, index) => (
                  <span
                    key={index}
                    className="hero-char"
                    style={{
                      display: 'inline-block',
                      whiteSpace: char === ' ' ? 'pre' : 'normal',
                      background:
                        index >= 16
                          ? 'linear-gradient(135deg, #a5b4fc 0%, #6366f1 50%, #06b6d4 100%)'
                          : 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 70%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h1>

              {/* Supporting Paragraph */}
              <p
                ref={paragraphRef}
                style={{
                  fontSize: 'clamp(0.98rem, 1.3vw, 1.22rem)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  maxWidth: '560px',
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                Building digital experiences that move businesses forward.
              </p>

              {/* Action Buttons */}
              <div
                ref={ctaGroupRef}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginTop: '6px',
                }}
              >
                <a
                  href="#contact"
                  className="btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.96rem', textDecoration: 'none' }}
                >
                  <span>Start a Project</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#services"
                  className="btn-secondary"
                  style={{ padding: '14px 26px', fontSize: '0.96rem', textDecoration: 'none' }}
                >
                  <span>Explore Work</span>
                </a>
              </div>
            </div>

            {/* Right Column: Central Abstract CSS/SVG Digital Object */}
            <div
              className="hero-visual-wrapper"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <DigitalCoreVisual ref={visualRef} />
            </div>
          </div>

          {/* 3 Impact Statistics */}
          <Stats ref={statsRef} />
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-dim)',
            fontSize: '0.74rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-chevron">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <style>{`
        .scroll-chevron {
          animation: bounce-down 2s infinite ease-in-out;
        }

        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; color: var(--accent-secondary); }
        }

        @media (max-width: 960px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            text-align: center;
          }
          .hero-layout > div {
            align-items: center !important;
          }
          .hero-heading {
            letter-spacing: 0.08em !important;
          }
          .hero-pin-wrapper {
            padding-top: 80px !important;
            padding-bottom: 30px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            letter-spacing: 0.04em !important;
            font-size: 1.85rem !important;
          }
        }

        @media (max-width: 380px) {
          .hero-heading {
            letter-spacing: 0.02em !important;
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
