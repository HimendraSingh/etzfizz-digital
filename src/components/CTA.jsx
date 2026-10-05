import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.94, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '100px 0 140px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="container">
        <div
          ref={cardRef}
          className="glass-card"
          style={{
            padding: '80px 48px',
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.88) 0%, rgba(10, 14, 26, 0.96) 100%)',
            boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.75), 0 0 50px -10px rgba(99, 102, 241, 0.32)',
          }}
        >
          {/* Top Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-35%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '650px',
              height: '320px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.38) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '720px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '26px',
            }}
          >
            {/* Status Pill */}
            <div className="badge">
              <span className="badge-dot" />
              <Sparkles size={13} style={{ color: '#06b6d4' }} />
              <span>Available for New Projects</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#ffffff',
              }}
            >
              Let's Build Something{' '}
              <span className="text-gradient-accent">Amazing</span>
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: 'clamp(1.02rem, 1.4vw, 1.2rem)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Ready to elevate your digital presence with cutting-edge engineering and
              cinematic web experiences? Let's bring your grandest ideas to life.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '10px',
              }}
            >
              <a
                href="mailto:contact@itzfizz.agency"
                className="btn-primary"
                style={{
                  padding: '16px 36px',
                  fontSize: '1.02rem',
                  textDecoration: 'none',
                }}
              >
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="mailto:contact@itzfizz.agency"
                className="btn-secondary"
                style={{
                  padding: '16px 32px',
                  fontSize: '1.02rem',
                  textDecoration: 'none',
                }}
              >
                <Mail size={18} />
                <span>contact@itzfizz.agency</span>
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginTop: '20px',
                color: 'var(--text-dim)',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>⚡ Average response &lt; 4 hours</span>
              <span>🔒 NDA Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
