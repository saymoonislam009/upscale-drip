// =============================================
//  UPSCALE DRIP — Main Script v7
//  JSONBin cloud — works on ALL devices
// =============================================

const JSONBIN_BASE = 'https://api.jsonbin.io/v3/b';
const JSONBIN_BIN_ID = '69af2a0cd0ea881f4001b0d4';
const JSONBIN_KEY    = '$2a$10$LKEPwAjgelKHpDtl3wAjVe4BvNm8GbA/ecWzm0/qBYYMgl7ISbA1C';

// ── DEFAULT PRODUCTS (shown instantly; replaced by cloud data) ──
const DEFAULT_PRODUCTS = [
  {id:1,name:"Short Panjabi — Sand White",cat:"panjabi",img:"https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=700&q=85",price:3200,desc:"Premium cotton short panjabi with hand-finished collar embroidery.",isNew:true,sizes:["S","M","L","XL","XXL"]},
  {id:2,name:"Premium Linen Shirt — Natural Beige",cat:"shirt",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&q=85",price:1800,desc:"Pure linen blend, relaxed fit, breathable for warm days.",isNew:true,sizes:["S","M","L","XL","XXL"]},
  {id:3,name:"Premium Polo Shirt — Coffee Brown",cat:"polo",img:"https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=700&q=85",price:2400,desc:"Fine piqué cotton polo in our signature coffee colorway.",isNew:true,sizes:["S","M","L","XL","XXL"]},
  {id:4,name:"Oxford Button-Down Shirt — White",cat:"shirt",img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&q=85",price:1800,desc:"Classic Oxford weave, slim modern fit.",isNew:true,sizes:["S","M","L","XL","XXL"]},
  {id:5,name:"Short Panjabi — Olive Green",cat:"panjabi",img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=85",price:3200,desc:"Soft premium cotton in rich olive green.",isNew:false,sizes:["S","M","L","XL","XXL"]},
  {id:6,name:"Short Panjabi — Charcoal Black",cat:"panjabi",img:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&q=85",price:3200,desc:"Elegant charcoal black short panjabi.",isNew:false,sizes:["S","M","L","XL","XXL"]},
  {id:7,name:"Linen Shirt — Slate Blue",cat:"shirt",img:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=700&q=85",price:1800,desc:"Relaxed slate blue linen shirt.",isNew:false,sizes:["S","M","L","XL","XXL"]},
  {id:8,name:"Cuban Collar Shirt — Brown",cat:"shirt",img:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=700&q=85",price:1800,desc:"Relaxed open collar, short sleeves.",isNew:false,sizes:["S","M","L","XL","XXL"]},
  {id:9,name:"Classic Polo — Navy Blue",cat:"polo",img:"https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=700&q=85",price:2400,desc:"Premium piqué cotton in deep navy.",isNew:false,sizes:["S","M","L","XL","XXL"]},
  {id:10,name:"Striped Polo — Cream & Brown",cat:"polo",img:"https://images.unsplash.com/photo-1622445275576-721325763afe?w=700&q=85",price:2400,desc:"Subtle horizontal stripes.",isNew:false,sizes:["S","M","L","XL","XXL"]},
  {id:11,name:"Tailored Drip Trousers — Cream",cat:"trouser",img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=85",price:2200,desc:"High-waist tapered cut trousers.",isNew:false,sizes:["28","30","32","34","36"]},
  {id:12,name:"Slim Chino Trousers — Khaki",cat:"trouser",img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&q=85",price:2200,desc:"Premium cotton twill in slim cut.",isNew:false,sizes:["28","30","32","34","36"]},
  {id:13,name:"Cargo Utility Trousers — Black",cat:"trouser",img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&q=85",price:2500,desc:"8-pocket utility design.",isNew:false,sizes:["28","30","32","34","36"]},
  {id:14,name:"Varsity Bomber Jacket — Black",cat:"jacket",img:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=85",price:4200,desc:"Ribbed cuffs and hem, satin lining.",isNew:false,sizes:["S","M","L","XL"]},
  {id:15,name:"Onyx Trench Coat",cat:"jacket",img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=85",price:5200,desc:"Double-breasted full-length trench.",isNew:false,sizes:["S","M","L","XL"]},
  {id:16,name:"Structured Blazer — Camel",cat:"jacket",img:"https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=700&q=85",price:3800,desc:"Sharp camel blazer with structured shoulders.",isNew:false,sizes:["S","M","L","XL"]},
];

// ── STATE ──
let PRODUCTS = [...DEFAULT_PRODUCTS];
let cart = [];
let currentProd = null;
let selSize = null;
let qty = 1;
let visCount = 8;
let curFilter = 'all';
let slideIdx = 0;
let slideTimer;

// ── FETCH FROM JSONBIN ──
async function fetchProducts() {
  // Try localStorage first (set by admin on same device)
  try {
    const local = localStorage.getItem('ud_prods');
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}

  // Try JSONBin cloud
  try {
    const res = await fetch(`${JSONBIN_BASE}/${JSONBIN_BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': JSONBIN_KEY,
        'X-Bin-Meta': 'false'
      }
    });
    if (res.ok) {
      const data = await res.json();
      // JSONBin returns record directly when X-Bin-Meta: false
      const prods = Array.isArray(data) ? data :
                    (data.products ? data.products :
                    (data.record && data.record.products ? data.record.products : null));
      if (Array.isArray(prods) && prods.length > 0) {
        // Cache in localStorage for next load
        localStorage.setItem('ud_prods', JSON.stringify(prods));
        return prods;
      }
    }
  } catch(e) {
    console.warn('Cloud fetch failed, using defaults:', e);
  }

  return [...DEFAULT_PRODUCTS];
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
  // Show defaults immediately so page isn't blank
  renderAll(); renderNew(); renderPanjabi();

  // Load cloud products then re-render
  PRODUCTS = await fetchProducts();
  renderAll(); renderNew(); renderPanjabi();

  initNav();
  initSearch();
  initFilters();
  initHamburger();
  startSlider();
  initScrollReveal();

  document.getElementById('loadMore').addEventListener('click', loadMore);
  document.getElementById('cartBtn').addEventListener('click', openCart);
});

// ── CARD BUILDER ──
function makeCard(p) {
  const el = document.createElement('div');
  el.className = 'pcard reveal';
  el.innerHTML = `
    <div class="pcard__img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      ${p.isNew ? '<span class="badge b-new">New</span>' : ''}
      <div class="pcard__ov"><button class="qv-btn">Quick View</button></div>
    </div>
    <div class="pcard__info">
      <h3>${p.name}</h3>
      <p class="pcat">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</p>
      <div class="pprices"><span class="pcur">৳${p.price.toLocaleString()}</span></div>
    </div>`;
  el.querySelector('.qv-btn').addEventListener('click', e => { e.stopPropagation(); openModal(p); });
  el.addEventListener('click', () => openModal(p));
  return el;
}

function renderNew() {
  const g = document.getElementById('newGrid'); if (!g) return;
  g.innerHTML = '';
  PRODUCTS.filter(p => p.isNew).forEach(p => g.appendChild(makeCard(p)));
  triggerReveal();
}

function renderAll(filter) {
  if (filter !== undefined) curFilter = filter;
  const g = document.getElementById('allGrid'); if (!g) return;
  g.innerHTML = '';
  const list = curFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === curFilter);
  list.slice(0, visCount).forEach(p => g.appendChild(makeCard(p)));
  const lb = document.getElementById('loadMore');
  if (lb) lb.style.display = list.length > visCount ? 'inline-flex' : 'none';
  triggerReveal();
}

function renderPanjabi() {
  const g = document.getElementById('panjabi-grid'); if (!g) return;
  g.innerHTML = '';
  PRODUCTS.filter(p => p.cat === 'panjabi').forEach(p => g.appendChild(makeCard(p)));
  triggerReveal();
}

function loadMore() { visCount += 4; renderAll(); }

// ── FILTERS ──
function initFilters() {
  document.querySelectorAll('.fbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      visCount = 8;
      renderAll(btn.dataset.f);
    });
  });
}

// ── HERO SLIDER ──
function goSlide(n) {
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');
  if (!slides.length) return;
  slides[slideIdx].classList.remove('active');
  if (dots[slideIdx]) dots[slideIdx].classList.remove('active');
  slideIdx = (n + slides.length) % slides.length;
  slides[slideIdx].classList.add('active');
  if (dots[slideIdx]) dots[slideIdx].classList.add('active');
}
function nextSlide() { clearInterval(slideTimer); goSlide(slideIdx+1); startSlider(); }
function prevSlide() { clearInterval(slideTimer); goSlide(slideIdx-1); startSlider(); }
function startSlider() { slideTimer = setInterval(() => goSlide(slideIdx+1), 5000); }

// ── PRODUCT MODAL ──
function openModal(p) {
  currentProd = p; selSize = null; qty = 1;
  document.getElementById('qtyNum').textContent = 1;
  document.getElementById('modalImg').innerHTML = `<img src="${p.img}" alt="${p.name}"/>`;
  const tag = document.getElementById('modalTag');
  if (p.isNew) { tag.textContent = 'New Arrival'; tag.className = 'modal-tag b-new'; }
  else { tag.textContent = ''; tag.className = 'modal-tag'; }
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('mPrice').textContent = `৳${p.price.toLocaleString()}`;
  document.getElementById('mDesc').textContent = p.desc || '';
  const sg = document.getElementById('sizeGrid');
  sg.innerHTML = '';
  (p.sizes || ['S','M','L','XL','XXL']).forEach(sz => {
    const b = document.createElement('button');
    b.className = 'sbtn'; b.textContent = sz;
    b.addEventListener('click', () => {
      document.querySelectorAll('.sbtn').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); selSize = sz;
    });
    sg.appendChild(b);
  });
  on('modalOverlay'); on('prodModal');
  document.body.style.overflow = 'hidden';
}
function closeModal() { off('modalOverlay'); off('prodModal'); document.body.style.overflow = ''; }
function chQty(d) { qty = Math.max(1, Math.min(10, qty+d)); document.getElementById('qtyNum').textContent = qty; }
function addFromModal() {
  if (!selSize) { alert('Please select a size!'); return; }
  addToCart(currentProd, selSize, qty);
  closeModal(); openCart();
}

// ── CART ──
function addToCart(prod, size, q=1) {
  const ex = cart.find(i => i.id===prod.id && i.size===size);
  if (ex) ex.qty += q; else cart.push({...prod, size, qty:q});
  updateCart();
  const btn = document.getElementById('cartBtn');
  btn.style.transform = 'scale(1.35)';
  setTimeout(() => btn.style.transform = '', 300);
}
function updateCart() {
  const total = cart.reduce((s,i) => s+i.qty, 0);
  const badge = document.getElementById('cartCount');
  badge.textContent = total;
  total > 0 ? badge.classList.add('on') : badge.classList.remove('on');
  document.getElementById('cartItemCount').textContent = total;
  const body = document.getElementById('cartItems');
  const foot = document.getElementById('cartFooter');
  if (!cart.length) { body.innerHTML = '<div class="empty-msg">Your cart is empty 🛍️</div>'; foot.style.display='none'; return; }
  foot.style.display = 'block';
  body.innerHTML = '';
  cart.forEach((item,i) => {
    const el = document.createElement('div');
    el.className = 'citem';
    el.innerHTML = `
      <div class="citem__img"><img src="${item.img}" alt="${item.name}"/></div>
      <div class="citem__info">
        <h4>${item.name}</h4><p>Size: ${item.size}</p>
        <div class="citem__row">
          <div class="qty-ctrl">
            <button onclick="updQty(${i},-1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updQty(${i},1)">+</button>
          </div>
          <button class="rm-btn" onclick="rmItem(${i})">Remove</button>
        </div>
      </div>
      <span class="cprice">৳${(item.price*item.qty).toLocaleString()}</span>`;
    body.appendChild(el);
  });
  document.getElementById('cartTotal').textContent = `৳${cart.reduce((s,i)=>s+i.price*i.qty,0).toLocaleString()}`;
}
function updQty(i,d) { cart[i].qty = Math.max(1, cart[i].qty+d); updateCart(); }
function rmItem(i)   { cart.splice(i,1); updateCart(); }
function openCart()  { on('cartOverlay'); on('cartDrawer'); document.body.style.overflow='hidden'; }
function closeCart() { off('cartOverlay'); off('cartDrawer'); document.body.style.overflow=''; }

// ── CHECKOUT ──
function openCheckout() {
  if (!cart.length) return;
  closeCart();
  document.getElementById('orderSum').innerHTML = cart.map(i =>
    `<div style="display:flex;justify-content:space-between;margin-bottom:4px">
       <span>${i.name} (${i.size}) ×${i.qty}</span>
       <span>৳${(i.price*i.qty).toLocaleString()}</span></div>`
  ).join('');
  document.getElementById('oTotal').textContent = `৳${cart.reduce((s,i)=>s+i.price*i.qty,0).toLocaleString()}`;
  on('coOverlay'); on('coModal');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() { off('coOverlay'); off('coModal'); document.body.style.overflow=''; }
function placeOrder(e) {
  e.preventDefault(); closeCheckout();
  cart = []; updateCart();
  on('sucOverlay'); on('sucModal');
  document.body.style.overflow = 'hidden';
}
function closeSuc() { off('sucOverlay'); off('sucModal'); document.body.style.overflow=''; }

// ── HAMBURGER ──
function initHamburger() {
  const btn = document.getElementById('hamburger');
  if (!btn) return;
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('sideMenu').classList.contains('on') ? closeMenu() : openMenu();
  });
}
function openMenu() {
  document.getElementById('sideMenu').classList.add('on');
  document.getElementById('menuOverlay').classList.add('on');
  const h = document.getElementById('hamburger'); if(h) h.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('sideMenu').classList.remove('on');
  document.getElementById('menuOverlay').classList.remove('on');
  const h = document.getElementById('hamburger'); if(h) h.classList.remove('open');
  document.body.style.overflow = '';
}

// ── SEARCH ──
function initSearch() {
  document.getElementById('searchToggle').addEventListener('click', () => {
    on('searchBar');
    setTimeout(() => document.getElementById('searchInput').focus(), 150);
  });
  document.getElementById('searchClose').addEventListener('click', () => off('searchBar'));
  document.getElementById('searchInput').addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    const g = document.getElementById('allGrid');
    if (!q) { renderAll(); return; }
    g.innerHTML = '';
    PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q))
      .forEach(p => g.appendChild(makeCard(p)));
    document.getElementById('collection').scrollIntoView({behavior:'smooth'});
    triggerReveal();
  });
}

// ── NAV SCROLL ──
function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('vis'), i*60);
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.06});
  document.querySelectorAll('.reveal:not(.vis)').forEach(el => obs.observe(el));
}
function triggerReveal() { setTimeout(initScrollReveal, 80); }

// ── NEWSLETTER ──
function handleNL(e) {
  e.preventDefault();
  document.getElementById('nlMsg').textContent = "✦  You're in. Welcome to the inner circle.";
  e.target.reset();
  setTimeout(() => document.getElementById('nlMsg').textContent = '', 5000);
}

// ── UTIL ──
function on(id)  { const el=document.getElementById(id); if(el) el.classList.add('on'); }
function off(id) { const el=document.getElementById(id); if(el) el.classList.remove('on'); }
