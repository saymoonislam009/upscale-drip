# 🖤 Upscale Drip — Men's Clothing Brand Website

A premium, dark-luxury men's clothing brand website built with pure HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
upscale-drip/
├── index.html      → Main website page
├── style.css       → All styling (responsive + animations)
├── script.js       → Scroll effects, reveal animations, form
└── README.md       → This file
```

---

## 🚀 How to Deploy on GitHub Pages (Step by Step)

### Step 1 — Create a GitHub Account
Go to [https://github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click the **"+"** icon → **"New repository"**
2. Name it: `upscale-drip` (or anything you like)
3. Set it to **Public**
4. Check **"Add a README file"**
5. Click **"Create repository"**

### Step 3 — Upload Your Files
1. In your new repo, click **"Add file"** → **"Upload files"**
2. Drag and drop these 3 files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to your repo → click **"Settings"** tab
2. Scroll down to **"Pages"** (in the left sidebar)
3. Under **"Branch"**, select `main` and folder `/root`
4. Click **"Save"**

### Step 5 — Get Your Live URL
After ~1–2 minutes, your site will be live at:
```
https://YOUR-USERNAME.github.io/upscale-drip/
```

---

## 🌐 Custom Domain (Optional)
If you have a domain like `upscaledrip.com`:
1. Go to **Settings → Pages → Custom domain**
2. Enter your domain and save
3. In your domain registrar (GoDaddy, Namecheap, etc.), add a CNAME record pointing to `YOUR-USERNAME.github.io`

---

## ✏️ How to Edit the Website

### Change Brand Colors
Open `style.css`, find the `:root` section at the top:
```css
:root {
  --gold: #c9a84c;       /* Change this for accent color */
  --black: #0a0a0a;      /* Main background */
  --cream: #f5f0e8;      /* Text color */
}
```

### Add/Change Products
Open `index.html`, find the `.card` sections and edit:
- Product name (inside `<h3>`)
- Description (inside `<p>`)
- Price (inside `<span>`)
- Replace the emoji with a real `<img>` tag when you have product photos

### Add Real Product Images
Replace:
```html
<div class="card__placeholder">👔</div>
```
With:
```html
<img src="images/blazer.jpg" alt="Obsidian Blazer" style="width:100%;height:100%;object-fit:cover;"/>
```

---

## 📱 Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Sticky navbar with scroll effect
- ✅ Product grid with hover effects
- ✅ Email subscription form
- ✅ Gold luxury aesthetic
- ✅ No frameworks required — pure HTML/CSS/JS

---

Built for **Upscale Drip** © 2026
