// =============================================
// COLLECTION PAGE JS — collection.js
// =============================================

(function () {
  const pieces = [
    { id: 1, name: "Blue & Pink Duo Twist", category: "Two-tone", price: "£18", material: "Twisted Cord & Lobster Clasp", description: "Slim double-strand bracelet twisting bright blue and soft pink cords together, finished with silver tube ends, a lobster clasp and extension chain. Light, playful and perfect for layering.", color: "#D0E8F5", tag: "Bestseller", Image: "./images/IMG_9252.JPG", link: "https://buy.stripe.com/00w28l5ny25baBjaMd4wM0o" },
    { id: 2, name: "Monochrome Gold Braid", category: "Two-tone", price: "£18", material: "Braided Cord & Lobster Clasp", description: "Chunky flat braid weaving black, white and gold cord together with silver end caps and a lobster clasp with extender chain. Bold, classic and eye-catching.", color: "#E8E8E8", tag: "New Arrival", Image: "./images/IMG_9253.JPG", link: "https://buy.stripe.com/eVq14haHScJPeRz07z4wM0e" },
    { id: 3, name: "Berry & Black Slim Braid", category: "Two-tone", price: "£16", material: "Braided Cord & Lobster Clasp", description: "Delicate slim bracelet braiding black, pink and purple cord into a fine flat plait, with silver end caps and a lobster clasp with extender chain. Subtle and wearable every day.", color: "#E0D0F0", tag: "Popular", Image: "./images/IMG_9255.JPG", link: "https://buy.stripe.com/dRm6oB4juh057p7aMd4wM0m" },
    { id: 4, name: "Copper Rope Hook", category: "Chunky", price: "£18", material: "Twisted Rope Cord & Copper Hook", description: "Striking all-copper twisted rope bracelet with polished rose-gold copper cone ends and a handcrafted hook closure. Warm, bold and truly unique.", color: "#F5DDD0", tag: "Exclusive", Image: "./images/IMG_9256.JPG", link: "https://buy.stripe.com/dRm3cp4ju25bgZH4nP4wM0p" },
    { id: 5, name: "Purple & Copper Twist", category: "Two-tone", price: "£18", material: "Twisted Cord & Lobster Clasp", description: "Double-strand bracelet intertwining rich purple and warm copper/rust cord, with silver end caps and a lobster clasp with extender chain. A vibrant earthy contrast.", color: "#E0D0F0", tag: "Bestseller", Image: "./images/IMG_9257.JPG", link: "https://buy.stripe.com/4gMeV79DO9xD8tb4nP4wM0l" },
    { id: 6, name: "Violet Slim Twist", category: "Slim", price: "£12", material: "Twisted Cord & Lobster Clasp", description: "Minimalist single-strand slim twisted purple cord bracelet with tiny silver tube ends and a lobster clasp with extension chain. Simple, elegant and effortlessly wearable.", color: "#D8D0F0", tag: "Limited", Image: "./images/IMG_9258.JPG", link: "https://buy.stripe.com/14A9AN9DOh0538R7A14wM0k" },
    { id: 7, name: "Purple & Rust Rope Twist", category: "Two-tone", price: "£14", material: "Twisted Cord & Lobster Clasp", description: "Thicker double-strand twisted bracelet blending deep purple and burnt rust cord, with decorative patterned silver end caps and a lobster clasp with extender chain.", color: "#E0D0F0", tag: "New Arrival", Image: "./images/IMG_9259.JPG", link: "https://buy.stripe.com/9B6dR32bmbFLcJr1bD4wM0j" },
    { id: 8, name: "Rust & Purple Fine Twist", category: "Two-tone", price: "£12", material: "Twisted Cord & Lobster Clasp", description: "Fine double-strand twisted bracelet combining rust orange and deep purple cord, with small silver tube ends and a lobster clasp with extender chain. Subtle two-tone detail for everyday wear.", color: "#F5DDD0", tag: "Bestseller", Image: "./images/IMG_9260.JPG", link: "https://buy.stripe.com/fZu00daHS9xDeRzdYp4wM0i" },
    { id: 9, name: "Copper & Purple Chain Bar", category: "Two-tone", price: "£14", material: "Twisted Cord & Silver Chain", description: "Unique half-cord, half-chain bracelet featuring a short section of purple and rust twisted cord set between two lengths of bold silver chain, with a lobster clasp. Edgy and architectural.", color: "#D0E8F5", tag: "Artisan Pick", Image: "./images/IMG_9261.JPG", link: "https://buy.stripe.com/bJeeV7bLWbFL7p73jL4wM0h" },
    { id: 10, name: "Silver & Gold Wire Toggle", category: "Two-tone", price: "£14", material: "Fine Wire Cord & Toggle Clasp", description: "Ultra-delicate double-strand bracelet pairing silver and gold fine twisted wire cord, with a polished silver toggle clasp. Barely-there elegance — ideal for stacking.", color: "#F5ECD9", tag: "Artisan Pick", Image: "./images/IMG_9296.JPG", link: "https://buy.stripe.com/eVq7sF5nyeRXcJr4nP4wM08" },
    { id: 11, name: "Royal Blue Chunky Braid", category: "Chunky", price: "£16", material: "Braided Cord & Lobster Clasp", description: "Solid royal blue chunky flat-braided cord bracelet with polished silver end caps and a lobster clasp with extender chain. A bold, clean pop of colour.", color: "#C8D4F0", tag: "Artisan Pick", Image: "./images/IMG_9262.JPG", link: "https://buy.stripe.com/3cI28l3fq5hn6l31bD4wM0g" },
    { id: 12, name: "Black & Silver Slim Twist", category: "Two-tone", price: "£12", material: "Twisted Cord & Lobster Clasp", description: "Slim twisted bracelet blending black and silver cord, with ornate patterned silver barrel ends and a lobster clasp with extender chain. Understated and refined.", color: "#E8E8E8", tag: "Artisan Pick", Image: "./images/IMG_9263.JPG", link: "https://buy.stripe.com/dRm28l4judNT9xfcUl4wM0f" },
    { id: 13, name: "Black & White Slim Braid", category: "Two-tone", price: "£12", material: "Braided Cord & Lobster Clasp", description: "Classic slim flat-braided bracelet in black and white cord, with neat silver end caps and a lobster clasp with extender chain. Timeless monochrome styling.", color: "#ECECEC", tag: "Artisan Pick", Image: "./images/IMG_9264.JPG", link: "https://buy.stripe.com/7sY6oBdU4fW1gZHg6x4wM0n" },
    { id: 14, name: "Silver Wire Mesh Bangle", category: "Slim", price: "£14", material: "Woven Wire Mesh & Toggle Clasp", description: "Delicate silver wire mesh bracelet hand-woven into a hollow round bangle, finished with ornate engraved silver toggle caps. Lightweight, intricate and truly artisan.", color: "#ECECEC", tag: "Artisan Pick", Image: "./images/IMG_9282.JPG", link: "https://buy.stripe.com/bJebIVaHS7pv24N4nP4wM0d" },
    { id: 15, name: "Cobalt Rope Braid", category: "Chunky", price: "£16", material: "Thick Braided Cord & Lobster Clasp", description: "Bold solid royal blue thick rope-braided cord bracelet with silver end caps and a lobster clasp with extender chain. Chunky, vivid and built to make a statement.", color: "#C8D4F0", tag: "Artisan Pick", Image: "./images/IMG_9288.JPG", link: "https://buy.stripe.com/fZu14h4jufW18tbf2t4wM07" },
    { id: 16, name: "Blush Chunky Toggle", category: "Chunky", price: "£16", material: "Braided Cord & Silver Toggle", description: "Soft peach and blush chunky flat-braided cord bracelet with a polished silver toggle clasp. Feminine and tactile — a warm, elegant everyday piece.", color: "#F9E8E8", tag: "Artisan Pick", Image: "./images/IMG_9289.JPG", link: "https://buy.stripe.com/8x2dR3aHSaBHdNvf2t4wM0a" },
    { id: 17, name: "Plum & Blush Herringbone", category: "Two-tone", price: "£18", material: "Woven Cord & Toggle Clasp", description: "Chunky herringbone-weave bracelet blending deep plum brown and soft blush pink cord, with silver toggle clasp. Rich texture and a beautiful two-tone contrast.", color: "#F5E0E8", tag: "Artisan Pick", Image: "./images/IMG_9290.JPG", link: "https://buy.stripe.com/aFa5kx17ieRX4cV6vX4wM09" },
    { id: 18, name: "Violet Chunky Braid", category: "Chunky", price: "£18", material: "Braided Cord & Lobster Clasp", description: "Deep violet chunky flat-braided cord bracelet with polished silver end caps and a lobster clasp with extender chain. Vibrant, bold and richly coloured.", color: "#D8D0F0", tag: "Bestseller", Image: "./images/IMG_9287.JPG", link: "https://buy.stripe.com/3cIbIV7vG39f4cV6vX4wM0c" },
];

  let currentFilter     = "All";
  let currentIndex      = 0;
  let isAnimating       = false;
  let lastViewportWidth = window.innerWidth; // track WIDTH only — not height

  function getFiltered() {
    if (currentFilter === "All") return pieces;
    return pieces.filter(p => p.category === currentFilter);
  }

  function initials(name) {
    return name.split(" ").slice(0, 2).map(w => w[0]).join("");
  }

  function buildCard(piece, position) {
    const isMain = position === 0;
    const card   = document.createElement("div");
    card.className = "bracelet-card" + (isMain ? " main" : "");
    card.innerHTML = `
      <div class="card-image" style="background:${piece.color}">
        ${piece.Image
          ? `<img src="${piece.Image}" class="card-img-content" alt="${piece.name}" loading="lazy">`
          : `<div class="card-initials">${initials(piece.name)}</div>`}
        <div class="card-tag-flag">${piece.tag}</div>
      </div>
      <div class="card-body">
        <span class="card-tag-badge">${piece.tag}</span>
        <p class="card-name">${piece.name}</p>
        <p class="card-material">${piece.material}</p>
        <p class="card-description">${piece.description}</p>
        <div class="card-footer">
          <span class="card-price">${piece.price}</span>
          <a href="${piece.link}" target="_blank" class="card-view-link">
            <button class="card-view-btn">Buy Now</button>
          </a>
        </div>
      </div>`;
    return card;
  }

  // Silently preload the images on either side so they're ready before the slide
  function preloadAdjacent(filtered) {
    const total = filtered.length;
    [-1, 1].forEach(offset => {
      const idx = (currentIndex + offset + total) % total;
      if (filtered[idx] && filtered[idx].Image) {
        new Image().src = filtered[idx].Image;
      }
    });
  }

  function updateDotsAndCounter(filtered, total) {
    const dotsEl = document.getElementById("carousel-dots");
    dotsEl.innerHTML = "";
    filtered.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot" + (i === currentIndex ? " active" : "");
      dot.setAttribute("aria-label", `Go to item ${i + 1}`);
      dot.addEventListener("click", () => {
        if (isAnimating) return;
        const dir = i > currentIndex ? "next" : "prev";
        currentIndex = i;
        renderCarousel(dir);
      });
      dotsEl.appendChild(dot);
    });
    document.getElementById("carousel-counter").textContent =
      String(currentIndex + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
  }

  function insertCards(track, filtered, total, isMobile) {
    track.innerHTML = "";
    if (isMobile) {
      track.appendChild(buildCard(filtered[currentIndex], 0));
    } else {
      [-1, 0, 1].forEach(offset => {
        const idx = (currentIndex + offset + total) % total;
        track.appendChild(buildCard(filtered[idx], offset));
      });
    }
  }

  function renderCarousel(direction) {
    const filtered = getFiltered();
    const total    = filtered.length;
    if (total === 0) return;
    if (currentIndex >= total) currentIndex = 0;

    const track    = document.getElementById("cards-track");
    const isMobile = window.innerWidth < 768;

    updateDotsAndCounter(filtered, total);
    preloadAdjacent(filtered);

    // No direction = first render or filter change → instant, no animation
    if (!direction) {
      insertCards(track, filtered, total, isMobile);
      return;
    }

    if (isAnimating) return;
    isAnimating = true;

    const exitX  = direction === "next" ? "-60px" : "60px";
    const enterX = direction === "next" ?  "60px" : "-60px";

    // ── Step 1: slide existing card(s) out ──
    track.querySelectorAll(".bracelet-card").forEach(card => {
      card.style.transition = "transform 0.22s ease, opacity 0.22s ease";
      card.style.opacity    = "0";
      card.style.transform  = card.classList.contains("main")
        ? `translateX(${exitX}) scale(1)`
        : `translateX(${exitX}) scale(0.97)`;
    });

    setTimeout(() => {
      // ── Step 2: swap the DOM ──
      insertCards(track, filtered, total, isMobile);

      const incoming = track.querySelectorAll(".bracelet-card");

      // ── Step 3: place new card(s) off-screen with NO transition ──
      incoming.forEach(card => {
        card.style.transition = "none";
        card.style.opacity    = "0";
        card.style.transform  = card.classList.contains("main")
          ? `translateX(${enterX}) scale(1)`
          : `translateX(${enterX}) scale(0.97)`;
      });

      // ── Step 4: double-rAF ensures the browser has painted the start
      //    position before we begin the enter transition ──
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          incoming.forEach(card => {
            card.style.transition = "transform 0.28s ease, opacity 0.28s ease";
            card.style.opacity    = card.classList.contains("main") ? "1" : "";
            card.style.transform  = card.classList.contains("main")
              ? "translateX(0) scale(1)"
              : "translateX(0) scale(0.97)";
          });

          // ── Step 5: clean up so CSS classes own the styles again ──
          setTimeout(() => {
            incoming.forEach(card => {
              card.style.transition = "";
              card.style.transform  = "";
              card.style.opacity    = "";
            });
            isAnimating = false;
          }, 300);
        });
      });
    }, 230);
  }

  function init() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        currentFilter = this.dataset.filter;
        currentIndex  = 0;
        renderCarousel(); // instant — no slide on filter change
      });
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
      if (isAnimating) return;
      const filtered = getFiltered();
      currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
      renderCarousel("prev");
    });

    document.getElementById("next-btn").addEventListener("click", () => {
      if (isAnimating) return;
      const filtered = getFiltered();
      currentIndex = (currentIndex + 1) % filtered.length;
      renderCarousel("next");
    });

    // ─────────────────────────────────────────────────────────────────
    // KEY FIX — only re-render when the viewport WIDTH changes.
    //
    // On mobile, scrolling makes the browser's URL bar hide/show, which
    // fires a "resize" event with a new HEIGHT but the same WIDTH.
    // The old code re-rendered the card on every one of those events,
    // causing the flicker you saw while scrolling.
    // ─────────────────────────────────────────────────────────────────
    window.addEventListener("resize", () => {
      const w = window.innerWidth;
      if (w !== lastViewportWidth) {
        lastViewportWidth = w;
        renderCarousel(); // layout genuinely changed — safe to re-render
      }
    });

    renderCarousel(); // initial paint
  }

  document.addEventListener("DOMContentLoaded", init);
})();