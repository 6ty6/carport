'use strict';

// ─────────────────────────────────────────────
// CANOPY/CARPORT DATABASE
// Size format: Width x Length x Eave Height (feet)
// Based on real industry standard dimensions
// ─────────────────────────────────────────────
const CARPORTS = [
  {
    id: 1,
    size: '10×17×7',
    name: 'Single Sedan Carport',
    capacity: 1,
    capLabel: '1 Car',
    roof: 'Curved Roof',
    cover: 'Waterproof',
    material: 'Local Board',
    shortDesc: 'A compact single-bay shelter perfect for one sedan, hatchback or compact SUV. The most popular choice for family homes across Accra.',
    fullDesc: 'Protect your vehicle from the harsh Accra sun and heavy rains with our 10×17×7 Single Sedan Carport. Built with a Curved Roof design that ensures efficient water runoff — no pooling, no leaks. Made with quality Local Board material, this structure is affordable, easy to repair, and blends naturally into residential settings. Our team fabricates it on your site, so it fits your compound exactly. Ideal for Toyota Corolla, Honda Civic, Hyundai Elantra, and similar-sized vehicles.',
    specs: {
      'Building Width': '10 FT (approx. 3.05m)',
      'Building Length': '17 FT (approx. 5.18m)',
      'Eave Height': '7 FT (approx. 2.13m)',
      'Roof Type': 'Curved Roof',
      'Cover Type': 'Waterproof',
      'Frame Type': 'Galvanized Steel Frame',
      'Roofing Material': 'Local Board',
      'Best For': 'Sedan, Hatchback, Small SUV',
    },
    dims: { w: '10 FT', l: '17 FT', h: '7 FT' },
    img: 'images/1car.PNG',
    carTypes: ['compact', 'sedan'],
    skuCode: 'BC-SR-10017-7',
    tags: ['sedan', 'compact', 'corolla', 'civic', 'hatchback'],
    images: ['images/1car.PNG', 'images/13.jpg', 'images/17.jpg'],
  },
  {
    id: 2,
    size: '18×20×7',
    name: 'Double Family Carport',
    capacity: 2,
    capLabel: '2 Cars',
    roof: 'Curved Roof',
    cover: 'Waterproof',
    material: 'Imported Sheets',
    shortDesc: 'Side-by-side bays for two family vehicles. Fits two sedans, saloons, or compact SUVs with comfortable space between them.',
    fullDesc: 'Our 18×20×7 Double Family Carport is the most requested size for Accra homes with two vehicles. The Curved Roof design keeps rain off efficiently and the wide 18-foot span gives both vehicles breathing room — no squeezing in. Built with premium Imported Sheet roofing for a long-wearing, professional finish that handles the Ghanaian climate year-round. Perfect for mixed families running sedans and compact SUVs side by side.',
    specs: {
      'Building Width': '18 FT (approx. 5.49m)',
      'Building Length': '20 FT (approx. 6.1m)',
      'Eave Height': '7 FT (approx. 2.13m)',
      'Roof Type': 'Curved Roof',
      'Cover Type': 'Waterproof',
      'Frame Type': 'Galvanized Steel Frame',
      'Roofing Material': 'Imported Sheets',
      'Best For': 'Two Sedans / Compact SUVs',
    },
    dims: { w: '18 FT', l: '20 FT', h: '7 FT' },
    img: 'images/2cars.jpg',
    carTypes: ['compact', 'sedan', 'midsuv'],
    skuCode: 'BC-DR-18020-7',
    tags: ['sedan', 'double', 'two cars', 'family', 'corolla', 'camry'],
    images: ['images/2cars.jpg', 'images/23.jpg', 'images/23(1).jpg'],
  },
  {
    id: 3,
    size: '27×20×9',
    name: 'SUV & Pickup Double Bay',
    capacity: 2,
    capLabel: '2 Cars',
    roof: 'Flat Roof',
    cover: 'Waterproof',
    material: 'Imported Sheets',
    shortDesc: 'Extra-wide, extra-tall double bay built specifically for large pickups and full-size SUVs. Handles Hilux, Fortuner, Land Cruiser Prado with ease.',
    fullDesc: 'Built for the vehicles that need real space — the 27×20×9 SUV & Pickup Double Bay gives your large pickups and SUVs the room they deserve. The 9-foot eave height means even roof racks and bull bars clear the structure with no drama. The Flat Roof adds structural strength and a clean, modern look. Imported Sheet roofing delivers long-term weather protection with zero maintenance headaches. Perfect for Toyota Hilux, Fortuner, Land Cruiser Prado, Ford Ranger, Isuzu D-Max.',
    specs: {
      'Building Width': '27 FT (approx. 8.23m)',
      'Building Length': '20 FT (approx. 6.1m)',
      'Eave Height': '9 FT (approx. 2.74m)',
      'Roof Type': 'Flat Roof',
      'Cover Type': 'Waterproof',
      'Frame Type': '14 Gauge Galvanized Steel',
      'Roofing Material': 'Imported Sheets',
      'Best For': 'Large SUVs, Pickup Trucks',
    },
    dims: { w: '27 FT', l: '20 FT', h: '9 FT' },
    img: 'images/2cars2.PNG',
    carTypes: ['midsuv', 'largesuv', 'pickup'],
    skuCode: 'BC-BE-27020-9',
    tags: ['suv', 'pickup', 'hilux', 'fortuner', 'prado', 'ranger', 'd-max', 'large'],
    images: ['images/2cars2.PNG', 'images/21.jpg', 'images/22.jpg'],
  },
  {
    id: 4,
    size: '10×30×8',
    name: 'Single Long-Bay Shelter',
    capacity: 1,
    capLabel: '1 Car',
    roof: 'Flat Roof',
    cover: 'Waterproof',
    material: 'Fiberglass',
    shortDesc: 'A longer single bay ideal for vans, minibuses, or vehicles with a tow bar or boat trailer. Translucent fiberglass roof lets natural light in.',
    fullDesc: 'When your vehicle is longer than average — a Hiace minibus, a van, or a car with a trailer — you need the 10×30×8. The extra length means nothing overhangs the back. The Fiberglass roofing option is available in a translucent panel that lets daylight filter through, creating a bright, open shelter that doesn\'t feel like a dark shed. Great for homeowners who care about how things look as much as function. Corrosion-resistant and low maintenance.',
    specs: {
      'Building Width': '10 FT (approx. 3.05m)',
      'Building Length': '30 FT (approx. 9.14m)',
      'Eave Height': '8 FT (approx. 2.44m)',
      'Roof Type': 'Flat Roof',
      'Cover Type': 'Waterproof',
      'Frame Type': 'Galvanized Steel Frame',
      'Roofing Material': 'Fiberglass (translucent option available)',
      'Best For': 'Van, Minibus, Long Vehicles',
    },
    dims: { w: '10 FT', l: '30 FT', h: '8 FT' },
    img: 'images/1car1.PNG',
    carTypes: ['van'],
    skuCode: 'BC-LB-10030-8',
    tags: ['van', 'minibus', 'hiace', 'long', 'fiberglass', 'transit'],
    images: ['images/1car1.PNG', 'images/2.PNG'],
  },
  {
    id: 5,
    size: '27×17×9',
    name: 'Triple Home Carport',
    capacity: 3,
    capLabel: '3 Cars',
    roof: 'Flat Roof',
    cover: 'Waterproof',
    material: 'Imported Sheets',
    shortDesc: 'Three full bays under one continuous roof. The go-to choice for larger households or small businesses needing to cover a mixed fleet.',
    fullDesc: 'The 27×17×9 Triple Home Carport is built for households or small businesses that have outgrown a single- or double-bay structure. Three full bays side by side under one solid roof — accommodating any combination of sedans, SUVs, or pickups. The 9-foot eave height gives everyone clear entry without ducking. Imported Sheet roofing holds up under heavy rain and intense sun without warping or rusting. A single structure that eliminates the need for separate shelters across your property.',
    specs: {
      'Building Width': '27 FT (approx. 8.23m)',
      'Building Length': '17 FT (approx. 5.18m)',
      'Eave Height': '9 FT (approx. 2.74m)',
      'Roof Type': 'Flat Roof',
      'Cover Type': 'Waterproof',
      'Frame Type': '14 Gauge Galvanized Steel',
      'Roofing Material': 'Imported Sheets',
      'Best For': 'Mixed Fleet: Sedans, SUVs, Pickups',
    },
    dims: { w: '27 FT', l: '17 FT', h: '9 FT' },
    img: 'images/14.jpg',
    carTypes: ['compact', 'sedan', 'midsuv', 'pickup'],
    skuCode: 'BC-TR-2401',
    tags: ['three cars', 'triple', 'family', 'mixed', 'home'],
    images: ['images/14.jpg', 'images/16.jpg', 'images/11.jpg'],
  },
 /* {
    id: 6,
    size: '30×25×11',
    name: 'Commercial Gable Office Cover',
    capacity: 4,
    capLabel: '4 Cars',
    roof: 'Curved Roof',
    cover: 'Waterproof',
    material: 'Imported Sheets',
    shortDesc: 'A wide-span structure built for office compounds and small commercial properties. Curved roof handles heavy rain runoff perfectly.',
    fullDesc: 'The 30×25×11 Commercial Gable Cover is designed for serious use — office parking bays, commercial compounds, or business fleet storage. The Curved Roof design is the strongest and most weather-efficient option: water and debris run straight off without accumulating. At 11 feet of eave height, this structure clears even the tallest commercial vehicles with room to spare. Premium Imported Sheet roofing is rated for long-term commercial deployment. Custom sizing available for your exact parking layout.',
    specs: {
      'Building Width': '30 FT (approx. 9.14m)',
      'Building Length': '25 FT (approx. 7.62m)',
      'Eave Height': '11 FT (approx. 3.35m)',
      'Roof Type': 'Curved Roof',
      'Cover Type': 'Waterproof',
      'Frame Type': '14 Gauge Heavy-Duty Galvanized Steel',
      'Roofing Material': 'Imported Sheets (Premium Grade)',
      'Best For': 'Office, Commercial, Mixed Fleet',
    },
    dims: { w: '30 FT', l: '25 FT', h: '11 FT' },
    img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&q=85',
    carTypes: ['compact', 'sedan', 'midsuv', 'largesuv', 'pickup'],
    skuCode: 'BC-VR-3001',
    tags: ['office', 'commercial', 'four cars', 'business', 'curved', 'gable'],
  },*/
  {
    id: 7,
    size: '18×25×9',
    name: 'Double SUV Shelter',
    capacity: 2,
    capLabel: '2 Cars',
    roof: 'Curved Roof',
    cover: 'Waterproof',
    material: 'Car Board Fabric',
    shortDesc: 'Wide and tall double bay for large SUVs and Land Cruisers. Curved roof with Car Board Fabric gives a clean, modern residential look.',
    fullDesc: 'Designed for the household running two large SUVs — Range Rover, Land Cruiser, Nissan Patrol, or similar. The 18×25×9 gives both vehicles ample width and the 9-foot eave height means roof-mounted accessories never clip the structure. Car Board Fabric roofing is UV-resistant, water-tight, and maintains a softer residential appearance compared to metal sheets — many homeowners prefer it for front-of-house carports. The Curved Roof design sheds rain quickly and efficiently in heavy downpours.',
    specs: {
      'Building Width': '18 FT (approx. 5.49m)',
      'Building Length': '25 FT (approx. 7.62m)',
      'Eave Height': '9 FT (approx. 2.74m)',
      'Roof Type': 'Curved Roof',
      'Cover Type': 'Waterproof',
      'Frame Type': 'Galvanized Steel Frame',
      'Roofing Material': 'Car Board Fabric',
      'Best For': 'Large SUVs, 4x4 Vehicles',
    },
    dims: { w: '18 FT', l: '25 FT', h: '9 FT' },
    img: 'images/5.jpg',
    carTypes: ['largesuv', 'midsuv'],
    skuCode: 'BC-DS-1801',
    tags: ['suv', 'double', 'land cruiser', 'patrol', 'range rover', 'large suv'],
    images: ['images/5.jpg', 'images/9.jpg', 'images/25.PNG'],
  },
  {
    id: 8,
    size: '18×17×7',
    name: 'Double Open Canopy',
    capacity: 2,
    capLabel: '2 Cars',
    roof: 'Flat Roof',
    cover: 'Non Waterproof',
    material: 'Local Board',
    shortDesc: 'A breezy open canopy for two cars — sun shading without full enclosure. Ideal for compounds where ventilation matters more than rain protection.',
    fullDesc: 'Sometimes you want shade without walls — the 18×17×7 Double Open Canopy gives you a defined parking structure with a flat canopy roof and open sides. Great for compounds in more sheltered locations, or for homeowners who prefer airflow over full enclosure. Built with Local Board roofing, it\'s an affordable way to get two dedicated parking spots defined and covered. The open sides also make it easier to manoeuvre larger vehicles in tight compounds.',
    specs: {
      'Building Width': '18 FT (approx. 5.49m)',
      'Building Length': '17 FT (approx. 5.18m)',
      'Eave Height': '7 FT (approx. 2.13m)',
      'Roof Type': 'Flat Roof',
      'Cover Type': 'Non Waterproof',
      'Frame Type': 'Galvanized Steel Frame',
      'Roofing Material': 'Local Board',
      'Best For': 'Open Compounds, Breezy Locations',
    },
    dims: { w: '18 FT', l: '17 FT', h: '7 FT' },
    img: 'images/26.PNG',
    carTypes: ['compact', 'sedan', 'midsuv'],
    skuCode: 'BC-OC-2001',
    tags: ['open', 'canopy', 'shade', 'ventilation', 'two cars', 'partial'],
    images: ['images/26.PNG', 'images/27.PNG', 'images/28.jpg'],
  },
 /* {
    id: 9,
    size: '40×30×12',
    name: 'Fleet Commercial Cover',
    capacity: 5,
    capLabel: '5+ Cars',
    roof: 'Curved Roof',
    cover: 'Loco Board',
    material: 'Imported Sheets',
    shortDesc: 'Large-span commercial structure for 5–10 vehicles. Built for office compounds, schools, hotels, and business fleets. Custom-engineered to your site.',
    fullDesc: 'The 40×30×12 Fleet Commercial Cover is our largest standard configuration — and the starting point for any serious fleet operation. At 40 feet wide, 30 feet long, and 12-foot eave height, this structure covers 5 to 8 vehicles depending on layout, with comfortable clearance for tall vans and minibuses. The Curved Roof design is the most structurally sound option for large-span structures, handling heavy rain loads without sagging or flexing. Premium Imported Sheet roofing is sourced from international suppliers and rated for commercial-grade durability. We custom-engineer each installation to the exact dimensions of your site.',
    specs: {
      'Building Width': '40 FT (approx. 12.19m)',
      'Building Length': '30 FT (approx. 9.14m)',
      'Eave Height': '12 FT (approx. 3.66m)',
      'Roof Type': 'Curved Roof',
      'Cover Type': 'Loco Board',
      'Frame Type': 'Heavy-Duty Galvanized Steel',
      'Roofing Material': 'Imported Sheets (Commercial Grade)',
      'Best For': 'Fleet Parking, Commercial, Offices',
    },
    dims: { w: '40 FT', l: '30 FT', h: '12 FT' },
    img: 'https://images.unsplash.com/photo-1471174107790-a2ac65dbf9e2?w=900&q=85',
    carTypes: ['compact', 'sedan', 'midsuv', 'largesuv', 'pickup', 'van'],
    skuCode: 'BC-FL-4001',
    tags: ['fleet', 'commercial', 'office', 'large', 'five plus', 'school', 'hotel'],
  },*/
  {
    id: 10,
    size: '10×17×7',
    name: 'Steel Frame Only — Single Bay',
    capacity: 1,
    capLabel: '1 Car',
    roof: 'Curved Roof',
    cover: 'Non Waterproof',
    material: 'Local Board',
    shortDesc: 'A galvanized steel frame structure with no roofing material — the skeleton built, ready for you to choose and add covering later.',
    fullDesc: 'Sometimes you want the parking structure defined first, with the roofing coming later as budget allows. The Steel Frame Only option gives you a solid, galvanized steel carport frame installed and anchored on your site — pillars, cross-beams, roof trusses — with no roofing panels. You can add Local Board, Fiberglass, or Imported Sheets at any point after. Also popular for temporary parking bays that just need a defined, marked structure. The frame itself is powder-coated and rust-resistant.',
    specs: {
      'Building Width': '10 FT (approx. 3.05m)',
      'Building Length': '17 FT (approx. 5.18m)',
      'Eave Height': '7 FT (approx. 2.13m)',
      'Roof Type': 'Curved Roof (Frame Only)',
      'Cover Type': 'Frame Only — No Roofing',
      'Frame Type': 'Powder-Coated Galvanized Steel',
      'Roofing Material': 'None (frame only)',
      'Best For': 'Phased build, Temporary bay',
    },
    dims: { w: '10 FT', l: '17 FT', h: '7 FT' },
    img: 'images/12.jpg',
    carTypes: ['compact', 'sedan'],
    skuCode: 'BC-FO-1201',
    tags: ['frame', 'no cover', 'frame only', 'steel frame', 'temporary', 'skeleton'],
    images: ['images/12.jpg', 'images/12.png', 'images/13.png'],
  },
];

// ─── WA NUMBER ──────────────────────────────
const WA = '233244720778';

function waLink(name) {
  const msg = encodeURIComponent(`Hi, I'm interested in the "${name}" canopy/carport. Can you help me with a quote?`);
  return `https://wa.me/${WA}?text=${msg}`;
}

// ─── STATE ──────────────────────────────────
const S = {
  cap:      'all',
  roofs:    [],
  covers:   [],
  mats:     [],
  search:   '',
  carType:  '',
};

// ─── HELPERS ────────────────────────────────
const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function countActiveFilters() {
  let n = 0;
  if (S.cap !== 'all') n++;
  n += S.roofs.length + S.covers.length + S.mats.length;
  if (S.search)  n++;
  if (S.carType) n++;
  return n;
}

// ─── WA SVG ─────────────────────────────────
const WA_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" style="width:15px;height:15px;flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.519 5.831L.017 23.949l6.256-1.641A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.823 9.823 0 01-5.011-1.369l-.36-.214-3.714.975.99-3.617-.234-.371A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.419 0 9.818 4.4 9.818 9.818 0 5.419-4.399 9.818-9.818 9.818z"/></svg>`;

// ─── BUILD CARD ─────────────────────────────
function buildCard(c) {
  const art = document.createElement('article');
  art.className = 'cport-card';
  art.dataset.id = c.id;

  art.innerHTML = `
    <div class="card-img-wrap">
      <img src="${c.img}" alt="${c.size} ${c.name}" loading="lazy"/>
      <span class="card-cap">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" style="width:11px;height:11px;">
          <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 7l2-4h10l2 4"/>
        </svg>
        ${c.capLabel}
      </span>
      <button class="learn-more-btn" data-id="${c.id}">Details →</button>
    </div>
    <div class="card-body-inner">
      <div class="card-size">${c.size} ft &nbsp;<span class="card-name-sub">${c.name}</span></div>
      <p class="card-shortdesc">${c.shortDesc}</p>
      <div class="card-tags">
        <span class="ctag ctag--roof">${c.roof}</span>
        <span class="ctag ctag--cover">${c.cover}</span>
        <span class="ctag ctag--mat">${c.material}</span>
      </div>
    </div>
    <div class="card-footer-inner">
      <a class="card-wa" href="${waLink(c.size + ' ' + c.name)}" target="_blank" rel="noopener">
        ${WA_SVG} Get a Quote
      </a>
      <button class="card-detail-btn" data-id="${c.id}">Learn More</button>
    </div>
  `;

  // Open modal on Learn More / Details button
  art.querySelectorAll('[data-id]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.id));
    });
  });
  art.addEventListener('click', () => openModal(c.id));

  return art;
}

// ─── FILTER & RENDER ────────────────────────
function render() {
  const grid  = $('carportGrid');
  const noRes = $('noResults');
  const count = $('resultsCount');
  const badge = $('filterBadge');
  grid.innerHTML = '';

  const filtered = CARPORTS.filter(c => {
    // capacity
    if (S.cap !== 'all') {
      if (S.cap === '5+') { if (c.capacity < 5) return false; }
      else { if (c.capacity !== parseInt(S.cap)) return false; }
    }
    // roof
    if (S.roofs.length && !S.roofs.includes(c.roof)) return false;
    // cover
    if (S.covers.length && !S.covers.includes(c.cover)) return false;
    // material
    if (S.mats.length && !S.mats.includes(c.material)) return false;
    // car type
    if (S.carType && !c.carTypes.includes(S.carType)) return false;
    // text search — check size, name, desc, tags, roof, cover, material, sku
    if (S.search) {
      const q = S.search.toLowerCase();
      const hay = [
        c.size, c.name, c.shortDesc, c.fullDesc,
        c.roof, c.cover, c.material, c.skuCode,
        ...(c.tags || []),
      ].join(' ').toLowerCase();
      // also check if search matches dimension numbers e.g. "12x20" or "12 20"
      if (!hay.includes(q) && !c.size.toLowerCase().replace('×','x').includes(q.replace('×','x'))) return false;
    }
    return true;
  });

  // Update filter badge on mobile btn
  const fc = countActiveFilters();
  if (fc > 0) { badge.style.display = 'flex'; badge.textContent = fc; }
  else { badge.style.display = 'none'; }

  // Update mobile sidebar filter count
  const filterCountEl = $('sidebarFilterCount');
  if (filterCountEl) {
    filterCountEl.textContent = fc > 0 ? `${fc} filter${fc !== 1 ? 's' : ''} active` : 'No filters active';
  }

  if (filtered.length === 0) {
    noRes.style.display = 'block';
    count.textContent = 'No canopies/carports found';
  } else {
    noRes.style.display = 'none';
    count.textContent = `Showing ${filtered.length} of ${CARPORTS.length} canopy/carport${filtered.length !== 1 ? 's' : ''}`;
    filtered.forEach((c, i) => {
      const card = buildCard(c);
      card.style.animationDelay = `${i * 0.04}s`;
      grid.appendChild(card);
    });
  }

  renderChips();
}

// ─── ACTIVE FILTER CHIPS ────────────────────
function renderChips() {
  const box = $('activeChips');
  box.innerHTML = '';

  const chip = (label, removeFn) => {
    const el = document.createElement('span');
    el.className = 'achip';
    el.innerHTML = `${label} <button title="Remove">✕</button>`;
    el.querySelector('button').addEventListener('click', removeFn);
    box.appendChild(el);
  };

  if (S.cap !== 'all') {
    chip(S.cap === '5+' ? '5+ Cars' : S.cap + (S.cap === '1' ? ' Car' : ' Cars'), () => {
      S.cap = 'all';
      $$('.cap-pill').forEach(b => b.classList.remove('active'));
      document.querySelector('.cap-pill[data-cap="all"]').classList.add('active');
      render();
    });
  }
  S.roofs.forEach(r => chip(r, () => {
    S.roofs = S.roofs.filter(x => x !== r);
    const cb = document.querySelector(`input[name="roof"][value="${r}"]`);
    if (cb) cb.checked = false;
    render();
  }));
  S.covers.forEach(v => chip(v, () => {
    S.covers = S.covers.filter(x => x !== v);
    const cb = document.querySelector(`input[name="cover"][value="${v}"]`);
    if (cb) cb.checked = false;
    render();
  }));
  S.mats.forEach(m => chip(m, () => {
    S.mats = S.mats.filter(x => x !== m);
    const cb = document.querySelector(`input[name="material"][value="${m}"]`);
    if (cb) cb.checked = false;
    render();
  }));
  if (S.search) chip(`"${S.search}"`, () => {
    S.search = ''; $('searchInput').value = ''; $('searchClear').style.display = 'none'; render();
  });
  if (S.carType) chip(S.carType, () => {
    S.carType = ''; $('carSelect').value = ''; render();
  });
}

// ─── RESET ──────────────────────────────────
function resetAll() {
  S.cap = 'all'; S.roofs = []; S.covers = []; S.mats = []; S.search = ''; S.carType = '';
  $$('.cap-pill').forEach(b => b.classList.remove('active'));
  document.querySelector('.cap-pill[data-cap="all"]').classList.add('active');
  $$('input[name="roof"], input[name="cover"], input[name="material"]').forEach(cb => cb.checked = false);
  $('searchInput').value = ''; $('searchClear').style.display = 'none';
  $('carSelect').value = '';
  render();
}

// ─── CAPACITY PILLS (updated: 1/2/3/4+) ────
$$('.cap-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.cap-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    S.cap = btn.dataset.cap;

    // 4+ shows enquiry form instead of filtering grid
    const enqBox = $('customEnquiryBox');
    if (S.cap === '4+') {
      enqBox.style.display = 'flex';
      // Don't filter — show all results until form submitted
    } else {
      enqBox.style.display = 'none';
      render();
    }
  });
});

// ─── 4+ ENQUIRY FORM SUBMIT → WHATSAPP ──────
$('enqSubmitBtn').addEventListener('click', () => {
  const vehicleType  = $('enqVehicleType').value;
  const vehicleCount = $('enqVehicleCount').value;
  const roofType     = $('enqRoofType').value;
  const waterproof   = document.querySelector('input[name="enqWaterproof"]:checked');
  const notes        = $('enqNotes').value.trim();

  // Basic validation
  if (!vehicleType || !vehicleCount || !roofType || !waterproof) {
    // Highlight missing fields
    if (!vehicleType)   $('enqVehicleType').style.borderColor  = '#dc2626';
    if (!vehicleCount)  $('enqVehicleCount').style.borderColor = '#dc2626';
    if (!roofType)      $('enqRoofType').style.borderColor     = '#dc2626';
    if (!waterproof) {
      document.querySelectorAll('.enq-radio-box').forEach(b => b.style.borderColor = '#dc2626');
    }
    return;
  }

  // Build WhatsApp message
  const msg = [
    `Hi, I need a custom carport for 4+ cars. Here are my requirements:`,
    ``,
    `Vehicle Type: ${vehicleType}`,
    `Number of Vehicles: ${vehicleCount}`,
    `Roof Style: ${roofType}`,
    `Roofing Material: ${waterproof.value}`,
    notes ? `Extra Details: ${notes}` : '',
    ``,
    `Please help me with a custom quote.`,
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
});

// Clear red borders on change
['enqVehicleType','enqVehicleCount','enqRoofType'].forEach(id => {
  $$(id) && $(`#${id}`) && $(`${id}`)?.addEventListener('change', function() {
    this.style.borderColor = '';
  });
});
document.querySelectorAll('input[name="enqWaterproof"]').forEach(r => {
  r.addEventListener('change', () => {
    document.querySelectorAll('.enq-radio-box').forEach(b => b.style.borderColor = '');
  });
});

// ─── ROOF CHECKBOXES ────────────────────────
$$('input[name="roof"]').forEach(cb => {
  cb.addEventListener('change', () => {
    S.roofs = [...$$('input[name="roof"]:checked')].map(c => c.value);
    render();
  });
});

// ─── COVER CHECKBOXES ───────────────────────
$$('input[name="cover"]').forEach(cb => {
  cb.addEventListener('change', () => {
    S.covers = [...$$('input[name="cover"]:checked')].map(c => c.value);
    render();
  });
});

// ─── MATERIAL CHECKBOXES ────────────────────
$$('input[name="material"]').forEach(cb => {
  cb.addEventListener('change', () => {
    S.mats = [...$$('input[name="material"]:checked')].map(c => c.value);
    render();
  });
});

// ─── SEARCH ─────────────────────────────────
let searchTimer;
$('searchInput').addEventListener('input', e => {
  S.search = e.target.value.trim();
  $('searchClear').style.display = S.search ? 'block' : 'none';
  clearTimeout(searchTimer);
  searchTimer = setTimeout(render, 220);
});
$('searchClear').addEventListener('click', () => {
  S.search = ''; $('searchInput').value = ''; $('searchClear').style.display = 'none'; render();
});

// ─── CAR SELECT ─────────────────────────────
$('carSelect').addEventListener('change', e => {
  S.carType = e.target.value; render();
});

// ─── RESET BUTTONS ──────────────────────────
function resetAll() {
  S.cap = 'all'; S.roofs = []; S.covers = []; S.mats = []; S.search = ''; S.carType = '';
  $$('.cap-pill').forEach(b => b.classList.remove('active'));
  document.querySelector('.cap-pill[data-cap="all"]').classList.add('active');
  $$('input[name="roof"], input[name="cover"], input[name="material"]').forEach(cb => cb.checked = false);
  $('searchInput').value = ''; $('searchClear').style.display = 'none';
  $('carSelect').value = '';
  const enqBox = $('customEnquiryBox');
  if (enqBox) enqBox.style.display = 'none';
  render();
}
$('resetAll').addEventListener('click', resetAll);
$('noResReset').addEventListener('click', resetAll);
const resetMob = $('resetAllMobile');
if (resetMob) resetMob.addEventListener('click', resetAll);

// ─── MOBILE SIDEBAR ─────────────────────────
const sidebar  = $('filterSidebar');
const overlay  = $('sidebarOverlay');
const mobBtn   = $('mobFilterBtn');
function openSidebar()  { sidebar.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }
if (mobBtn)  mobBtn.addEventListener('click', openSidebar);
if (overlay) overlay.addEventListener('click', closeSidebar);
const applyMob = $('applyMobile');
if (applyMob) applyMob.addEventListener('click', closeSidebar);

// ─── HAMBURGER (mobile nav) ──────────────────
const hbg  = $('hamburger');
const mnav = $('mobileNav');
if (hbg && mnav) {
  hbg.addEventListener('click', () => {
    const open = hbg.classList.toggle('open');
    mnav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hbg.classList.remove('open');
    mnav.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

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

// ─── PRODUCT MODAL ──────────────────────────
const modalOverlay = $('modalOverlay');
const modal        = $('productModal');
const modalClose   = $('modalClose');

// Gallery state
let galleryImages = [];
let galleryIndex  = 0;

// Each product gets multiple images built from its single img
// In real use you'd add an `images: [...]` array to each carport object
// For now we generate 4 views from the one image (replace with real photos)
function getImages(c) {
  // If carport has an images array use it, otherwise repeat the one image
  if (c.images && c.images.length) return c.images;
  // Use the single image for all slots — client replaces with real photos later
  return [c.img, c.img, c.img, c.img];
}

function setGalleryImage(index) {
  const img   = $('modalImg');
  const ctr   = $('mgCounter');
  galleryIndex = Math.max(0, Math.min(index, galleryImages.length - 1));

  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galleryImages[galleryIndex];
    img.style.opacity = '1';
  }, 150);

  ctr.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;

  // Update thumb active state
  $$('.modal-thumb').forEach((t, i) => t.classList.toggle('active', i === galleryIndex));
}

function openModal(id) {
  const c = CARPORTS.find(x => x.id === id);
  if (!c) return;

  // ── Gallery setup ──
  galleryImages = getImages(c);
  galleryIndex  = 0;

  const mainImg = $('modalImg');
  mainImg.src     = galleryImages[0];
  mainImg.alt     = c.name;
  mainImg.style.opacity = '1';
  $('mgCounter').textContent = `1 / ${galleryImages.length}`;

  // Build thumbnail strip
  const thumbsEl = $('modalThumbs');
  thumbsEl.innerHTML = '';
  galleryImages.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = `modal-thumb${i === 0 ? ' active' : ''}`;
    div.innerHTML = `<img src="${src}" alt="View ${i+1}" loading="lazy"/>`;
    div.addEventListener('click', () => setGalleryImage(i));
    thumbsEl.appendChild(div);
  });

  // Show/hide arrows
  $('mgPrev').style.display = galleryImages.length > 1 ? 'flex' : 'none';
  $('mgNext').style.display = galleryImages.length > 1 ? 'flex' : 'none';

  // ── Info ──
  $('modalCapBadge').textContent    = c.capLabel;
  $('modalTitle').textContent       = `${c.size} ft — ${c.name}`;
  $('modalDescShort').textContent   = c.shortDesc;
  $('modalSku').textContent         = `SKU: ${c.skuCode}`;
  $('modalFullDesc').textContent    = c.fullDesc;
  $('modalWaBtn').href              = waLink(c.size + ' ' + c.name);

  // Dims
  $('dimWidthVal').textContent = c.dims.w;
  $('dimLenVal').textContent   = c.dims.l;
  $('dimHtVal').textContent    = c.dims.h;

  // Specs table
  const table = $('specsTable');
  table.innerHTML = '';
  Object.entries(c.specs).forEach(([k, v]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${k}</td><td>${v}</td>`;
    table.appendChild(tr);
  });

  showTab('specs');
  modalOverlay.classList.add('open');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Gallery navigation
$('mgPrev').addEventListener('click', e => { e.stopPropagation(); setGalleryImage(galleryIndex - 1); });
$('mgNext').addEventListener('click', e => { e.stopPropagation(); setGalleryImage(galleryIndex + 1); });

// Touch swipe on main image
let touchStartX = 0;
$('modalImg').addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
$('modalImg').addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) {
    if (diff > 0) setGalleryImage(galleryIndex + 1);
    else          setGalleryImage(galleryIndex - 1);
  }
});

// Keyboard navigation inside modal
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape')      closeModal();
  if (e.key === 'ArrowLeft')   setGalleryImage(galleryIndex - 1);
  if (e.key === 'ArrowRight')  setGalleryImage(galleryIndex + 1);
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Modal tabs
function showTab(tabId) {
  $$('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
  $('tab-specs').style.display = tabId === 'specs' ? 'block' : 'none';
  $('tab-desc').style.display  = tabId === 'desc'  ? 'block' : 'none';
}
$$('.modal-tab').forEach(tab => tab.addEventListener('click', () => showTab(tab.dataset.tab)));

// ─── FOOTER YEAR ────────────────────────────
$('fyear').textContent = new Date().getFullYear();

// ─── INIT ───────────────────────────────────
render();