// ===== PRODUCT DATA =====
const products = [
    // Editing
    {
        id: 'capcut',
        name: 'CapCut Pro',
        category: 'Editing',
        image: 'assets/products/capcut.png',
        description: 'Edit video dengan efek AI lengkap untuk konten TikTok',
        isBestSeller: true,
        prices: { '1 Minggu': 8000, '1 Bulan': 20000, '3 Bulan': 55000, '6 Bulan': 100000 }
    },
    {
        id: 'premiere',
        name: 'Adobe Premiere Pro',
        category: 'Editing',
        image: 'assets/products/premiere.png',
        description: 'Software editing video standar industri profesional',
        prices: { '1 Minggu': 25000, '1 Bulan': 65000, '3 Bulan': 180000, '6 Bulan': 350000 }
    },
    {
        id: 'aftereffects',
        name: 'Adobe After Effects',
        category: 'Editing',
        image: 'assets/products/premiere.png',
        description: 'Software efek visual dan animasi profesional',
        prices: { '1 Minggu': 25000, '1 Bulan': 65000, '3 Bulan': 180000, '6 Bulan': 350000 }
    },
    {
        id: 'photoshop',
        name: 'Adobe Photoshop',
        category: 'Editing',
        image: 'assets/products/premiere.png',
        description: 'Software editing foto paling powerful di dunia',
        prices: { '1 Minggu': 20000, '1 Bulan': 55000, '3 Bulan': 150000, '6 Bulan': 280000 }
    },
    {
        id: 'lightroom',
        name: 'Adobe Lightroom',
        category: 'Editing',
        image: 'assets/products/premiere.png',
        description: 'Edit warna foto dengan preset aesthetic',
        prices: { '1 Minggu': 15000, '1 Bulan': 40000, '3 Bulan': 110000, '6 Bulan': 200000 }
    },
    {
        id: 'canva',
        name: 'Canva Pro',
        category: 'Produktivitas',
        image: 'assets/products/canva.png',
        description: 'Desain grafis mudah dengan ribuan template',
        isBestSeller: true,
        prices: { '1 Minggu': 10000, '1 Bulan': 25000, '3 Bulan': 70000, '6 Bulan': 130000 }
    },
    // Musik
    {
        id: 'spotify',
        name: 'Spotify Premium',
        category: 'Musik',
        image: 'assets/products/spotify.png',
        description: 'Streaming musik tanpa iklan dengan playlist AI',
        isBestSeller: true,
        prices: { '1 Minggu': 5000, '1 Bulan': 15000, '3 Bulan': 40000, '6 Bulan': 75000 }
    },
    {
        id: 'youtubemusic',
        name: 'YouTube Music',
        category: 'Musik',
        image: 'assets/products/youtube-music.png',
        description: 'Streaming musik + video YouTube tanpa iklan',
        prices: { '1 Minggu': 5000, '1 Bulan': 15000, '3 Bulan': 40000, '6 Bulan': 75000 }
    },
    {
        id: 'applemusic',
        name: 'Apple Music',
        category: 'Musik',
        image: 'assets/products/youtube-music.png',
        description: 'Streaming musik kualitas tinggi untuk audiophile',
        prices: { '1 Minggu': 8000, '1 Bulan': 20000, '3 Bulan': 55000, '6 Bulan': 100000 }
    },
    // Streaming
    {
        id: 'netflix',
        name: 'Netflix Premium',
        category: 'Streaming',
        image: 'assets/products/netflix.png',
        description: 'Film & series original berkualitas tinggi',
        isBestSeller: true,
        prices: { '1 Minggu': 15000, '1 Bulan': 35000, '3 Bulan': 95000, '6 Bulan': 180000 }
    },
    {
        id: 'disney',
        name: 'Disney+ Hotstar',
        category: 'Streaming',
        image: 'assets/products/disney.png',
        description: 'Film Disney, Marvel, Star Wars & anime',
        prices: { '1 Minggu': 10000, '1 Bulan': 25000, '3 Bulan': 70000, '6 Bulan': 130000 }
    },
    {
        id: 'viu',
        name: 'Viu Premium',
        category: 'Streaming',
        image: 'assets/products/netflix.png',
        description: 'Drama Asia dengan subtitle cepat',
        prices: { '1 Minggu': 5000, '1 Bulan': 15000, '3 Bulan': 40000, '6 Bulan': 75000 }
    },
    // AI
    {
        id: 'chatgpt',
        name: 'ChatGPT Plus',
        category: 'AI',
        image: 'assets/products/chatgpt.png',
        description: 'AI chatbot dengan akses GPT-4 dan fitur coding',
        isBestSeller: true,
        prices: { '1 Minggu': 35000, '1 Bulan': 85000, '3 Bulan': 240000, '6 Bulan': 450000 }
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        category: 'AI',
        image: 'assets/products/chatgpt.png',
        description: 'AI generator gambar dengan hasil realistis',
        prices: { '1 Minggu': 40000, '1 Bulan': 100000, '3 Bulan': 280000, '6 Bulan': 520000 }
    },
    {
        id: 'notion',
        name: 'Notion AI',
        category: 'AI',
        image: 'assets/products/chatgpt.png',
        description: 'All-in-one workspace dengan fitur AI',
        prices: { '1 Minggu': 15000, '1 Bulan': 40000, '3 Bulan': 110000, '6 Bulan': 200000 }
    },
    // Gaming
    {
        id: 'steam',
        name: 'Steam Wallet',
        category: 'Gaming',
        image: 'assets/products/netflix.png',
        description: 'Balance untuk beli game di Steam',
        prices: { '1 Minggu': 50000, '1 Bulan': 150000, '3 Bulan': 400000, '6 Bulan': 750000 }
    }
];

// Hero slides data
const heroSlides = [
    {
        title: 'Akun Premium Murah, Aman & Bergaransi',
        subtitle: 'Dapatkan akun premium aplikasi favorit Anda dengan harga terjangkau dan proses instan',
        image: 'assets/hero-banner.png'
    },
    {
        title: 'AI Tools Premium Tersedia!',
        subtitle: 'ChatGPT Plus, Midjourney, dan AI tools lainnya dengan harga spesial',
        image: 'assets/hero-banner.png'
    },
    {
        title: 'Streaming Tanpa Batas',
        subtitle: 'Netflix, Disney+, Spotify dan masih banyak lagi dalam satu tempat',
        image: 'assets/hero-banner.png'
    }
];

// ===== STATE =====
let selectedCategory = 'Semua';
let showAllProducts = false;
let productDurations = {};
let currentSlide = 0;

// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loading-screen');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const productsGrid = document.getElementById('products-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const showMoreBtn = document.getElementById('show-more-btn');
const copyDanaBtn = document.getElementById('copy-dana');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroImage = document.getElementById('hero-image');
const slideIndicators = document.querySelectorAll('.indicator');

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== INITIALIZE =====
function init() {
    // Initialize product durations
    products.forEach(p => {
        productDurations[p.id] = '1 Bulan';
    });

    // Hide loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);

    // Render products
    renderProducts();

    // Setup event listeners
    setupEventListeners();

    // Start hero slider
    startHeroSlider();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Category filter
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
            showAllProducts = false;
            updateShowMoreButton();
            renderProducts();
        });
    });

    // Show more button
    showMoreBtn.addEventListener('click', () => {
        showAllProducts = !showAllProducts;
        updateShowMoreButton();
        renderProducts();
    });

    // Copy Dana number
    copyDanaBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('082143041255').then(() => {
            showToast('Nomor Dana berhasil disalin!');
            copyDanaBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Tersalin!</span>
            `;
            setTimeout(() => {
                copyDanaBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                    </svg>
                    <span>Salin Nomor Dana</span>
                `;
            }, 2000);
        });
    });

    // Slide indicators
    slideIndicators.forEach((indicator, idx) => {
        indicator.addEventListener('click', () => {
            currentSlide = idx;
            updateHeroSlide();
        });
    });
}

// ===== HERO SLIDER =====
function startHeroSlider() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        updateHeroSlide();
    }, 5000);
}

function updateHeroSlide() {
    const slide = heroSlides[currentSlide];
    heroTitle.style.opacity = 0;
    heroSubtitle.style.opacity = 0;
    
    setTimeout(() => {
        heroTitle.textContent = slide.title;
        heroSubtitle.textContent = slide.subtitle;
        heroImage.src = slide.image;
        heroTitle.style.opacity = 1;
        heroSubtitle.style.opacity = 1;
    }, 300);

    slideIndicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === currentSlide);
    });
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const filteredProducts = selectedCategory === 'Semua' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    const displayProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 6);

    productsGrid.innerHTML = displayProducts.map((product, idx) => {
        const duration = productDurations[product.id] || '1 Bulan';
        const price = product.prices[duration];

        return `
            <div class="product-card glass card-hover" style="animation-delay: ${idx * 0.05}s">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a1a/ff4d4d?text=${encodeURIComponent(product.name)}'">
                    <div class="product-badges">
                        <span class="product-category">${product.category}</span>
                        ${product.isBestSeller ? '<span class="badge-bestseller">🔥 BEST SELLER</span>' : ''}
                    </div>
                </div>
                <div class="product-content">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <select class="product-select" data-product-id="${product.id}" onchange="updatePrice('${product.id}', this.value)">
                        <option value="1 Minggu" ${duration === '1 Minggu' ? 'selected' : ''}>1 Minggu</option>
                        <option value="1 Bulan" ${duration === '1 Bulan' ? 'selected' : ''}>1 Bulan</option>
                        <option value="3 Bulan" ${duration === '3 Bulan' ? 'selected' : ''}>3 Bulan</option>
                        <option value="6 Bulan" ${duration === '6 Bulan' ? 'selected' : ''}>6 Bulan</option>
                    </select>
                    <div class="product-price-row">
                        <span class="product-price-label">Total Harga:</span>
                        <span class="product-price gradient-text" id="price-${product.id}">${formatPrice(price)}</span>
                    </div>
                </div>
                <div class="product-footer">
                    <button class="btn btn-primary btn-buy" onclick="handleOrder('${product.id}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                        </svg>
                        Beli Sekarang
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== UPDATE PRICE =====
function updatePrice(productId, duration) {
    productDurations[productId] = duration;
    const product = products.find(p => p.id === productId);
    const price = product.prices[duration];
    document.getElementById(`price-${productId}`).textContent = formatPrice(price);
}

// ===== HANDLE ORDER =====
function handleOrder(productId) {
    const product = products.find(p => p.id === productId);
    const duration = productDurations[productId] || '1 Bulan';
    const price = product.prices[duration];

    const message = `Halo INIFIRLI STORE, saya ingin membeli:\n\nProduk: ${product.name}\nDurasi: ${duration}\nTotal: ${formatPrice(price)}\n\nSaya akan bayar via Dana / QRIS`;

    const whatsappUrl = `https://wa.me/628516930771?text=${encodeURIComponent(message)}`;
    
    showToast('Mengarahkan ke WhatsApp...');
    
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 500);
}

// ===== UPDATE SHOW MORE BUTTON =====
function updateShowMoreButton() {
    const filteredProducts = selectedCategory === 'Semua' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    if (filteredProducts.length <= 6) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'inline-flex';
        if (showAllProducts) {
            showMoreBtn.innerHTML = `
                Tampilkan Lebih Sedikit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="18 15 12 9 6 15"/>
                </svg>
            `;
        } else {
            showMoreBtn.innerHTML = `
                Tampilkan Lebih Banyak (${filteredProducts.length - 6} lagi)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            `;
        }
    }
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(20, 20, 20, 0.7)';
    }
});

// ===== INITIALIZE ON DOM READY =====
document.addEventListener('DOMContentLoaded', init);
