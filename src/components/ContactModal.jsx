import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: '$5k - $15k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after brief celebration
    }, 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: 'Web Development',
      budget: '$5k - $15k',
      message: '',
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '36px 32px',
          borderRadius: '24px',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 14, 26, 0.98) 100%)',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.9), 0 0 50px rgba(99, 102, 241, 0.3)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '6px',
            color: '#94a3b8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div
            style={{
              padding: '40px 10px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.35)',
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
              Inquiry Dispatched!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', maxWidth: '400px' }}>
              Thank you, <strong>{formData.name}</strong>. Our engineering lead will review your
              inquiry and respond within 4 hours.
            </p>

            <button
              onClick={handleReset}
              className="btn-primary"
              style={{ marginTop: '14px', padding: '10px 24px' }}
            >
              <span>Done</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div className="badge" style={{ alignSelf: 'flex-start' }}>
                <Sparkles size={12} color="#06b6d4" />
                <span>Initiate Project</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Let's Build Together
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Tell us about your objectives, timeline, and vision.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '11px 14px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '11px 14px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    background: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '11px 14px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="E-Commerce">E-Commerce Solutions</option>
                  <option value="Digital Experiences">Digital Experiences / 3D</option>
                  <option value="Full Retainer">Full Studio Retainer</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    background: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '11px 14px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  <option value="$3k - $5k">$3k - $5k</option>
                  <option value="$5k - $15k">$5k - $15k</option>
                  <option value="$15k - $50k">$15k - $50k</option>
                  <option value="$50k+">$50k+</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>Project Details</label>
              <textarea
                rows={3}
                placeholder="Briefly describe your vision, goals, and target launch date..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '11px 14px',
                  color: '#ffffff',
                  fontSize: '0.92rem',
                  outline: 'none',
                  resize: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                marginTop: '6px',
              }}
            >
              <span>Submit Project Inquiry</span>
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
