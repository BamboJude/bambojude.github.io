// FutureVision Photography Template - JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Loading Screen
  const loading = document.querySelector(".loading");
  if (loading) {
    setTimeout(() => {
      loading.style.opacity = "0";
      setTimeout(() => {
        loading.style.display = "none";
      }, 500);
    }, 2000);
  }

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar Background on Scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(5, 5, 5, 0.95)";
      } else {
        navbar.style.background = "rgba(10, 10, 10, 0.9)";
      }
    });
  }

  // Portfolio Filter Functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
          item.style.animation = "fadeInUp 0.6s ease-out";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Animated Counter for Stats
  const statNumbers = document.querySelectorAll(".stat-number");
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalNumber = parseInt(target.getAttribute("data-count"));
        animateCounter(target, finalNumber);
        statsObserver.unobserve(target);
      }
    });
  }, observerOptions);

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat);
  });

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent =
        Math.floor(current) + (element.textContent.includes("+") ? "+" : "");
    }, 20);
  }

  // Glitch Effect for Logo
  const glitchElement = document.querySelector(".glitch");
  if (glitchElement) {
    setInterval(() => {
      glitchElement.style.animation = "none";
      setTimeout(() => {
        glitchElement.style.animation = "glitch 2s infinite";
      }, Math.random() * 5000 + 2000);
    }, 8000);
  }

  // Particle Animation
  function createParticles() {
    const particleContainer = document.querySelector(".animated-bg");
    if (!particleContainer) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = Math.random() * 3 + 3 + "s";
      particleContainer.appendChild(particle);
    }
  }

  createParticles();

  // Form Validation and Submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Basic validation
      if (!formObject.name || !formObject.email || !formObject.message) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }

      if (!isValidEmail(formObject.email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
      }

      // Simulate form submission
      showNotification(
        "Message sent successfully! We'll get back to you soon.",
        "success"
      );
      this.reset();
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    });

    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.classList.remove("show");
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }
    }, 5000);
  }

  // Scroll Animations
  const animatedElements = document.querySelectorAll(
    ".portfolio-card, .service-card, .stat-card"
  );

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    scrollObserver.observe(el);
  });

  // Hologram Rotation Control
  const hologramFrame = document.querySelector(".hologram-frame");
  if (hologramFrame) {
    let isHovered = false;

    hologramFrame.addEventListener("mouseenter", () => {
      isHovered = true;
      hologramFrame.style.animationPlayState = "paused";
    });

    hologramFrame.addEventListener("mouseleave", () => {
      isHovered = false;
      hologramFrame.style.animationPlayState = "running";
    });

    hologramFrame.addEventListener("click", () => {
      hologramFrame.style.animation = "none";
      setTimeout(() => {
        hologramFrame.style.animation = "rotate 10s linear infinite";
      }, 100);
    });
  }

  // Tech Lines Animation Control
  const techLines = document.querySelectorAll(".tech-line");
  techLines.forEach((line, index) => {
    line.addEventListener("mouseenter", () => {
      line.style.animationPlayState = "paused";
      line.style.opacity = "1";
      line.style.width = "95%";
    });

    line.addEventListener("mouseleave", () => {
      line.style.animationPlayState = "running";
    });
  });

  // Button Glow Effects
  const buttons = document.querySelectorAll(".btn, .filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      const glow = this.querySelector(".btn-glow, .filter-glow");
      if (glow) {
        glow.style.left = "100%";
      }
    });

    btn.addEventListener("mouseleave", function () {
      const glow = this.querySelector(".btn-glow, .filter-glow");
      if (glow) {
        setTimeout(() => {
          glow.style.left = "-100%";
        }, 500);
      }
    });
  });

  // Keyboard Navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    }
  });

  // Performance Optimization - Throttle Scroll Events
  let ticking = false;

  function updateOnScroll() {
    // Add any scroll-based animations here
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  });

  // Add CSS for notifications
  const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--card-bg);
            border: 1px solid var(--primary-color);
            border-radius: 10px;
            padding: 1rem;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
            max-width: 300px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-color: var(--accent-color);
            color: var(--accent-color);
        }
        
        .notification.error {
            border-color: var(--secondary-color);
            color: var(--secondary-color);
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--bg-darker);
                border-top: 1px solid var(--primary-color);
                padding: 2rem;
                gap: 1rem;
            }
            
            .hamburger.active .bar:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            
            .hamburger.active .bar:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active .bar:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = notificationStyles;
  document.head.appendChild(styleSheet);

  console.log("FutureVision Photography Template Loaded Successfully! 🚀");
});
