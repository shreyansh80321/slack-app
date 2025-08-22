import "../styles/auth.css"
import { SignInButton } from '@clerk/clerk-react';
import React from 'react'

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-hero">
          <div className="brand-container">
            <img src="/logo.png" alt="Shrey" className="brand-logo" />
            <span className="brand-name">Shrey</span>
          </div>
          <h1 className="hero-title">Where Family Matters ✨</h1>
          <p className="hero-subtitle">
            Connect with your loved ones instantly through,secure,real-time
            messaging. Experience seamless collaboartion with powerful features
            designed for modern family
          </p>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <span>Real-time messaging</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <span>Video calls & meetings</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure & Private</span>
            </div>
          </div>

          <SignInButton mode="modal"> 
            <button className="cta-button">
              Get Started with Shrey
              <span className="button-arrow">→</span>
            </button>
          </SignInButton>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-image-container">
          <img src="/auth-i.png" alt="Family" className="auth-image"/>
          <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage