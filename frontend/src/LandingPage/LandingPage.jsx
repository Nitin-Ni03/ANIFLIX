import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ANIFLIX-logo.png";
import animePoster from "../assets/anime_poster.png";
import onePiece from "../assets/OnePiece.jpg";
import naruto from "../assets/Naruto.jpg";
import demonSlayer from "../assets/Demon-Slayer.jpg";
import bleach from "../assets/Bleach.jpg";
import jjk from "../assets/jjk.jpg";
import hunter from "../assets/hunterxhunter.webp";
import dana from "../assets/download.webp";

import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 220; // Card width (200px) + margin (20px)
      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

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
      answer:
        "ANIFLIX is a premier streaming service that offers a wide variety of award-winning anime, movies, series, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price.",
    },
    {
      question: "How much does ANIFLIX cost?",
      answer:
        "Watch ANIFLIX on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your ANIFLIX account to watch instantly on the web at aniflix.com from your personal computer or on any internet-connected device that offers the ANIFLIX app.",
    },
    {
      question: "How do I cancel?",
      answer:
        "ANIFLIX is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on ANIFLIX?",
      answer:
        "ANIFLIX has an extensive library of anime feature films, classic series, modern simulcasts, action-packed adventures, romance, sci-fi, and exclusive original productions. There's always something new to discover!",
    },
    {
      question: "Is ANIFLIX good for kids?",
      answer:
        "The ANIFLIX Kids experience is included in your membership to give parents control while kids enjoy family-friendly anime in their own space. Kids profiles feature PIN-protected parental controls that let you restrict the maturity rating of content kids can watch.",
    },
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
            <Link to="/login" className="signin-btn">
              Sign In
            </Link>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Unlimited anime, movies, TV shows and more</h1>
          <p className="hero-sub1">Starts at ₹149. Cancel at any time.</p>
          <p className="hero-sub2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

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

        {/* Curved Red Line Divider */}
        <div className="curved-divider">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(229, 9, 20, 0)" />
                <stop offset="30%" stopColor="rgba(229, 9, 20, 0.5)" />
                <stop offset="50%" stopColor="rgba(229, 9, 20, 1)" />
                <stop offset="70%" stopColor="rgba(229, 9, 20, 0.5)" />
                <stop offset="100%" stopColor="rgba(229, 9, 20, 0)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M0,80 Q720,0 1440,80" fill="none" stroke="url(#curve-grad)" strokeWidth="6" filter="url(#glow)" />
          </svg>
        </div>
      </header>

      {/* Feature Sections Divider */}
      <div className="vertical-line"></div>

      <div className="carousel-wrapper">
        <button className="carousel-btn carousel-btn-left" onClick={() => scrollCarousel("left")}>❮</button>
        <div className="carousel-container" ref={carouselRef}>
          <div className="carousel-track">
            <div className="card"><img src={onePiece} alt="anime poster" /></div>
            <div className="card"><img src={naruto} alt="anime poster" /></div>
            <div className="card"><img src={demonSlayer} alt="anime poster" /></div>
            <div className="card"><img src={bleach} alt="anime poster" /></div>
            <div className="card"><img src={jjk} alt="anime poster" /></div>
            <div className="card"><img src={hunter} alt="anime poster" /></div>
            <div className="card"><img src={dana} alt="anime poster" /></div>
            <div className="card"><img src={animePoster} alt="anime poster" /></div>
            <div className="card"><img src={animePoster} alt="anime poster" /></div>
            <div className="card"><img src={animePoster} alt="anime poster" /></div>
          </div>
        </div>
        <button className="carousel-btn carousel-btn-right" onClick={() => scrollCarousel("right")}>❯</button>
      </div>

      <div className="section-divider"></div>

      {/* feature section */}
      <section></section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className={`faq-icon ${openFaq === index ? "open" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`faq-answer ${openFaq === index ? "visible" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-email-cta">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
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
        <p className="footer-contact">
          Questions? Call{" "}
          <a href="tel:000-800-919-1743">000-800-919-1743 (Toll-Free)</a>
        </p>
        <ul className="footer-links">
          <li>
            <Link to="#">FAQ</Link>
          </li>
          <li>
            <Link to="#">Help Centre</Link>
          </li>
          <li>
            <Link to="#">Account</Link>
          </li>
          <li>
            <Link to="#">Media Centre</Link>
          </li>
          <li>
            <Link to="#">Investor Relations</Link>
          </li>
          <li>
            <Link to="#">Jobs</Link>
          </li>
          <li>
            <Link to="#">Ways to Watch</Link>
          </li>
          <li>
            <Link to="#">Terms of Use</Link>
          </li>
          <li>
            <Link to="#">Privacy</Link>
          </li>
          <li>
            <Link to="#">Cookie Preferences</Link>
          </li>
          <li>
            <Link to="#">Corporate Information</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
          <li>
            <Link to="#">Speed Test</Link>
          </li>
          <li>
            <Link to="#">Legal Notices</Link>
          </li>
          <li>
            <Link to="#">Only on ANIFLIX</Link>
          </li>
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
