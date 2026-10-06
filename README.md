# Gupta Cab Service – Travel with Raunak

Chalane ke liye: `npm run dev`  (pehli baar ya package change ke baad: `npm install`)

## Folder structure (sab kuch alag-alag component + uski apni CSS)
- `src/site.js`            – phone, email, tagline, nav links, destinations (ek jagah badlo)
- `src/data/content.js`    – stats, why-choose, services, reviews, FAQ ka text
- `src/data/blog.js`       – BLOG POSTS (sirf link daalo, upar se aur steps file ke andar likhe hain)
- `src/styles/base.css`    – colours, buttons, cards, forms (global)
- `src/components/*`       – Navbar, Footer, Blog (Instagram / Video / Card / Grid), Lightbox, DataTable ...
- `src/sections/*`         – Home page ke sections (Hero, Stats, WhyChoose, ...)
- `src/pages/*`            – Home, About, Gallery, Blog, Reviews, Booking, Contact
- `src/admin/*`            – Login, Dashboard, Bookings, Contacts
- `backend/`               – Express + MySQL (pehla admin: `node scripts_createAdmin.js "Naam" email password`)
- `_old_backup/`           – purana poora code (safe rakha hai)

## Blog me naya post
`src/data/blog.js` ki list me sabse upar link paste karo (Instagram reel/post, .mp4 ya image). Bas.
