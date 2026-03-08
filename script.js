// =============================================
//  UPSCALE DRIP — Main Script v2
// =============================================

// ── PRODUCT DATA (real Unsplash images) ──
const PRODUCTS = [
  // ── NEW ARRIVALS ──
  {
    id:1, name:"Short Panjabi — Sand White", cat:"panjabi",
    img:"https://www.etsy.com/in-en/listing/1709432561/handmade-cotton-short-kurta-for-men",
    price:3200, oldPrice:null,
    desc:"Premium cotton short panjabi with intricate embroidery. Modern cut, traditional soul. Perfect for Eid, weddings & casual occasions.",
    isNew:true, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:2, name:"Premium Linen Shirt — Beige", cat:"shirt",
    img:"https://www.manufactum.com/men-linen-shirt-a212101/",
    price:1800, oldPrice:null,
    desc:"Egyptian linen blend with a relaxed, breathable fit. Effortlessly stylish for any occasion — day or night.",
    isNew:true, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:3, name:"Premium Polo Shirt — Coffee", cat:"polo",
    img:"https://essentialworkwear.com/product/clothing/polo-shirts/tee-jays-luxury-stretch-v-neck-polo-shirt/?srsltid=AfmBOor8s5L-VmF7no01g8Z7CHVby-2YIw3lmsPYUg8mA1j6tyV1IfZg",
    price:2400, oldPrice:null,
    desc:"Fine piqué cotton polo in our signature coffee colorway. Embroidered UD monogram on chest. Smart casual perfection.",
    isNew:true, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:4, name:"Obsidian Premium Blazer", cat:"jacket",
    img:"https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80",
    price:3800, oldPrice:4500,
    desc:"Structured Italian-inspired wool blend. Sharp peak lapels, double vent. A statement piece for the modern gentleman.",
    isNew:true, isSale:false, sizes:["S","M","L","XL"]
  },

  // ── FULL COLLECTION ──
  {
    id:5, name:"Short Panjabi — Olive Green", cat:"panjabi",
    img:"https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80",
    price:3200, oldPrice:null,
    desc:"Soft cotton kurta with hand-embroidered collar. A timeless piece for festive and casual wear alike.",
    isNew:false, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:6, name:"Linen Shirt — Slate Blue", cat:"shirt",
    img:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
    price:1800, oldPrice:2200,
    desc:"Relaxed slate blue linen. Perfect paired with chinos or trousers. A wardrobe essential.",
    isNew:false, isSale:true, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:7, name:"Classic White Polo", cat:"polo",
    img:"https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&q=80",
    price:2400, oldPrice:2900,
    desc:"Clean white polo in premium cotton piqué. The most versatile polo you'll ever own.",
    isNew:false, isSale:true, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:8, name:"Tailored Drip Trousers", cat:"trouser",
    img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    price:2200, oldPrice:null,
    desc:"High-waist tapered cut with a relaxed yet refined silhouette. Boss energy from 9-to-9.",
    isNew:false, isSale:false, sizes:["28","30","32","34","36"]
  },
  {
    id:9, name:"Onyx Trench Coat", cat:"jacket",
    img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    price:5200, oldPrice:6500,
    desc:"Double-breasted, midnight-ready. Full-length trench with storm flap and belted waist.",
    isNew:false, isSale:true, sizes:["S","M","L","XL"]
  },
  {
    id:10, name:"Oxford Button-Down — White", cat:"shirt",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    price:1800, oldPrice:null,
    desc:"Classic Oxford weave, modern fit. The foundation of any sharp wardrobe.",
    isNew:false, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:11, name:"Cargo Utility Trousers", cat:"trouser",
    img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    price:2500, oldPrice:3000,
    desc:"8-pocket utility design with a tailored silhouette. Functional meets refined.",
    isNew:false, isSale:true, sizes:["28","30","32","34","36"]
  },
  {
    id:12, name:"Varsity Bomber Jacket", cat:"jacket",
    img:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    price:4200, oldPrice:5000,
    desc:"Ribbed cuffs and hem, satin lining. A campus-to-street essential.",
    isNew:false, isSale:true, sizes:["S","M","L","XL"]
  },
  {
    id:13, name:"Short Panjabi — Black Embroidery", cat:"panjabi",
    img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    price:3200, oldPrice:null,
    desc:"Elegant black short panjabi with subtle embroidery. Perfect for formal occasions or Eid celebrations.",
    isNew:false, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:14, name:"Slim Chino Trousers — Cream", cat:"trouser",
    img:"https://louisphilippe.abfrl.in/p/louis-philippe-cream-trousers-779801.html?srsltid=AfmBOoqTJjTUvMLwLlAcAJPIYUBh1zLJh6eHBxDcsz9E4oEd9CfkDatz",
    price:1900, oldPrice:2400,
    desc:"Premium cotton twill chino in slim cut. The most versatile trouser you'll own.",
    isNew:false, isSale:true, sizes:["28","30","32","34","36"]
  },
  {
    id:15, name:"Striped Polo — Navy", cat:"polo",
    img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    price:2400, oldPrice:null,
    desc:"Subtle horizontal stripes in navy and cream. Preppy meets street.",
    isNew:false, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
  {
    id:16, name:"Cuban Collar Shirt — Brown", cat:"shirt",
    img:"https://zellbury.com/products/linen-shirts-mcslh2503?srsltid=AfmBOooYETJleK1ajZBGSlbfI40y_qNAddnUWoEhsFwJcCry5zynCl1t",
    price:1800, oldPrice:null,
    desc:"Relaxed open collar with short sleeves. The ultimate drip statement shirt.",
    isNew:false, isSale:false, sizes:["S","M","L","XL","XXL"]
  },
];

// ── STATE ──
let cart = [];
let currentProd = null;
let selSize = null;
let qty = 1;
let visCount = 8;
let curFilter = "all";
let slideIdx = 0;
let slideTimer;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderNew();
  renderAll();
  renderPanjabi();
  renderSale();
  initScrollReveal();
  initNav();
  initSearch();
  initFilters();
  initHamburger();
  startSlider();
  document.getElementById('loadMore').addEventListener('click', loadMore);
  document.getElementById('cartBtn').addEventListener('click', openCart);
});

// ── RENDER HELPERS ──
function makeCard(p) {
  const el = document.createElement('div');
  el.className = 'pcard reveal';
  const dis = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : null;
  el.innerHTML = `
    <div class="pcard__img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      ${p.isNew ? '<span class="badge b-new">New</span>' : ''}
      ${p.isSale && !p.isNew ? '<span class="badge b-sale">Sale</span>' : ''}
      <div class="pcard__ov"><button class="qv-btn">Quick View</button></div>
    </div>
    <div class="pcard__info">
      <h3>${p.name}</h3>
      <p class="pcat">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</p>
      <div class="pprices">
        <span class="pcur">৳${p.price.toLocaleString()}</span>
        ${p.oldPrice?`<span class="pold">৳${p.oldPrice.toLocaleString()}</span>`:''}
        ${dis?`<span class="pdis">-${dis}%</span>`:''}
      </div>
    </div>`;
  el.querySelector('.qv-btn').addEventListener('click', e => { e.stopPropagation(); openModal(p); });
  el.addEventListener('click', () => openModal(p));
  return el;
}

function renderNew() {
  const g = document.getElementById('newGrid');
  PRODUCTS.filter(p=>p.isNew).forEach(p=>g.appendChild(makeCard(p)));
  triggerReveal();
}

function renderAll(filter='all') {
  const g = document.getElementById('allGrid');
  g.innerHTML = '';
  const list = filter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===filter);
  list.slice(0, visCount).forEach(p=>g.appendChild(makeCard(p)));
  document.getElementById('loadMore').style.display = list.length > visCount ? 'inline-flex' : 'none';
  triggerReveal();
}

function renderPanjabi() {
  const g = document.getElementById('panjabi-grid');
  PRODUCTS.filter(p=>p.cat==='panjabi').forEach(p=>g.appendChild(makeCard(p)));
  triggerReveal();
}

function renderSale() {
  const g = document.getElementById('saleGrid');
  PRODUCTS.filter(p=>p.isSale).forEach(p=>g.appendChild(makeCard(p)));
  triggerReveal();
}

function loadMore() {
  visCount += 4;
  renderAll(curFilter);
}

// ── FILTERS ──
function initFilters() {
  document.querySelectorAll('.fbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      curFilter = btn.dataset.f;
      visCount = 8;
      renderAll(curFilter);
    });
  });
}

// ── HERO SLIDER ──
function goSlide(n) {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  slides[slideIdx].classList.remove('active');
  dots[slideIdx].classList.remove('active');
  slideIdx = (n + slides.length) % slides.length;
  slides[slideIdx].classList.add('active');
  dots[slideIdx].classList.add('active');
}
function nextSlide() { clearInterval(slideTimer); goSlide(slideIdx+1); startSlider(); }
function prevSlide() { clearInterval(slideTimer); goSlide(slideIdx-1); startSlider(); }
function startSlider() { slideTimer = setInterval(()=>goSlide(slideIdx+1), 5000); }

// ── PRODUCT MODAL ──
function openModal(p) {
  currentProd = p; selSize = null; qty = 1;
  document.getElementById('qtyNum').textContent = 1;
  const dis = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : null;

  // image
  const imgWrap = document.getElementById('modalImg');
  imgWrap.innerHTML = `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover"/>`;

  // tag
  const tag = document.getElementById('modalTag');
  if (p.isNew) { tag.textContent='New Arrival'; tag.className='modal-tag b-new'; }
  else if (p.isSale) { tag.textContent='On Sale'; tag.className='modal-tag b-sale'; }
  else { tag.textContent=''; }

  document.getElementById('modalName').textContent = p.name;
  document.getElementById('mPrice').textContent = `৳${p.price.toLocaleString()}`;
  document.getElementById('mOld').textContent = p.oldPrice ? `৳${p.oldPrice.toLocaleString()}` : '';
  document.getElementById('mDis').textContent = dis ? `-${dis}% OFF` : '';
  document.getElementById('mDesc').textContent = p.desc;

  const sg = document.getElementById('sizeGrid');
  sg.innerHTML = '';
  p.sizes.forEach(sz => {
    const b = document.createElement('button');
    b.className = 'sbtn'; b.textContent = sz;
    b.addEventListener('click', () => {
      document.querySelectorAll('.sbtn').forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel'); selSize = sz;
    });
    sg.appendChild(b);
  });

  on('modalOverlay'); on('prodModal');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  off('modalOverlay'); off('prodModal');
  document.body.style.overflow = '';
}

function chQty(d) {
  qty = Math.max(1, Math.min(10, qty+d));
  document.getElementById('qtyNum').textContent = qty;
}

function addFromModal() {
  if (!selSize) { alert('Please select a size!'); return; }
  addToCart(currentProd, selSize, qty);
  closeModal();
  openCart();
}

// ── CART ──
function addToCart(prod, size, q=1) {
  const ex = cart.find(i=>i.id===prod.id && i.size===size);
  if (ex) ex.qty += q; else cart.push({...prod, size, qty:q});
  updateCart();
  const btn = document.getElementById('cartBtn');
  btn.style.transform='scale(1.35)';
  setTimeout(()=>btn.style.transform='',300);
}

function updateCart() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  const badge = document.getElementById('cartCount');
  badge.textContent = total;
  total > 0 ? badge.classList.add('on') : badge.classList.remove('on');
  document.getElementById('cartItemCount').textContent = total;

  const body = document.getElementById('cartItems');
  const foot = document.getElementById('cartFooter');

  if (!cart.length) {
    body.innerHTML = '<div class="empty-msg">Your cart is empty 🛍️</div>';
    foot.style.display = 'none'; return;
  }
  foot.style.display = 'block';
  body.innerHTML = '';

  cart.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'citem';
    el.innerHTML = `
      <div class="citem__img"><img src="${item.img}" alt="${item.name}"/></div>
      <div class="citem__info">
        <h4>${item.name}</h4>
        <p>Size: ${item.size}</p>
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

  const sub = cart.reduce((s,i)=>s+i.price*i.qty, 0);
  document.getElementById('cartTotal').textContent = `৳${sub.toLocaleString()}`;
  const sm = document.getElementById('freeShipMsg');
  if (sub>=1500) { sm.textContent='🚚 You qualify for free delivery!'; sm.style.color='#27ae60'; }
  else { sm.textContent=`Add ৳${(1500-sub).toLocaleString()} more for free delivery`; sm.style.color='var(--muted)'; }
}

function updQty(i,d) { cart[i].qty = Math.max(1,cart[i].qty+d); updateCart(); }
function rmItem(i) { cart.splice(i,1); updateCart(); }

function openCart() { on('cartOverlay'); on('cartDrawer'); document.body.style.overflow='hidden'; }
function closeCart() { off('cartOverlay'); off('cartDrawer'); document.body.style.overflow=''; }

// ── CHECKOUT ──
function openCheckout() {
  if (!cart.length) return;
  closeCart();
  const sum = document.getElementById('orderSum');
  sum.innerHTML = cart.map(i=>`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>${i.name} (${i.size}) ×${i.qty}</span><span>৳${(i.price*i.qty).toLocaleString()}</span></div>`).join('');
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('oTotal').textContent = `৳${total.toLocaleString()}`;
  on('coOverlay'); on('coModal'); document.body.style.overflow='hidden';
}
function closeCheckout() { off('coOverlay'); off('coModal'); document.body.style.overflow=''; }

function placeOrder(e) {
  e.preventDefault();
  closeCheckout();
  cart=[]; updateCart();
  on('sucOverlay'); on('sucModal'); document.body.style.overflow='hidden';
}
function closeSuc() { off('sucOverlay'); off('sucModal'); document.body.style.overflow=''; }

// ── HAMBURGER / MENU ──
function initHamburger() {
  const hb = document.getElementById('hamburger');
  hb.addEventListener('click', () => {
    const open = document.getElementById('sideMenu').classList.contains('on');
    if (open) closeMenu(); else openMenu();
  });
}
function openMenu() {
  document.getElementById('sideMenu').classList.add('on');
  document.getElementById('menuOverlay').classList.add('on');
  document.getElementById('hamburger').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeMenu() {
  document.getElementById('sideMenu').classList.remove('on');
  document.getElementById('menuOverlay').classList.remove('on');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow='';
}

// ── SEARCH ──
function initSearch() {
  document.getElementById('searchToggle').addEventListener('click', () => {
    document.getElementById('searchBar').classList.add('on');
    setTimeout(()=>document.getElementById('searchInput').focus(),200);
  });
  document.getElementById('searchClose').addEventListener('click', () => {
    document.getElementById('searchBar').classList.remove('on');
  });
  document.getElementById('searchInput').addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    if (!q) { renderAll(curFilter); return; }
    const res = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.cat.includes(q));
    const g = document.getElementById('allGrid');
    g.innerHTML='';
    res.forEach(p=>g.appendChild(makeCard(p)));
    document.getElementById('collection').scrollIntoView({behavior:'smooth'});
    triggerReveal();
  });
}

// ── NAV SCROLL ──
function initNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        setTimeout(()=>e.target.classList.add('vis'), i*80);
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.08});
  document.querySelectorAll('.reveal:not(.vis)').forEach(el=>obs.observe(el));
}

function triggerReveal() {
  setTimeout(initScrollReveal, 80);
}

// ── NEWSLETTER ──
function handleNL(e) {
  e.preventDefault();
  document.getElementById('nlMsg').textContent='✦  You\'re in. Welcome to the inner circle.';
  e.target.reset();
  setTimeout(()=>document.getElementById('nlMsg').textContent='', 5000);
}

// ── UTIL: toggle class 'on' ──
function on(id) { document.getElementById(id).classList.add('on'); }
function off(id){ document.getElementById(id).classList.remove('on'); }


