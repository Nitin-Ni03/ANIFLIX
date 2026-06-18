import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ANIFLIX-logo.png";
import animePoster from "../assets/anime_poster.png";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/login", { state: { email } });
    } else {
      navigate("/login");
    }
  };

  const faqData = [
    {
      question: "What is ANIFLIX?",
      answer: "ANIFLIX is a premier streaming service that offers a wide variety of award-winning anime, movies, series, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price."
    },
    {
      question: "How much does ANIFLIX cost?",
      answer: "Watch ANIFLIX on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your ANIFLIX account to watch instantly on the web at aniflix.com from your personal computer or on any internet-connected device that offers the ANIFLIX app."
    },
    {
      question: "How do I cancel?",
      answer: "ANIFLIX is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on ANIFLIX?",
      answer: "ANIFLIX has an extensive library of anime feature films, classic series, modern simulcasts, action-packed adventures, romance, sci-fi, and exclusive original productions. There's always something new to discover!"
    },
    {
      question: "Is ANIFLIX good for kids?",
      answer: "The ANIFLIX Kids experience is included in your membership to give parents control while kids enjoy family-friendly anime in their own space. Kids profiles feature PIN-protected parental controls that let you restrict the maturity rating of content kids can watch."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-page">
      {/* Hero Header & Banner */}
      <header className="hero-banner">
        <div className="banner-bg">
          <div className="banner-overlay"></div>
        </div>
        
        <nav className="navbar">
          <img src={logo} alt="ANIFLIX Logo" className="brand-logo" />
          <div className="nav-actions">
            <select name="language" className="lang-select">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
            <Link to="/login" className="signin-btn">Sign In</Link>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Unlimited anime, movies, TV shows and more</h1>
          <p className="hero-sub1">Starts at ₹149. Cancel at any time.</p>
          <p className="hero-sub2">Ready to watch? Enter your email to create or restart your membership.</p>
          
          <form className="email-form" onSubmit={handleGetStarted}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="email-input" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="get-started-btn">
              Get Started &rsaquo;
            </button>
          </form>
        </div>
      </header>

      {/* Feature Sections Divider */}
      <div className="section-divider"></div>

      {/* Feature 1: Enjoy on TV */}
      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-text">
            <h2>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="feature-media">
            <div className="tv-frame">
              <img src={animePoster} alt="Cyberpunk Ninja" className="tv-screen-content" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Feature 2: Offline Downloads */}
      <section className="feature-section reverse">
        <div className="feature-container">
          <div className="feature-text">
            <h2>Download your shows to watch offline</h2>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
          <div className="feature-media">
            <div className="download-mockup">
              <img src={animePoster} alt="Offline Poster" className="mockup-img" />
              <div className="download-status-card">
                <div className="status-poster">
                  <img src={animePoster} alt="Mini Poster" />
                </div>
                <div className="status-text">
                  <h4>Cyberpunk Ninja</h4>
                  <p className="downloading-label">Downloading...</p>
                </div>
                <div className="download-anim"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Feature 3: Watch Everywhere */}
      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-text">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="feature-media">
            <div className="everywhere-mockup">
              <img src={animePoster} alt="Responsive screen mockup" className="everywhere-bg" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Feature 4: Create profiles for kids */}
      <section className="feature-section reverse">
        <div className="feature-container">
          <div className="feature-text">
            <h2>Create profiles for kids</h2>
            <p>Send kids on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
          <div className="feature-media">
            <div className="kids-mockup">
              <div className="kids-gradient-glow"></div>
              <span className="kids-emoji">🐱🍼✨</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className={`faq-icon ${openFaq === index ? "open" : ""}`}>+</span>
              </button>
              <div className={`faq-answer ${openFaq === index ? "visible" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-email-cta">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="email-form" onSubmit={handleGetStarted}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="email-input" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="get-started-btn">
              Get Started &rsaquo;
            </button>
          </form>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Footer */}
      <footer className="landing-footer">
        <p className="footer-contact">Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743 (Toll-Free)</a></p>
        <ul className="footer-links">
          <li><Link to="#">FAQ</Link></li>
          <li><Link to="#">Help Centre</Link></li>
          <li><Link to="#">Account</Link></li>
          <li><Link to="#">Media Centre</Link></li>
          <li><Link to="#">Investor Relations</Link></li>
          <li><Link to="#">Jobs</Link></li>
          <li><Link to="#">Ways to Watch</Link></li>
          <li><Link to="#">Terms of Use</Link></li>
          <li><Link to="#">Privacy</Link></li>
          <li><Link to="#">Cookie Preferences</Link></li>
          <li><Link to="#">Corporate Information</Link></li>
          <li><Link to="#">Contact Us</Link></li>
          <li><Link to="#">Speed Test</Link></li>
          <li><Link to="#">Legal Notices</Link></li>
          <li><Link to="#">Only on ANIFLIX</Link></li>
        </ul>
        <div className="footer-lang">
          <select name="language" className="lang-select">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
        <p className="footer-country">ANIFLIX India</p>
      </footer>
    </div>
  );
}

export default LandingPage;
