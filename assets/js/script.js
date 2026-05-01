'use strict';

/**
 * ১. এলিমেন্ট সিলেক্টরগুলো এক জায়গায় রাখা (Clean Code)
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
const navbarLinks = document.querySelectorAll(".navbar-link");
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

/**
 * ২. নেভিগেশন মেনু কন্ট্রোল
 */
// মেনু ওপেন/ক্লোজ করা
navToggleBtn?.addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");
});

// মেনু লিংক ক্লিক করলে অটো ক্লোজ হওয়া (মোবাইল ইউজারদের জন্য ভালো UX)
navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        header.classList.remove("active");
        navToggleBtn.classList.remove("active");
    });
});

/**
 * ৩. স্ক্রল ইফেক্ট (Header Sticky & Go Top Button)
 */
window.addEventListener("scroll", function () {
    // ৮০ পিক্সেলের বেশি স্ক্রল করলে হেডার স্টিকি হবে
    if (window.scrollY >= 80) {
        header.classList.add("active-scroll");
    } else {
        header.classList.remove("active-scroll");
    }

    // ৫০০ পিক্সেলের বেশি স্ক্রল করলে 'Go to Top' বাটন দেখাবে
    if (window.scrollY >= 500) {
        goTopBtn?.classList.add("active");
    } else {
        goTopBtn?.classList.remove("active");
    }
});

/**
 * ৪. থিম টগল লজিক (Dark Mode)
 */
// পেজ লোড হওয়ার সময় লোকাল স্টোরেজ চেক করা
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon?.setAttribute('name', 'sunny-outline');
}

// ক্লিক করলে থিম পরিবর্তন করা[cite: 3]
themeToggleBtn?.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    const isDark = body.classList.contains('dark-theme');

    // আইকন আপডেট (সূর্য বা চাঁদ) এবং লোকাল স্টোরেজে ডাটা সেভ[cite: 3]
    themeIcon?.setAttribute('name', isDark ? 'sunny-outline' : 'moon-outline');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});