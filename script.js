/**
 * Vinay Yadav - Software Engineer Portfolio
 * Interactive Functionality & Animations
 */

// Project Data Store for Rich Architecture Modals
const projectData = {
  loanstream: {
    title: "LoanStream — FinTech Automated Lending & Underwriting Engine",
    badge: "Freelance Project",
    badgeClass: "freelance-badge",
    category: "FinTech / Distributed Systems",
    summary: "A next-generation digital lending platform engineered to automate mortgage and loan origination workflows, real-time risk scoring, and multi-lender syndication.",
    techStack: [".NET Core 8", "C#", "Microservices", "RabbitMQ", "Redis Cache", "SQL Server", "Docker", "WebSockets"],
    metrics: [
      { label: "Approval Cycle", value: "65% Faster" },
      { label: "Throughput", value: "Sub-Second Scoring" },
      { label: "Availability", value: "99.95% SLA" }
    ],
    architecture: `
      <div class="modal-arch-title"><i class="fa-solid fa-sitemap"></i> System Architecture & Engineering Highlights</div>
      <p>Architected as an event-driven microservices topology separating public loan application intake, underwriting rule evaluation, credit bureau aggregators, and document validation:</p>
      <ul class="modal-features-list">
        <li><i class="fa-solid fa-check"></i> <strong>Asynchronous Message Bus:</strong> Utilized RabbitMQ with dead-letter exchanges and idempotent consumer handlers to reliably process asynchronous credit bureau pulls and fraud checks.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Multi-Tier Caching & Low-Latency:</strong> Implemented Redis distributed caching for loan underwriting matrix rules and applicant sessions, eliminating redundant SQL queries.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Financial Data Security & PCI Compliance:</strong> Applied AES-256 field-level database encryption for sensitive borrower identifiers and financial statements.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Real-Time WebSockets:</strong> Streamed loan pipeline status transitions directly to borrower and loan officer dashboards.</li>
      </ul>
    `
  },
  complyco: {
    title: "Complyco — Enterprise ERP Compliance & Dynamic Checklist Module",
    badge: "Freelance Project",
    badgeClass: "freelance-badge",
    category: "Enterprise ERP / Full-Stack",
    summary: "An enterprise checklist and compliance verification module built for complex multi-department ERP operations, replacing error-prone manual spreadsheets.",
    techStack: ["Java 17", "Spring Boot", "GraphQL", "Hibernate / JPA", "SQL Server", "Angular", "OAuth2 / RBAC"],
    metrics: [
      { label: "Manual Effort", value: "Reduced by 55%" },
      { label: "Task Discovery", value: "40% Faster" },
      { label: "Active Users", value: "1,000+ Under RBAC" }
    ],
    architecture: `
      <div class="modal-arch-title"><i class="fa-solid fa-sitemap"></i> Architectural Solutions & Impact</div>
      <ul class="modal-features-list">
        <li><i class="fa-solid fa-check"></i> <strong>GraphQL Query Flexibility:</strong> Designed an expressive GraphQL schema enabling the front-end to fetch complex nested checklist hierarchies in a single round-trip.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Fine-Grained RBAC:</strong> Implemented role-based access control protecting confidential audit records and enforcing approval hierarchies across 1,000+ enterprise users.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Scenario-Based Dynamic Filtering:</strong> Developed multi-attribute filtering algorithms allowing managers to drill down into non-compliant tasks instantly.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Third-Party Calendar Sync:</strong> Built bidirectional synchronization with Microsoft Outlook and Google Calendar APIs for automated audit scheduling and deadline reminders.</li>
      </ul>
    `
  },
  "api-dashboard": {
    title: "API Request/Response Visibility & Observability Dashboard",
    badge: "Enterprise System",
    badgeClass: "fulltime-badge",
    category: "Observability / Tooling",
    summary: "Client-facing real-time API debugging portal that enabled support and operations teams to trace, diagnose, and inspect live payload exchanges across 50+ enterprise endpoints.",
    techStack: ["Angular 16", ".NET Core", "GraphQL", "SQL Server", "WebSockets", "RxJS"],
    metrics: [
      { label: "Support Tickets", value: "35% Reduction" },
      { label: "Issue Resolution", value: "30% Faster" },
      { label: "Endpoints Tracked", value: "50+ Live APIs" }
    ],
    architecture: `
      <div class="modal-arch-title"><i class="fa-solid fa-sitemap"></i> Key Engineering Contributions</div>
      <ul class="modal-features-list">
        <li><i class="fa-solid fa-check"></i> <strong>Live Payload Streaming:</strong> Engineered WebSocket channels that streamed sanitized API requests and responses to the front-end in real-time.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Log Querying & Indexing:</strong> Designed composite SQL Server indexes on client identifiers, status codes, and timestamps, cutting log search latency by 40%.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Self-Service Diagnostic Hub:</strong> Built an intuitive UI allowing non-engineering staff to pinpoint client integration errors independently.</li>
      </ul>
    `
  },
  "amazon-fbm": {
    title: "Amazon FBM (Fulfilled by Merchant) High-Volume Ingestion Pipeline",
    badge: "Enterprise System",
    badgeClass: "fulltime-badge",
    category: "E-Commerce / ERP Integration",
    summary: "Mission-critical backend integration engine synchronizing order fulfillment, warehouse stock levels, shipping label generation, and dispatch notifications between Amazon SP-API and AMTERP.",
    techStack: [".NET Core", "C#", "Dapper", "MySQL", "Amazon SP-API", "Docker", "REST"],
    metrics: [
      { label: "Daily Volume", value: "10,000+ Orders" },
      { label: "Throughput Boost", value: "30% Speedup" },
      { label: "Post-Launch Bugs", value: "0 Defects" }
    ],
    architecture: `
      <div class="modal-arch-title"><i class="fa-solid fa-sitemap"></i> High-Throughput Design & Reliability</div>
      <ul class="modal-features-list">
        <li><i class="fa-solid fa-check"></i> <strong>High-Performance Data Ingestion:</strong> Utilized Dapper micro-ORM with batch queries for rapid MySQL inserts, handling intense peak order spikes with minimal memory footprint.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Independent Ownership:</strong> Led the integration through tight deadlines, gathering client specifications and delivering end-to-end functionality on schedule.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Rate-Limiting & Exponential Backoff:</strong> Implemented resilient retry policies around Amazon SP-API throttling limits to prevent data drops.</li>
      </ul>
    `
  },
  "graphql-tool": {
    title: "Automated GraphQL Validation & Mock Testing Suite",
    badge: "Developer Tooling",
    badgeClass: "freelance-badge",
    category: "Testing & DevOps",
    summary: "Internal developer acceleration tool that automated GraphQL schema validation, breaking-change detection, and dynamic mock data generation over live HTTP network calls.",
    techStack: ["TypeScript", "GraphQL", "Prism", "Node.js", "Jest", "Git Hooks"],
    metrics: [
      { label: "Validation Time", value: "Days to Hours (-80%)" },
      { label: "Test Accuracy", value: "+50% Improvement" }
    ],
    architecture: `
      <div class="modal-arch-title"><i class="fa-solid fa-sitemap"></i> Engineering Highlights</div>
      <ul class="modal-features-list">
        <li><i class="fa-solid fa-check"></i> <strong>Dynamic Network Mocking:</strong> Replaced brittle static JSON mocks with Prism-generated dynamic payloads, ensuring integration tests mirrored real production data structures.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Schema Diff Analyzer:</strong> Built an automated analyzer to catch breaking changes in GraphQL query resolvers before deployment.</li>
      </ul>
    `
  },
  "message-hub": {
    title: "Distributed Cache & Event-Driven Streaming Hub",
    badge: "Distributed Architecture",
    badgeClass: "fulltime-badge",
    category: "Distributed Systems",
    summary: "High-throughput messaging and cache management hub designed for decoupled multi-tenant enterprise microservices with high concurrency.",
    techStack: ["Java 17", "Spring Boot", "Apache Kafka", "Redis", "Docker", "Prometheus"],
    metrics: [
      { label: "Latency", value: "< 5ms" },
      { label: "Delivery Guarantee", value: "At-Least-Once" }
    ],
    architecture: `
      <div class="modal-arch-title"><i class="fa-solid fa-sitemap"></i> Distributed System Architecture</div>
      <ul class="modal-features-list">
        <li><i class="fa-solid fa-check"></i> <strong>Partitioned Event Streams:</strong> Built Kafka topic pipelines partitioned by tenant and transaction type to maintain strict event sequencing while scaling horizontal throughput.</li>
        <li><i class="fa-solid fa-check"></i> <strong>Cache Invalidation Protocol:</strong> Implemented publish-subscribe cache invalidation over Redis to ensure zero stale reads across distributed pods.</li>
      </ul>
    `
  }
};

// Typewriter Effect
const typewriterPhrases = [
  "Scalable .NET Core Microservices.",
  "High-Throughput Spring Boot APIs.",
  "Robust Enterprise ERP Integrations.",
  "Event-Driven Distributed Architectures.",
  "FinTech Lending & Underwriting Engines.",
  "Clean, Performant Angular & Full-Stack Apps."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElem = document.getElementById("typewriter");

function typeEffect() {
  if (!typewriterElem) return;
  
  const currentPhrase = typewriterPhrases[phraseIndex];
  
  if (isDeleting) {
    typewriterElem.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElem.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typingSpeed = isDeleting ? 30 : 60;
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
    typingSpeed = 400; // Pause before new word
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// Sticky Header & Active Nav Spy
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function handleScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  const scrollY = window.pageYOffset + 120;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    mobileToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Theme Toggler
const themeToggleBtn = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("vinay_theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("vinay_theme", newTheme);
    showToast(`Switched to ${newTheme} theme`, "info");
  });
}

// Timeline Category Filter Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const timelineItems = document.querySelectorAll(".timeline-item");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const targetCategory = btn.getAttribute("data-tab");
    timelineItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (targetCategory === "all" || itemCategory === targetCategory) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// Projects Filter Buttons
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filterVal = btn.getAttribute("data-filter");
    projectCards.forEach(card => {
      const cardCategories = card.getAttribute("data-category") || "";
      if (filterVal === "all" || cardCategories.includes(filterVal)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Project Deep-Dive Modal
const projectModal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data || !modalContent || !projectModal) return;

  const techBadgesHtml = data.techStack.map(t => `<span class="tech-badge">${t}</span>`).join(" ");
  const metricsHtml = data.metrics.map(m => `
    <div class="impact-metric">
      <span class="impact-val">${m.value}</span>
      <span class="impact-lbl">${m.label}</span>
    </div>
  `).join("");

  modalContent.innerHTML = `
    <div class="modal-header-meta">
      <span class="role-badge ${data.badgeClass}">${data.badge}</span>
      <span class="timeline-date">${data.category}</span>
    </div>
    <h2 class="modal-title" id="modalTitle">${data.title}</h2>
    <p class="role-summary">${data.summary}</p>
    
    <div class="project-impact-metrics" style="margin: 1.25rem 0;">
      ${metricsHtml}
    </div>

    <div class="modal-arch-box">
      ${data.architecture}
    </div>

    <div style="margin-top: 1.5rem;">
      <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Technology Stack</div>
      <div class="project-tech-list">
        ${techBadgesHtml}
      </div>
    </div>
  `;

  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (projectModal) {
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
      closeProjectModal();
    }
  });
}

// Toast Notifications
function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Copy to Clipboard Helper
function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(err => {
    showToast("Failed to copy text", "error");
  });
}

// Copy Code Button
const copyCodeBtn = document.getElementById("copyCodeBtn");
if (copyCodeBtn) {
  copyCodeBtn.addEventListener("click", () => {
    const codeElem = document.querySelector(".terminal-body code");
    if (codeElem) {
      copyToClipboard(codeElem.textContent, "TypeScript interface copied!");
    }
  });
}

// Contact Form Submission Handler (Live Web3Forms Integration)
async function handleFormSubmit(event) {
  event.preventDefault();
  const submitBtn = document.getElementById("submitBtn");
  const form = document.getElementById("contactForm");

  if (!submitBtn || !form) return;

  const originalContent = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>`;

  try {
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: json
    });

    const result = await response.json();

    if (response.status === 200 || result.success) {
      form.reset();
      showToast("Message sent successfully! Please check your inbox / spam.", "success");
    } else {
      showToast(result.message || "Submission failed. Please email directly.", "error");
    }
  } catch (error) {
    showToast("Network error. Please email vinayyadav04091999@gmail.com directly.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalContent;
  }
}

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const currentYearElem = document.getElementById("currentYear");
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }
});
