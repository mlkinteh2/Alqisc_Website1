// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Active Navigation Highlighting
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Gallery Image Enlargement
    const galleryImages = document.querySelectorAll('.gallery img, .gallery-section .gallery-item img');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.classList.add('image-overlay');
            overlay.innerHTML = `<img src="${image.src}" alt="${image.alt}"><button class="close-btn">✖</button>`;
            document.body.appendChild(overlay);

            const closeBtn = overlay.querySelector('.close-btn');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    });

    // Mobile Navigation (Optional)
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.textContent = '☰';
    const header = document.querySelector('header');
    header.prepend(navToggle);

    navToggle.addEventListener('click', () => {
        const navMenu = document.querySelector('nav ul');
        navMenu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    let index = 0;

    const moveCarousel = (direction) => {
        const images = document.querySelectorAll('.carousel img');
        const imageWidth = images[0].clientWidth + 15; // Include gap
        const maxIndex = images.length - 1;

        if (direction === 'next') {
            index = (index === maxIndex) ? 0 : index + 1;
        } else {
            index = (index === 0) ? maxIndex : index - 1;
        }

        carousel.style.transform = `translateX(-${index * imageWidth}px)`;
    };

    nextBtn.addEventListener('click', () => moveCarousel('next'));
    prevBtn.addEventListener('click', () => moveCarousel('prev'));

    // Optional: Auto-scroll every 5 seconds
    setInterval(() => moveCarousel('next'), 5000);
});
