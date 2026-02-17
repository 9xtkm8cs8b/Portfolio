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
    color: '#ff6a00',
    gridSize: 'wide',
    images: [
      { src: 'https://picsum.photos/seed/pf1/1200/800', caption: 'Hero key art' },
      { src: 'https://picsum.photos/seed/pf2/800/600', caption: 'Styleframe — gym entrance' },
      { src: 'https://picsum.photos/seed/pf3/800/600', caption: 'Styleframe — dance sequence' },
      { src: 'https://picsum.photos/seed/pf4/1200/600', caption: 'Color grading process' },
      { src: 'https://picsum.photos/seed/pf5/800/800', caption: 'Behind the scenes' },
      { src: 'https://picsum.photos/seed/pf6/800/600', caption: 'Final composite' }
    ]
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
    color: '#ff2d7c',
    gridSize: 'tall',
    images: [
      { src: 'https://picsum.photos/seed/sam1/1200/800', caption: 'Key visual — color burst' },
      { src: 'https://picsum.photos/seed/sam2/800/600', caption: 'Styleframe — product hero' },
      { src: 'https://picsum.photos/seed/sam3/800/800', caption: 'Styleframe — living room' },
      { src: 'https://picsum.photos/seed/sam4/1200/600', caption: 'Edit timeline reference' },
      { src: 'https://picsum.photos/seed/sam5/800/600', caption: 'Lighting test' }
    ]
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
    color: '#ff4530',
    gridSize: 'standard',
    images: [
      { src: 'https://picsum.photos/seed/xb1/1200/800', caption: 'Key art — power surge' },
      { src: 'https://picsum.photos/seed/xb2/800/600', caption: 'Styleframe — player silhouette' },
      { src: 'https://picsum.photos/seed/xb3/800/600', caption: 'Styleframe — console reveal' },
      { src: 'https://picsum.photos/seed/xb4/800/800', caption: 'VFX breakdown' },
      { src: 'https://picsum.photos/seed/xb5/1200/600', caption: 'On-set photography' }
    ]
  },
  {
    id: 'out-of-the-blue',
    title: 'From Out of the Blue',
    client: "Lowe's",
    tag: 'Live Action',
    category: 'live-action',
    description: 'A character-driven narrative about the unexpected moments of inspiration that transform a house into a home. Warm, grounded, and quietly cinematic — proving that the best brand stories feel like real life.',
    vimeoId: '792342138',
    year: '2023',
    role: 'Director',
    color: '#ff6a00',
    gridSize: 'standard',
    images: [
      { src: 'https://picsum.photos/seed/lw1/1200/800', caption: 'Hero frame — kitchen reveal' },
      { src: 'https://picsum.photos/seed/lw2/800/600', caption: 'Styleframe — morning light' },
      { src: 'https://picsum.photos/seed/lw3/800/600', caption: 'Styleframe — paint selection' },
      { src: 'https://picsum.photos/seed/lw4/1200/600', caption: 'Storyboard panel' },
      { src: 'https://picsum.photos/seed/lw5/800/800', caption: 'Location scout' }
    ]
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
    color: '#ff2d7c',
    gridSize: 'tall',
    images: [
      { src: 'https://picsum.photos/seed/nv1/1200/800', caption: 'Key art — data visualization' },
      { src: 'https://picsum.photos/seed/nv2/800/600', caption: 'Styleframe — flow state' },
      { src: 'https://picsum.photos/seed/nv3/800/800', caption: 'Styleframe — particle system' },
      { src: 'https://picsum.photos/seed/nv4/800/600', caption: 'Color script' },
      { src: 'https://picsum.photos/seed/nv5/1200/600', caption: 'Animation process' }
    ]
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
    color: '#ff4530',
    gridSize: 'wide',
    images: [
      { src: 'https://picsum.photos/seed/tg1/1200/800', caption: 'Hero key art — bullseye' },
      { src: 'https://picsum.photos/seed/tg2/800/600', caption: 'Styleframe — shape language' },
      { src: 'https://picsum.photos/seed/tg3/800/600', caption: 'Styleframe — product reveal' },
      { src: 'https://picsum.photos/seed/tg4/800/800', caption: 'Motion study' },
      { src: 'https://picsum.photos/seed/tg5/1200/600', caption: 'Palette exploration' }
    ]
  },
  {
    id: 'pixel-fold',
    title: 'Pixel Fold',
    client: 'Google',
    tag: 'Live Action',
    category: 'live-action',
    description: 'A launch film for the Pixel Fold that captures the feeling of limitless possibility in a single, seamless gesture. The campaign reimagines the unfolding of a phone as the unfolding of a new perspective.',
    vimeoId: '307365841',
    year: '2024',
    role: 'Director',
    color: '#4285f4',
    gridSize: 'wide',
    images: [
      { src: 'https://picsum.photos/seed/gl1/1200/800', caption: 'Hero key art' },
      { src: 'https://picsum.photos/seed/gl2/800/600', caption: 'Styleframe — unfold moment' },
      { src: 'https://picsum.photos/seed/gl3/800/600', caption: 'Styleframe — screen reveal' },
      { src: 'https://picsum.photos/seed/gl4/1200/600', caption: 'Concept development' }
    ]
  },
  {
    id: 'just-do-it',
    title: 'Just Do It — Next Gen',
    client: 'Nike',
    tag: 'Live Action',
    category: 'live-action',
    description: 'An anthem piece celebrating the next generation of athletes who are redefining what sport looks like. Raw, kinetic energy captured through a mix of handheld and drone cinematography across six cities.',
    vimeoId: '213008525',
    year: '2023',
    role: 'Director',
    color: '#111111',
    gridSize: 'standard',
    images: [
      { src: 'https://picsum.photos/seed/nk1/1200/800', caption: 'Hero frame — track sequence' },
      { src: 'https://picsum.photos/seed/nk2/800/600', caption: 'Styleframe — athletes grid' },
      { src: 'https://picsum.photos/seed/nk3/800/800', caption: 'Behind the scenes — Tokyo' },
      { src: 'https://picsum.photos/seed/nk4/800/600', caption: 'Storyboard excerpt' }
    ]
  },
  {
    id: 'think-different',
    title: 'Think Different — Reimagined',
    client: 'Apple',
    tag: 'Animation',
    category: 'animation',
    description: 'A modern reinterpretation of Apple\'s iconic campaign, brought to life through a seamless blend of 2D and 3D animation. Each frame is a meditation on creativity, craftsmanship, and the courage to see the world differently.',
    vimeoId: '290306575',
    year: '2024',
    role: 'Director',
    color: '#a2aaad',
    gridSize: 'tall',
    images: [
      { src: 'https://picsum.photos/seed/ap1/1200/800', caption: 'Key art — creative mind' },
      { src: 'https://picsum.photos/seed/ap2/800/600', caption: 'Styleframe — lightbulb moment' },
      { src: 'https://picsum.photos/seed/ap3/800/600', caption: 'Styleframe — product integration' },
      { src: 'https://picsum.photos/seed/ap4/1200/600', caption: '3D render process' }
    ]
  },
  {
    id: 'game-day',
    title: 'Game Day',
    client: 'Gatorade',
    tag: 'Live Action',
    category: 'live-action',
    description: 'A Super Bowl spot that distills the entire emotional arc of an athlete\'s journey into 60 seconds. From backyard practice to stadium lights, every cut is designed to build toward a single, unforgettable crescendo.',
    vimeoId: '792342138',
    year: '2024',
    role: 'Director',
    color: '#f96302',
    gridSize: 'standard',
    images: [
      { src: 'https://picsum.photos/seed/gt1/1200/800', caption: 'Hero frame — stadium entrance' },
      { src: 'https://picsum.photos/seed/gt2/800/600', caption: 'Styleframe — training montage' },
      { src: 'https://picsum.photos/seed/gt3/800/600', caption: 'Color grading pass' },
      { src: 'https://picsum.photos/seed/gt4/800/800', caption: 'On-set photography' }
    ]
  },
  {
    id: 'drive',
    title: 'Drive',
    client: 'Mercedes-Benz',
    tag: 'Live Action',
    category: 'live-action',
    description: 'A cinematic brand film that treats the driving experience as a form of moving meditation. Shot across Iceland\'s volcanic landscape, the piece uses long, sweeping takes to mirror the quiet confidence of the EQS.',
    vimeoId: '292367373',
    year: '2023',
    role: 'Director',
    color: '#c0c0c0',
    gridSize: 'wide',
    images: [
      { src: 'https://picsum.photos/seed/mb1/1200/800', caption: 'Hero frame — highland road' },
      { src: 'https://picsum.photos/seed/mb2/800/600', caption: 'Styleframe — dashboard interior' },
      { src: 'https://picsum.photos/seed/mb3/800/800', caption: 'Location scout — Reykjavik' },
      { src: 'https://picsum.photos/seed/mb4/800/600', caption: 'Aerial photography' }
    ]
  },
  {
    id: 'wonderland',
    title: 'Wonderland',
    client: 'Spotify',
    tag: 'Animation',
    category: 'animation',
    description: 'A Wrapped campaign piece that transforms listener data into a surreal, hand-crafted animated wonderland. Each scene reflects a different musical genre through distinct visual languages — maximalist, intimate, chaotic, serene.',
    vimeoId: '487617633',
    year: '2024',
    role: 'Director',
    color: '#1db954',
    gridSize: 'tall',
    images: [
      { src: 'https://picsum.photos/seed/sp1/1200/800', caption: 'Key art — genre worlds' },
      { src: 'https://picsum.photos/seed/sp2/800/600', caption: 'Styleframe — hip-hop zone' },
      { src: 'https://picsum.photos/seed/sp3/800/600', caption: 'Styleframe — classical space' },
      { src: 'https://picsum.photos/seed/sp4/800/800', caption: 'Character design sketches' }
    ]
  }
];

// --- Utility ---
// Thumbnail cache: vimeoId -> high-res URL
const thumbCache = {};

// Fetch a high-res thumbnail from Vimeo oEmbed, returns a promise
function getHighResThumbnail(vimeoId, width = 1920) {
  if (thumbCache[vimeoId]) return Promise.resolve(thumbCache[vimeoId]);

  return fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=${width}`)
    .then(res => res.json())
    .then(data => {
      // The thumbnail_url contains a sized version — strip the size and request our own
      let url = data.thumbnail_url || '';
      // Vimeo thumbnails look like: https://i.vimeocdn.com/video/xxx_295x166.webp
      // Replace the dimensions with our desired size
      url = url.replace(/-d_\d+x\d+/, `-d_${width}`).replace(/_\d+x\d+/, `_${width}`);
      thumbCache[vimeoId] = url;
      return url;
    })
    .catch(() => {
      // Fallback to vumbnail large
      const fallback = `https://vumbnail.com/${vimeoId}_large.jpg`;
      thumbCache[vimeoId] = fallback;
      return fallback;
    });
}

// Prefetch all project thumbnails in parallel at page load
function prefetchAllThumbnails() {
  const uniqueIds = [...new Set(projects.map(p => p.vimeoId))];
  return Promise.allSettled(uniqueIds.map(id => getHighResThumbnail(id)));
}

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
      animateClientNames();
    }, 600);
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
  const reveals = document.querySelectorAll('.reveal, .gallery-item');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
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

// --- Staggered entrance for client names ---
function animateClientNames() {
  const items = document.querySelectorAll('.client-name, .client-dot');
  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('entered');
    }, 80 + i * 60);
  });
}

// =============================================
// HOMEPAGE — Client Names + Video Backgrounds
// =============================================
function buildHomepage() {
  const list = document.getElementById('clientsList');
  const videoLayer = document.getElementById('videoLayer');
  if (!list || !videoLayer) return;

  const isMobile = window.innerWidth < 769;

  // Each project gets two layers: a thumbnail (instant) and a video (lazy)
  const bgElements = {};
  if (!isMobile) {
    projects.forEach(project => {
      const wrapper = document.createElement('div');
      wrapper.className = 'video-bg';
      wrapper.dataset.projectId = project.id;

      // Thumbnail layer — high-res, shows instantly on hover
      const thumb = document.createElement('div');
      thumb.className = 'video-bg-thumb';
      const img = new Image();
      // Start with a reasonable fallback, upgrade once oEmbed resolves
      img.src = `https://vumbnail.com/${project.vimeoId}_large.jpg`;
      getHighResThumbnail(project.vimeoId, 1920).then(url => {
        img.src = url;
      });
      img.alt = '';
      thumb.appendChild(img);
      wrapper.appendChild(thumb);

      // Video layer — loads later, fades in over thumbnail
      const vid = document.createElement('div');
      vid.className = 'video-bg-video';
      wrapper.appendChild(vid);

      videoLayer.appendChild(wrapper);
      bgElements[project.id] = { wrapper, thumb, vidContainer: vid, videoLoaded: false, videoReady: false };
    });
  }

  // Build client name links
  projects.forEach((project) => {
    const link = document.createElement('a');
    link.className = 'client-name';
    link.href = `project.html?id=${project.id}`;
    link.textContent = project.client;
    link.dataset.projectId = project.id;
    list.appendChild(link);

    const dot = document.createElement('span');
    dot.className = 'client-dot';
    dot.textContent = '.';
    dot.setAttribute('aria-hidden', 'true');
    list.appendChild(dot);
  });

  // "View all" link
  const viewAll = document.createElement('a');
  viewAll.className = 'view-all';
  viewAll.href = 'work.html';
  viewAll.textContent = 'View all';
  list.parentElement.appendChild(viewAll);

  // --- Desktop hover interactions ---
  if (!isMobile) {
    let activeId = null;
    const clientNames = list.querySelectorAll('.client-name');

    // Load a video iframe for a project
    function loadVideo(id) {
      const bg = bgElements[id];
      if (!bg || bg.videoLoaded) return;
      bg.videoLoaded = true;

      const project = getProject(id);
      if (!project) return;

      const iframe = document.createElement('iframe');
      iframe.src = `https://player.vimeo.com/video/${project.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`;
      iframe.allow = 'autoplay';
      iframe.setAttribute('loading', 'lazy');

      // When iframe loads, mark as ready and fade it in
      iframe.addEventListener('load', () => {
        bg.videoReady = true;
        bg.vidContainer.classList.add('loaded');
      });

      bg.vidContainer.appendChild(iframe);
    }

    function activateProject(id) {
      if (activeId === id) return;
      activeId = id;

      // Start loading video if not already
      loadVideo(id);

      // Show the background (thumbnail shows instantly, video fades in when ready)
      Object.keys(bgElements).forEach(key => {
        bgElements[key].wrapper.classList.toggle('active', key === id);
      });

      list.classList.add('has-hover');
      clientNames.forEach(name => {
        name.classList.toggle('is-active', name.dataset.projectId === id);
      });
    }

    function deactivateAll() {
      activeId = null;
      list.classList.remove('has-hover');
      clientNames.forEach(name => name.classList.remove('is-active'));
      Object.keys(bgElements).forEach(key => {
        bgElements[key].wrapper.classList.remove('active');
      });
    }

    clientNames.forEach(name => {
      name.addEventListener('mouseenter', () => {
        activateProject(name.dataset.projectId);
      });
    });

    list.addEventListener('mouseleave', () => {
      deactivateAll();
    });

    // Preload first 3 project videos after page settles
    // so the most likely first interactions are already warm
    setTimeout(() => {
      projects.slice(0, 3).forEach(p => loadVideo(p.id));
    }, 2000);
  }
}

// =============================================
// WORK PAGE — Masonry Gallery Grid
// =============================================
function buildWorkGallery() {
  const gallery = document.getElementById('workGallery');
  if (!gallery) return;

  projects.forEach((project, i) => {
    const item = document.createElement('a');
    item.className = `gallery-item gallery-${project.gridSize || 'standard'}`;
    item.href = `project.html?id=${project.id}`;
    item.dataset.category = project.category;
    item.style.transitionDelay = `${(i % 6) * 0.06}s`;

    // Use a low-res placeholder initially, then swap to high-res
    const imgId = `gallery-img-${project.id}`;
    item.innerHTML = `
      <div class="gallery-img-wrap">
        <img id="${imgId}" src="https://vumbnail.com/${project.vimeoId}_large.jpg" alt="${project.title}" loading="lazy">
      </div>
      <div class="gallery-overlay">
        <span class="gallery-client">${project.client}</span>
        <span class="gallery-project-title">${project.title}</span>
        <span class="gallery-tag">${project.tag}</span>
      </div>
    `;

    gallery.appendChild(item);

    // Upgrade to high-res from Vimeo oEmbed
    getHighResThumbnail(project.vimeoId, 1280).then(url => {
      const img = document.getElementById(imgId);
      if (img) img.src = url;
    });
  });

  // Filter logic
  initWorkFilters();
}

function initWorkFilters() {
  const buttons = document.querySelectorAll('.work-filter');
  const items = document.querySelectorAll('.gallery-item');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const cat = item.dataset.category;
        if (filter === 'all' || cat === filter) {
          item.classList.remove('filter-hidden');
          // Re-trigger reveal
          requestAnimationFrame(() => {
            item.classList.add('visible');
          });
        } else {
          item.classList.remove('visible');
          item.classList.add('filter-hidden');
        }
      });
    });
  });
}

// =============================================
// PROJECT PAGE — Info + Video + Gallery
// =============================================
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

  // Info section
  const clientEl = page.querySelector('.project-client');
  const titleEl = page.querySelector('.project-title');
  const descEl = page.querySelector('.project-description');

  if (clientEl) clientEl.textContent = project.client;
  if (titleEl) titleEl.innerHTML = `'${project.title}'`;
  if (descEl) descEl.textContent = project.description;

  // Meta
  const metaValues = page.querySelectorAll('.project-meta-value');
  if (metaValues.length >= 3) {
    metaValues[0].textContent = project.role;
    metaValues[1].textContent = project.tag;
    metaValues[2].textContent = project.year;
  }

  // Video
  const videoWrapper = page.querySelector('.video-wrapper');
  if (videoWrapper) {
    videoWrapper.innerHTML = '<div class="video-facade-loading"></div>';

    getHighResThumbnail(project.vimeoId, 1920).then(url => {
      renderVideoFacade(videoWrapper, url, project);
    });
  }

  // Styleframe gallery
  const galleryContainer = document.getElementById('projectGallery');
  if (galleryContainer && project.images && project.images.length) {
    const sectionLabel = document.createElement('div');
    sectionLabel.className = 'project-gallery-label';
    sectionLabel.textContent = 'Styleframes & Process';
    galleryContainer.appendChild(sectionLabel);

    const grid = document.createElement('div');
    grid.className = 'project-gallery-grid';

    project.images.forEach((img, i) => {
      const item = document.createElement('div');
      // Alternate layout sizes for visual interest
      const sizes = ['pg-wide', 'pg-standard', 'pg-standard', 'pg-wide', 'pg-tall', 'pg-standard'];
      item.className = `pg-item ${sizes[i % sizes.length]} reveal`;
      item.style.transitionDelay = `${(i % 4) * 0.08}s`;

      item.innerHTML = `
        <img src="${img.src}" alt="${img.caption}" loading="lazy">
        <div class="pg-caption">${img.caption}</div>
      `;

      grid.appendChild(item);
    });

    galleryContainer.appendChild(grid);
  }

  // Prev/Next
  const prev = getPrevProject(projectId);
  const next = getNextProject(projectId);
  const prevLink = page.querySelector('.project-nav-link.prev');
  const nextLink = page.querySelector('.project-nav-link.next');

  if (prevLink) {
    prevLink.setAttribute('href', `project.html?id=${prev.id}`);
    prevLink.querySelector('.project-nav-title').textContent = prev.client;
  }
  if (nextLink) {
    nextLink.setAttribute('href', `project.html?id=${next.id}`);
    nextLink.querySelector('.project-nav-title').textContent = next.client;
  }
}

function renderVideoFacade(wrapper, thumbUrl, project) {
  wrapper.innerHTML = `
    <div class="video-facade" role="button" tabindex="0" aria-label="Play video">
      <img class="video-facade-thumb" src="${thumbUrl}" alt="${project.title}">
      <div class="video-facade-play">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="31" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
          <polygon points="26,20 26,44 46,32" fill="white"/>
        </svg>
      </div>
    </div>
  `;

  const facade = wrapper.querySelector('.video-facade');
  function launchVideo() {
    wrapper.innerHTML = `<iframe src="https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  }
  facade.addEventListener('click', launchVideo);
  facade.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      launchVideo();
    }
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  initLoader();
  initNavScroll();
  initSmoothScroll();

  // Start fetching high-res thumbnails from Vimeo immediately
  prefetchAllThumbnails();

  // Detect page
  if (document.getElementById('clientsList')) {
    buildHomepage();
  }
  if (document.getElementById('workGallery')) {
    buildWorkGallery();
  }
  if (document.querySelector('.project-page')) {
    buildProjectPage();
  }

  setTimeout(() => {
    initRevealAnimations();
  }, 800);
});
