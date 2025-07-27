// SoundWave Musician Template - JavaScript
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
        navbar.style.background = "rgba(10, 10, 10, 0.98)";
      } else {
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
      }
    });
  }

  // Music Player Functionality
  const playPauseBtn = document.querySelector(".play-pause");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const progressBar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  const currentTimeSpan = document.querySelector(".current-time");
  const totalTimeSpan = document.querySelector(".total-time");
  const trackTitle = document.querySelector(".track-title");
  const trackArtist = document.querySelector(".track-artist");

  let isPlaying = false;
  let currentTrack = 0;
  let currentTime = 0;
  let duration = 225; // 3:45 in seconds

  const tracks = [
    {
      title: "Midnight Pulse",
      artist: "Alex Rodriguez",
      duration: 225,
      genre: "Progressive House",
    },
    {
      title: "Electric Dreams",
      artist: "Alex Rodriguez",
      duration: 252,
      genre: "Techno",
    },
    {
      title: "Neon Nights",
      artist: "Alex Rodriguez",
      duration: 323,
      genre: "Deep House",
    },
  ];

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  function updateProgress() {
    if (isPlaying) {
      currentTime += 1;
      if (currentTime >= duration) {
        currentTime = 0;
        nextTrack();
      }
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
      currentTimeSpan.textContent = formatTime(currentTime);
    }
  }

  function loadTrack(index) {
    const track = tracks[index];
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    duration = track.duration;
    totalTimeSpan.textContent = formatTime(duration);
    currentTime = 0;
    progress.style.width = "0%";
    currentTimeSpan.textContent = "0:00";

    // Update active track card
    document.querySelectorAll(".track-card").forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  }

  function togglePlayPause() {
    isPlaying = !isPlaying;
    const icon = playPauseBtn.querySelector("i");
    if (isPlaying) {
      icon.className = "fas fa-pause";
      playPauseBtn.style.background = "var(--primary-color)";
    } else {
      icon.className = "fas fa-play";
      playPauseBtn.style.background = "var(--primary-color)";
    }
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", togglePlayPause);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", nextTrack);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevTrack);
  }

  if (progressBar) {
    progressBar.addEventListener("click", (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progressPercent = clickX / rect.width;
      currentTime = progressPercent * duration;
      progress.style.width = `${progressPercent * 100}%`;
      currentTimeSpan.textContent = formatTime(currentTime);
    });
  }

  // Update progress every second
  setInterval(updateProgress, 1000);

  // Track Card Play Buttons
  document.querySelectorAll(".play-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentTrack = index;
      loadTrack(currentTrack);
      if (!isPlaying) {
        togglePlayPause();
      }
    });
  });

  // Video Play Buttons
  document.querySelectorAll(".video-play-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Simulate video play
      showNotification(
        "Video would play here in a real implementation",
        "info"
      );
    });
  });

  // Notify Me Button
  document.querySelectorAll(".notify-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showNotification(
        "You'll be notified when this track is released!",
        "success"
      );
    });
  });

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
        "Booking request sent successfully! We'll get back to you within 24 hours.",
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
    ".track-card, .video-card, .show-card, .booking-card, .achievement"
  );

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in", "visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    scrollObserver.observe(el);
  });

  // DJ Console Interactions
  const vinyls = document.querySelectorAll(".vinyl");
  vinyls.forEach((vinyl) => {
    vinyl.addEventListener("click", () => {
      vinyl.style.animationPlayState =
        vinyl.style.animationPlayState === "paused" ? "running" : "paused";
    });
  });

  // Knob Interactions
  const knobs = document.querySelectorAll(".knob");
  knobs.forEach((knob) => {
    let rotation = 0;
    knob.addEventListener("click", () => {
      rotation += 45;
      knob.style.transform = `rotate(${rotation}deg)`;
    });
  });

  // Streaming Link Interactions
  document.querySelectorAll(".stream-link, .stream-btn").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const platform = link.classList.contains("spotify")
        ? "Spotify"
        : link.classList.contains("apple")
        ? "Apple Music"
        : link.classList.contains("youtube")
        ? "YouTube"
        : "SoundCloud";
      showNotification(`Opening ${platform}...`, "info");
    });
  });

  // Show Info Buttons
  document.querySelectorAll(".info-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showNotification("Show details would be displayed here", "info");
    });
  });

  // Ticket Buttons
  document.querySelectorAll(".ticket-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showNotification("Redirecting to ticket vendor...", "info");
    });
  });

  // Audio Visualizer Animation Control
  const audioVisualizer = document.querySelector(".audio-visualizer");
  if (audioVisualizer) {
    const bars = audioVisualizer.querySelectorAll(".bar");

    function updateVisualizerBasedOnMusic() {
      if (isPlaying) {
        bars.forEach((bar) => {
          bar.style.animationPlayState = "running";
        });
      } else {
        bars.forEach((bar) => {
          bar.style.animationPlayState = "paused";
        });
      }
    }

    // Update visualizer when play state changes
    if (playPauseBtn) {
      playPauseBtn.addEventListener("click", () => {
        setTimeout(updateVisualizerBasedOnMusic, 100);
      });
    }
  }

  // Keyboard Navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    }

    // Music player keyboard controls
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      if (playPauseBtn) {
        togglePlayPause();
      }
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextTrack();
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevTrack();
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

  // Initialize first track
  loadTrack(0);

  // Add CSS for notifications and mobile menu
  const additionalStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--card-bg);
            border: 1px solid var(--primary-color);
            border-radius: 15px;
            padding: 1rem;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            backdrop-filter: blur(20px);
            max-width: 350px;
            box-shadow: var(--shadow-glow);
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
        
        .notification.info {
            border-color: var(--highlight-color);
            color: var(--highlight-color);
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
            transition: var(--transition);
        }
        
        .notification-close:hover {
            transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--bg-dark);
                border-top: 1px solid var(--primary-color);
                padding: 2rem;
                gap: 1rem;
                box-shadow: var(--shadow-glow);
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
            
            .notification {
                max-width: 300px;
                right: 10px;
                top: 10px;
            }
        }
        
        /* Enhanced hover effects */
        .track-card:hover .play-overlay {
            opacity: 1;
        }
        
        .video-card:hover .video-overlay {
            opacity: 1;
        }
        
        .artist-image:hover .image-overlay {
            opacity: 1;
        }
        
        /* Pulse animation for active elements */
        .track-card.active {
            animation: pulse 2s ease-in-out infinite;
        }
        
        .vinyl.spinning {
            box-shadow: 0 0 20px var(--primary-color);
        }
        
        /* Loading animation enhancements */
        .loading {
            background: linear-gradient(135deg, var(--bg-dark) 0%, var(--secondary-color) 100%);
        }
        
        .vinyl-record {
            box-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
        }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = additionalStyles;
  document.head.appendChild(styleSheet);

  console.log("SoundWave Musician Template Loaded Successfully! 🎵");
});
