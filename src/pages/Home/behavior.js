import { submitContactForm } from '../../lib/submitContactForm.js';

export function initHomeBehavior() {
  // 1. SCROLL REVEAL INTERSECTION OBSERVER
  const revealElements = document.querySelectorAll('.reveal-element');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if (entry.target.classList.contains('about-right')) {
          startStatsCounterAnimation();
        }
        if (entry.target.classList.contains('process-flow-container')) {
          const line = entry.target.querySelector('#process-line-progress');
          if (line) {
            line.style.width = '100%';
            line.style.height = '100%';
          }
          const steps = entry.target.querySelectorAll('.process-step');
          steps.forEach((step, idx) => {
            setTimeout(() => step.classList.add('active'), idx * 280);
          });
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 2. STATS COUNT-UP ANIMATION
  let statsAnimated = false;
  function startStatsCounterAnimation() {
    if (statsAnimated) return;
    statsAnimated = true;

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 800; // 800ms
      let startTime = null;

      const easeOutQuad = (t) => t * (2 - t);

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentValue = Math.round(target * easedProgress);

        if (target === 100) {
          counter.innerText = currentValue + '%';
        } else if (target === 6) {
          counter.innerText = currentValue + '+';
        } else {
          counter.innerText = currentValue;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (target === 100) {
            counter.innerText = target + '%';
          } else if (target === 6) {
            counter.innerText = target + '+';
          } else {
            counter.innerText = target;
          }
          // Mark complete to trigger underline animation
          const statItem = counter.closest('.stat-item');
          if (statItem) {
            statItem.classList.add('animation-complete');
          }
        }
      };

      requestAnimationFrame(animate);
    });
  }

  // 3. VERTICAL PILL THEME TOGGLE LOGIC
  const themeToggle = document.getElementById('theme-toggle');
  const toggleIndicator = themeToggle.querySelector('.toggle-indicator');
  const lightOption = themeToggle.querySelector('[data-theme-val="light"]');
  const darkOption = themeToggle.querySelector('[data-theme-val="dark"]');

  const savedTheme = localStorage.getItem('theme');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      toggleIndicator.style.top = '38px';
      darkOption.classList.add('active');
      lightOption.classList.remove('active');
    } else {
      toggleIndicator.style.top = '3px';
      lightOption.classList.add('active');
      darkOption.classList.remove('active');
    }
  };

  if (savedTheme === 'dark') {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  // 4. MOBILE HAMBURGER MENU OVERLAY LOGIC
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuItems = document.querySelectorAll('.mobile-menu-item, .mobile-menu-cta');

  const toggleMobileMenu = () => {
    mobileMenuToggle.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');

    if (mobileMenuOverlay.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  mobileMenuToggle.addEventListener('click', toggleMobileMenu);

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // 5. PROJECTS FILTER LOGIC & SLIDING UNDERLINE
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-row');
  const filterWrapper = document.querySelector('.filter-wrapper');

  // Create sliding underline element
  const underline = document.createElement('div');
  underline.className = 'filter-underline';
  filterWrapper.appendChild(underline);

  const updateUnderline = (activeBtn) => {
    const rect = activeBtn.getBoundingClientRect();
    const wrapperRect = filterWrapper.getBoundingClientRect();
    const left = rect.left - wrapperRect.left + filterWrapper.scrollLeft;
    underline.style.width = `${rect.width}px`;
    underline.style.transform = `translateX(${left}px)`;
  };

  // Set initial underline position on load
  const initialActiveBtn = filterWrapper.querySelector('.filter-btn.active');
  if (initialActiveBtn) {
    setTimeout(() => updateUnderline(initialActiveBtn), 150);
  }

  const handleResize = () => {
    const currentActive = filterWrapper.querySelector('.filter-btn.active');
    if (currentActive) updateUnderline(currentActive);
  };
  window.addEventListener('resize', handleResize);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateUnderline(btn);

      const filterValue = btn.getAttribute('data-filter');

      // 1. Fade out all currently visible cards
      projectCards.forEach(card => {
        card.style.transition = 'opacity 180ms cubic-bezier(0.16, 1, 0.3, 1), transform 180ms cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.97) translateY(8px)';
      });

      // 2. Wait for fade-out, then update displays
      setTimeout(() => {
        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          const shouldShow = filterValue === 'all' || cardCategory === filterValue;

          if (shouldShow) {
            card.style.display = 'flex';
            // Trigger reflow
            card.offsetHeight;
            // Animate in
            card.style.transition = 'opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
          } else {
            card.style.display = 'none';
          }
        });
      }, 180);
    });
  });

  // Project row thumbnail hover effect: on mousemove over a row, compute
  // cursor position relative to the row bounds and write --tiltX/--tiltY
  // (consumed by the thumb's perspective rotateX/rotateY) plus --thumbY,
  // which lets the thumbnail track the cursor's vertical position instead
  // of sitting frozen at the row's center — clamped so it never drifts
  // past the row's own height. Skipped for touch devices (no hover) and
  // prefers-reduced-motion.
  const isTouch = !window.matchMedia('(hover: hover)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isTouch && !prefersReducedMotion) {
    projectCards.forEach(row => {
      const thumb = row.querySelector('.project-row-thumb');
      if (!thumb) return;

      row.addEventListener('mousemove', (e) => {
        const rect = row.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        const tiltStrength = 10;
        thumb.style.setProperty('--tiltX', `${(-py * tiltStrength).toFixed(2)}deg`);
        thumb.style.setProperty('--tiltY', `${(px * tiltStrength).toFixed(2)}deg`);

        const thumbHeight = thumb.offsetHeight || 150;
        const maxDrift = Math.max(0, (rect.height - thumbHeight) / 2);
        const cursorOffsetFromCenter = e.clientY - rect.top - rect.height / 2;
        const thumbY = Math.max(-maxDrift, Math.min(maxDrift, cursorOffsetFromCenter * 0.5));
        thumb.style.setProperty('--thumbY', `${thumbY.toFixed(1)}px`);
      });

      row.addEventListener('mouseleave', () => {
        thumb.style.setProperty('--tiltX', '0deg');
        thumb.style.setProperty('--tiltY', '0deg');
        thumb.style.setProperty('--thumbY', '0px');
      });
    });
  }

  // ==========================================================================
  // ADVANCED VANILLA INTERACTION SCRIPTS
  // ==========================================================================

  // 6. SCROLL PROGRESS TRACKER
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const handleScrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = scrolled + '%';
    }
  };
  window.addEventListener('scroll', handleScrollProgress);

  // 6a. HERO VIDEO — CONDITIONAL/DEFERRED LOAD. This is a 13.5MB file; on a
  // narrow viewport, a metered/slow connection, or reduced-motion it's skipped
  // entirely (the existing glowing-blob gradient behind it is the fallback
  // look for that case). Otherwise it's still not fetched until after the
  // browser's next idle point, so it never competes with first paint / the
  // JS bundle for bandwidth.
  const heroVideoEl = document.getElementById('hero-bg-video');
  if (heroVideoEl) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // 900px matches the site's actual mobile breakpoint (nav-menu/hamburger
    // switch here too) -- this used to be 768px, a stray threshold that let
    // wider phones/phablets/small tablets (769-900px) get the mobile nav but
    // still fetch the video.
    const isNarrowViewport = window.matchMedia('(max-width: 900px)').matches;
    const isSlowConnection = connection && (connection.saveData || /2g/.test(connection.effectiveType || ''));

    if (!prefersReducedMotion && !isNarrowViewport && !isSlowConnection) {
      const loadHeroVideo = () => {
        const source = document.createElement('source');
        source.src = '/videos/hero-video.mp4';
        source.type = 'video/mp4';
        heroVideoEl.appendChild(source);
        heroVideoEl.load();
        heroVideoEl.play().catch(() => {});
      };
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadHeroVideo, { timeout: 3000 });
      } else {
        window.addEventListener('load', () => setTimeout(loadHeroVideo, 300));
      }
    }
  }

  // 6b. HERO VIDEO PARALLAX — video scrolls slower than the page and fades
  // out as the hero leaves the viewport, instead of scrolling 1:1 with the content.
  const heroVideo = document.getElementById('hero-bg-video');
  const heroSection = heroVideo ? heroVideo.closest('.hero') : null;
  let parallaxTicking = false;
  const handleHeroParallax = () => {
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
    heroVideo.style.transform = `translate(-50%, -50%) translateY(${progress * 60}px)`;
    heroVideo.style.opacity = String(1 - progress * 0.7);
    parallaxTicking = false;
  };
  const onScrollForParallax = () => {
    if (!parallaxTicking) {
      requestAnimationFrame(handleHeroParallax);
      parallaxTicking = true;
    }
  };
  if (heroVideo && heroSection) {
    window.addEventListener('scroll', onScrollForParallax, { passive: true });
    handleHeroParallax();
  }

  // 6c. HEADER SCROLL STATE — header starts transparent/glass over the fullscreen
  // hero video, then picks up its normal solid/blurred look once you scroll past it.
  const headerEl = document.querySelector('.header');
  const handleHeaderScrollState = () => {
    if (!headerEl) return;
    headerEl.classList.toggle('header-scrolled', window.scrollY > 60);
  };
  if (headerEl) {
    window.addEventListener('scroll', handleHeaderScrollState, { passive: true });
    handleHeaderScrollState();
  }

  // ==========================================================================
  // 9. PLAY INTRO SHOWCASE MODAL LOGIC
  // ==========================================================================
  const playIntroBtn = document.getElementById('play-intro-btn');
  const showcaseModal = document.getElementById('showcase-modal');
  const closeShowcaseBtn = document.getElementById('close-showcase-btn');

  if (playIntroBtn && showcaseModal && closeShowcaseBtn) {
    playIntroBtn.addEventListener('click', () => {
      showcaseModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeIntro = () => {
      showcaseModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeShowcaseBtn.addEventListener('click', closeIntro);
    showcaseModal.addEventListener('click', (e) => {
      if (e.target === showcaseModal) closeIntro();
    });
  }

  // Pricing overview modal — clicking (or Enter/Space on) any plan's
  // price opens a shared modal summarizing every tier in brief.
  const pricingModal = document.getElementById('pricing-modal');
  const closePricingBtn = document.getElementById('close-pricing-modal-btn');
  const pricingTriggers = document.querySelectorAll('.pricing-price');
  let handlePricingModalKeydown = null;

  if (pricingModal && closePricingBtn && pricingTriggers.length) {
    const openPricingModal = () => {
      pricingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      closePricingBtn.focus();
    };

    const closePricingModal = () => {
      pricingModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    pricingTriggers.forEach((el) => {
      el.addEventListener('click', openPricingModal);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPricingModal();
        }
      });
    });

    closePricingBtn.addEventListener('click', closePricingModal);
    pricingModal.addEventListener('click', (e) => {
      if (e.target === pricingModal) closePricingModal();
    });
    handlePricingModalKeydown = (e) => {
      if (e.key === 'Escape' && pricingModal.classList.contains('active')) closePricingModal();
    };
    document.addEventListener('keydown', handlePricingModalKeydown);
  }

  // 10. BACK-BUTTON / bfcache SYSTEM RESTORE FIX
  const handlePageshow = (event) => {
    // Force evaluation of visible elements when returning to page
    const scrollReveal = () => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inViewport = (
          rect.top < window.innerHeight &&
          rect.bottom > 0
        );
        if (inViewport) {
          el.classList.add('is-visible');
          if (el.classList.contains('about-right')) {
            startStatsCounterAnimation();
          }
          if (el.classList.contains('process-flow-container')) {
            const line = el.querySelector('#process-line-progress');
            if (line) {
              line.style.width = '100%';
              line.style.height = '100%';
            }
            const steps = el.querySelectorAll('.process-step');
            steps.forEach((step, idx) => {
              setTimeout(() => step.classList.add('active'), idx * 280);
            });
          }
        }
      });
    };

    // Re-align active filter tab underline
    const activeBtn = filterWrapper.querySelector('.filter-btn.active');
    if (activeBtn) {
      updateUnderline(activeBtn);

      // Synchronize card display/opacity states to match active filter
      const filterValue = activeBtn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = filterValue === 'all' || cardCategory === filterValue;
        if (shouldShow) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95) translateY(10px)';
        }
      });
    }

    // Run initial viewport reveal check and trigger scroll update
    scrollReveal();
    window.dispatchEvent(new Event('scroll'));

    // FLOATING CTA BUTTON: show after scrolling past hero
    (function () {
      const floatingCta = document.getElementById('floating-cta');
      if (!floatingCta) return;
      const heroThreshold = window.innerHeight * 0.85;

      function updateFloatingCta() {
        const scrollY = window.scrollY || window.pageYOffset;
        const contactSection = document.getElementById('contact');
        const contactTop = contactSection ? contactSection.getBoundingClientRect().top + scrollY : Infinity;
        const nearContact = scrollY + window.innerHeight >= contactTop - 80;
        if (scrollY > heroThreshold && !nearContact) {
          floatingCta.classList.add('is-visible');
        } else {
          floatingCta.classList.remove('is-visible');
        }
      }

      window.addEventListener('scroll', updateFloatingCta, { passive: true });
      window.addEventListener('pageshow', function (e) {
        if (e.persisted) updateFloatingCta();
      });
      updateFloatingCta();
    })();
  };
  window.addEventListener('pageshow', handlePageshow);

  // FAQ Accordion Trigger Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });



  // Contact Form Validation & Submission Handler
  const contactForm = document.getElementById('contact-form');
  const formStatusMsg = document.getElementById('form-status-msg');

  if (contactForm && formStatusMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const projectSelect = document.getElementById('form-project');
      const budgetSelect = document.getElementById('form-budget');
      const messageTextarea = document.getElementById('form-message');
      const btn = contactForm.querySelector('.form-submit-btn');

      // Reset status styles
      formStatusMsg.style.display = 'none';
      formStatusMsg.innerHTML = '';
      formStatusMsg.style.backgroundColor = '';
      formStatusMsg.style.color = '';
      formStatusMsg.style.border = '';

      // Client-side validations
      let errors = [];

      if (!nameInput.value.trim()) {
        errors.push('Please enter your name.');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        errors.push('Please enter a valid email address.');
      }

      if (!projectSelect.value) {
        errors.push('Please select a project type.');
      }

      if (!budgetSelect.value) {
        errors.push('Please select a budget tier.');
      }

      if (!messageTextarea.value.trim()) {
        errors.push('Please provide a project description.');
      }

      if (errors.length > 0) {
        formStatusMsg.style.display = 'block';
        formStatusMsg.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
        formStatusMsg.style.color = '#E74C3C';
        formStatusMsg.style.border = '1px solid rgba(231, 76, 60, 0.2)';
        formStatusMsg.innerHTML = errors.join('<br>');
        return;
      }

      // Real submission: goes through the shared submitContactForm helper,
      // which inserts the lead into Supabase (data you own) and sends an
      // email notification via EmailJS, reading real credentials from Vite
      // env vars instead of hardcoding them here.
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Sending Request...';
      btn.disabled = true;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const project = projectSelect.value;
      const budget = budgetSelect.value;
      const message = messageTextarea.value.trim();
      const projectLabel = projectSelect.options[projectSelect.selectedIndex].text;
      const budgetLabel = budgetSelect.options[budgetSelect.selectedIndex].text;

      submitContactForm({ name, email, project, projectLabel, budget, budgetLabel, message }).then((dbOk) => {
        if (dbOk) {
          contactForm.reset();
          window.location.href = '/thank-you';
          return;
        }

        formStatusMsg.style.display = 'block';
        formStatusMsg.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
        formStatusMsg.style.color = '#E74C3C';
        formStatusMsg.style.border = '1px solid rgba(231, 76, 60, 0.2)';
        formStatusMsg.innerHTML = 'Something went wrong sending your request. Please try again or email us directly.';

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.style.backgroundColor = '';
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 3000);
      });
    });
  }

  // Cleanup: remove the window/document-level listeners registered above so
  // navigating away via React Router doesn't leak them. (Listeners attached
  // to elements inside this page's own markup don't need explicit removal —
  // the whole subtree unmounts with the page.) Note: the nested 'scroll' and
  // 'pageshow' listeners created inside handlePageshow's IIFE (for the
  // floating CTA button) are re-created on every pageshow event, matching
  // the original script's behavior exactly — they aren't individually
  // tracked/removed here, same as in the original vanilla implementation.
  return function cleanupHomeBehavior() {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScrollProgress);
    window.removeEventListener('scroll', onScrollForParallax);
    window.removeEventListener('scroll', handleHeaderScrollState);
    window.removeEventListener('pageshow', handlePageshow);
    if (handlePricingModalKeydown) {
      document.removeEventListener('keydown', handlePricingModalKeydown);
    }
  };
}
