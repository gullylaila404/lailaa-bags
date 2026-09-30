/**
 * LAILA BAGS - LUXURY ONLINE STORE MASTER JAVASCRIPT
 * Currency: Pakistani Rupees (PKR / Rs.)
 * Handles Products Catalog, Cart & Wishlist (LocalStorage), Filtering, Sorting,
 * Search, Dynamic Product Details, Checkout Validation, and UI Interactions.
 */

// ==========================================================================
// CURRENCY FORMATTER HELPER
// ==========================================================================
function formatPrice(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return "";
  return "Rs. " + Number(amount).toLocaleString('en-PK');
}

// ==========================================================================
// 1. PRODUCTS DATASET (16 Designer Bag Products in PKR)
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "Aurelia Classic Leather Tote",
    category: "Tote Bags",
    categorySlug: "tote-bags",
    price: 12500,
    oldPrice: 14900,
    rating: 4.9,
    reviewsCount: 64,
    badge: "Best Seller",
    badgeType: "gold",
    image: "images/products/bag1.jpg",
    gallery: [
      "images/products/bag1.jpg",
      "images/products/bag4.jpg",
      "images/products/bag7.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Cognac Brown", hex: "#8B4513" },
      { name: "Onyx Black", hex: "#1C1917" },
      { name: "Warm Cream", hex: "#F3EFEA" }
    ],
    description: "The Aurelia Classic Tote is handcrafted from supple, vegetable-tanned full-grain Italian leather. Designed with dual reinforced shoulder straps, a spacious interior lined in organic cotton twill, and a protective magnetic snap closure.",
    specs: {
      Material: "100% Full-Grain Italian Calfskin",
      Dimensions: "38cm W x 30cm H x 15cm D",
      Hardware: "18k Light-Gold PVD Finish",
      Interior: "Padded 14\" laptop sleeve, 2 slip pockets",
      Origin: "Artisan Made in Florence, Italy"
    },
    featured: true
  },
  {
    id: 2,
    name: "Celeste Quilted Crossbody",
    category: "Crossbody Bags",
    categorySlug: "crossbody-bags",
    price: 8900,
    oldPrice: 10500,
    rating: 4.8,
    reviewsCount: 42,
    badge: "Sale -16%",
    badgeType: "sale",
    image: "images/products/bag2.jpg",
    gallery: [
      "images/products/bag2.jpg",
      "images/products/bag13.jpg",
      "images/products/bag3.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Midnight Black", hex: "#1C1917" },
      { name: "Ruby Burgundy", hex: "#671B28" },
      { name: "Desert Sand", hex: "#D4B996" }
    ],
    description: "Elegance meets everyday versatility with the Celeste Quilted Crossbody. Featuring diamond chevron quilting, an adjustable curb chain strap with leather shoulder guard, and an iconic twist-lock clasp.",
    specs: {
      Material: "Soft Lambskin Quilted Nappa Leather",
      Dimensions: "24cm W x 16cm H x 8cm D",
      Hardware: "Antiqued Gold Finish",
      Interior: "Central zipped partition, card slots",
      Origin: "Handcrafted in Portugal"
    },
    featured: true
  },
  {
    id: 3,
    name: "Seraphina Structured Satchel",
    category: "Handbags",
    categorySlug: "handbags",
    price: 14500,
    oldPrice: 16900,
    rating: 5.0,
    reviewsCount: 88,
    badge: "New Arrival",
    badgeType: "new",
    image: "images/products/bag3.jpg",
    gallery: [
      "images/products/bag3.jpg",
      "images/products/bag10.jpg",
      "images/products/bag1.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Alabaster White", hex: "#FAF8F5" },
      { name: "Caramel Tan", hex: "#A56B46" },
      { name: "Espresso", hex: "#32231C" }
    ],
    description: "Sculpted architectural beauty. The Seraphina Structured Satchel commands presence with its clean trapezoidal silhouette, rigid arch top-handle, and detachable shoulder strap for effortless day-to-night styling.",
    specs: {
      Material: "Structured Box-Grain Cowhide",
      Dimensions: "30cm W x 22cm H x 12cm D",
      Hardware: "Hand-polished Brass Clasp",
      Interior: "Microfiber suede lining with zip pocket",
      Origin: "Crafted in Milan, Italy"
    },
    featured: true
  },
  {
    id: 4,
    name: "Monaco Woven Shoulder Bag",
    category: "Shoulder Bags",
    categorySlug: "shoulder-bags",
    price: 9800,
    oldPrice: 11900,
    rating: 4.7,
    reviewsCount: 35,
    badge: "Sale -18%",
    badgeType: "sale",
    image: "images/products/bag4.jpg",
    gallery: [
      "images/products/bag4.jpg",
      "images/products/bag12.jpg",
      "images/products/bag6.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Natural Ivory", hex: "#ECE6DD" },
      { name: "Chestnut", hex: "#7E482C" },
      { name: "Olive Green", hex: "#4B5320" }
    ],
    description: "An homage to Mediterranean coastal elegance. The Monaco Woven Bag features intricate hand-interlaced leather strips creating a tactile geometric surface that softens beautifully with wear.",
    specs: {
      Material: "Interwoven Soft Saddle Leather",
      Dimensions: "32cm W x 20cm H x 10cm D",
      Hardware: "Concealed magnetic snap closure",
      Interior: "Zippered pouch included",
      Origin: "Artisan Made in Spain"
    },
    featured: true
  },
  {
    id: 5,
    name: "Verona Urban Leather Backpack",
    category: "Backpacks",
    categorySlug: "backpacks",
    price: 11900,
    oldPrice: 13500,
    rating: 4.9,
    reviewsCount: 51,
    badge: "Trending",
    badgeType: "gold",
    image: "images/products/bag5.jpg",
    gallery: [
      "images/products/bag5.jpg",
      "images/products/bag14.jpg",
      "images/products/bag1.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Rich Tan", hex: "#9E643C" },
      { name: "Matte Black", hex: "#1C1917" }
    ],
    description: "Refined practicality for the modern city commuter. The Verona Backpack seamlessly blends luxury leather aesthetic with ergonomic padded shoulder straps and organized multi-pocket utility.",
    specs: {
      Material: "Full-Grain Waxed Leather",
      Dimensions: "30cm W x 38cm H x 14cm D",
      Hardware: "Brushed Gunmetal Zippers",
      Interior: "Fits up to 15\" MacBook, passport pocket",
      Origin: "Florence, Italy"
    },
    featured: true
  },
  {
    id: 6,
    name: "Elysian Croc-Embossed Wallet",
    category: "Wallets",
    categorySlug: "wallets",
    price: 4500,
    oldPrice: 5500,
    rating: 4.8,
    reviewsCount: 76,
    badge: "Sale -18%",
    badgeType: "sale",
    image: "images/products/bag6.jpg",
    gallery: [
      "images/products/bag6.jpg",
      "images/products/bag11.jpg",
      "images/products/bag3.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Forest Emerald", hex: "#1B3F2E" },
      { name: "Classic Noir", hex: "#1C1917" },
      { name: "Bordeaux Red", hex: "#5C1D24" }
    ],
    description: "Compact luxury that fits into any handbag. The Elysian Zip-Around Wallet features exotic crocodile-embossed calf leather, 12 dedicated card slots, and an RFID-blocking safety lining.",
    specs: {
      Material: "Croc-Embossed Italian Leather",
      Dimensions: "19cm W x 10cm H x 2.5cm D",
      Hardware: "Polished Gold Perimeter Zip",
      Interior: "12 Card slots, zipped coin pouch",
      Origin: "Crafted in Portugal"
    },
    featured: true
  },
  {
    id: 7,
    name: "Palermo Suede Slouchy Bag",
    category: "Handbags",
    categorySlug: "handbags",
    price: 10500,
    oldPrice: 12500,
    rating: 4.6,
    reviewsCount: 38,
    badge: "Sale -16%",
    badgeType: "sale",
    image: "images/products/bag7.jpg",
    gallery: [
      "images/products/bag7.jpg",
      "images/products/bag10.jpg",
      "images/products/bag4.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Taupe Suede", hex: "#A89F91" },
      { name: "Warm Rust", hex: "#A25539" }
    ],
    description: "Sumptuous tactile richness. Hand-buffed velvety Italian suede creates a soft draped silhouette complemented by smooth bridle-leather trims and drawstring cinch tie.",
    specs: {
      Material: "Premium Water-Resistant Suede & Calfskin",
      Dimensions: "28cm W x 32cm H x 16cm D",
      Hardware: "Warm Brass Eyelets & Tassels",
      Interior: "Soft cotton canvas with wall pockets",
      Origin: "Made in Italy"
    },
    featured: true
  },
  {
    id: 8,
    name: "Riviera Canvas Weekend Duffel",
    category: "Travel Bags",
    categorySlug: "travel-bags",
    price: 15500,
    oldPrice: 18000,
    rating: 4.9,
    reviewsCount: 94,
    badge: "Signature",
    badgeType: "gold",
    image: "images/products/bag8.jpg",
    gallery: [
      "images/products/bag8.jpg",
      "images/products/bag16.jpg",
      "images/products/bag5.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Oatmeal & Tan", hex: "#D6C7B2" },
      { name: "All-Black Waxed", hex: "#22201D" }
    ],
    description: "The quintessential travel companion for discerning getaways. Heavyweight water-repellent canvas trimmed with vegetable-tanned saddle leather, reinforced bottom studs, and luggage trolley strap.",
    specs: {
      Material: "24oz Heavy Organic Canvas & Tuscan Leather",
      Dimensions: "52cm W x 32cm H x 24cm D",
      Hardware: "Heavy-duty YKK Brass Zippers",
      Interior: "Spacious holdall with shoe compartment",
      Origin: "Handmade in Tuscany"
    },
    featured: true
  },
  {
    id: 9,
    name: "Luna Crescent Mini Bag",
    category: "Mini Bags",
    categorySlug: "mini-bags",
    price: 6800,
    oldPrice: 8200,
    rating: 4.8,
    reviewsCount: 57,
    badge: "Sale -17%",
    badgeType: "sale",
    image: "images/products/bag9.jpg",
    gallery: [
      "images/products/bag9.jpg",
      "images/products/bag15.jpg",
      "images/products/bag2.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Powder Blush", hex: "#E7C7BE" },
      { name: "Cloud White", hex: "#F7F5F0" },
      { name: "Pitch Black", hex: "#1C1917" }
    ],
    description: "Curved to perfection. The Luna Crescent Bag embraces playful 90s minimalism with modern craftsmanship. Fits your phone, keys, lipstick, and cardholder effortlessly.",
    specs: {
      Material: "Semi-Gloss Smooth Box Leather",
      Dimensions: "22cm W x 14cm H x 6.5cm D",
      Hardware: "Custom Curved Arc Clasp",
      Interior: "Card pouch with satin twill lining",
      Origin: "Spain"
    },
    featured: false
  },
  {
    id: 10,
    name: "Sienna Slouchy Hobo Bag",
    category: "Shoulder Bags",
    categorySlug: "shoulder-bags",
    price: 13200,
    oldPrice: 15500,
    rating: 4.9,
    reviewsCount: 44,
    badge: "Best Seller",
    badgeType: "gold",
    image: "images/products/bag10.jpg",
    gallery: [
      "images/products/bag10.jpg",
      "images/products/bag4.jpg",
      "images/products/bag7.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Camel Brown", hex: "#B27848" },
      { name: "Deep Charcoal", hex: "#2E2B28" }
    ],
    description: "Effortless casual luxury that drapes naturally against your shoulder. The Sienna Hobo Bag offers generous volume without bulk, crafted from butter-soft tumbled pebble leather.",
    specs: {
      Material: "Supple Pebbled Grain Leather",
      Dimensions: "36cm W x 32cm H x 12cm D",
      Hardware: "Magnetic center snap, brushed gold hooks",
      Interior: "Dual zip organizer compartments",
      Origin: "Italy"
    },
    featured: false
  },
  {
    id: 11,
    name: "Geneva Continental Flap Wallet",
    category: "Wallets",
    categorySlug: "wallets",
    price: 5200,
    oldPrice: 6200,
    rating: 4.7,
    reviewsCount: 31,
    badge: "Classic",
    badgeType: "new",
    image: "images/products/bag11.jpg",
    gallery: [
      "images/products/bag11.jpg",
      "images/products/bag6.jpg",
      "images/products/bag2.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Classic Noir", hex: "#1C1917" },
      { name: "Saddle Tan", hex: "#8F5834" }
    ],
    description: "Sleek, organized, and unmistakably refined. The Geneva Continental features a graceful envelope flap with gold foil stamping and an array of compartments for cards and currency.",
    specs: {
      Material: "Scratch-Resistant Saffiano Leather",
      Dimensions: "19.5cm W x 10.5cm H x 2cm D",
      Hardware: "Concealed snap button",
      Interior: "16 credit card slots, bill compartments",
      Origin: "France"
    },
    featured: false
  },
  {
    id: 12,
    name: "Capri Straw & Leather Tote",
    category: "Tote Bags",
    categorySlug: "tote-bags",
    price: 9200,
    oldPrice: 11000,
    rating: 4.9,
    reviewsCount: 68,
    badge: "Summer Edit",
    badgeType: "sale",
    image: "images/products/bag12.jpg",
    gallery: [
      "images/products/bag12.jpg",
      "images/products/bag1.jpg",
      "images/products/bag8.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Natural & Tan", hex: "#D9C3A3" },
      { name: "Natural & Black", hex: "#2B2A27" }
    ],
    description: "Hand-braided sustainable raffia palm woven by master artisans, finished with premium bridle leather handles and a removable linen dust pouch.",
    specs: {
      Material: "Natural Woven Raffia & Full-Grain Calfskin",
      Dimensions: "42cm W x 28cm H x 16cm D",
      Hardware: "Gold-toned rivets and charm ring",
      Interior: "Removable drawstring linen liner",
      Origin: "Madagascar & Finished in Italy"
    },
    featured: false
  },
  {
    id: 13,
    name: "Valencia Chain Baguette",
    category: "Crossbody Bags",
    categorySlug: "crossbody-bags",
    price: 10800,
    oldPrice: 12900,
    rating: 4.8,
    reviewsCount: 39,
    badge: "Sale -16%",
    badgeType: "sale",
    image: "images/products/bag13.jpg",
    gallery: [
      "images/products/bag13.jpg",
      "images/products/bag2.jpg",
      "images/products/bag9.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Crimson Red", hex: "#8A1B22" },
      { name: "Midnight Black", hex: "#1C1917" }
    ],
    description: "An evening icon. The Valencia Baguette features polished glossy leather with an exquisite chunky link gold chain that can be styled doubled on the shoulder or long as a crossbody.",
    specs: {
      Material: "Semi-Patent Calf Leather",
      Dimensions: "26cm W x 14cm H x 6cm D",
      Hardware: "Solid brass chain & magnetic flap closure",
      Interior: "Signature satin jacquard lining",
      Origin: "Portugal"
    },
    featured: false
  },
  {
    id: 14,
    name: "Zurich Commuter Laptop Backpack",
    category: "Backpacks",
    categorySlug: "backpacks",
    price: 13900,
    oldPrice: 16000,
    rating: 5.0,
    reviewsCount: 52,
    badge: "Premium",
    badgeType: "gold",
    image: "images/products/bag14.jpg",
    gallery: [
      "images/products/bag14.jpg",
      "images/products/bag5.jpg",
      "images/products/bag8.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Slate Grey & Black", hex: "#46484D" },
      { name: "Espresso Brown", hex: "#2C221C" }
    ],
    description: "Engineered for executive travel and everyday luxury. Features ballistics-grade weatherproofing, padded shock-absorbing laptop compartment, and concealed passport pockets.",
    specs: {
      Material: "Waterproof Coated Twill & Nappa Trims",
      Dimensions: "32cm W x 42cm H x 15cm D",
      Hardware: "Waterproof taped zippers",
      Interior: "Fits up to 16\" laptop + tablet compartment",
      Origin: "Switzerland"
    },
    featured: false
  },
  {
    id: 15,
    name: "Biarritz Petite Micro Bag",
    category: "Mini Bags",
    categorySlug: "mini-bags",
    price: 5800,
    oldPrice: 6900,
    rating: 4.6,
    reviewsCount: 27,
    badge: "Sale -16%",
    badgeType: "sale",
    image: "images/products/bag15.jpg",
    gallery: [
      "images/products/bag15.jpg",
      "images/products/bag9.jpg",
      "images/products/bag3.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Lilac Lavender", hex: "#C7B9D6" },
      { name: "Golden Sand", hex: "#DEB887" }
    ],
    description: "Cute, chic, and unforgettable. The Biarritz Micro Bag is the pinnacle of micro accessory fashion, featuring a top arch handle and removable gossamer chain strap.",
    specs: {
      Material: "Embossed Calfskin",
      Dimensions: "15cm W x 11cm H x 5cm D",
      Hardware: "Mini lock clasp in pale gold",
      Interior: "Single compartment for card case & lipstick",
      Origin: "France"
    },
    featured: false
  },
  {
    id: 16,
    name: "Milan Grand Overnight Weekender",
    category: "Travel Bags",
    categorySlug: "travel-bags",
    price: 17500,
    oldPrice: 19900,
    rating: 4.9,
    reviewsCount: 63,
    badge: "Luxury Travel",
    badgeType: "gold",
    image: "images/products/bag16.jpg",
    gallery: [
      "images/products/bag16.jpg",
      "images/products/bag8.jpg",
      "images/products/bag1.jpg",
      "images/banners/craftsmanship.jpg"
    ],
    colors: [
      { name: "Espresso Brown", hex: "#342217" },
      { name: "Rich Cognac", hex: "#8A4926" }
    ],
    description: "Turn heads at every first-class lounge. The Milan Grand Weekender is constructed of thick vegetable-tanned steerhide that gains an irreplaceable patina with every journey you take.",
    specs: {
      Material: "Full-Grain Saddle Steerhide",
      Dimensions: "55cm W x 35cm H x 26cm D (Carry-on approved)",
      Hardware: "Heavy double brass zipper with padlock",
      Interior: "Padded tech sleeve, zippered suit straps",
      Origin: "Florence, Italy"
    },
    featured: false
  }
];

// Categories definition
const CATEGORIES = [
  { slug: "handbags", name: "Handbags", count: 2, image: "images/categories/cat-handbags.jpg", desc: "Structured top-handles and elegant satchels crafted for poised elegance." },
  { slug: "tote-bags", name: "Tote Bags", count: 2, image: "images/categories/cat-totes.jpg", desc: "Generously proportioned totes combining spacious practicality with luxury." },
  { slug: "crossbody-bags", name: "Crossbody Bags", count: 2, image: "images/categories/cat-crossbody.jpg", desc: "Hands-free freedom elevated with quilted nappa and bespoke chain hardware." },
  { slug: "shoulder-bags", name: "Shoulder Bags", count: 2, image: "images/categories/cat-shoulder.jpg", desc: "Iconic slouchy hobos and woven baguettes designed for seamless shoulder carry." },
  { slug: "backpacks", name: "Backpacks", count: 2, image: "images/categories/cat-backpacks.jpg", desc: "Ergonomic urban commuter backpacks crafted from waterproofed calf leather." },
  { slug: "wallets", name: "Wallets", count: 2, image: "images/categories/cat-wallets.jpg", desc: "Croc-embossed zip-arounds and sleek continental envelope flap organizers." },
  { slug: "mini-bags", name: "Mini Bags", count: 2, image: "images/categories/cat-minibags.jpg", desc: "Petite fashion forward statement pieces that accent every evening ensemble." },
  { slug: "travel-bags", name: "Travel Bags", count: 2, image: "images/categories/cat-travel.jpg", desc: "Heirloom weekend duffels and grand carry-ons engineered for global adventures." }
];

// ==========================================================================
// 2. LOCALSTORAGE STATE MANAGEMENT
// ==========================================================================
const CART_STORAGE_KEY = "laila_cart_v1";
const WISHLIST_STORAGE_KEY = "laila_wishlist_v1";
const ORDER_STORAGE_KEY = "laila_last_order_v1";
const PROMO_STORAGE_KEY = "laila_applied_promo";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateHeaderBadges();
}

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
  updateHeaderBadges();
}

function getLastOrder() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || null;
  } catch (e) {
    return null;
  }
}

function saveLastOrder(order) {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
}

// ==========================================================================
// 3. TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(message, type = "default", duration = 3200) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : type === "error" ? "toast-error" : ""}`;

  let iconHtml = '<i class="fa-solid fa-check"></i>';
  if (type === "error") iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';
  if (type === "info") iconHtml = '<i class="fa-solid fa-circle-info"></i>';

  toast.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.6rem;">
      <span style="color:var(--accent-gold); font-size:1.1rem;">${iconHtml}</span>
      <span>${message}</span>
    </div>
    <button style="color:#aaa; cursor:pointer;" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ==========================================================================
// 4. HEADER BADGES & NAVIGATION
// ==========================================================================
function updateHeaderBadges() {
  const cart = getCart();
  const wishlist = getWishlist();

  const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalWishlistCount = wishlist.length;

  document.querySelectorAll(".cart-count-badge").forEach(badge => {
    badge.textContent = totalCartCount;
    badge.style.display = totalCartCount > 0 ? "flex" : "none";
  });

  document.querySelectorAll(".wishlist-count-badge").forEach(badge => {
    badge.textContent = totalWishlistCount;
    badge.style.display = totalWishlistCount > 0 ? "flex" : "none";
  });
}

function initNavigation() {
  // Highlight active link
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileCloseBtn = document.getElementById("mobile-close-btn");

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
      menuBtn.classList.toggle("active");
    });
  }

  if (mobileCloseBtn && mobileDrawer) {
    mobileCloseBtn.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      if (menuBtn) menuBtn.classList.remove("active");
    });
  }

  // Close on outside click
  if (mobileDrawer) {
    mobileDrawer.addEventListener("click", (e) => {
      if (e.target === mobileDrawer) {
        mobileDrawer.classList.remove("open");
        if (menuBtn) menuBtn.classList.remove("active");
      }
    });
  }

  // Newsletter forms everywhere
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value.trim()) {
        showToast(`Thank you! <strong>${input.value.trim()}</strong> has been subscribed to the VIP club.`, "success");
        input.value = "";
      }
    });
  });
}

// ==========================================================================
// 5. WISHLIST ACTIONS
// ==========================================================================
function toggleWishlist(productId) {
  productId = parseInt(productId, 10);
  let wishlist = getWishlist();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    saveWishlist(wishlist);
    showToast(`Removed <strong>${product.name}</strong> from wishlist.`, "default");
  } else {
    wishlist.push(productId);
    saveWishlist(wishlist);
    showToast(`Added <strong>${product.name}</strong> to wishlist!`, "success");
  }

  // Update heart icons across the page
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    if (wishlist.includes(productId)) {
      btn.classList.add("active-wishlist");
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      btn.classList.remove("active-wishlist");
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  });

  // Re-render if on wishlist page
  if (window.location.pathname.includes("wishlist.html")) {
    renderWishlistPage();
  }
}

function removeFromWishlist(productId) {
  productId = parseInt(productId, 10);
  let wishlist = getWishlist();
  wishlist = wishlist.filter(id => id !== productId);
  saveWishlist(wishlist);
  showToast("Item removed from wishlist.", "default");
  renderWishlistPage();
}

function moveWishlistToCart(productId) {
  productId = parseInt(productId, 10);
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  addToCart(productId, 1, product.colors[0]?.name || "Standard");
  removeFromWishlist(productId);
  showToast(`Moved <strong>${product.name}</strong> to your cart!`, "success");
}

function clearWishlist() {
  saveWishlist([]);
  showToast("Your wishlist has been cleared.", "default");
  renderWishlistPage();
}

// ==========================================================================
// 6. CART ACTIONS
// ==========================================================================
function addToCart(productId, quantity = 1, colorName = null) {
  productId = parseInt(productId, 10);
  quantity = parseInt(quantity, 10) || 1;
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const chosenColor = colorName || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
  let cart = getCart();

  const existingIndex = cart.findIndex(item => item.id === productId && item.color === chosenColor);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      color: chosenColor,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Added <strong>${quantity}x ${product.name}</strong> (${chosenColor}) to your cart!`, "success");
}

function updateCartQuantity(productId, colorName, delta) {
  productId = parseInt(productId, 10);
  let cart = getCart();
  const index = cart.findIndex(item => item.id === productId && item.color === colorName);
  if (index > -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
      showToast("Item removed from cart.", "default");
    }
    saveCart(cart);
    renderCartPage();
  }
}

function removeCartItem(productId, colorName) {
  productId = parseInt(productId, 10);
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.color === colorName));
  saveCart(cart);
  showToast("Item removed from cart.", "default");
  renderCartPage();
}

function clearCart() {
  saveCart([]);
  localStorage.removeItem(PROMO_STORAGE_KEY);
  showToast("Your cart has been cleared.", "default");
  renderCartPage();
}

// ==========================================================================
// 7. PRODUCT CARD HTML GENERATOR (Elegant responsive action bar)
// ==========================================================================
function generateProductCardHtml(product) {
  const wishlist = getWishlist();
  const isWishlisted = wishlist.includes(product.id);
  const badgeHtml = product.badge
    ? `<span class="badge ${product.badgeType === 'sale' ? 'badge-sale' : product.badgeType === 'new' ? 'badge-new' : 'badge-gold'}">${product.badge}</span>`
    : '';

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.categorySlug}" data-price="${product.price}">
      <div class="product-img-wrap">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.onerror=null; this.src='images/products/bag1.jpg';" loading="lazy">
        </a>
        <div class="card-badges">
          ${badgeHtml}
        </div>
        <div class="card-actions">
          <button class="card-action-btn wishlist-btn ${isWishlisted ? 'active-wishlist' : ''}" 
                  data-id="${product.id}" 
                  onclick="toggleWishlist(${product.id})" 
                  title="Add to Wishlist" aria-label="Add to Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <a href="product.html?id=${product.id}" class="card-action-btn" title="View Details" aria-label="View Product Details">
            <i class="fa-regular fa-eye"></i>
          </a>
        </div>
        <div class="quick-add-wrap">
          <button class="btn-quick-add" onclick="addToCart(${product.id}, 1, '${product.colors[0]?.name || "Standard"}')">
            <i class="fa-solid fa-bag-shopping"></i> Quick Add
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating.toFixed(1)}</span>
          <span class="rating-count">(${product.reviewsCount})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <div class="product-card-btns">
          <button class="btn-card-add" onclick="addToCart(${product.id}, 1, '${product.colors[0]?.name || "Standard"}')">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
          </button>
          <a href="product.html?id=${product.id}" class="btn-card-view" title="View Product Details" aria-label="View Details">
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 8. HOME PAGE LOGIC (index.html)
// ==========================================================================
function initHomePage() {
  const featuredGrid = document.getElementById("featured-products-grid");
  if (!featuredGrid) return;

  const featured = PRODUCTS.filter(p => p.featured).slice(0, 8);
  featuredGrid.innerHTML = featured.map(p => generateProductCardHtml(p)).join("");
}

// ==========================================================================
// 9. SHOP PAGE LOGIC (shop.html)
// ==========================================================================
let currentShopCategory = "all";
let currentShopSearch = "";
let currentShopMaxPrice = 20000;
let currentShopSort = "default";

function initShopPage() {
  const shopGrid = document.getElementById("shop-products-grid");
  if (!shopGrid) return;

  // Check URL query parameters (e.g. ?category=tote-bags or ?search=backpack)
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");
  const searchParam = urlParams.get("search");

  if (categoryParam) {
    currentShopCategory = categoryParam;
  }
  if (searchParam) {
    currentShopSearch = searchParam;
    const searchInput = document.getElementById("shop-search-input");
    if (searchInput) searchInput.value = searchParam;
  }

  // Bind Search Input
  const searchInput = document.getElementById("shop-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentShopSearch = e.target.value.toLowerCase().trim();
      renderShopProducts();
    });
  }

  // Bind Category Filter Buttons
  document.querySelectorAll(".category-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentShopCategory = btn.getAttribute("data-category");
      renderShopProducts();
    });
  });

  // Highlight active category from URL
  if (currentShopCategory !== "all") {
    const activeBtn = document.querySelector(`.category-filter-btn[data-category="${currentShopCategory}"]`);
    if (activeBtn) {
      document.querySelectorAll(".category-filter-btn").forEach(b => b.classList.remove("active"));
      activeBtn.classList.add("active");
    }
  }

  // Bind Price Range Slider
  const priceSlider = document.getElementById("price-range-slider");
  const priceDisplay = document.getElementById("price-range-display");
  if (priceSlider && priceDisplay) {
    priceSlider.setAttribute("min", "4000");
    priceSlider.setAttribute("max", "20000");
    priceSlider.setAttribute("step", "500");
    priceSlider.value = "20000";
    priceDisplay.textContent = formatPrice(20000);

    priceSlider.addEventListener("input", (e) => {
      currentShopMaxPrice = parseInt(e.target.value, 10);
      priceDisplay.textContent = formatPrice(currentShopMaxPrice);
      renderShopProducts();
    });
  }

  // Bind Sorting
  const sortSelect = document.getElementById("shop-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentShopSort = e.target.value;
      renderShopProducts();
    });
  }

  // Initial render
  renderShopProducts();
}

function renderShopProducts() {
  const shopGrid = document.getElementById("shop-products-grid");
  const countDisplay = document.getElementById("shop-count-display");
  const activeFiltersWrap = document.getElementById("active-filters-wrap");
  if (!shopGrid) return;

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    const categoryMatch = currentShopCategory === "all" || p.categorySlug === currentShopCategory;
    const priceMatch = p.price <= currentShopMaxPrice;
    const searchMatch = !currentShopSearch ||
      p.name.toLowerCase().includes(currentShopSearch) ||
      p.category.toLowerCase().includes(currentShopSearch) ||
      p.description.toLowerCase().includes(currentShopSearch);

    return categoryMatch && priceMatch && searchMatch;
  });

  // Sort products
  if (currentShopSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentShopSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentShopSort === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentShopSort === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (currentShopSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Render count
  if (countDisplay) {
    countDisplay.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${PRODUCTS.length}</strong> bags`;
  }

  // Active filters chips
  if (activeFiltersWrap) {
    let chipsHtml = "";
    if (currentShopCategory !== "all") {
      const catObj = CATEGORIES.find(c => c.slug === currentShopCategory);
      chipsHtml += `<span class="filter-chip">Category: ${catObj ? catObj.name : currentShopCategory} <button onclick="resetCategoryFilter()">&times;</button></span>`;
    }
    if (currentShopSearch) {
      chipsHtml += `<span class="filter-chip">Keyword: "${currentShopSearch}" <button onclick="resetSearchFilter()">&times;</button></span>`;
    }
    if (currentShopMaxPrice < 20000) {
      chipsHtml += `<span class="filter-chip">Under: ${formatPrice(currentShopMaxPrice)} <button onclick="resetPriceFilter()">&times;</button></span>`;
    }
    if (chipsHtml !== "") {
      chipsHtml += `<button class="btn btn-secondary btn-sm" style="padding:0.2rem 0.6rem; font-size:0.75rem;" onclick="resetAllFilters()">Clear All</button>`;
    }
    activeFiltersWrap.innerHTML = chipsHtml;
  }

  // Render grid
  if (filtered.length === 0) {
    shopGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-magnifying-glass empty-state-icon"></i>
        <h3>No Matching Bags Found</h3>
        <p>We couldn't find any bags matching your selected filters. Try broadening your criteria or reset the search.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
  } else {
    shopGrid.innerHTML = filtered.map(p => generateProductCardHtml(p)).join("");
  }
}

function resetCategoryFilter() {
  currentShopCategory = "all";
  document.querySelectorAll(".category-filter-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-category") === "all");
  });
  renderShopProducts();
}

function resetSearchFilter() {
  currentShopSearch = "";
  const input = document.getElementById("shop-search-input");
  if (input) input.value = "";
  renderShopProducts();
}

function resetPriceFilter() {
  currentShopMaxPrice = 20000;
  const slider = document.getElementById("price-range-slider");
  const display = document.getElementById("price-range-display");
  if (slider) slider.value = 20000;
  if (display) display.textContent = formatPrice(20000);
  renderShopProducts();
}

function resetAllFilters() {
  currentShopCategory = "all";
  currentShopSearch = "";
  currentShopMaxPrice = 20000;
  currentShopSort = "default";

  const searchInput = document.getElementById("shop-search-input");
  if (searchInput) searchInput.value = "";

  const slider = document.getElementById("price-range-slider");
  const display = document.getElementById("price-range-display");
  if (slider) slider.value = 20000;
  if (display) display.textContent = formatPrice(20000);

  const sortSelect = document.getElementById("shop-sort-select");
  if (sortSelect) sortSelect.value = "default";

  document.querySelectorAll(".category-filter-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-category") === "all");
  });

  renderShopProducts();
}

// ==========================================================================
// 10. PRODUCT DETAILS PAGE (product.html?id=X)
// ==========================================================================
let currentDetailProduct = null;
let currentDetailColor = null;

function initProductDetailsPage() {
  const container = document.getElementById("single-product-container");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const idParam = parseInt(urlParams.get("id"), 10) || 1;

  currentDetailProduct = PRODUCTS.find(p => p.id === idParam) || PRODUCTS[0];
  currentDetailColor = currentDetailProduct.colors[0]?.name || "Standard";

  // Update Breadcrumb & Page Title
  document.title = `${currentDetailProduct.name} - LAILA BAGS`;
  const crumbCategory = document.getElementById("crumb-category");
  const crumbProduct = document.getElementById("crumb-product");
  if (crumbCategory) {
    crumbCategory.textContent = currentDetailProduct.category;
    crumbCategory.setAttribute("href", `shop.html?category=${currentDetailProduct.categorySlug}`);
  }
  if (crumbProduct) crumbProduct.textContent = currentDetailProduct.name;

  // Render Product Details Layout
  const wishlist = getWishlist();
  const isWishlisted = wishlist.includes(currentDetailProduct.id);

  container.innerHTML = `
    <div class="product-details-grid">
      <!-- Gallery Column -->
      <div class="gallery-wrap">
        <div class="main-image-wrap">
          <img id="main-product-img" src="${currentDetailProduct.image}" alt="${currentDetailProduct.name}" class="main-image" onerror="this.onerror=null; this.src='images/products/bag1.jpg';">
        </div>
        <div class="thumbnails-row">
          ${currentDetailProduct.gallery.map((img, idx) => `
            <div class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchDetailImage('${img}', this)">
              <img src="${img}" alt="Thumbnail ${idx + 1}" onerror="this.onerror=null; this.src='images/products/bag1.jpg';">
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Info Column -->
      <div class="details-info">
        <span class="details-category">${currentDetailProduct.category}</span>
        <h1 class="details-title">${currentDetailProduct.name}</h1>
        
        <div class="details-rating-row">
          <div class="details-stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(currentDetailProduct.rating))}
            ${currentDetailProduct.rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : ''}
          </div>
          <span style="font-weight:600; font-size:0.9rem;">${currentDetailProduct.rating.toFixed(1)}</span>
          <a href="#product-reviews-tab" class="details-review-link" onclick="openReviewsTab()">${currentDetailProduct.reviewsCount} verified reviews</a>
        </div>

        <div class="details-price-row">
          <span class="details-price">${formatPrice(currentDetailProduct.price)}</span>
          ${currentDetailProduct.oldPrice ? `<span class="details-old-price">${formatPrice(currentDetailProduct.oldPrice)}</span>` : ''}
          ${currentDetailProduct.badge ? `<span class="badge ${currentDetailProduct.badgeType === 'sale' ? 'badge-sale' : 'badge-gold'}">${currentDetailProduct.badge}</span>` : ''}
        </div>

        <p class="details-description">${currentDetailProduct.description}</p>

        <!-- Colors Selection -->
        <div class="details-options">
          <span class="option-label">Color: <strong id="selected-color-name" style="color:var(--accent-gold);">${currentDetailColor}</strong></span>
          <div class="color-swatches">
            ${currentDetailProduct.colors.map((color, idx) => `
              <button class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
                      style="background-color: ${color.hex};" 
                      title="${color.name}"
                      aria-label="Color ${color.name}"
                      onclick="selectDetailColor('${color.name}', this)">
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Quantity & Add to Cart -->
        <div class="purchase-row">
          <div class="qty-control">
            <button class="qty-btn" onclick="stepDetailQty(-1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
            <input type="number" id="detail-qty-input" class="qty-input" value="1" min="1" max="99" readonly>
            <button class="qty-btn" onclick="stepDetailQty(1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
          </div>

          <button class="btn btn-primary btn-add-cart-large" onclick="handleDetailAddToCart()">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
          </button>

          <button class="btn-wishlist-large wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  data-id="${currentDetailProduct.id}" 
                  onclick="toggleWishlist(${currentDetailProduct.id})" 
                  title="Save to Wishlist" aria-label="Save to Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <!-- Buy Now button -->
        <button class="btn btn-gold btn-buy-now" onclick="handleDetailBuyNow()">
          <i class="fa-solid fa-bolt"></i> Buy Now
        </button>

        <!-- Product Trust Perks -->
        <div class="product-perks">
          <div class="perk-item">
            <i class="fa-solid fa-truck-fast"></i>
            <div>
              <strong>Complimentary Shipping Across Pakistan</strong>
              <div style="font-size:0.75rem;">On orders over Rs. 5,000 nationwide</div>
            </div>
          </div>
          <div class="perk-item">
            <i class="fa-solid fa-rotate-left"></i>
            <div>
              <strong>30-Day Returns</strong>
              <div style="font-size:0.75rem;">Hassle-free luxury return policy</div>
            </div>
          </div>
          <div class="perk-item">
            <i class="fa-solid fa-shield-halved"></i>
            <div>
              <strong>Authenticity Guarantee</strong>
              <div style="font-size:0.75rem;">Handcrafted Italian artisans</div>
            </div>
          </div>
          <div class="perk-item">
            <i class="fa-solid fa-award"></i>
            <div>
              <strong>2-Year Warranty</strong>
              <div style="font-size:0.75rem;">Comprehensive leather care</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Tabbed Information -->
    <div class="product-tabs-wrap">
      <div class="tabs-nav">
        <button class="tab-nav-btn active" onclick="switchDetailTab('specs', this)">Specifications</button>
        <button class="tab-nav-btn" onclick="switchDetailTab('shipping', this)">Shipping & Delivery</button>
        <button class="tab-nav-btn" onclick="switchDetailTab('returns', this)">Returns & Warranty</button>
        <button class="tab-nav-btn" id="reviews-nav-tab" onclick="switchDetailTab('reviews', this)">Reviews (${currentDetailProduct.reviewsCount})</button>
      </div>

      <!-- Tab 1: Specs -->
      <div id="tab-specs" class="tab-pane active">
        <table class="specs-table">
          <tbody>
            ${Object.entries(currentDetailProduct.specs).map(([k, v]) => `
              <tr>
                <th>${k}</th>
                <td>${v}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Tab 2: Shipping -->
      <div id="tab-shipping" class="tab-pane">
        <div style="max-width:700px; line-height:1.8; color:var(--text-muted);">
          <h4 style="margin-bottom:0.75rem; color:var(--text-main);">Insured Nationwide Delivery (Pakistan)</h4>
          <p>Each LAILA BAG is delicately wrapped in custom archival tissue, enclosed inside an embroidered satin dust bag, and boxed in our signature gold-embossed presentation packaging.</p>
          <ul style="list-style:disc; margin:1rem 0 1rem 1.5rem;">
            <li><strong>Standard Nationwide Delivery:</strong> 2-4 business days (Rs. 250 or FREE on orders over Rs. 5,000).</li>
            <li><strong>Express Courier (TCS / Leopard / DHL):</strong> 1-2 business days with SMS tracking updates.</li>
            <li><strong>Cash on Delivery (COD):</strong> Available in all major cities across Pakistan.</li>
          </ul>
        </div>
      </div>

      <!-- Tab 3: Returns -->
      <div id="tab-returns" class="tab-pane">
        <div style="max-width:700px; line-height:1.8; color:var(--text-muted);">
          <h4 style="margin-bottom:0.75rem; color:var(--text-main);">Our 30-Day Happiness Promise</h4>
          <p>We want you to love your bag unconditionally. If for any reason you wish to exchange or return your item, we offer prepaid return labels within 30 days of receipt.</p>
          <p style="margin-top:0.75rem;">Items must remain in unworn condition with the original protective packaging and security tags attached.</p>
        </div>
      </div>

      <!-- Tab 4: Reviews -->
      <div id="tab-reviews" class="tab-pane">
        <div style="display:grid; grid-template-columns: 280px 1fr; gap:2.5rem;">
          <div style="background:var(--bg-secondary); padding:2rem; border-radius:var(--radius-sm); text-align:center;">
            <div style="font-family:var(--font-serif); font-size:3.5rem; font-weight:700; color:var(--accent-gold); line-height:1;">${currentDetailProduct.rating.toFixed(1)}</div>
            <div style="color:#d4a017; font-size:1.1rem; margin:0.5rem 0;">
              ${'<i class="fa-solid fa-star"></i>'.repeat(5)}
            </div>
            <div style="font-size:0.875rem; color:var(--text-muted);">Based on ${currentDetailProduct.reviewsCount} customer reviews</div>
          </div>
          <div>
            <div style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--border-light);">
              <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
                <strong>Ayesha Khan</strong>
                <span style="color:var(--text-light); font-size:0.8rem;">2 weeks ago</span>
              </div>
              <div style="color:#d4a017; font-size:0.8rem; margin-bottom:0.4rem;">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p style="color:var(--text-muted); font-size:0.925rem;">"The leather texture and gold hardware are exceptional. It rivals international designer bags. I receive compliments every single day at work in Islamabad!"</p>
            </div>
            <div style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--border-light);">
              <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
                <strong>Fatima Tariq</strong>
                <span style="color:var(--text-light); font-size:0.8rem;">1 month ago</span>
              </div>
              <div style="color:#d4a017; font-size:0.8rem; margin-bottom:0.4rem;">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p style="color:var(--text-muted); font-size:0.925rem;">"The packaging alone made me gasp. Truly a luxury unboxing experience. The stitching is flawless and the interior fits all my daily essentials."</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div style="margin-top:5rem;">
      <div class="section-title-wrap" style="text-align:left; margin-bottom:2rem;">
        <span class="section-subtitle">Curated Pairings</span>
        <h2 class="section-title" style="font-size:2rem;">You May Also Admire</h2>
      </div>
      <div class="products-grid">
        ${PRODUCTS
      .filter(p => p.id !== currentDetailProduct.id)
      .slice(0, 4)
      .map(p => generateProductCardHtml(p))
      .join("")}
      </div>
    </div>
  `;
}

function switchDetailImage(src, thumbElement) {
  const mainImg = document.getElementById("main-product-img");
  if (mainImg) mainImg.src = src;

  document.querySelectorAll(".thumb-btn").forEach(t => t.classList.remove("active"));
  if (thumbElement) thumbElement.classList.add("active");
}

function selectDetailColor(colorName, btnElement) {
  currentDetailColor = colorName;
  const label = document.getElementById("selected-color-name");
  if (label) label.textContent = colorName;

  document.querySelectorAll(".color-swatch-btn").forEach(b => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
}

function stepDetailQty(delta) {
  const input = document.getElementById("detail-qty-input");
  if (!input) return;
  let val = parseInt(input.value, 10) || 1;
  val = Math.max(1, val + delta);
  input.value = val;
}

function handleDetailAddToCart() {
  if (!currentDetailProduct) return;
  const input = document.getElementById("detail-qty-input");
  const qty = input ? parseInt(input.value, 10) || 1 : 1;
  addToCart(currentDetailProduct.id, qty, currentDetailColor);
}

function handleDetailBuyNow() {
  if (!currentDetailProduct) return;
  const input = document.getElementById("detail-qty-input");
  const qty = input ? parseInt(input.value, 10) || 1 : 1;
  addToCart(currentDetailProduct.id, qty, currentDetailColor);
  window.location.href = "checkout.html";
}

function switchDetailTab(tabName, btnElement) {
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab-nav-btn").forEach(b => b.classList.remove("active"));

  const targetPane = document.getElementById(`tab-${tabName}`);
  if (targetPane) targetPane.classList.add("active");
  if (btnElement) btnElement.classList.add("active");
}

function openReviewsTab() {
  const reviewBtn = document.getElementById("reviews-nav-tab");
  if (reviewBtn) switchDetailTab("reviews", reviewBtn);
}

// ==========================================================================
// 11. WISHLIST PAGE (wishlist.html)
// ==========================================================================
function renderWishlistPage() {
  const container = document.getElementById("wishlist-container");
  if (!container) return;

  const wishlist = getWishlist();
  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-heart empty-state-icon"></i>
        <h3>Your wishlist is currently empty.</h3>
        <p>Save your favorite luxury handbags to your personal curated wishlist and revisit them anytime.</p>
        <a href="shop.html" class="btn btn-primary btn-lg">Continue Shopping</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
      <p style="color:var(--text-muted);">You have <strong>${wishlistedProducts.length}</strong> items saved in your wishlist.</p>
      <div style="display:flex; gap:0.75rem;">
        <button class="btn btn-secondary btn-sm" onclick="clearWishlist()">
          <i class="fa-regular fa-trash-can"></i> Clear All
        </button>
      </div>
    </div>

    <div class="table-card">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${wishlistedProducts.map(p => `
            <tr>
              <td>
                <div class="cart-item-info">
                  <a href="product.html?id=${p.id}">
                    <img src="${p.image}" alt="${p.name}" class="cart-item-img" onerror="this.onerror=null; this.src='images/products/bag1.jpg';">
                  </a>
                  <div>
                    <span class="product-category" style="font-size:0.7rem;">${p.category}</span>
                    <h4 class="cart-item-title"><a href="product.html?id=${p.id}">${p.name}</a></h4>
                    <span class="cart-item-meta">Color: ${p.colors[0]?.name || "Standard"}</span>
                  </div>
                </div>
              </td>
              <td>
                <strong style="color:var(--text-main);">${formatPrice(p.price)}</strong>
                ${p.oldPrice ? `<div style="font-size:0.75rem; color:var(--text-light); text-decoration:line-through;">${formatPrice(p.oldPrice)}</div>` : ''}
              </td>
              <td>
                <span class="badge badge-gold" style="background:#edf7f0; color:#2e7d32;">In Stock</span>
              </td>
              <td style="text-align:right;">
                <div style="display:inline-flex; align-items:center; gap:0.75rem;">
                  <button class="btn btn-primary btn-sm" onclick="moveWishlistToCart(${p.id})">
                    <i class="fa-solid fa-cart-plus"></i> Move to Cart
                  </button>
                  <button class="btn-remove-item" onclick="removeFromWishlist(${p.id})" title="Remove item">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <div style="margin-top:2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <a href="shop.html" class="btn btn-secondary">
        <i class="fa-solid fa-arrow-left"></i> Continue Shopping
      </a>
      <a href="cart.html" class="btn btn-primary">
        View Shopping Cart <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  `;
}

// ==========================================================================
// 12. CART PAGE (cart.html)
// ==========================================================================
function renderCartPage() {
  const container = document.getElementById("cart-container");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-bag-shopping empty-state-icon"></i>
        <h3>Your shopping cart is empty.</h3>
        <p>Explore our handcrafted collection of fine leather handbags and find your next timeless companion.</p>
        <a href="shop.html" class="btn btn-primary btn-lg">Explore Shop</a>
      </div>
    `;
    return;
  }

  // Calculations in PKR
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 5000;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shipping = isFreeShipping ? 0 : 250;
  const shippingMeterPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  // Check discount
  const appliedPromo = localStorage.getItem(PROMO_STORAGE_KEY);
  let discountRate = 0;
  if (appliedPromo === "LAILA20") discountRate = 0.20;
  else if (appliedPromo === "VIP10") discountRate = 0.10;

  const discountAmount = Math.round(subtotal * discountRate);
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  container.innerHTML = `
    <div class="cart-layout">
      <!-- Items Table -->
      <div>
        <div class="table-card">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${cart.map(item => `
                <tr>
                  <td>
                    <div class="cart-item-info">
                      <a href="product.html?id=${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='images/products/bag1.jpg';">
                      </a>
                      <div>
                        <span class="product-category" style="font-size:0.7rem;">${item.category}</span>
                        <h4 class="cart-item-title"><a href="product.html?id=${item.id}">${item.name}</a></h4>
                        <span class="cart-item-meta">Color: ${item.color}</span>
                      </div>
                    </div>
                  </td>
                  <td><strong>${formatPrice(item.price)}</strong></td>
                  <td>
                    <div class="qty-control" style="height:36px;">
                      <button class="qty-btn" style="width:32px;" onclick="updateCartQuantity(${item.id}, '${item.color}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus" style="font-size:0.75rem;"></i></button>
                      <input type="number" class="qty-input" style="width:36px; font-size:0.85rem;" value="${item.quantity}" readonly>
                      <button class="qty-btn" style="width:32px;" onclick="updateCartQuantity(${item.id}, '${item.color}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus" style="font-size:0.75rem;"></i></button>
                    </div>
                  </td>
                  <td><strong>${formatPrice(item.price * item.quantity)}</strong></td>
                  <td style="text-align:right;">
                    <button class="btn-remove-item" onclick="removeCartItem(${item.id}, '${item.color}')" title="Remove item">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; flex-wrap:wrap; gap:1rem;">
          <a href="shop.html" class="btn btn-secondary">
            <i class="fa-solid fa-arrow-left"></i> Continue Shopping
          </a>
          <button class="btn btn-secondary" onclick="clearCart()">
            <i class="fa-solid fa-trash-can"></i> Clear Cart
          </button>
        </div>
      </div>

      <!-- Order Summary Card -->
      <div>
        <div class="summary-card">
          <h3 class="summary-title">Order Summary</h3>

          <!-- Free Shipping Progress -->
          <div class="shipping-meter">
            <div class="shipping-meter-text">
              ${isFreeShipping
      ? '<strong style="color:var(--accent-green);"><i class="fa-solid fa-circle-check"></i> You have unlocked Free Nationwide Delivery!</strong>'
      : `Add <strong>${formatPrice(freeShippingThreshold - subtotal)}</strong> more to qualify for <strong>FREE Delivery</strong>.`}
            </div>
            <div class="meter-track">
              <div class="meter-bar" style="width: ${shippingMeterPercent}%;"></div>
            </div>
          </div>

          <div class="summary-row">
            <span>Subtotal</span>
            <strong>${formatPrice(subtotal)}</strong>
          </div>

          <div class="summary-row">
            <span>Estimated Delivery</span>
            <span>${shipping === 0 ? '<strong style="color:var(--accent-green);">FREE</strong>' : formatPrice(shipping)}</span>
          </div>

          ${discountAmount > 0 ? `
            <div class="summary-row" style="color:var(--accent-terracotta);">
              <span>Coupon Discount (${appliedPromo})</span>
              <strong>-${formatPrice(discountAmount)}</strong>
            </div>
          ` : ''}

          <!-- Promo Code Box -->
          <div class="promo-box">
            <input type="text" id="promo-code-input" class="promo-input" placeholder="Promo code (LAILA20)" value="${appliedPromo || ''}">
            <button class="btn btn-secondary btn-sm" onclick="applyPromoCode()">Apply</button>
          </div>

          <div class="summary-total-row">
            <span>Grand Total</span>
            <span style="color:var(--accent-gold); font-size:1.45rem;">${formatPrice(grandTotal)}</span>
          </div>

          <a href="checkout.html" class="btn btn-primary btn-lg btn-full" style="margin-top:1.75rem;">
            Proceed to Checkout <i class="fa-solid fa-lock" style="font-size:0.8rem; margin-left:4px;"></i>
          </a>

          <div style="text-align:center; margin-top:1.25rem; font-size:0.775rem; color:var(--text-light); display:flex; align-items:center; justify-content:center; gap:0.5rem;">
            <i class="fa-solid fa-shield-halved" style="color:var(--accent-gold);"></i> 256-Bit SSL Encrypted & Protected
          </div>
        </div>
      </div>
    </div>
  `;
}

function applyPromoCode() {
  const input = document.getElementById("promo-code-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "LAILA20") {
    localStorage.setItem(PROMO_STORAGE_KEY, "LAILA20");
    showToast("Promo code <strong>LAILA20</strong> applied! (20% Off)", "success");
    renderCartPage();
  } else if (code === "VIP10") {
    localStorage.setItem(PROMO_STORAGE_KEY, "VIP10");
    showToast("Promo code <strong>VIP10</strong> applied! (10% Off)", "success");
    renderCartPage();
  } else {
    showToast("Invalid promotion code. Try 'LAILA20'", "error");
  }
}

// ==========================================================================
// 13. CHECKOUT PAGE (checkout.html)
// ==========================================================================
function initCheckoutPage() {
  const checkoutContainer = document.getElementById("checkout-container");
  if (!checkoutContainer) return;

  const cart = getCart();
  if (cart.length === 0) {
    checkoutContainer.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-basket-shopping empty-state-icon"></i>
        <h3>Your cart is empty</h3>
        <p>Please add products to your cart before proceeding to checkout.</p>
        <a href="shop.html" class="btn btn-primary">Return to Shop</a>
      </div>
    `;
    return;
  }

  // Calculate order totals in PKR
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 5000 ? 0 : 250;
  const appliedPromo = localStorage.getItem(PROMO_STORAGE_KEY);
  const discountRate = appliedPromo === "LAILA20" ? 0.20 : appliedPromo === "VIP10" ? 0.10 : 0;
  const discount = Math.round(subtotal * discountRate);
  const total = Math.max(0, subtotal - discount + shipping);

  // Render checkout preview items
  const itemsPreviewEl = document.getElementById("checkout-items-preview");
  if (itemsPreviewEl) {
    itemsPreviewEl.innerHTML = cart.map(item => `
      <div class="checkout-item-row">
        <div class="checkout-item-left">
          <img src="${item.image}" alt="${item.name}" class="checkout-item-thumb" onerror="this.onerror=null; this.src='images/products/bag1.jpg';">
          <div>
            <div style="font-weight:600; font-size:0.875rem;">${item.name}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${item.color} &times; ${item.quantity}</div>
          </div>
        </div>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
    `).join("");
  }

  // Update summary numbers
  const subtotalEl = document.getElementById("checkout-subtotal");
  const shippingEl = document.getElementById("checkout-shipping");
  const discountEl = document.getElementById("checkout-discount");
  const discountRow = document.getElementById("checkout-discount-row");
  const totalEl = document.getElementById("checkout-total");

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : formatPrice(shipping);
  if (discountRow) {
    if (discount > 0) {
      discountRow.style.display = "flex";
      if (discountEl) discountEl.textContent = `-${formatPrice(discount)}`;
    } else {
      discountRow.style.display = "none";
    }
  }
  if (totalEl) totalEl.textContent = formatPrice(total);

  // Payment radio toggles
  document.querySelectorAll("input[name='payment-method']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      document.querySelectorAll(".payment-option-label").forEach(l => l.classList.remove("active"));
      e.target.closest(".payment-option-label")?.classList.add("active");

      document.querySelectorAll(".payment-subpanel").forEach(p => p.classList.remove("active"));
      const targetPanel = document.getElementById(`panel-${e.target.value}`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  // Credit Card Formatter
  const cardInput = document.getElementById("cc-number");
  if (cardInput) {
    cardInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
      let matches = v.match(/\d{4,16}/g);
      let match = (matches && matches[0]) || "";
      let parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        e.target.value = parts.join(" ");
      } else {
        e.target.value = v;
      }
    });
  }

  // Expiry input formatter MM/YY
  const expiryInput = document.getElementById("cc-expiry");
  if (expiryInput) {
    expiryInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length >= 2) {
        e.target.value = v.substring(0, 2) + "/" + v.substring(2, 4);
      } else {
        e.target.value = v;
      }
    });
  }

  // Submit checkout form
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  let isValid = true;

  const requiredFields = [
    { id: "cust-first-name", msg: "First name is required" },
    { id: "cust-last-name", msg: "Last name is required" },
    { id: "cust-email", msg: "Valid email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { id: "cust-phone", msg: "Phone number is required" },
    { id: "cust-address", msg: "Street address is required" },
    { id: "cust-city", msg: "City is required" },
    { id: "cust-province", msg: "Province/State is required" },
    { id: "cust-zip", msg: "Postal/Zip code is required" }
  ];

  requiredFields.forEach(f => {
    const input = document.getElementById(f.id);
    if (!input) return;
    const errorEl = input.nextElementSibling;
    const val = input.value.trim();

    let fieldValid = val.length > 0;
    if (f.pattern && fieldValid) {
      fieldValid = f.pattern.test(val);
    }

    if (!fieldValid) {
      input.classList.add("input-error");
      if (errorEl && errorEl.classList.contains("error-text")) {
        errorEl.textContent = f.msg;
        errorEl.style.display = "block";
      }
      isValid = false;
    } else {
      input.classList.remove("input-error");
      if (errorEl && errorEl.classList.contains("error-text")) {
        errorEl.style.display = "none";
      }
    }
  });

  const paymentMethod = document.querySelector("input[name='payment-method']:checked")?.value || "card";
  if (paymentMethod === "card") {
    const cardFields = [
      { id: "cc-name", msg: "Cardholder name is required" },
      { id: "cc-number", msg: "16-digit card number required", minLen: 16 },
      { id: "cc-expiry", msg: "MM/YY required", minLen: 5 },
      { id: "cc-cvv", msg: "CVV required", minLen: 3 }
    ];

    cardFields.forEach(f => {
      const input = document.getElementById(f.id);
      if (!input) return;
      const errorEl = input.nextElementSibling;
      const val = input.value.trim();
      let fieldValid = val.length >= (f.minLen || 1);

      if (!fieldValid) {
        input.classList.add("input-error");
        if (errorEl && errorEl.classList.contains("error-text")) {
          errorEl.textContent = f.msg;
          errorEl.style.display = "block";
        }
        isValid = false;
      } else {
        input.classList.remove("input-error");
        if (errorEl && errorEl.classList.contains("error-text")) {
          errorEl.style.display = "none";
        }
      }
    });
  }

  if (!isValid) {
    showToast("Please fill in all required fields accurately.", "error");
    return;
  }

  // Create order data
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 5000 ? 0 : 250;
  const appliedPromo = localStorage.getItem(PROMO_STORAGE_KEY);
  const discountRate = appliedPromo === "LAILA20" ? 0.20 : appliedPromo === "VIP10" ? 0.10 : 0;
  const discount = Math.round(subtotal * discountRate);
  const total = Math.max(0, subtotal - discount + shipping);

  const orderNum = "#LB-" + Math.floor(10000 + Math.random() * 90000);
  const orderDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const orderData = {
    orderNumber: orderNum,
    date: orderDate,
    customer: {
      firstName: document.getElementById("cust-first-name")?.value.trim(),
      lastName: document.getElementById("cust-last-name")?.value.trim(),
      email: document.getElementById("cust-email")?.value.trim(),
      phone: document.getElementById("cust-phone")?.value.trim(),
      address: document.getElementById("cust-address")?.value.trim(),
      city: document.getElementById("cust-city")?.value.trim(),
      province: document.getElementById("cust-province")?.value.trim(),
      zip: document.getElementById("cust-zip")?.value.trim()
    },
    paymentMethod: paymentMethod === "card" ? "Credit / Debit Card" : paymentMethod === "cod" ? "Cash on Delivery" : "Direct Bank Transfer",
    items: cart,
    subtotal: subtotal,
    shipping: shipping,
    discount: discount,
    grandTotal: total
  };

  saveLastOrder(orderData);
  // Clear cart
  saveCart([]);
  localStorage.removeItem(PROMO_STORAGE_KEY);

  // Redirect to thank-you.html
  window.location.href = "thank-you.html";
}

// ==========================================================================
// 14. THANK YOU PAGE (thank-you.html)
// ==========================================================================
function initThankYouPage() {
  const container = document.getElementById("thankyou-container");
  if (!container) return;

  let order = getLastOrder();
  // Fallback demo order if visited directly
  if (!order) {
    order = {
      orderNumber: "#LB-84920",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      customer: {
        firstName: "Ayesha",
        lastName: "Khan",
        email: "ayesha.khan@example.com",
        address: "House 12, Street 5, F-7/2",
        city: "Islamabad",
        province: "Federal Capital",
        zip: "44000"
      },
      paymentMethod: "Cash on Delivery",
      items: [
        { name: "Aurelia Classic Leather Tote", color: "Cognac Brown", quantity: 1, price: 12500 }
      ],
      subtotal: 12500,
      shipping: 0,
      discount: 2500,
      grandTotal: 10000
    };
  }

  container.innerHTML = `
    <div class="thankyou-card">
      <div class="thankyou-icon">
        <i class="fa-solid fa-check"></i>
      </div>
      <h1>Thank You for Your Order!</h1>
      <p class="thankyou-subtitle">Your order has been placed successfully and is now being handcrafted and packaged for dispatch.</p>

      <div class="order-receipt-box">
        <div class="receipt-grid">
          <div>
            <div class="receipt-label">Order Number</div>
            <div class="receipt-value" style="color:var(--accent-gold); font-size:1.15rem;">${order.orderNumber}</div>
          </div>
          <div>
            <div class="receipt-label">Order Date</div>
            <div class="receipt-value">${order.date}</div>
          </div>
          <div>
            <div class="receipt-label">Recipient</div>
            <div class="receipt-value">${order.customer.firstName} ${order.customer.lastName}</div>
          </div>
          <div>
            <div class="receipt-label">Contact Email</div>
            <div class="receipt-value">${order.customer.email}</div>
          </div>
          <div>
            <div class="receipt-label">Payment Method</div>
            <div class="receipt-value">${order.paymentMethod}</div>
          </div>
          <div>
            <div class="receipt-label">Total Amount</div>
            <div class="receipt-value" style="font-size:1.15rem; color:var(--text-main);">${formatPrice(order.grandTotal)}</div>
          </div>
          <div style="grid-column: span 2;">
            <div class="receipt-label">Shipping Destination</div>
            <div class="receipt-value">${order.customer.address}, ${order.customer.city}, ${order.customer.province} ${order.customer.zip}</div>
          </div>
        </div>

        <!-- Ordered Items Summary -->
        <div style="margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid var(--border-light);">
          <div class="receipt-label" style="margin-bottom:0.75rem;">Items in this order:</div>
          ${order.items.map(item => `
            <div style="display:flex; justify-content:space-between; font-size:0.875rem; margin-bottom:0.35rem;">
              <span>${item.quantity}x ${item.name} (${item.color})</span>
              <strong>${formatPrice(item.price * item.quantity)}</strong>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="thankyou-actions">
        <button class="btn btn-secondary" onclick="window.print()">
          <i class="fa-solid fa-print"></i> Print Receipt
        </button>
        <a href="shop.html" class="btn btn-primary">
          <i class="fa-solid fa-bag-shopping"></i> Continue Shopping
        </a>
        <a href="index.html" class="btn btn-outline-gold">
          <i class="fa-solid fa-house"></i> Back to Home
        </a>
      </div>
    </div>
  `;
}

// ==========================================================================
// 15. PROMOTIONS PAGE (promotions.html)
// ==========================================================================
function initPromotionsPage() {
  window.copyPromoCode = function (code) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Promo code <strong>${code}</strong> copied to clipboard!`, "success");
    }).catch(() => {
      showToast(`Promo code: <strong>${code}</strong>`, "info");
    });
  };

  const daysEl = document.getElementById("timer-days");
  const hoursEl = document.getElementById("timer-hours");
  const minsEl = document.getElementById("timer-mins");
  const secsEl = document.getElementById("timer-secs");

  if (daysEl && hoursEl && minsEl && secsEl) {
    let targetTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);
    setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetTime - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(d).padStart(2, "0");
      hoursEl.textContent = String(h).padStart(2, "0");
      minsEl.textContent = String(m).padStart(2, "0");
      secsEl.textContent = String(s).padStart(2, "0");
    }, 1000);
  }
}

// ==========================================================================
// 16. CONTACT US PAGE (contact.html)
// ==========================================================================
function initContactPage() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name")?.value.trim();
    const email = document.getElementById("contact-email")?.value.trim();
    const subject = document.getElementById("contact-subject")?.value.trim();
    const message = document.getElementById("contact-message")?.value.trim();

    if (!name || !email || !subject || !message) {
      showToast("Please fill in all contact form fields.", "error");
      return;
    }

    showToast(`Thank you, <strong>${name}</strong>! Your inquiry has been sent to our concierge team.`, "success", 4000);
    contactForm.reset();
  });
}

// ==========================================================================
// 17. GLOBAL INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  updateHeaderBadges();

  const path = window.location.pathname.toLowerCase();

  if (path.endsWith("index.html") || path.endsWith("/") || path === "") {
    initHomePage();
  }
  if (path.includes("shop.html")) {
    initShopPage();
  }
  if (path.includes("product.html")) {
    initProductDetailsPage();
  }
  if (path.includes("wishlist.html")) {
    renderWishlistPage();
  }
  if (path.includes("cart.html")) {
    renderCartPage();
  }
  if (path.includes("checkout.html")) {
    initCheckoutPage();
  }
  if (path.includes("thank-you.html")) {
    initThankYouPage();
  }
  if (path.includes("promotions.html")) {
    initPromotionsPage();
  }
  if (path.includes("contact.html")) {
    initContactPage();
  }
});
