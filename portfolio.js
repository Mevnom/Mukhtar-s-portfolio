// Smooth scrolling to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Light animations on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
});



function openLinkWithButton() {
  var link = document.createElement("button");
  link.href = "https://www.delta-car.com";
  link.target = "_blank"; // Open in a new tab
  link.click();
}

// Carousel dots + snapping - robust version
(function () {
  const container = document.getElementById('scrollContainer');
  if (!container) return;

  const items = Array.from(container.querySelectorAll('.item'));
  const dotsContainer = document.getElementById('dots');

  // Build dots dynamically (always in sync with items)
  dotsContainer.innerHTML = '';
  items.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

  // Helper: set active dot
  function setActiveDot(index) {
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  // Update active dot on scroll (uses requestAnimationFrame for smoother updates)
  let rafPending = false;
  container.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    window.requestAnimationFrame(() => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveDot(index);
      rafPending = false;
    });
  });

  // Clicking a dot scrolls to that slide
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const i = Number(dot.dataset.index);
      container.scrollTo({ left: i * container.clientWidth, behavior: 'smooth' });
    });
  });

  // On resize ensure we snap to nearest slide (prevents half-slides on resize)
  window.addEventListener('resize', () => {
    const index = Math.round(container.scrollLeft / container.clientWidth);
    container.scrollTo({ left: index * container.clientWidth });
  });

  // Ensure first slide is visible on load
  window.addEventListener('load', () => {
    container.scrollLeft = 0;
    setActiveDot(0);
  });

  // Optional: keyboard controls when wrapper is focused
  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = Math.min(dots.length - 1, Math.round(container.scrollLeft / container.clientWidth) + 1);
      container.scrollTo({ left: next * container.clientWidth, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = Math.max(0, Math.round(container.scrollLeft / container.clientWidth) - 1);
      container.scrollTo({ left: prev * container.clientWidth, behavior: 'smooth' });
    }
  });
})();

// === Auto-scroll Carousel when visible ===
// === Auto-scroll Carousel when visible ===
(function () {
  const container = document.getElementById('scrollContainer');
  if (!container) return;

  const items = container.querySelectorAll('.card');
  let currentIndex = 0;
  let autoScrollInterval;
  const scrollDuration = 4000; // scroll every 4 seconds

  // Function to scroll to the next slide
  function scrollNext() {
    currentIndex = (currentIndex + 1) % items.length;
    container.scrollTo({
      left: currentIndex * container.clientWidth,
      behavior: 'smooth'
    });
  }

  // Helper: start/stop auto-scroll
  function startAutoScroll() {
    if (!autoScrollInterval) {
      autoScrollInterval = setInterval(scrollNext, scrollDuration);
    }
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }

  // Start auto-scroll when carousel is in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(container);

  // ✅ Stop scrolling when user hovers on a card
  items.forEach(item => {
    item.addEventListener('mouseenter', stopAutoScroll);
    item.addEventListener('mouseleave', startAutoScroll);
  });
})();



/* include modern EmailJS SDK */

// Init
emailjs.init("ytEB6oEPHjw2hdirK"); // your public key

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 1) Populate timestamp in hidden input before sending
  const timeInput = document.getElementById("time");
  const now = new Date();
  // Format e.g. "Oct 17, 2025 — 19:45 (GMT+01:00)"
  const formatted = now.toLocaleString(undefined, {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit", hour12: false,
    timeZoneName: "short"
  });
  timeInput.value = formatted;

  // 2) Send the form
  console.log("Timestamp:", timeInput.value);

  emailjs.sendForm("service_pi8k6io", "template_x4hcr2g", this)
    .then(() => {
      alert("✅ Project Booked Successfully! Looking forward to working with you ✨");
      form.reset();
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      alert("❌ Failed to send message. Please try again later.");
    });
});

// Smooth scroll to booking section when "Book Project" buttons are clicked
document.querySelectorAll('.book').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('booking-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.cta').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('booking-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

