# UNIVERSITY LAB ASSIGNMENT REPORT

---

**Course Title:** Web Engineering / E-Commerce Technologies  
**Lab Assignment:** Assignment 1 Lab – Design Template of an Online Store  
**Project Name:** LAILA BAGS – Frontend-Only Luxury E-Commerce Web Application  
**Student Name:** [Your Name Here]  
**Roll / Registration No:** [Your Roll Number Here]  
**Class / Semester:** BS Computer Science / Software Engineering (Semester [X])  
**Submission Date:** September 2026  
**Instructor / Evaluator:** [Instructor Name Here]  

---

## 1. EXECUTIVE SUMMARY

The objective of this laboratory assignment is to design, architect, and develop a complete, university-grade frontend-only online store named **LAILA BAGS**. The store represents an elegant fashion brand specializing in luxury handbags, tote bags, crossbody bags, backpacks, and accessories.

Strict adherence to the assignment guidelines was maintained:
- **Zero Backend / Server Technologies:** No PHP, Node.js runtime, Python backends, MongoDB, MySQL, Firebase, or external REST API servers were used.
- **Pure Core Technologies:** The application is constructed exclusively using **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**.
- **Data Persistence:** Client-side persistence is accomplished using the HTML5 **Web Storage API (`localStorage`)** for shopping cart operations, user wishlists, applied promotional coupons, and order generation.
- **Exact Page Compliance:** All **11 requested pages** are built as distinct, fully operational HTML files linked seamlessly through consistent navigation headers and footers.
- **Localization:** All product prices, shipping calculations, and order totals are configured in **Pakistani Rupees (PKR / Rs.)** with localized formatting.

---

## 2. PROJECT OBJECTIVES & SCOPE

1. **Aesthetic Excellence:** Design an original, minimalist luxury aesthetic with warm cream tones (`#FAF8F5`), champagne gold accents (`#C29A53`), rich espresso typography, and micro-interactions that avoid generic template appearances.
2. **Page Completeness:** Develop 11 individual, fully interconnected HTML pages:
   1. Home Page (`index.html`)
   2. Shop Page (`shop.html`)
   3. Shop by Category Page (`categories.html`)
   4. About Us Page (`about.html`)
   5. News & Promotions Page (`promotions.html`)
   6. Contact Us Page (`contact.html`)
   7. Single Product Details Page (`product.html`)
   8. Wishlist Page (`wishlist.html`)
   9. Add to Cart Page (`cart.html`)
   10. Checkout Page (`checkout.html`)
   11. Thank You / Order Confirmation Page (`thank-you.html`)
3. **Dynamic Frontend Functionality:**
   - Real-time product search by keyword, title, and leather type.
   - Dynamic multi-criteria filtering by category and price range slider (Rs. 4,000 to Rs. 20,000).
   - Multi-way sorting (Price Low-to-High, Price High-to-Low, Alphabetical A-Z, Z-A, and Customer Rating).
   - Persistent Cart with quantity controls, subtotal calculations, dynamic shipping meter, and coupon code evaluation (`LAILA20`).
   - Persistent Wishlist with toggle states, badge updates, and "Move to Cart" actions.
   - Dynamic Single Product Page utilizing URL Query Parameters (`product.html?id=X`) with interactive image galleries, color swatches, and tabbed specifications.
   - Multi-step Checkout Form with strict JavaScript regex validation and simulated payment methods (Card, COD, Bank Wire).
   - Automated Order Confirmation with pseudo-random order ID generation (`#LB-XXXXX`) and printable invoice receipts.
4. **Responsive Layouts:** Universal responsiveness tested across mobile screens (<480px), tablet screens (768px - 1024px), and desktop viewports (1200px+).

---

## 3. PROJECT DIRECTORY STRUCTURE

The project is structured in strict conformance with standard web conventions:

```text
Online-Store/
│
├── index.html                 → Home Page
├── shop.html                  → Shop All Listing Page
├── categories.html            → Shop by Category Page
├── about.html                 → About Us Atelier Page
├── promotions.html            → News & Promotions Page
├── contact.html               → Contact Us & Concierge Page
├── product.html               → Single Product Details Page
├── wishlist.html              → Saved Wishlist Page
├── cart.html                  → Shopping Cart Page
├── checkout.html              → Checkout & Payment Page
├── thank-you.html             → Order Confirmation & Receipt Page
│
├── css/
│   └── style.css              → Master Design Tokens & Responsive CSS
│
├── js/
│   └── script.js              → Catalog Data, State Management & Event Logic
│
└── images/
    ├── products/              → High-resolution luxury bag photos (bag1.jpg - bag16.jpg)
    ├── banners/               → Hero, shop, craftsmanship, & promo banners
    ├── categories/            → Silhouette category thumbnails
    └── promotions/            → Campaign & press editorial images
```

---

## 4. TECHNICAL ARCHITECTURE & DESIGN TOKENS

### 4.1 CSS Design System (`css/style.css`)
A centralized CSS Variable architecture ensures consistency across all 11 pages:

| CSS Variable | Value / Hex Code | Design Purpose |
| :--- | :--- | :--- |
| `--bg-body` | `#FAF8F5` | Warm alabaster cream body background |
| `--bg-surface` | `#FFFFFF` | Elevated white card background |
| `--bg-secondary`| `#F3EFEA` | Soft linen sand for sections & sidebars |
| `--bg-dark` | `#191614` | Deep espresso black for headers & footer |
| `--text-main` | `#1D1A17` | High-contrast readable typography |
| `--text-muted` | `#6E665F` | Subtitles, specifications, and captions |
| `--accent-gold` | `#C29A53` | Champagne gold for CTAs, ratings, badges |
| `--accent-terracotta`| `#B96652`| Warm sale badge indicator |
| `--accent-green`| `#3D7A5A` | Success messages, order confirmation |
| `--font-serif` | `'Playfair Display', serif` | Elegant editorial headlines |
| `--font-sans` | `'Plus Jakarta Sans', sans-serif` | Clean modern UI body copy |

### 4.2 Typography & Iconography
- **Google Fonts:** Paired typography of *Playfair Display* (Editorial Serif) for luxury headers and *Plus Jakarta Sans* (Geometric Sans) for clarity.
- **Font Awesome 6:** CDN integration providing vector iconography for shopping bags, heart wishlists, search magnifying glasses, stars, and social media badges.

---

## 5. DETAILED PAGE-BY-PAGE SPECIFICATIONS

### 5.1 Home Page (`index.html`)
- **Top Announcement Bar:** Notifies customers of complimentary express shipping across Pakistan on orders over Rs. 5,000 and highlights coupon code `LAILA20`.
- **Global Header:** Contains brand typography monogram (`LAILA.`), full desktop navigation, search shortcut, and live Wishlist and Cart counter badges.
- **Hero Section:** Features editorial photography with high-contrast text overlay: *"Elevate Your Everyday Style"*, supporting copy, and dual calls-to-action (`SHOP NOW` and `EXPLORE COLLECTION`).
- **Featured Categories Grid:** 6 prominent category cards linking directly to filtered views (`shop.html?category=handbags`, etc.).
- **Featured Products Section:** Injects 8 handpicked luxury products dynamically via JavaScript with prices formatted in PKR, discount badges, ratings, and one-click cart additions.
- **Seasonal Promotional Banner:** "UP TO 30% OFF - New Season Collection" with direct link to promotions.
- **Why Choose Us:** 4 service value pillars (Premium Quality, Fast Delivery, Secure Shopping, Easy Returns).
- **Client Testimonials:** 3 structured customer reviews with star ratings, quotes, and buyer verification.
- **Newsletter Subscription:** Interactive email capture with instant client feedback toast.

### 5.2 Shop Page (`shop.html`)
- **Breadcrumb Navigation:** `Home / Shop All`.
- **Search Filtration:** Real-time search input filtering products by name, silhouette category, or leather description.
- **Category Filter Sidebar:** 9 category buttons (All, Handbags, Tote Bags, Crossbody Bags, Shoulder Bags, Backpacks, Wallets, Mini Bags, Travel Bags) with live item count indicators.
- **Price Range Filter:** Interactive range slider configured from **Rs. 4,000 to Rs. 20,000** in steps of Rs. 500.
- **Sorting Engine:** Dropdown menu enabling sorting by:
  1. Featured & Popular (Default)
  2. Price: Low to High
  3. Price: High to Low
  4. Name: A to Z
  5. Name: Z to A
  6. Highest Rated
- **Responsive Product Grid:** Displays all 16 products with zero-result fallback and active filter chips with a "Clear All" reset function.
- **Refined Action Bar:** Fixed button text collision with a dedicated `Add to Cart` button and an icon-based `View Details` action.

### 5.3 Shop by Category Page (`categories.html`)
- Displays all 8 bag categories with dedicated high-resolution cards:
  1. Handbags & Satchels
  2. Tote Bags
  3. Crossbody Bags
  4. Shoulder Bags
  5. Backpacks
  6. Wallets & Organizers
  7. Mini Bags & Clutches
  8. Travel & Weekend Duffels
- Each card displays item counts, evocative architectural descriptions, and direct links to the shop.

### 5.4 About Us Page (`about.html`)
- **Atelier Heritage Story:** Narrative detailing the brand's sustainable Tuscan leather workshop origins.
- **Live Statistics Section:**
  - `5,000+` Happy Global Customers
  - `100+` Artisan Products
  - `20+` Metropolitan Cities Delivered
  - `4.8 / 5` Average Client Rating
- **Mission & Vision Statements:** Defining slow fashion, uncorrected full-grain hides, and transparent direct-to-consumer pricing.
- **The Laila Quality Promise:** Explaining vegetable tanning and post-purchase leather care.

### 5.5 News & Promotions Page (`promotions.html`)
- **Live Countdown Banner:** Simulated flash sale timer updating seconds, minutes, hours, and days in real time.
- **One-Click Coupon Copy:** Interactive button allowing users to copy `LAILA20` to their system clipboard with toast confirmation.
- **6 Campaign Editorial Cards:**
  1. *Spring/Summer 2026 Collection Launch*
  2. *Eid Festive Luxury Sale — Up to 30% Off*
  3. *Summer Resort & Straw Totes Edit*
  4. *Complimentary Wallet with Any Two Bags*
  5. *Global Express Free Shipping Weekend*
  6. *The Florence Capsule: Only 50 Pieces Made*

### 5.6 Contact Us Page (`contact.html`)
- **Client Care Inquiry Form:** Form fields for Full Name, Email, Phone, Inquiry Subject, and Detailed Message.
- **Frontend Validation:** Verifies required fields and triggers an animated confirmation modal/toast without page refresh.
- **Showroom Information:** Address, direct phone, WhatsApp concierge, and operating hours.
- **Interactive Google Maps Embed:** Live location frame set to Fashion Avenue.
- **FAQ Accordion:** Native `<details>` elements providing answers on materials, shipping times, and return policies.

### 5.7 Single Product Details Page (`product.html`)
- **URL Parameter Extraction:** Utilizes JavaScript `URLSearchParams` to parse `product.html?id=X`.
- **Dynamic Content Injection:** Injects product name, category, PKR price, old price, and description.
- **Interactive Image Gallery:** Clickable thumbnail strip dynamically swapping the primary high-resolution viewport.
- **Color Swatches:** Clickable color buttons that update active styling and label state.
- **Quantity Selector:** Stepper buttons (+/-) with bounds checking (minimum 1).
- **Action Buttons:** `Add to Cart`, `Buy Now` (adds item and redirects directly to checkout), and `Save to Wishlist`.
- **Tabbed Information Architecture:** Seamless tab navigation between:
  - *Specifications* (Material, dimensions, hardware, origin)
  - *Shipping & Delivery* (Pakistan courier details)
  - *Returns & Warranty* (30-day policy)
  - *Verified Reviews* (Client feedback and 5-star ratings)
- **Curated Pairings:** Displays 4 related bags from the catalog.

### 5.8 Wishlist Page (`wishlist.html`)
- Reads user preferences from `localStorage.getItem('laila_wishlist_v1')`.
- Displays saved products in a tabular card view with image, category, PKR price, and stock status.
- **Individual Item Actions:** "Move to Cart" (transfers product to cart and updates counters) and "Remove from Wishlist".
- **Global Actions:** "Clear All Wishlist Items" and "Continue Shopping".
- **Empty State Handler:** Graceful placeholder with call-to-action when no items are saved.

### 5.9 Shopping Cart Page (`cart.html`)
- Reads active items from `localStorage.getItem('laila_cart_v1')`.
- **Item Breakdown:** Displays thumbnail, title, selected color, unit price, quantity stepper, item subtotal, and remove button.
- **Dynamic Math Engine:**
  - $\text{Subtotal} = \sum (\text{Price} \times \text{Quantity})$
  - $\text{Shipping} = \begin{cases} 0 & \text{if Subtotal} \ge 5000 \\ 250 & \text{if Subtotal} < 5000 \end{cases}$
  - $\text{Discount} = \begin{cases} \text{Subtotal} \times 0.20 & \text{if Promo} = \text{'LAILA20'} \\ 0 & \text{otherwise} \end{cases}$
  - $\text{Grand Total} = \text{Subtotal} - \text{Discount} + \text{Shipping}$
- **Free Delivery Progress Meter:** Visual progress bar indicating how many rupees are remaining to unlock free delivery across Pakistan.
- **Coupon Code Input:** Validates promo codes `LAILA20` (20% off) and `VIP10` (10% off).
- **Empty Cart Handler:** Interactive empty state directing users to `shop.html`.

### 5.10 Checkout Page (`checkout.html`)
- Displays miniature order breakdown with images, quantities, and totals.
- **Customer Information Validation:**
  - First Name & Last Name (Required text)
  - Email Address (RFC 5322 standard regex validation)
  - Phone Number (Required format)
  - Street Address, City, Province, Postal Code
- **Payment Method Toggle:**
  - *Credit / Debit Card:* Expands cardholder name, 16-digit card input (with automatic space formatting), MM/YY expiration, and CVV.
  - *Cash on Delivery (COD):* Displays local courier cash collection guidance.
  - *Direct Bank Wire:* Displays mock IBAN and SWIFT transfer instructions.
- **Form Submission:** Upon successful client-side validation, serializes the order into `laila_last_order_v1`, clears the cart, and redirects to `thank-you.html`.

### 5.11 Thank You / Order Confirmation Page (`thank-you.html`)
- **Visual Feedback:** Animated circular checkmark icon with celebration aesthetics.
- **Dynamic Order Summary:**
  - Auto-generated Unique Order ID (e.g., `#LB-48291`)
  - Order Timestamp
  - Recipient Name & Shipping Destination
  - Selected Payment Option
  - Ordered Items Breakdown
  - Final Amount Paid in PKR
- **Utility Actions:**
  - `Print Receipt` (invokes browser `window.print()` styling)
  - `Continue Shopping` (links to `shop.html`)
  - `Back to Home` (links to `index.html`)

---

## 6. CLIENT-SIDE DATA MANAGEMENT (`script.js`)

### 6.1 Product Schema Definition
The store contains 16 products structured with rich metadata:

```javascript
{
  id: 1,
  name: "Aurelia Classic Leather Tote",
  category: "Tote Bags",
  categorySlug: "tote-bags",
  price: 12500,               // In Pakistani Rupees (PKR)
  oldPrice: 14900,            // Strikethrough price
  rating: 4.9,
  reviewsCount: 64,
  badge: "Best Seller",
  badgeType: "gold",
  image: "images/products/bag1.jpg",
  gallery: [ "images/products/bag1.jpg", ... ],
  colors: [
    { name: "Cognac Brown", hex: "#8B4513" },
    { name: "Onyx Black", hex: "#1C1917" }
  ],
  description: "Handcrafted from vegetable-tanned full-grain Italian leather...",
  specs: {
    Material: "100% Full-Grain Italian Calfskin",
    Dimensions: "38cm W x 30cm H x 15cm D",
    Hardware: "18k Light-Gold PVD Finish",
    Origin: "Artisan Made in Florence, Italy"
  },
  featured: true
}
```

### 6.2 LocalStorage Data Schema

| Storage Key | Data Type | Purpose & Contents |
| :--- | :--- | :--- |
| `laila_cart_v1` | `Array<Object>` | Array of cart items `{ id, name, category, price, image, color, quantity }` |
| `laila_wishlist_v1` | `Array<Number>` | Array of saved product IDs `[1, 3, 7]` |
| `laila_applied_promo` | `String` | Active promo coupon code string (`"LAILA20"`) |
| `laila_last_order_v1`| `Object` | Most recent order receipt details displayed on `thank-you.html` |

---

## 7. PRODUCT CATALOG & PKR PRICING TABLE

All 16 products are priced realistically in **Pakistani Rupees (PKR)**:

| ID | Product Name | Category | Current Price | Regular Price | Discount |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 1 | Aurelia Classic Leather Tote | Tote Bags | Rs. 12,500 | Rs. 14,900 | 16% Off |
| 2 | Celeste Quilted Crossbody | Crossbody Bags | Rs. 8,900 | Rs. 10,500 | 16% Off |
| 3 | Seraphina Structured Satchel | Handbags | Rs. 14,500 | Rs. 16,900 | 14% Off |
| 4 | Monaco Woven Shoulder Bag | Shoulder Bags | Rs. 9,800 | Rs. 11,900 | 18% Off |
| 5 | Verona Urban Leather Backpack | Backpacks | Rs. 11,900 | Rs. 13,500 | Trending |
| 6 | Elysian Croc-Embossed Wallet | Wallets | Rs. 4,500 | Rs. 5,500 | 18% Off |
| 7 | Palermo Suede Slouchy Bag | Handbags | Rs. 10,500 | Rs. 12,500 | 16% Off |
| 8 | Riviera Canvas Weekend Duffel | Travel Bags | Rs. 15,500 | Rs. 18,000 | Signature |
| 9 | Luna Crescent Mini Bag | Mini Bags | Rs. 6,800 | Rs. 8,200 | 17% Off |
| 10 | Sienna Slouchy Hobo Bag | Shoulder Bags | Rs. 13,200 | Rs. 15,500 | 15% Off |
| 11 | Geneva Continental Flap Wallet | Wallets | Rs. 5,200 | Rs. 6,200 | Classic |
| 12 | Capri Straw & Leather Tote | Tote Bags | Rs. 9,200 | Rs. 11,000 | 16% Off |
| 13 | Valencia Chain Baguette | Crossbody Bags | Rs. 10,800 | Rs. 12,900 | 16% Off |
| 14 | Zurich Commuter Laptop Backpack | Backpacks | Rs. 13,900 | Rs. 16,000 | Premium |
| 15 | Biarritz Petite Micro Bag | Mini Bags | Rs. 5,800 | Rs. 6,900 | 16% Off |
| 16 | Milan Grand Overnight Weekender | Travel Bags | Rs. 17,500 | Rs. 19,900 | Luxury |

---

## 8. QUALITY ASSURANCE & TEST MATRIX

The entire application was validated across functional test suites:

| Test Case ID | Feature Tested | Input / Action | Expected Result | Status |
| :---: | :--- | :--- | :--- | :---: |
| **TC-01** | Header Badges | Add 2 items to cart, 1 to wishlist | Header badges show `2` and `1` dynamically | **PASSED** |
| **TC-02** | Live Search | Type `"tote"` in shop search | Grid filters instantly to tote bags | **PASSED** |
| **TC-03** | Price Filter | Drag slider to Rs. 10,000 | Only bags $\le$ Rs. 10,000 remain visible | **PASSED** |
| **TC-04** | Dynamic Details | Navigate to `product.html?id=3` | Loads Seraphina Satchel data & gallery | **PASSED** |
| **TC-05** | Wishlist Persistence | Refresh page after adding items | Wishlist items remain preserved in LocalStorage | **PASSED** |
| **TC-06** | Coupon Engine | Enter code `LAILA20` in Cart | 20% discount subtracted from subtotal | **PASSED** |
| **TC-07** | Delivery Threshold| Subtotal $\ge$ Rs. 5,000 | Delivery fee displays `"FREE"` | **PASSED** |
| **TC-08** | Checkout Validation| Submit empty form | Required fields highlighted in red with error text | **PASSED** |
| **TC-09** | Order Redirect | Valid form submission | Saves order, empties cart, opens `thank-you.html` | **PASSED** |
| **TC-10** | Print Invoice | Click `Print Receipt` | Triggers clean printer formatting | **PASSED** |
| **TC-11** | Mobile Menu | Click hamburger on $\le 768$px screen | Off-canvas drawer slides smoothly into view | **PASSED** |

---

## 9. CONCLUSION & LEARNING OUTCOMES

Through the execution of this assignment, the following competencies were mastered:
1. **Frontend Architecture:** Constructing an extensive 11-page web platform using semantic HTML5 and clean CSS component separation.
2. **Advanced Vanilla JavaScript:** Implementing real-time DOM manipulation, custom event listeners, query string parsing (`URLSearchParams`), and sorting algorithms without third-party frameworks.
3. **Stateless Web Storage:** Leveraging `localStorage` to simulate full cart and wishlist persistence across distinct document lifecycles.
4. **Professional UI/UX:** Designing a high-fashion luxury aesthetic adhering to accessibility standards, fluid responsive grids, and micro-interactions.

---

*Report prepared and submitted for Web Engineering Lab Assignment 1.*
