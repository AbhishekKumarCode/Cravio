export const homeMarkup = `
  <!-- Fixed Scroll Progress Bar -->
  <div class="viewport-scroll-progress">
    <div id="scroll-progress-bar" class="viewport-scroll-progress-fill"></div>
  </div>

  <!-- Global Floating Shapes Container -->
  <div class="global-floating-shapes">
    <div class="floating-shape circle-1"></div>
    <div class="floating-shape square-1"></div>
    <div class="floating-shape circle-2"></div>
    <div class="floating-shape square-2"></div>
    <div class="floating-shape dot-1"></div>
    <div class="floating-shape dot-2"></div>
  </div>

  <!-- Outer Rounded Canvas Frame -->
  <div class="canvas-frame">

    <!-- Background Grid lines Overlay -->
    <div class="grid-overlay">
      <div class="grid-line"></div>
      <div class="grid-line"></div>
      <div class="grid-line"></div>
      <div class="grid-line"></div>
    </div>

    <!-- LEFT SIDEBAR -->
    <div class="left-sidebar">
      <!-- Theme Option Pill fader -->
      <div class="vertical-theme-toggle" id="theme-toggle">
        <div class="theme-option" data-theme-val="light">Light</div>
        <div class="theme-option" data-theme-val="dark">Dark</div>
        <div class="toggle-indicator"></div>
      </div>

      <!-- Scroll tracker stitch line -->
      <div class="scroll-indicator">
        <span class="scroll-text">Scroll</span>
        <span class="scroll-line"></span>
      </div>
    </div>

    <!-- RIGHT SIDEBAR -->
    <div class="right-sidebar">
      <div class="sidebar-follow">Follow Us — <a href="https://www.upwork.com/freelancers/~0118882544be59d04b?mp_source=share" target="_blank" rel="noopener noreferrer">Up.</a> / <a href="https://www.linkedin.com/in/abhishek8668" target="_blank" rel="noopener noreferrer">Lk.</a> / <a href="https://github.com/AbhishekKumarCode" target="_blank" rel="noopener noreferrer">Gh.</a></div>
    </div>

    <!-- STICKY HEADER -->
    <header class="header">
      <div class="container nav-container">
        <a href="#" class="nav-logo" aria-label="Craivo Homepage">CRAIVO</a>


        <div class="nav-links-wrapper">
          <ul class="nav-menu">
            <li class="nav-item"><a href="#work" class="nav-link active" aria-label="View Selected Work">Selected Work</a></li>
            <li class="nav-item"><a href="#services" class="nav-link" aria-label="View Services">Services</a></li>
            <li class="nav-item"><a href="#pricing" class="nav-link" aria-label="View Pricing Plans">Pricing</a></li>
            <li class="nav-item"><a href="#about" class="nav-link" aria-label="Read About Us">About Us</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link" aria-label="Start Your Project"
                style="color: var(--accent); font-weight: 700;">Start Your Project</a></li>
          </ul>

          <!-- Hamburger menu toggle -->
          <button id="mobile-menu-toggle" class="mobile-menu-btn" aria-label="Open navigation menu">
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- MOBILE MENU OVERLAY -->
    <div id="mobile-menu-overlay" class="mobile-menu-overlay">
      <nav class="mobile-nav">
        <ul class="mobile-menu-list">
          <li><a href="#work" class="mobile-menu-item">Selected Work</a></li>
          <li><a href="#services" class="mobile-menu-item">Services</a></li>
          <li><a href="#pricing" class="mobile-menu-item">Pricing</a></li>
          <li><a href="#about" class="mobile-menu-item">About Us</a></li>
          <li><a href="#contact" class="mobile-menu-item" style="color: var(--accent);">Start Your Project</a></li>
        </ul>
        <a href="#contact" class="btn-primary mobile-menu-cta" style="margin-top: 20px;">Book a Free Consultation</a>
        <div class="mobile-menu-socials">
          <a href="https://www.upwork.com/freelancers/~0118882544be59d04b?mp_source=share" class="mobile-social-link" target="_blank" rel="noopener noreferrer">Upwork</a>
          <a href="https://www.linkedin.com/in/abhishek8668" class="mobile-social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AbhishekKumarCode" class="mobile-social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </nav>
    </div>

    <!-- HERO SECTION -->
    <section class="hero">
      <!-- Floating Radial Glowing Blob -->
      <div class="glowing-blob-container">
        <div class="glowing-blob"></div>
      </div>

      <div class="container hero-container-box">
        <!-- Giant Centered Title (Inspired brand-specific copy) -->
        <div class="hero-center-titles">
          <h1 class="hero-headline-large">Websites That Build</h1>
          <h2 class="hero-headline-gradient">Customers, Not Compliments.</h2>
        </div>

        <!-- Bottom Details & Avatar Button -->
        <div class="hero-bottom-row">
          <div class="hero-bottom-left">
            <p class="hero-desc-copy">
              We design and engineer bespoke, high-converting digital platforms for modern brands. Combining luxury
              visual strategy with lightning-fast code, we turn your online presence into a client generation engine.
            </p>
            <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
              <a href="#contact" class="hero-know-more">Book a Discovery Call <span>→</span></a>
              <a href="#work" class="hero-secondary-btn">Explore Work</a>
            </div>
            <div class="urgency-badge">
              <span
                style="width: 6px; height: 6px; background-color: var(--accent); border-radius: 50%; display: inline-block; animation: livePulse 1.6s infinite alternate;"></span>
              Now accepting only 2 new projects this month (1 spot remaining)
            </div>
            <div class="hero-trust-row" role="list" aria-label="Studio credentials">
              <span class="hero-trust-badge" role="listitem">
                <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
                6+ Projects Shipped
              </span>
              <span class="hero-trust-badge" role="listitem">
                <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
                Avg. 7-Day Turnaround
              </span>
              <span class="hero-trust-badge" role="listitem">
                <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
                100% Client-Owned Code
              </span>
            </div>
          </div>

          <div class="hero-bottom-right">
            <button class="studio-badge-btn" id="play-intro-btn">
              <div class="monogram-badge">
                <span>CS</span>
              </div>
              <span>Studio Profile</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO SECTION -->
    <section id="services-intro" class="section-spacing">
      <div class="container">
        <div class="what-we-do-intro reveal-element">
          <span class="section-eyebrow">WHAT WE DO</span>
          <h2 class="section-title">We Turn Ideas Into Websites That Sell.</h2>
          <p class="what-we-do-subtext">
            As a premier web design agency in Delhi, we provide end-to-end services covering custom website development,
            e-commerce development, and AI-powered web applications. Whether you're a local business going digital for
            the first time or an established brand ready to elevate your online presence, we handle every layer — from
            concept and design to launch and SEO — so you can focus on running your business.
          </p>
        </div>

        <!-- Infographic 1: What We Build Grid -->
        <div class="what-we-build-grid reveal-element">
          <!-- Item 1: Business Websites -->
          <div class="build-tile">
            <div class="build-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                stroke-linejoin="round" role="img" aria-label="Business website design and development services">
                <title>Business Website Design</title>
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="6" cy="7" r="1" />
                <circle cx="9" cy="7" r="1" />
                <circle cx="12" cy="7" r="1" />
              </svg>
            </div>
            <h3 class="build-label">Business Websites</h3>
            <p class="build-desc">Professional sites that build instant trust</p>
          </div>

          <!-- Item 2: E-Commerce Stores -->
          <div class="build-tile">
            <div class="build-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                stroke-linejoin="round" role="img"
                aria-label="E-commerce website development and shopping store design">
                <title>E-Commerce Stores Development</title>
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h3 class="build-label">E-Commerce Stores</h3>
            <p class="build-desc">Online shops built to convert browsers into buyers</p>
          </div>

          <!-- Item 3: AI-Powered Tools -->
          <div class="build-tile">
            <div class="build-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                stroke-linejoin="round" role="img"
                aria-label="Artificial intelligence integrations and smart chatbot tools">
                <title>AI-Powered Tools & Chatbots</title>
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            </div>
            <h3 class="build-label">AI-Powered Tools</h3>
            <p class="build-desc">Smart features like chatbots and automation</p>
          </div>

          <!-- Item 4: Local Business Sites -->
          <div class="build-tile">
            <div class="build-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                stroke-linejoin="round" role="img"
                aria-label="Local business website design for cafes, gyms, and stores">
                <title>Local Business Web Design</title>
                <path
                  d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                <path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M10 12v9" />
                <path d="M14 12v9" />
              </svg>
            </div>
            <h3 class="build-label">Local Business Sites</h3>
            <p class="build-desc">Cafes, gyms, stores — built for real-world businesses</p>
          </div>

          <!-- Item 5: SEO & Performance -->
          <div class="build-tile">
            <div class="build-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                stroke-linejoin="round" role="img"
                aria-label="SEO optimization, search rankings, and website performance page speed">
                <title>SEO & Performance Optimization</title>
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3 class="build-label">SEO & Performance</h3>
            <p class="build-desc">Sites that load fast and rank on Google</p>
          </div>

          <!-- Item 6: Brand Identity -->
          <div class="build-tile">
            <div class="build-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                stroke-linejoin="round" role="img" aria-label="Luxury brand identity systems and high-end logo design">
                <title>Brand Identity Design</title>
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z" />
                <path d="M12 2v20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 class="build-label">Brand Identity</h3>
            <p class="build-desc">Logos and visual systems that look expensive</p>
          </div>
        </div>

        <!-- Infographic 2: How It Works Process Flow -->
        <div class="process-flow-container reveal-element" id="development-process">
          <div class="process-connecting-line">
            <div class="process-line-progress" id="process-line-progress"></div>
          </div>
          <div class="process-steps">
            <!-- Step 1 -->
            <div class="process-step">
              <div class="process-circle">01</div>
              <h3 class="process-step-title">Discovery</h3>
              <p class="process-step-desc">A 30-min strategy call to align on your business growth goals.</p>
            </div>
            <!-- Step 2 -->
            <div class="process-step">
              <div class="process-circle">02</div>
              <h3 class="process-step-title">Strategy</h3>
              <p class="process-step-desc">Mapping out content structures and conversion funnels.</p>
            </div>
            <!-- Step 3 -->
            <div class="process-step">
              <div class="process-circle">03</div>
              <h3 class="process-step-title">UI/UX Design</h3>
              <p class="process-step-desc">Figma layouts tailored for premium brand authority.</p>
            </div>
            <!-- Step 4 -->
            <div class="process-step">
              <div class="process-circle">04</div>
              <h3 class="process-step-title">Development</h3>
              <p class="process-step-desc">Building clean, high-performance vanilla responsive code.</p>
            </div>
            <!-- Step 5 -->
            <div class="process-step">
              <div class="process-circle">05</div>
              <h3 class="process-step-title">Testing</h3>
              <p class="process-step-desc">Thorough audits for speed, SEO, and viewport bugs.</p>
            </div>
            <!-- Step 6 -->
            <div class="process-step">
              <div class="process-circle">06</div>
              <h3 class="process-step-title">Launch</h3>
              <p class="process-step-desc">Deploying to cloud hosting with zero active downtime.</p>
            </div>
            <!-- Step 7 -->
            <div class="process-step">
              <div class="process-circle">07</div>
              <h3 class="process-step-title">Support</h3>
              <p class="process-step-desc">Ongoing performance monitoring to scale conversions.</p>
            </div>
          </div>
        </div>

        <!-- Infographic 3: Small Trust Stat Strip -->
        <div class="trust-stat-strip reveal-element">
          <!-- Stat 1 -->
          <div class="trust-stat-item">
            <div class="trust-stat-number-row">
              <span class="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <span class="trust-stat-number">7-Day</span>
            </div>
            <span class="trust-stat-label">Average Delivery</span>
          </div>

          <!-- Stat 2 -->
          <div class="trust-stat-item">
            <div class="trust-stat-number-row">
              <span class="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <span class="trust-stat-number">6+</span>
            </div>
            <span class="trust-stat-label">Projects Completed</span>
          </div>

          <!-- Stat 3 -->
          <div class="trust-stat-item">
            <div class="trust-stat-number-row">
              <span class="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <span class="trust-stat-number">100%</span>
            </div>
            <span class="trust-stat-label">Client Satisfaction</span>
          </div>

          <!-- Stat 4 -->
          <div class="trust-stat-item">
            <div class="trust-stat-number-row">
              <span class="trust-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <span class="trust-stat-number">6</span>
            </div>
            <span class="trust-stat-label">Industries Served</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SELECTED WORK SECTION -->
    <section id="work" class="section-spacing">
      <div class="container">
        <div class="section-header-block reveal-element">
          <span class="section-eyebrow">SELECTED WORK</span>
          <h2 class="section-title">Built with Purpose</h2>
        </div>

        <!-- PROJECT FILTER TABS -->
        <div class="filter-wrapper reveal-element">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="ecommerce">E-Commerce</button>
          <button class="filter-btn" data-filter="hospitality">Hospitality</button>
          <button class="filter-btn" data-filter="lifestyle">Lifestyle</button>
          <button class="filter-btn" data-filter="ai">AI Innovation</button>
        </div>

        <div class="projects-row-list">
          <!-- Row 1: AIRA SKINCARE -->
          <a href="https://aira-kappa.vercel.app/" target="_blank" rel="noopener noreferrer"
            class="project-row reveal-element" data-category="ecommerce">
            <span class="project-row-index">01</span>
            <span class="project-row-title-group">
              <h3 class="project-row-title">Aira Skincare</h3>
              <span class="project-row-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </span>
            <span class="project-row-category">E-Commerce &middot; Skincare</span>
            <div class="project-row-thumb bento-aira" aria-hidden="true">
              <div class="project-row-thumb-content" style="--row-accent: #FF6B35;">
                <div class="project-row-stats">
                  <div class="case-detail-item">
                    <span class="case-detail-label">Industry</span>
                    <span class="case-detail-val">Luxury Skincare</span>
                  </div>
                  <div class="case-detail-item">
                    <span class="case-detail-label">Timeline</span>
                    <span class="case-detail-val">10 Days</span>
                  </div>
                  <div class="case-detail-item" style="grid-column: span 2;">
                    <span class="case-detail-label">Result</span>
                    <span class="case-detail-val">Sub-500ms catalog loads.</span>
                  </div>
                </div>
                <div class="project-row-win">4 Marketplaces Launched</div>
              </div>
            </div>
          </a>

          <!-- Row 2: DRISHTI AI -->
          <a href="https://drishti-ai-eta.vercel.app/" target="_blank" rel="noopener noreferrer"
            class="project-row reveal-element" data-category="ai">
            <span class="project-row-index">02</span>
            <span class="project-row-title-group">
              <h3 class="project-row-title">Drishti AI</h3>
              <span class="project-row-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </span>
            <span class="project-row-category">AI &middot; Healthcare</span>
            <div class="project-row-thumb bento-drishti" aria-hidden="true">
              <div class="project-row-thumb-content" style="--row-accent: #3498DB;">
                <div class="project-row-stats">
                  <div class="case-detail-item">
                    <span class="case-detail-label">Industry</span>
                    <span class="case-detail-val">AI Healthcare</span>
                  </div>
                  <div class="case-detail-item">
                    <span class="case-detail-label">Timeline</span>
                    <span class="case-detail-val">3 Days</span>
                  </div>
                  <div class="case-detail-item" style="grid-column: span 2;">
                    <span class="case-detail-label">Result</span>
                    <span class="case-detail-val">Sub-50ms canvas chart renders.</span>
                  </div>
                </div>
                <div class="project-row-win">1st Place &mdash; CompileX 2.0</div>
              </div>
            </div>
          </a>

          <!-- Row 3: STRIKER SPORTS -->
          <a href="/striker" class="project-row reveal-element" data-category="ecommerce">
            <span class="project-row-index">03</span>
            <span class="project-row-title-group">
              <h3 class="project-row-title">Striker Sports</h3>
              <span class="project-row-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </span>
            <span class="project-row-category">Sports &middot; Retail</span>
            <div class="project-row-thumb bento-striker" aria-hidden="true">
              <div class="project-row-thumb-content" style="--row-accent: #E74C3C;">
                <div class="project-row-stats">
                  <div class="case-detail-item">
                    <span class="case-detail-label">Industry</span>
                    <span class="case-detail-val">Athletics Retail</span>
                  </div>
                  <div class="case-detail-item">
                    <span class="case-detail-label">Timeline</span>
                    <span class="case-detail-val">7 Days</span>
                  </div>
                  <div class="case-detail-item" style="grid-column: span 2;">
                    <span class="case-detail-label">Result</span>
                    <span class="case-detail-val">Zero-lag visual item filtering.</span>
                  </div>
                </div>
                <div class="project-row-win">Instant Filter Indexing</div>
              </div>
            </div>
          </a>

          <!-- Row 4: BREW & CO -->
          <a href="/brew" class="project-row reveal-element" data-category="hospitality">
            <span class="project-row-index">04</span>
            <span class="project-row-title-group">
              <h3 class="project-row-title">Brew &amp; Co.</h3>
              <span class="project-row-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </span>
            <span class="project-row-category">Cafe &middot; Hospitality</span>
            <div class="project-row-thumb bento-brew" aria-hidden="true">
              <div class="project-row-thumb-content" style="--row-accent: #C17A4D;">
                <div class="project-row-stats">
                  <div class="case-detail-item">
                    <span class="case-detail-label">Industry</span>
                    <span class="case-detail-val">Specialty Cafe</span>
                  </div>
                  <div class="case-detail-item">
                    <span class="case-detail-label">Timeline</span>
                    <span class="case-detail-val">5 Days</span>
                  </div>
                  <div class="case-detail-item" style="grid-column: span 2;">
                    <span class="case-detail-label">Result</span>
                    <span class="case-detail-val">Frictionless seat reservation.</span>
                  </div>
                </div>
                <div class="project-row-win">Table Booking System</div>
              </div>
            </div>
          </a>

          <!-- Row 5: KIRANA KING -->
          <a href="/kirana" class="project-row reveal-element" data-category="ecommerce">
            <span class="project-row-index">05</span>
            <span class="project-row-title-group">
              <h3 class="project-row-title">Kirana King</h3>
              <span class="project-row-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </span>
            <span class="project-row-category">Local Store &middot; Grocery</span>
            <div class="project-row-thumb bento-kirana" aria-hidden="true">
              <div class="project-row-thumb-content" style="--row-accent: #2ECC71;">
                <div class="project-row-stats">
                  <div class="case-detail-item">
                    <span class="case-detail-label">Industry</span>
                    <span class="case-detail-val">Local Provision Retail</span>
                  </div>
                  <div class="case-detail-item">
                    <span class="case-detail-label">Timeline</span>
                    <span class="case-detail-val">6 Days</span>
                  </div>
                  <div class="case-detail-item" style="grid-column: span 2;">
                    <span class="case-detail-label">Result</span>
                    <span class="case-detail-val">Direct chat-based order dispatch.</span>
                  </div>
                </div>
                <div class="project-row-win">WhatsApp Order Logs</div>
              </div>
            </div>
          </a>

          <!-- Row 6: VERDANT LIVING -->
          <a href="/verdant" class="project-row reveal-element" data-category="lifestyle">
            <span class="project-row-index">06</span>
            <span class="project-row-title-group">
              <h3 class="project-row-title">Verdant Living</h3>
              <span class="project-row-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </span>
            <span class="project-row-category">Home Decor &middot; Lifestyle</span>
            <div class="project-row-thumb bento-verdant" aria-hidden="true">
              <div class="project-row-thumb-content" style="--row-accent: #8FA876;">
                <div class="project-row-stats">
                  <div class="case-detail-item">
                    <span class="case-detail-label">Industry</span>
                    <span class="case-detail-val">Luxury Interior Living</span>
                  </div>
                  <div class="case-detail-item">
                    <span class="case-detail-label">Timeline</span>
                    <span class="case-detail-val">9 Days</span>
                  </div>
                  <div class="case-detail-item" style="grid-column: span 2;">
                    <span class="case-detail-label">Result</span>
                    <span class="case-detail-val">Curated Oak &amp; Japandi catalogs.</span>
                  </div>
                </div>
                <div class="project-row-win">Theme Curation Landing</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section id="services" class="section-spacing">
      <div class="container">
        <div class="section-header-block reveal-element">
          <span class="section-eyebrow">SERVICES</span>
          <h2 class="section-title">Engineered for Business Outcomes.</h2>
        </div>

        <div class="services-grid-container reveal-element">
          <!-- Tile 1 -->
          <div class="service-tile">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="service-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div class="service-watermark">01</div>
            </div>
            <h3 class="service-tile-name">Conversion-Focused Design</h3>
            <p class="service-tile-desc">UI/UX design systems that build immediate brand authority, streamline
              navigation, and turn casual visitors into paying customers.</p>
            <a href="#contact" class="service-tile-explore">Book a Call →</a>
          </div>

          <!-- Tile 2 -->
          <div class="service-tile">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="service-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
                </svg>
              </div>
              <div class="service-watermark">02</div>
            </div>
            <h3 class="service-tile-name">High-Performance Code</h3>
            <p class="service-tile-desc">SEO-optimized, ultra-fast web systems built with clean semantic structures,
              achieving sub-second load times and lower drop-offs.</p>
            <a href="#contact" class="service-tile-explore">Book a Call →</a>
          </div>

          <!-- Tile 3 -->
          <div class="service-tile">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="service-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div class="service-watermark">03</div>
            </div>
            <h3 class="service-tile-name">Checkout Automation</h3>
            <p class="service-tile-desc">Seamless paths and WhatsApp checkout integrations designed to eliminate
              purchasing friction and recapture lost cart orders.</p>
            <a href="#contact" class="service-tile-explore">Book a Call →</a>
          </div>

          <!-- Tile 4 -->
          <div class="service-tile">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="service-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div class="service-watermark">04</div>
            </div>
            <h3 class="service-tile-name">E-Commerce Platforms</h3>
            <p class="service-tile-desc">Optimized shopping funnels and product catalog builders created to maximize
              average order value and browser-to-buyer conversions.</p>
            <a href="#contact" class="service-tile-explore">Book a Call →</a>
          </div>

          <!-- Tile 5 -->
          <div class="service-tile">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="service-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div class="service-watermark">05</div>
            </div>
            <h3 class="service-tile-name">Search Optimization</h3>
            <p class="service-tile-desc">Strategic speed tuning and structured schema architecture to position your
              brand directly in front of high-intent search queries.</p>
            <a href="#contact" class="service-tile-explore">Book a Call →</a>
          </div>

          <!-- Tile 6 -->
          <div class="service-tile">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="service-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                </svg>
              </div>
              <div class="service-watermark">06</div>
            </div>
            <h3 class="service-tile-name">Brand Credibility</h3>
            <p class="service-tile-desc">Sleek visual systems, cohesive typography rules, and luxury assets designed to
              command premium pricing in your market.</p>
            <a href="#contact" class="service-tile-explore">Book a Call →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FULL-BLEED DARK TECH INTERLUDE -->
    <section class="section-dark-interlude reveal-element">
      <div class="container">
        <p class="dark-interlude-statement">
          Built on the same infrastructure trusted by <em>Vercel, Stripe &amp; Linear</em> —
          so your site stays fast, secure, and easy to maintain for years.
        </p>
        <p class="dark-interlude-buyer-copy">
          No lock-in, no bloat, no proprietary page builder holding your content hostage. Just clean, production-grade
          code that your own team can read, extend, and hand off to any developer later.
        </p>
        <p class="dark-interlude-grid-label">Under The Hood — Technology Stack</p>
        <div class="dark-performance-grid">
          <!-- Col 1 -->
          <div class="dark-performance-col">
            <p class="dark-performance-col-title">Core Development</p>
            <div class="dark-performance-item">
              <span class="dark-performance-name">HTML5 &amp; CSS3</span>
              <span class="dark-performance-tag">100% Semantic</span>
            </div>
            <div class="dark-performance-item">
              <span class="dark-performance-name">JavaScript (ES6+)</span>
              <span class="dark-performance-tag">Vanilla Engine</span>
            </div>
            <div class="dark-performance-item">
              <span class="dark-performance-name">React &amp; Next.js</span>
              <span class="dark-performance-tag">SSR / Hydrated</span>
            </div>
          </div>
          <!-- Col 2 -->
          <div class="dark-performance-col">
            <p class="dark-performance-col-title">UI &amp; Styling</p>
            <div class="dark-performance-item">
              <span class="dark-performance-name">Tailwind CSS</span>
              <span class="dark-performance-tag">Utility-First</span>
            </div>
            <div class="dark-performance-item">
              <span class="dark-performance-name">Framer Motion</span>
              <span class="dark-performance-tag">Fluid 60FPS</span>
            </div>
            <div class="dark-performance-item">
              <span class="dark-performance-name">Figma Design</span>
              <span class="dark-performance-tag">Bespoke Vector</span>
            </div>
          </div>
          <!-- Col 3 -->
          <div class="dark-performance-col">
            <p class="dark-performance-col-title">Systems &amp; AI</p>
            <div class="dark-performance-item">
              <span class="dark-performance-name">Shopify Engine</span>
              <span class="dark-performance-tag">Liquid API</span>
            </div>
            <div class="dark-performance-item">
              <span class="dark-performance-name">Gemini AI Models</span>
              <span class="dark-performance-tag">Context-Aware</span>
            </div>
            <div class="dark-performance-item">
              <span class="dark-performance-name">Vercel Deployment</span>
              <span class="dark-performance-tag">Edge Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING SECTION -->
    <section id="pricing" class="section-spacing">
      <div class="container">
        <div class="section-header-block reveal-element">
          <span class="section-eyebrow">PRICING</span>
          <h2 class="section-title">Transparent Pricing Built for ROI</h2>
        </div>

        <div class="pricing-grid reveal-element">
          <!-- Starter — Landing Page -->
          <div class="pricing-card">
            <div class="pricing-header">
              <span class="pricing-tier">Starter — Landing Page</span>
              <h3 class="pricing-price" role="button" tabindex="0" aria-haspopup="dialog"
                aria-label="View full pricing breakdown for all plans">₹8,999–₹15,000</h3>
              <span class="pricing-price-hint">View full breakdown</span>
            </div>
            <p class="service-tile-desc" style="margin-bottom: 20px;">A single page done right — for businesses that
              need a clean, working presence online fast.</p>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                1 Responsive Page
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Contact Form Integration
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Fully Deployed & Live
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Basic On-Page SEO
              </li>
            </ul>
            <a href="#contact" class="pricing-btn">Get Started</a>
          </div>

          <!-- Business Site -->
          <div class="pricing-card featured">
            <div class="pricing-header">
              <span class="pricing-tier">Business Site</span>
              <h3 class="pricing-price" role="button" tabindex="0" aria-haspopup="dialog"
                aria-label="View full pricing breakdown for all plans">₹15,000–₹35,000</h3>
              <span class="pricing-price-hint">View full breakdown</span>
            </div>
            <p class="service-tile-desc" style="margin-bottom: 20px;">For growing brands that need a proper multi-page
              site built around their actual business, not a template.</p>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                5–7 Custom-Designed Pages
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                WordPress or React Build
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Mobile-Optimized Layouts
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Standard SEO Setup
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                1 Month Post-Launch Support
              </li>
            </ul>
            <a href="#contact" class="pricing-btn">Book a Call</a>
          </div>

          <!-- Advanced / AI-Integrated Site -->
          <div class="pricing-card">
            <div class="pricing-header">
              <span class="pricing-tier">Advanced / AI-Integrated Site</span>
              <h3 class="pricing-price" role="button" tabindex="0" aria-haspopup="dialog"
                aria-label="View full pricing breakdown for all plans">₹35,000–₹80,000+</h3>
              <span class="pricing-price-hint">View full breakdown</span>
            </div>
            <p class="service-tile-desc" style="margin-bottom: 20px;">Full-stack builds with real backend logic and AI
              features baked in, for businesses ready to scale past a brochure site.</p>
            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Full-Stack Custom Build
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                AI-Powered Features
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Backend & Database Integration
              </li>
              <li class="pricing-feature-item">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Priority Support Through Launch
              </li>
            </ul>
            <a href="#contact" class="pricing-btn">Start Project</a>
          </div>
        </div>

        <!-- Maintenance Retainer -->
        <div class="pricing-retainer-bar reveal-element">
          <div class="pricing-retainer-text">
            <span class="pricing-retainer-label">Maintenance Retainer</span>
            <p>Ongoing updates, monitoring, and small changes after launch — for clients who'd rather not think about
              their site again.</p>
          </div>
          <div class="pricing-retainer-price">₹3,000–₹8,000<span>/month</span></div>
        </div>

        <!-- International pricing reference -->
        <div class="pricing-intl-block reveal-element">
          <span class="pricing-intl-label">International Pricing (USD) — For Reference</span>
          <div class="pricing-intl-table-wrap">
            <table class="pricing-intl-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>USD</th>
                  <th>INR Equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Landing Page</td>
                  <td>$300–$600</td>
                  <td>₹25,000–₹50,000</td>
                </tr>
                <tr>
                  <td>Business Site</td>
                  <td>$700–$1,500</td>
                  <td>₹58,000–₹1,25,000</td>
                </tr>
                <tr>
                  <td>Advanced / AI</td>
                  <td>$1,500–$3,500+</td>
                  <td>₹1,25,000–₹2,90,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="section-spacing">
      <div class="container">
        <div class="about-layout">
          <div class="about-left reveal-element">
            <span class="section-eyebrow">ABOUT CRAIVO</span>
            <h2 class="about-headline">An engineering-led digital studio focused on revenue.</h2>
            <p class="about-body">
              Craivo is an independent web design and development studio built around a single purpose: driving active
              customer growth. By bridging luxury aesthetic identity with high-performance code, we create custom
              websites that build instant market credibility. From small business web design to complex e-commerce
              integrations, we work closely with ambitious brands to turn visual systems into conversion machines.
            </p>
          </div>

          <div class="about-right reveal-element">
            <div class="stats-layout">
              <div class="stat-item">
                <span class="stat-number" data-target="6">0</span>
                <span class="stat-label">Client Launches</span>
                <div class="stat-underline"></div>
              </div>
              <div class="stat-item">
                <span class="stat-number" data-target="100">0</span>
                <span class="stat-label">Commitment Rate</span>
                <div class="stat-underline"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Founder Story Sub-Section -->
        <div class="founder-layout reveal-element"
          style="border-top: var(--stitch-style); margin-top: 60px; padding-top: 60px;">
          <div class="founder-image-box" style="aspect-ratio: unset; padding: 20px; align-items: stretch;">
            <div class="founder-spec-grid">
              <div class="founder-spec-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.6" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/>
                  <circle cx="12" cy="9.5" r="2.4"/>
                </svg>
                <span class="case-detail-label">Based In</span>
                <div class="case-detail-val">New Delhi, India</div>
              </div>
              <div class="founder-spec-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.6" aria-hidden="true">
                  <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6.5l-3 11"/>
                </svg>
                <span class="case-detail-label">Working As</span>
                <div class="case-detail-val">Solo — Design &amp; Dev</div>
              </div>
              <div class="founder-spec-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.6" aria-hidden="true">
                  <rect x="3.5" y="4" width="17" height="12" rx="1.5"/>
                  <path d="M8 20h8M12 16v4"/>
                </svg>
                <span class="case-detail-label">Stack</span>
                <div class="case-detail-val">React &middot; Vite &middot; Supabase</div>
              </div>
              <div class="founder-spec-card founder-spec-card-live">
                <span class="founder-live-dot" aria-hidden="true"></span>
                <span class="case-detail-label">Availability</span>
                <div class="case-detail-val" style="color: var(--accent-2);">Open for new projects</div>
              </div>
            </div>
          </div>
          <div class="founder-story-text">
            <p class="founder-story-quote">
              "I kept seeing the same split: design studios that ship a beautiful mockup with no idea how it'll actually convert, and developers who can wire up anything but flatten the brand in the process. Craivo exists to close that gap — one person handling both the visual system and the code behind it, so nothing gets lost in the handoff between them."
            </p>
            <p style="color: var(--text-secondary); font-size: 14.5px;">
              Every project runs through the same three checks before it ships: does the visual system hold up against
              the brand's real assets (not just the mockup), does the page hit sub-second loads on a mid-range phone,
              and can the client read every line item on the invoice before we ask for payment. We don't hand over
              template brochures — we scope a funnel, build the pages and the backend logic behind it, and stay on
              to tune what the analytics show once real visitors show up.
            </p>
            <div class="founder-name">
              Abhishek Kumar
              <div class="founder-title">Founder &amp; Creative Director, Craivo</div>
            </div>
          </div>
        </div>

        <!-- Why Choose Us & Benefits Grid -->
        <div style="border-top: var(--stitch-style); margin-top: 60px; padding-top: 60px;">
          <div class="section-header-block reveal-element" style="margin-bottom: 30px;">
            <span class="section-eyebrow">STUDIO BENEFITS</span>
            <h2 class="section-title">Why Leading Brands Work With Us</h2>
          </div>
          <div class="benefits-grid reveal-element">
            <!-- Benefit 1 -->
            <div class="benefit-card">
              <h3 class="benefit-card-title">
                <svg viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Extreme Performance
              </h3>
              <p class="benefit-card-desc">Sub-second page loading speeds that reduce visitor bounce rates and satisfy
                Google Core Web Vitals checks.</p>
            </div>
            <!-- Benefit 2 -->
            <div class="benefit-card">
              <h3 class="benefit-card-title">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Fast Delivery
              </h3>
              <p class="benefit-card-desc">Bespoke design sprints and rapid custom coding cycles that launch your
                platform in days instead of months.</p>
            </div>
            <!-- Benefit 3 -->
            <div class="benefit-card">
              <h3 class="benefit-card-title">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Zero-Lock-in Code
              </h3>
              <p class="benefit-card-desc">Clean, semantic HTML5/CSS3 and React setups. You own your code completely,
                free from proprietary agency platforms.</p>
            </div>
            <!-- Benefit 4 -->
            <div class="benefit-card">
              <h3 class="benefit-card-title">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Conversion Optimization
              </h3>
              <p class="benefit-card-desc">Calculated user interface layout elements, clear call-to-actions, and
                friction-free pathing designed to double inquiry counts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECT HIGHLIGHTS SECTION -->
    <section class="section-spacing">
      <div class="container">
        <div class="section-header-block reveal-element">
          <span class="section-eyebrow">CASE STUDIES</span>
          <h2 class="section-title">Project Highlights</h2>
        </div>

        <div class="testimonials-list">
          <div class="testimonial-item reveal-element"
            style="border-left: 2px dashed var(--border-color); padding-left: 20px;">
            <span class="testimonial-quote-symbol" style="opacity: 0.1;">01</span>
            <div class="testimonial-quote-body">
              <p class="testimonial-quote-text" style="font-style: italic; color: var(--text-secondary);">
                Built for a sports retail concept: a full product catalogue with instant, zero-lag visual filtering
                across category, size and price &mdash; no page reloads, no lag on large item sets.
              </p>
              <div class="testimonial-author-row">
                <div class="author-line"></div>
                <div class="testimonial-author-info">
                  Striker Sports &mdash; Concept Build <br>
                  <span><a href="/striker">View project &rarr;</a></span>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-item reveal-element"
            style="border-left: 2px dashed var(--border-color); padding-left: 20px;">
            <span class="testimonial-quote-symbol" style="opacity: 0.1;">02</span>
            <div class="testimonial-quote-body">
              <p class="testimonial-quote-text" style="font-style: italic; color: var(--text-secondary);">
                Built for a specialty cafe concept: a frictionless table booking flow designed to cut the steps
                between landing on the site and a confirmed reservation.
              </p>
              <div class="testimonial-author-row">
                <div class="author-line"></div>
                <div class="testimonial-author-info">
                  Brew &amp; Co. &mdash; Concept Build <br>
                  <span><a href="/brew">View project &rarr;</a></span>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-item reveal-element"
            style="border-left: 2px dashed var(--border-color); padding-left: 20px;">
            <span class="testimonial-quote-symbol" style="opacity: 0.1;">03</span>
            <div class="testimonial-quote-body">
              <p class="testimonial-quote-text" style="font-style: italic; color: var(--text-secondary);">
                Built for a local grocery concept: direct WhatsApp-based order dispatch, so orders placed on the
                site land straight in a chat thread the owner already checks all day.
              </p>
              <div class="testimonial-author-row">
                <div class="author-line"></div>
                <div class="testimonial-author-info">
                  Kirana King &mdash; Concept Build <br>
                  <span><a href="/kirana">View project &rarr;</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INDUSTRIES & TECH STACK SECTIONS -->
    <section class="section-spacing" style="background-color: var(--bg-alt);">
      <div class="container markets-tech-grid">
        <!-- Left Side: Industries We Serve -->
        <div class="reveal-element">
          <span class="section-eyebrow">MARKETS</span>
          <h2 class="section-title">Industries We Serve</h2>
          <p class="service-tile-desc" style="margin-top: 15px; max-width: 480px;">
            We build specialized customer funnels and conversion flows for businesses in distinct market segments:
          </p>
          <div class="industries-pills">
            <span class="industry-pill">Luxury Skincare &amp; Wellness</span>
            <span class="industry-pill">Hospitality &amp; Cafes</span>
            <span class="industry-pill">E-Commerce &amp; Retail Stores</span>
            <span class="industry-pill">Smart AI &amp; Software Tools</span>
            <span class="industry-pill">B2B Wholesale &amp; Manufacturing</span>
            <span class="industry-pill">High-End Interior Decor &amp; Living</span>
          </div>
        </div>

        <!-- Right Side: Tech Stack -->
        <div class="reveal-element">
          <span class="section-eyebrow">STACK</span>
          <h2 class="section-title">Technologies We Trust</h2>
          <p class="service-tile-desc" style="margin-top: 15px; max-width: 480px;">
            We build fast, secure, customizable systems using standard, developer-approved architectures:
          </p>
          <div class="tech-badges-grid">
            <div class="tech-badge-card">
              <span class="tech-badge-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                </svg>
              </span>
              <span class="tech-badge-name">Framer / Figma</span>
            </div>
            <div class="tech-badge-card">
              <span class="tech-badge-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 8h10M7 12h10M7 16h10" />
                </svg>
              </span>
              <span class="tech-badge-name">HTML5 &amp; CSS3</span>
            </div>
            <div class="tech-badge-card">
              <span class="tech-badge-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <span class="tech-badge-name">Vanilla JS</span>
            </div>
            <div class="tech-badge-card">
              <span class="tech-badge-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <span class="tech-badge-name">Next.js / React</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section-spacing">
      <div class="container">
        <div class="section-header-block reveal-element" style="text-align: center;">
          <span class="section-eyebrow">QUESTIONS</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-grid reveal-element">
          <!-- Item 1 -->
          <div class="faq-item">
            <button class="faq-trigger">
              How long does a typical project take?
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              Average delivery times range from 7 to 14 days for growth sites and up to 3 to 4 weeks for fully
              customized, multi-page platforms and Shopify e-commerce installations.
            </div>
          </div>
          <!-- Item 2 -->
          <div class="faq-item">
            <button class="faq-trigger">
              Do we own the website code after launch?
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              Yes, 100%. Unlike agencies that lock you into proprietary drag-and-drop systems, we build using clean,
              open-source standard HTML5/CSS3 and React. You have total ownership of your files, assets, and database.
            </div>
          </div>
          <!-- Item 3 -->
          <div class="faq-item">
            <button class="faq-trigger">
              Will our website work on mobile devices?
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              Absolutely. Every website we design is fully responsive and speed-optimized for mobile viewports, ensuring
              a seamless checkout and navigation experience on all smartphones and tablets.
            </div>
          </div>
          <!-- Item 4 -->
          <div class="faq-item">
            <button class="faq-trigger">
              Do you offer post-launch support and hosting setups?
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              Yes, every pricing plan includes ongoing post-launch support. We set up secure domain hosting via Vercel,
              Netlify, or Shopify, and remain available for performance updates, text edits, and conversion audits.
            </div>
          </div>
          <!-- Item 5 -->
          <div class="faq-item">
            <button class="faq-trigger">
              How does pricing work, and what's included?
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              Every package is a fixed quote agreed before we start — no hourly surprises. It covers strategy, design,
              development, and launch; the tier just scopes how many pages, integrations, and revision rounds are included.
            </div>
          </div>
          <!-- Item 6 -->
          <div class="faq-item">
            <button class="faq-trigger">
              What if I need changes after the site is live?
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              Small edits are covered under your post-launch support window at no extra cost. Larger feature additions
              are scoped and quoted separately, so your budget stays predictable as the site grows with your business.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT / FINAL CTA SECTION -->
    <section id="contact" class="section-spacing">
      <!-- Floating Orbs for CTA -->
      <div class="cta-orbs-container">
        <div class="cta-orb orb-1"></div>
        <div class="cta-orb orb-2"></div>
      </div>

      <div class="container">
        <div class="contact-container">
          <div>
            <span class="section-eyebrow">START YOUR PROJECT</span>
            <h2 class="giant-contact-headline">
              Let's build a website that <em>delivers</em>.
            </h2>
            <p class="contact-proposal-text">
              Ready to scale your conversions and brand credibility? Complete the form to schedule your free 30-min
              strategy discovery call.
            </p>
          </div>

          <div class="contact-right" style="width: 100%;">
            <form class="premium-form" id="contact-form" action="#" method="POST" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="form-name">Your Name</label>
                  <input type="text" id="form-name" name="name" class="form-input" placeholder="e.g. Sneha Arora" required>
                </div>
                <div class="form-group">
                  <label for="form-email">Work Email</label>
                  <input type="email" id="form-email" name="email" class="form-input" placeholder="e.g. founder@aira.com" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="form-project">Project Type</label>
                  <select id="form-project" name="project" class="form-input" required>
                    <option value="" disabled selected>Select service</option>
                    <option value="conversion-design">Conversion Design</option>
                    <option value="frontend-eng">High-Performance Dev</option>
                    <option value="ecommerce">E-Commerce Setup</option>
                    <option value="custom">Bespoke Custom App</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="form-budget">Budget Tier</label>
                  <select id="form-budget" name="budget" class="form-input" required>
                    <option value="" disabled selected>Select budget</option>
                    <option value="starter">Starter — Landing Page (₹8,999–₹15,000)</option>
                    <option value="business">Business Site (₹15,000–₹35,000)</option>
                    <option value="advanced">Advanced / AI-Integrated (₹35,000–₹80,000+)</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="form-message">Project Description</label>
                <textarea id="form-message" name="message" class="form-input" rows="4" placeholder="Tell us about your brand goals and current performance bottlenecks..." style="resize: vertical;" required></textarea>
              </div>
              <button type="submit" class="form-submit-btn">Send Project Request <span>→</span></button>
            </form>
            <div class="form-status-msg" id="form-status-msg" style="display: none; margin-top: 15px; padding: 12px; border-radius: 8px; font-size: 13.5px; font-weight: 500; font-family: var(--font-body); text-align: center;"></div>

            <p class="contact-email-link" style="margin-top: 20px; width: 100%; text-align: center;">Prefer direct email? <a href="mailto:abhishek.kumar.work8668@gmail.com" style="color: var(--accent); text-decoration: underline !important;">abhishek.kumar.work8668@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-floating-shapes">
        <div class="floating-shape circle-footer"></div>
        <div class="floating-shape square-footer"></div>
      </div>
      <div class="container footer-container">
        <div class="footer-left">
          CRAIVO <span>© 2026</span>
        </div>
        <div class="footer-center">
          WEB DESIGN &amp; DEVELOPMENT STUDIO — PROUDLY BUILT IN DELHI, INDIA
        </div>
        <div class="footer-right">
          <a href="https://www.upwork.com/freelancers/~0118882544be59d04b?mp_source=share" class="footer-social-link" target="_blank" rel="noopener noreferrer">Upwork</a>
          <a href="https://www.linkedin.com/in/abhishek8668" class="footer-social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AbhishekKumarCode" class="footer-social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <!-- CRAIVO watermark -->
      <div class="footer-backdrop-logo">CRAIVO</div>
    </footer>

  </div> <!-- End Canvas Frame -->

  <!-- INTRO SHOWCASE MODAL -->
  <div id="showcase-modal" class="modal-overlay">
    <div class="showcase-modal-content">
      <h3 class="showcase-title">Craivo Profile</h3>
      <p class="showcase-text">
        We design and engineer bespoke, high-converting web structures. At Craivo, we partner with modern
        brands, wholesale B2B distributors, and luxury establishments to turn digital storefronts into high-converting
        revenue channels.
      </p>
      <button class="btn-close-showcase" id="close-showcase-btn">Close Profile</button>
    </div>
  </div>

  <!-- PRICING OVERVIEW MODAL -->
  <div id="pricing-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="pricing-modal-title">
    <div class="pricing-modal-content">
      <h3 class="showcase-title" id="pricing-modal-title">Pricing at a Glance</h3>

      <div class="pricing-modal-row">
        <div class="pricing-modal-row-head">
          <span class="pricing-modal-tier">Starter — Landing Page</span>
          <span class="pricing-modal-price">₹8,999–₹15,000</span>
        </div>
        <p class="pricing-modal-desc">A single page done right — for businesses that need a clean, working presence
          online fast.</p>
        <ul class="pricing-modal-features">
          <li>1 Responsive Page</li>
          <li>Contact Form Integration</li>
          <li>Fully Deployed &amp; Live</li>
          <li>Basic On-Page SEO</li>
        </ul>
      </div>

      <div class="pricing-modal-row">
        <div class="pricing-modal-row-head">
          <span class="pricing-modal-tier">Business Site</span>
          <span class="pricing-modal-price">₹15,000–₹35,000</span>
        </div>
        <p class="pricing-modal-desc">For growing brands that need a proper multi-page site built around their
          actual business, not a template.</p>
        <ul class="pricing-modal-features">
          <li>5–7 Custom-Designed Pages</li>
          <li>WordPress or React Build</li>
          <li>Mobile-Optimized Layouts</li>
          <li>Standard SEO Setup</li>
          <li>1 Month Post-Launch Support</li>
        </ul>
      </div>

      <div class="pricing-modal-row">
        <div class="pricing-modal-row-head">
          <span class="pricing-modal-tier">Advanced / AI-Integrated Site</span>
          <span class="pricing-modal-price">₹35,000–₹80,000+</span>
        </div>
        <p class="pricing-modal-desc">Full-stack builds with real backend logic and AI features baked in, for
          businesses ready to scale past a brochure site.</p>
        <ul class="pricing-modal-features">
          <li>Full-Stack Custom Build</li>
          <li>AI-Powered Features</li>
          <li>Backend &amp; Database Integration</li>
          <li>Priority Support Through Launch</li>
        </ul>
      </div>

      <div class="pricing-modal-row">
        <div class="pricing-modal-row-head">
          <span class="pricing-modal-tier">Maintenance Retainer</span>
          <span class="pricing-modal-price">₹3,000–₹8,000/mo</span>
        </div>
        <p class="pricing-modal-desc">Ongoing updates, monitoring, and small changes after launch — for clients
          who'd rather not think about their site again.</p>
      </div>

      <button class="btn-close-showcase" id="close-pricing-modal-btn" style="margin-top: 24px;">Close</button>
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->

  <!-- FLOATING CTA BUTTON -->
  <a href="#contact" id="floating-cta" class="floating-cta-btn" aria-label="Start a Project">
    Start a Project <span class="fcta-arrow">→</span>
  </a>
`;
