/* ============================================
   SEAN MARTIN — COMMERCIAL DIRECTOR
   Portfolio Scripts
   ============================================ */

// --- Project Data ---
const projects = [
  {
    id: 'get-down',
    title: 'Get Down with Your Judgement Free Self',
    client: 'Planet Fitness',
    tag: 'Live Action',
    category: 'live-action',
    description: 'A high-energy celebration of self-expression and the freedom to move without fear of judgement. This campaign channels the raw, uninhibited joy of working out on your own terms — bold, loud, and unapologetically fun.',
    vimeoId: '307365841',
    year: '2024',
    role: 'Director',
    color: '#ff6a00'
  },
  {
    id: 'qled',
    title: 'QLED',
    client: 'Samsung',
    tag: 'Live Action',
    category: 'live-action',
    description: 'A visually immersive piece designed to showcase the depth and clarity of Samsung\'s QLED technology. Every frame was crafted to push the boundaries of color and contrast, turning a product story into a sensory experience.',
    vimeoId: '213008525',
    year: '2024',
    role: 'Director',
    color: '#ff2d7c'
  },
  {
    id: 'feel-true-power',
    title: 'Feel True Power',
    client: 'Xbox',
    tag: 'Live Action',
    category: 'live-action',
    description: 'A visceral campaign that bridges the gap between the digital and physical worlds. Shot with a cinematic intensity that matches the power of the console itself, this spot was built to be felt, not just watched.',
    vimeoId: '290306575',
    year: '2023',
    role: 'Director',
    color: '#ff4530'
  },
  {
    id: 'out-of-the-blue',
    title: 'From Out of the Blue',
    client: 'Lowe\'s',
    tag: 'Live Action',
    category: 'live-action',
    description: 'A character-driven narrative about the unexpected moments of inspiration that transform a house into a home. Warm, grounded, and quietly cinematic — proving that the best brand stories feel like real life.',
    vimeoId: '792342138',
    year: '2023',
    role: 'Director',
    color: '#ff6a00'
  },
  {
    id: 'nuveen',
    title: 'Nuveen',
    client: 'Nuveen',
    tag: 'Animation',
    category: 'animation',
    description: 'An abstract animated piece that visualizes the complexity of modern investing with clarity and elegance. Blending motion graphics with a refined visual language, this spot turns financial strategy into something you can feel.',
    vimeoId: '292367373',
    year: '2024',
    role: 'Director',
    color: '#ff2d7c'
  },
  {
    id: 'target-circle',
    title: 'Target Circle',
    client: 'Target',
    tag: 'Animation',
    category: 'animation',
    description: 'A vibrant, graphic-driven animation introducing Target\'s loyalty program with energy and personality. Bold shapes, dynamic transitions, and a rhythm that keeps you locked in from the first frame to the last.',
    vimeoId: '487617633',
    year: '2023',
    role: 'Director',
    color: '#ff4530'
  }
];

// --- Utility: Get Project by ID ---
function getProject(id) {
  return projects.find(p => p.id === id);
}

function getProjectIndex(id) {
  return projects.findIndex(p => p.id === id);
}

function getNextProject(id) {
  const idx = getProjectIndex(id);
  return projects[(idx + 1) % projects.length];
}

function getPrevProject(id) {
  const idx = getProjectIndex(id);
  return projects[(idx - 1 + projects.length) % projects.length];
}

// --- Loader ---
function initLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      initRevealAnimations();
    }, 600);
  });
}

// --- Custom Cursor ---
function initCursor() {
  const cursor = document.querySelector('.cursor');
  if (!cursor || window.innerWidth < 769) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  const hoverTargets = document.querySelectorAll('a, button, .project-card-link');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}

// --- Nav Hide on Scroll ---
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll && currentScroll > 200) {
          nav.classList.add('hidden');
        } else {
          nav.classList.remove('hidden');
        }
        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
}

// --- Scroll Reveal ---
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal, .project-card');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// --- Filter Projects ---
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.classList.remove('filter-hidden');
          setTimeout(() => {
            card.classList.add('visible');
          }, 50);
        } else {
          card.classList.remove('visible');
          card.classList.add('filter-hidden');
        }
      });
    });
  });
}

// --- Parallax on Hero ---
function initParallax() {
  const bgText = document.querySelector('.hero-bg-text');
  const bleedTitle = document.querySelector('.hero-bleed-title');
  if (!bgText && !bleedTitle) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (bgText) {
      bgText.style.transform = `translateY(calc(-55% + ${scrollY * 0.15}px))`;
    }
    if (bleedTitle) {
      bleedTitle.style.transform = `translateY(${scrollY * 0.08}px)`;
    }
  });
}

// --- Build Homepage ---
function buildHomepage() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  // Hero featured project
  const featured = projects[0];
  const heroTitle = document.querySelector('.hero-title');
  const heroClient = document.querySelector('.hero-client');
  const heroCta = document.querySelector('.hero-cta');
  const bleedTitle = document.querySelector('.hero-bleed-title');
  const bgText = document.querySelector('.hero-bg-text');

  const heroMediaLink = document.querySelector('.hero-cta-wrap');
  if (heroTitle) heroTitle.innerHTML = featured.title.split(' ').map((w, i) => i === 0 ? `<span class="gradient-word">${w}</span>` : w).join('<br>');
  if (heroClient) heroClient.textContent = `Client — ${featured.client}`;
  if (heroMediaLink) heroMediaLink.setAttribute('href', `project.html?id=${featured.id}`);
  if (heroCta) heroCta.setAttribute('href', `project.html?id=${featured.id}`);
  if (bleedTitle) bleedTitle.textContent = featured.title;
  if (bgText) bgText.textContent = 'Director';

  // Project cards (skip first since it's featured)
  projects.forEach((project, i) => {
    const num = String(i + 1).padStart(2, '0');
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;
    card.innerHTML = `
      <a class="project-card-link" href="project.html?id=${project.id}">
        <div class="project-card-media">
          <img src="https://vumbnail.com/${project.vimeoId}.jpg" alt="${project.title}" loading="lazy">
          <div class="project-card-overlay">
            <span>View Project</span>
          </div>
        </div>
        <div class="project-card-info">
          <div class="project-card-number">${num}</div>
          <h3 class="project-card-title">${project.title}</h3>
          <div class="project-card-meta">
            <span>${project.client}</span>
            <span class="divider"></span>
            <span>${project.year}</span>
          </div>
          <span class="project-card-tag">${project.tag}</span>
        </div>
      </a>
    `;
    grid.appendChild(card);
  });
}

// --- Build Project Page ---
function buildProjectPage() {
  const page = document.querySelector('.project-page');
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  const project = getProject(projectId);

  if (!project) {
    window.location.href = 'index.html';
    return;
  }

  document.title = `${project.title} — Sean Martin`;

  // Fill content
  const bleed = page.querySelector('.project-hero-bleed');
  const tag = page.querySelector('.project-hero-tag');
  const title = page.querySelector('.project-hero-title');
  const desc = page.querySelector('.project-description');
  const videoWrapper = page.querySelector('.video-wrapper');

  if (bleed) bleed.textContent = project.title;
  if (tag) tag.textContent = `${project.client} / ${project.tag}`;
  if (title) {
    const words = project.title.split(' ');
    title.innerHTML = words.map((w, i) => i === words.length - 1 ? `<span class="gradient-word">${w}</span>` : w).join(' ');
  }
  if (desc) desc.textContent = project.description;

  // Meta
  const metaValues = page.querySelectorAll('.project-meta-value');
  if (metaValues.length >= 3) {
    metaValues[0].textContent = project.client;
    metaValues[1].textContent = project.role;
    metaValues[2].textContent = project.year;
  }

  // Video facade
  if (videoWrapper) {
    // Show loading state
    videoWrapper.innerHTML = '<div class="video-facade-loading"></div>';

    // Fetch thumbnail from Vimeo oEmbed API
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${project.vimeoId}`)
      .then(res => res.json())
      .then(data => {
        // Use highest resolution thumbnail available
        const thumbUrl = data.thumbnail_url_with_play_button
          ? data.thumbnail_url.replace(/_\d+x\d+/, '_1280x720')
          : data.thumbnail_url;

        videoWrapper.innerHTML = `
          <div class="video-facade" role="button" tabindex="0" aria-label="Play video">
            <img class="video-facade-thumb" src="${thumbUrl}" alt="${project.title}">
            <div class="video-facade-play">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff6a00"/>
                    <stop offset="100%" stop-color="#ff2d7c"/>
                  </linearGradient>
                  <mask id="tri-cut">
                    <rect width="64" height="64" fill="white"/>
                    <polygon points="26,20 26,44 46,32" fill="black"/>
                  </mask>
                </defs>
                <circle cx="32" cy="32" r="31" fill="url(#grad)" mask="url(#tri-cut)"/>
              </svg>
            </div>
          </div>
        `;

        // Click to replace with autoplay iframe
        const facade = videoWrapper.querySelector('.video-facade');
        function launchVideo() {
          videoWrapper.innerHTML = `<iframe src="https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="562" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
        }
        facade.addEventListener('click', launchVideo);
        facade.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            launchVideo();
          }
        });
      })
      .catch(() => {
        // Fallback: use vumbnail thumbnail
        videoWrapper.innerHTML = `
          <div class="video-facade" role="button" tabindex="0" aria-label="Play video">
            <img class="video-facade-thumb" src="https://vumbnail.com/${project.vimeoId}.jpg" alt="${project.title}">
            <div class="video-facade-play">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff6a00"/>
                    <stop offset="100%" stop-color="#ff2d7c"/>
                  </linearGradient>
                  <mask id="tri-cut">
                    <rect width="64" height="64" fill="white"/>
                    <polygon points="26,20 26,44 46,32" fill="black"/>
                  </mask>
                </defs>
                <circle cx="32" cy="32" r="31" fill="url(#grad)" mask="url(#tri-cut)"/>
              </svg>
            </div>
          </div>
        `;
        const facade = videoWrapper.querySelector('.video-facade');
        facade.addEventListener('click', () => {
          videoWrapper.innerHTML = `<iframe src="https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="562" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
        });
      });
  }

  // Prev/Next
  const prev = getPrevProject(projectId);
  const next = getNextProject(projectId);
  const prevLink = page.querySelector('.project-nav-link.prev');
  const nextLink = page.querySelector('.project-nav-link.next');

  if (prevLink) {
    prevLink.setAttribute('href', `project.html?id=${prev.id}`);
    prevLink.querySelector('.project-nav-title').textContent = prev.title;
  }
  if (nextLink) {
    nextLink.setAttribute('href', `project.html?id=${next.id}`);
    nextLink.querySelector('.project-nav-title').textContent = next.title;
  }
}

// --- Smooth Scroll for Anchor Links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// --- Magnetic Hover Effect on CTAs ---
function initMagneticElements() {
  if (window.innerWidth < 769) return;
  const elements = document.querySelectorAll('.hero-cta, .filter-btn');
  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  initLoader();
  initCursor();
  initNavScroll();
  initSmoothScroll();
  initParallax();

  // Detect page
  if (document.querySelector('.projects-grid')) {
    buildHomepage();
    initFilters();
  }
  if (document.querySelector('.project-page')) {
    buildProjectPage();
  }

  // Delayed inits
  setTimeout(() => {
    initMagneticElements();
    initRevealAnimations();
  }, 800);
});
