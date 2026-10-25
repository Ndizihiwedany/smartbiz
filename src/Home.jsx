import React, { useState } from "react";
import "./Home.css";

const features = [
  {
    icon: "📊",
    title: "Sales Tracking",
    description:
      "Record daily sales, understand your income, and see how your business performs.",
    detail: "Review transactions, compare daily totals, and understand your sales trends.",
  },
  {
    icon: "📦",
    title: "Smart Inventory",
    description:
      "Manage products, monitor stock levels, and identify items that need restocking.",
    detail: "Add products, update quantities, and get alerts when stock runs low.",
  },
  {
    icon: "💰",
    title: "Expense Management",
    description:
      "Keep business expenses organized and understand where your money goes.",
    detail: "Categorize expenses and compare them with sales to estimate your profit.",
  },
  {
    icon: "📈",
    title: "Business Reports",
    description:
      "Turn daily business records into clear reports that support better decisions.",
    detail: "Review revenue, costs, expenses, and estimated profit over time.",
  },
  {
    icon: "👥",
    title: "Customer Records",
    description:
      "Organize customer information and build stronger relationships with buyers.",
    detail: "Keep useful customer records and review purchase history.",
  },
  {
    icon: "🤝",
    title: "Supplier Management",
    description:
      "Keep supplier contacts and purchasing records in one convenient place.",
    detail: "Organize supplier details and track stock purchases.",
  },
];

const faqs = [
  {
    question: "What is SmartBiz Rwanda?",
    answer:
      "SmartBiz Rwanda is a business management platform designed to help small businesses organize sales, inventory, expenses, and reports.",
  },
  {
    question: "Who can use SmartBiz?",
    answer:
      "Shop owners, salons, restaurants, small retailers, and other entrepreneurs can use the platform.",
  },
  {
    question: "Can I use it on my phone?",
    answer:
      "Yes. The homepage is designed to adapt to mobile phones, tablets, and computers.",
  },
  {
    question: "Can I accept MTN MoMo or Airtel Money?",
    answer:
      "Payment integration can be added in a later development phase using authorized payment APIs. This frontend demo does not process payments.",
  },
  {
    question: "Are the dashboard figures real?",
    answer:
      "No. The figures shown on this homepage are sample data for demonstration purposes.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("home"); // home | features | how-it-works | about | faq | get-started
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Show only one page at a time
  const go = (e, target) => {
    if (e && e.preventDefault) e.preventDefault();
    setPage(target);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navClass = (target) => (page === target ? "sb-active" : "");

  return (
    <main className="sb-home">
      {/* NAVIGATION */}
      <header className="sb-header">
        <a
          href="#home"
          className="sb-logo"
          onClick={(e) => go(e, "home")}
          aria-label="SmartBiz Rwanda home"
        >
          <span className="sb-logo-icon">S</span>
          <span>
            SmartBiz<span className="sb-green"> Rwanda</span>
          </span>
        </a>

        <button
          className="sb-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`sb-nav ${menuOpen ? "sb-nav-open" : ""}`}>
          <a href="#home" className={navClass("home")} onClick={(e) => go(e, "home")}>Home</a>
          <a href="#features" className={navClass("features")} onClick={(e) => go(e, "features")}>Features</a>
          <a href="#how-it-works" className={navClass("how-it-works")} onClick={(e) => go(e, "how-it-works")}>How It Works</a>
          <a href="#about" className={navClass("about")} onClick={(e) => go(e, "about")}>About</a>
          <a href="#faq" className={navClass("faq")} onClick={(e) => go(e, "faq")}>FAQs</a>
          
          <button className="sb-btn sb-btn-small" onClick={(e) => go(e, "get-started")}>
            Get Started <span>↗</span>
          </button>
        </nav>
      </header>

      {/* ================= HOME PAGE ================= */}
      {page === "home" && (
        <>
          {/* HERO */}
          <section className="sb-hero" id="home">
            <div className="sb-hero-content">
              <div className="sb-eyebrow">
                <span className="sb-live-dot" />
                BUILT FOR AMBITIOUS BUSINESSES
              </div>

              <h1>
                Your business.
                <br />
                Your vision.
                <br />
                <span>More growth.</span>
              </h1>

              <p className="sb-hero-description">
                Manage sales, track stock, control expenses, and understand
                your business — all in one simple platform made for Rwanda's
                entrepreneurs.
              </p>

              <div className="sb-hero-actions">
                <button className="sb-btn" onClick={(e) => go(e, "get-started")}>
                  Start Growing Today <span>→</span>
                </button>
                <button
                  className="sb-btn sb-btn-outline"
                  onClick={() =>
                    document
                      .getElementById("dashboard")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Dashboard <span>↗</span>
                </button>
              </div>

              <div className="sb-trust">
                <div className="sb-trust-icon">✓</div>
                <p>
                  Simple to use <span>·</span> Mobile friendly
                  <span>·</span> Designed for local businesses
                </p>
              </div>
            </div>

            <div className="sb-hero-visual">
              <img
                className="sb-hero-image"
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=85"
                alt="Small business owner using a digital payment terminal"
              />

              <div className="sb-image-label">
                <span className="sb-image-label-icon">✦</span>
                <span>
                  <strong>One place for your business</strong>
                  <small>Sales · Stock · Expenses</small>
                </span>
              </div>

              <div className="sb-float-card sb-float-top">
                <span className="sb-float-icon">📊</span>
                <span>
                  <small>Business overview</small>
                  <strong>Stay in control</strong>
                </span>
              </div>

              <div className="sb-float-card sb-float-bottom">
                <span className="sb-stock-icon">✓</span>
                <span>
                  <strong>Stock organized</strong>
                  <small>Keep track of your products</small>
                </span>
              </div>

              <div className="sb-hero-orb" />
            </div>
          </section>

          {/* VALUE STRIP */}
          <section className="sb-value-strip">
            <div>
              <span className="sb-value-icon">📱</span>
              <span><strong>Easy to use</strong><small>Simple daily tools</small></span>
            </div>
            <div>
              <span className="sb-value-icon">🇷🇼</span>
              <span><strong>Made for Rwanda</strong><small>Local business needs</small></span>
            </div>
            <div>
              <span className="sb-value-icon">📉</span>
              <span><strong>Clear records</strong><small>Understand your numbers</small></span>
            </div>
            <div>
              <span className="sb-value-icon">💻</span>
              <span><strong>Works across screens</strong><small>Phone, tablet, and PC</small></span>
            </div>
          </section>

          {/* DASHBOARD PREVIEW */}
          <section className="sb-dashboard-section" id="dashboard">
            <div className="sb-section-heading">
              <span className="sb-section-tag">YOUR BUSINESS AT A GLANCE</span>
              <h2>
                Less guessing.
                <br />
                <span>More understanding.</span>
              </h2>
              <p>
                Preview how your business information could look in one
                convenient dashboard.
              </p>
            </div>

            <div className="sb-dashboard">
              <div className="sb-dash-top">
                <div>
                  <span className="sb-dash-mark">S</span>
                  <strong>Business overview</strong>
                </div>
                <span className="sb-demo-badge">DEMO DATA</span>
              </div>

              <p className="sb-dash-welcome">Good day, Business Owner 👋</p>
              <p className="sb-dash-subtitle">
                A sample snapshot of your business performance
              </p>

              <div className="sb-stat-grid">
                <div className="sb-stat-card">
                  <span>Today's sales</span>
                  <strong>RWF 185,000</strong>
                  <small>Sample revenue</small>
                </div>
                <div className="sb-stat-card">
                  <span>Expenses</span>
                  <strong>RWF 42,000</strong>
                  <small>Sample expenses</small>
                </div>
                <div className="sb-stat-card">
                  <span>Estimated balance*</span>
                  <strong>RWF 143,000</strong>
                  <small>Sales minus expenses</small>
                </div>
              </div>

              <div className="sb-dash-bottom">
                <span>📦 Inventory records</span>
                <span>📈 Sales reports</span>
                <span>🧾 Expense records</span>
              </div>
              <p className="sb-demo-note">
                *Illustrative figures only. This is not a live business account.
              </p>
            </div>
          </section>
        </>
      )}

      {/* ================= FEATURES PAGE ================= */}
      {page === "features" && (
        <section className="sb-features-section" id="features">
          <div className="sb-section-heading">
            <span className="sb-section-tag">EVERYTHING IN ONE PLACE</span>
            <h2>
              Tools that make
              <br />
              <span>business simpler.</span>
            </h2>
            <p>
              Spend less time organizing records and more time serving
              your customers.
            </p>
          </div>

          <div className="sb-feature-layout">
            <div className="sb-feature-list">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  className={`sb-feature-button ${
                    activeFeature === index ? "sb-feature-active" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                  aria-pressed={activeFeature === index}
                >
                  <span className="sb-feature-icon">{feature.icon}</span>
                  <span className="sb-feature-copy">
                    <strong>{feature.title}</strong>
                    <small>{feature.description}</small>
                  </span>
                  <span className="sb-feature-arrow">↗</span>
                </button>
              ))}
            </div>

            <div className="sb-feature-detail" aria-live="polite">
              <div className="sb-feature-detail-icon">
                {features[activeFeature].icon}
              </div>
              <span className="sb-section-tag">FEATURE HIGHLIGHT</span>
              <h3>{features[activeFeature].title}</h3>
              <p>{features[activeFeature].detail}</p>
              <button className="sb-text-link" onClick={(e) => go(e, "get-started")}>
                Get started <span>→</span>
              </button>
              <div className="sb-detail-decoration">S</div>
            </div>
          </div>
        </section>
      )}

      {/* ================= HOW IT WORKS PAGE ================= */}
      {page === "how-it-works" && (
        <section className="sb-steps-section" id="how-it-works">
          <div className="sb-section-heading">
            <span className="sb-section-tag">GET STARTED</span>
            <h2>
              Three steps to
              <br />
              <span>a clearer business.</span>
            </h2>
          </div>

          <div className="sb-steps-grid">
            <article className="sb-step-card">
              <span className="sb-step-number">01</span>
              <span className="sb-step-icon">👤</span>
              <h3>Create your account</h3>
              <p>Set up your business profile and organize your workspace.</p>
            </article>
            <article className="sb-step-card">
              <span className="sb-step-number">02</span>
              <span className="sb-step-icon">🧾</span>
              <h3>Record daily activity</h3>
              <p>Add sales, products, stock changes, and business expenses.</p>
            </article>
            <article className="sb-step-card">
              <span className="sb-step-number">03</span>
              <span className="sb-step-icon">🚀</span>
              <h3>Understand your progress</h3>
              <p>Use your records and reports to make better decisions.</p>
            </article>
          </div>
        </section>
      )}

      {/* ================= ABOUT PAGE ================= */}
      {page === "about" && (
        <section className="sb-about-section" id="about">
          <div className="sb-about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
              alt="Entrepreneurs working together to manage their business"
              className="sb-about-image"
              loading="lazy"
            />
            <div className="sb-about-sticker">
              <span>✦</span>
              <strong>Built around your business needs</strong>
            </div>
          </div>

          <div className="sb-about-content">
            <span className="sb-section-tag">WHY SMARTBIZ?</span>
            <h2>
              Big ambitions
              <br />
              deserve <span>better tools.</span>
            </h2>
            <p>
              Every business deserves a clear picture of its sales,
              stock, expenses, and progress. SmartBiz Rwanda brings
              these everyday tasks together in one approachable interface.
            </p>

            <div className="sb-benefit">
              <span>✓</span>
              <div>
                <strong>Know your numbers</strong>
                <p>Keep records that help you make informed decisions.</p>
              </div>
            </div>
            <div className="sb-benefit">
              <span>✓</span>
              <div>
                <strong>Keep everything organized</strong>
                <p>Find your products, transactions, and expenses easily.</p>
              </div>
            </div>
            <div className="sb-benefit">
              <span>✓</span>
              <div>
                <strong>Access it on the go</strong>
                <p>Use a responsive interface on phones and computers.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQ PAGE ================= */}
      {page === "faq" && (
        <section className="sb-faq-section" id="faq">
          <div className="sb-section-heading">
            <span className="sb-section-tag">QUESTIONS & ANSWERS</span>
            <h2>
              Good questions.
              <br />
              <span>Clear answers.</span>
            </h2>
          </div>

          <div className="sb-faq-list">
            {faqs.map((faq, index) => (
              <div className="sb-faq-item" key={faq.question}>
                <button
                  className="sb-faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  {faq.question}
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <p className="sb-faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= GET STARTED PAGE ================= */}
      {page === "get-started" && (
        <section className="sb-cta-section" id="get-started">
          <div className="sb-cta-orb" />
          <span className="sb-cta-tag">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>
            Ready to run your
            <br />
            business <span>smarter?</span>
          </h2>
          <p>
            Bring your daily business tasks together and take the next
            step toward better organized business management.
          </p>
          <button
            className="sb-btn sb-btn-white"
            onClick={() =>
              alert(
                "Welcome to SmartBiz Rwanda! Connect your registration page to enable account creation."
              )
            }
          >
            Get Started <span>→</span>
          </button>
          <small>Frontend preview · Account registration not connected yet</small>
        </section>
      )}

      {/* FOOTER (always visible) */}
      <footer className="sb-footer">
        <div className="sb-footer-main">
          <a href="#home" className="sb-logo" onClick={(e) => go(e, "home")}>
            <span className="sb-logo-icon">S</span>
            <span>SmartBiz<span className="sb-green"> Rwanda</span></span>
          </a>
          <p>
            Helping businesses organize everyday work, understand
            their records, and move forward with confidence.
          </p>
        </div>

        <div className="sb-footer-links">
          <strong>Explore</strong>
          <a href="#features" onClick={(e) => go(e, "features")}>Features</a>
          <a href="#how-it-works" onClick={(e) => go(e, "how-it-works")}>How it works</a>
          <a href="#about" onClick={(e) => go(e, "about")}>About</a>
          <a href="#faq" onClick={(e) => go(e, "faq")}>FAQs</a>
        </div>

        <div className="sb-footer-links">
          <strong>Get started</strong>
          <a href="#get-started" onClick={(e) => go(e, "get-started")}>Create an account</a>
          <a href="#home" onClick={(e) => go(e, "home")}>Dashboard preview</a>
        </div>

        <div className="sb-footer-bottom">
          <span>© {new Date().getFullYear()} SmartBiz Rwanda</span>
          <span>Designed for business growth in Rwanda 🇷🇼</span>
        </div>
      </footer>
    </main>
  );
}