// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu for mobile view
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    // Retrieve the user's name from local storage
    const userName = localStorage.getItem('userName');
    if (userName) {
        console.log(`Welcome back, ${userName}!`);
        document.querySelector('.welcome-message').textContent = `Welcome back, ${userName}!`;
    } else {
        console.log('User name not found in local storage.');
    }
});

// Change navigation style on scroll
document.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const navToggle = document.querySelector('.nav-toggle');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        navToggle.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        navToggle.classList.remove('scrolled');
    }
});