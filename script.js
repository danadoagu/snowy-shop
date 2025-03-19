// فایل script.js
let cart = [];
let cartCount = 0;

function updateDiscordPrice() {
    const yearSelect = document.getElementById('year-select');
    const priceElement = document.getElementById('discord-price');
    const selectedYear = parseInt(yearSelect.value);

    // قیمت‌ها بر اساس سال
    const prices = {
        2022: 25000,
        2021: 50000,
        2020: 100000,
        2019: 125000,
        2018: 150000
    };

    // آپدیت قیمت
    priceElement.textContent = prices[selectedYear].toLocaleString();
}

function addToCart(productName, includeYear = false) {
    let productWithDetails = productName;

    // اگر includeYear true بود، سال رو به محصول اضافه کن
    if (includeYear) {
        const yearSelect = document.getElementById('year-select');
        const selectedYear = yearSelect.value;
        productWithDetails = `${productName} (${selectedYear})`;
    }

    // اضافه کردن محصول به سبد خرید
    cart.push(productWithDetails);
    cartCount++;
    updateCartUI();
}

function updateCartUI() {
    // آپدیت تعداد آیتم‌های سبد خرید
    document.querySelector('.cart-count').textContent = cartCount;

    // آپدیت لیست آیتم‌های سبد خرید
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

// باز کردن سبد خرید
document.querySelector('.cart-icon').addEventListener('click', () => {
    document.querySelector('.cart-modal').style.display = 'flex';
});

// بستن سبد خرید
document.querySelector('.close-cart').addEventListener('click', () => {
    document.querySelector('.cart-modal').style.display = 'none';
});

// تسویه حساب
function checkout() {
    if (cart.length === 0) {
        alert('سبد خرید شما خالی است!');
        return;
    }
    alert(`خرید شما با موفقیت تسویه شد! محصولات: ${cart.join(', ')}`);
    cart = [];
    cartCount = 0;
    updateCartUI();
    document.querySelector('.cart-modal').style.display = 'none';
}