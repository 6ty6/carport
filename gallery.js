// ============================================================
// BIGMAN CARPORT — gallery.js
// ============================================================

// ──────────────────────────────────────────────────────────
// GALLERY DATA
// Replace these placeholder Unsplash images with your own
// real photos. Just swap the src values.
// For videos, set type:'video' and provide your video URL.
//
// HOW TO ADD YOUR OWN PHOTOS:
//   1. Upload your photo to any hosting (Google Drive, etc.)
//   2. Get a direct image link
//   3. Replace the src value below
//   4. Update caption and cat to match
// ──────────────────────────────────────────────────────────
const GALLERY = [
  // ── RESIDENTIAL ──
  { id:1,  type:'photo', cat:'images', src:'images/11.jpg', thumb:'images/11.jpg', caption:'Residential canopy', tags:['single'] },
  { id:2,  type:'photo', cat:'images', src:'images/12.jpg', thumb:'images/12.jpg', caption:'Project in progress', tags:['multi'] },
  { id:3,  type:'photo', cat:'images', src:'images/13.jpg', thumb:'images/13.jpg', caption:'Single-bay shelter', tags:['single'] },
  { id:4,  type:'photo', cat:'images', src:'images/14.jpg', thumb:'images/14.jpg', caption:'Driveway carport', tags:['single'] },
  { id:5,  type:'photo', cat:'images', src:'images/15.jpg', thumb:'images/15.jpg', caption:'Double-bay cover', tags:['multi'] },
  { id:6,  type:'photo', cat:'images', src:'images/16.jpg', thumb:'images/16.jpg', caption:'Finished installation', tags:['multi'] },

  // ── COMMERCIAL ──
  { id:7,  type:'photo', cat:'images', src:'images/17.jpg', thumb:'images/17.jpg', caption:'Commercial canopy', tags:['multi'] },
  { id:8,  type:'photo', cat:'images', src:'images/18.jpg', thumb:'images/18.jpg', caption:'Steel frame work', tags:['multi'] },
  { id:9,  type:'photo', cat:'images', src:'images/19.PNG', thumb:'images/19.PNG', caption:'Wide-span shelter', tags:['multi'] },
  { id:10, type:'photo', cat:'images', src:'images/20.PNG', thumb:'images/20.PNG', caption:'Large coverage bay', tags:['multi'] },

  // ── IN PROGRESS ──
  { id:11, type:'photo', cat:'images', src:'images/21.jpg', thumb:'images/21.jpg', caption:'Site preparation', tags:['multi'] },
  { id:12, type:'photo', cat:'images', src:'images/22.jpg', thumb:'images/22.jpg', caption:'Open-air canopy', tags:['single'] },
  { id:13, type:'photo', cat:'images', src:'images/23.jpg', thumb:'images/23.jpg', caption:'Custom carport build', tags:['multi'] },

  // ── VIDEOS (placeholder — replace src with real video URLs) ──
  { id:14, type:'video', cat:'video', src:'videos/IMG_2740.mp4', thumb:'videos/thumb1.png', caption:'Installation video', tags:['multi'] },
  { id:15, type:'video', cat:'video', src:'videos/IMG_2733.mp4', thumb:'videos/thumb2.png', caption:'Build walkthrough', tags:['multi'] },
  { id:16, type:'video', cat:'video', src:'videos/IMG_2734.mp4', thumb:'videos/thumb3.png', caption:'Project progress', tags:['multi'] },
  { id:17, type:'video', cat:'video', src:'videos/IMG_2735.mp4', thumb:'videos/thumb4.png', caption:'Completed canopy', tags:['multi'] }
];

// ──────────────────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────────────────
let activeCat  = 'all';
let activeItems = [];
let lbIndex    = 0;

// ──────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ──────────────────────────────────────────────────────────
// RENDER
// ──────────────────────────────────────────────────────────
function renderGallery() {
  const grid   = $('masonryGrid');
  const empty  = $('emptyState');
  const fLabel = $('filterLabel');
  grid.innerHTML = '';

  activeItems = activeCat === 'all' ? GALLERY : GALLERY.filter(i => i.cat === activeCat);

  const photos = activeItems.filter(i => i.type === 'photo').length;
  const videos = activeItems.filter(i => i.type === 'video').length;
  $('photoCount').textContent = photos;
  $('videoCount').textContent = videos;

  if (activeCat !== 'all') {
    fLabel.textContent = `Filtered: ${activeItems.length} item${activeItems.length !== 1 ? 's' : ''}`;
  } else {
    fLabel.textContent = '';
  }

  if (activeItems.length === 0) {
    empty.classList.add('visible');
    return;
  }
  empty.classList.remove('visible');

  activeItems.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'masonry-item';
    div.setAttribute('data-index', i);
    div.setAttribute('data-type', item.type);

    if (item.type === 'video') {
      div.innerHTML = `
        <video preload="none" poster="${item.thumb}" muted playsinline style="width:100%;display:block;border-radius:12px;">
          <source src="${item.src}"/>
        </video>
        <div class="play-btn">
          <svg viewBox="0 0 24 24" fill="var(--navy)"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <div class="item-overlay">
          <div class="item-meta">
            <span class="item-cat-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:11px;height:11px;"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              Video
            </span>
            <span class="item-caption">${item.caption || 'Gallery item'}</span>
          </div>
        </div>`;
    } else {
      div.innerHTML = `
        <img src="${item.thumb}" alt="${item.caption || 'Gallery item'}" loading="lazy" style="border-radius:12px;"/>
        <div class="item-overlay">
          <div class="item-meta">
            <span class="item-cat-tag">${catLabel(item.cat)}</span>
            <span class="item-caption">${item.caption || 'Gallery item'}</span>
          </div>
        </div>`;
    }

    div.addEventListener('click', () => openLightbox(i));
    grid.appendChild(div);
  });
}

function catLabel(cat) {
  const map = { images:'Images',  video:'Video' };
  return map[cat] || cat;
}

// ──────────────────────────────────────────────────────────
// CATEGORY FILTER
// ──────────────────────────────────────────────────────────
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.getAttribute('data-cat');
    renderGallery();
  });
});

// ──────────────────────────────────────────────────────────
// LIGHTBOX
// ──────────────────────────────────────────────────────────
function openLightbox(index) {
  lbIndex = index;
  showLbItem();
  $('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  $('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  const vid = $('lbVideo');
  vid.pause(); vid.src = '';
}

function showLbItem() {
  const item  = activeItems[lbIndex];
  const img   = $('lbImg');
  const vid   = $('lbVideo');
  const cap   = $('lbCaption');
  const ctr   = $('lbCounter');

  // Fade out
  img.style.opacity = '0';
  vid.style.opacity = '0';

  setTimeout(() => {
    if (item.type === 'video') {
      img.style.display = 'none';
      vid.style.display = 'block';
      vid.src = item.src;
      vid.load();
      vid.style.opacity = '1';
    } else {
      vid.style.display = 'none';
      vid.pause(); vid.src = '';
      img.style.display = 'block';
      img.src = item.src;
      img.alt = item.caption || 'Gallery item';
      img.style.opacity = '1';
    }
    cap.textContent = item.caption || catLabel(item.cat);
    ctr.textContent = `${lbIndex + 1} / ${activeItems.length}`;
  }, 150);
}

$('lbClose').addEventListener('click', closeLightbox);
$('lightbox').addEventListener('click', e => { if (e.target === $('lightbox')) closeLightbox(); });

$('lbPrev').addEventListener('click', e => {
  e.stopPropagation();
  lbIndex = (lbIndex - 1 + activeItems.length) % activeItems.length;
  showLbItem();
});
$('lbNext').addEventListener('click', e => {
  e.stopPropagation();
  lbIndex = (lbIndex + 1) % activeItems.length;
  showLbItem();
});

// Keyboard nav
document.addEventListener('keydown', e => {
  if (!$('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   { lbIndex = (lbIndex - 1 + activeItems.length) % activeItems.length; showLbItem(); }
  if (e.key === 'ArrowRight')  { lbIndex = (lbIndex + 1) % activeItems.length; showLbItem(); }
});

// Touch swipe in lightbox
let lbTouchX = 0;
$('lightbox').addEventListener('touchstart', e => { lbTouchX = e.touches[0].clientX; }, { passive: true });
$('lightbox').addEventListener('touchend', e => {
  const diff = lbTouchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) { lbIndex = (lbIndex + 1) % activeItems.length; }
    else          { lbIndex = (lbIndex - 1 + activeItems.length) % activeItems.length; }
    showLbItem();
  }
});

// ──────────────────────────────────────────────────────────
// HEADER SCROLL
// ──────────────────────────────────────────────────────────
// ─── STICKY HEADER ──────────────────────────
window.addEventListener('scroll', () => {
  $('siteHeader').classList.toggle('scrolled', scrollY > 24);
}, { passive: true });

// ─── SMOOTH SCROLL ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - 74, behavior: 'smooth' });
    // close mobile nav if open
    const hbg = $('hamburger'); const mnav = $('mobileNav');
    if (hbg && mnav) { hbg.classList.remove('open'); mnav.classList.remove('open'); document.body.style.overflow = ''; }
  });
});

// ──────────────────────────────────────────────────────────
// HAMBURGER
// ──────────────────────────────────────────────────────────
const hamburger = $('hamburger');
const mobileNav = $('mobileNav');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  if (open) { mobileNav.style.display = 'flex'; requestAnimationFrame(() => mobileNav.classList.add('open')); }
  else { mobileNav.classList.remove('open'); setTimeout(() => mobileNav.style.display = 'none', 300); }
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    setTimeout(() => mobileNav.style.display = 'none', 300);
    document.body.style.overflow = '';
  });
});

// ──────────────────────────────────────────────────────────
// FOOTER YEAR + INIT
// ──────────────────────────────────────────────────────────
$('fyear').textContent = new Date().getFullYear();
renderGallery();
