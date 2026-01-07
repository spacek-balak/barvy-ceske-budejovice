document.addEventListener('DOMContentLoaded', function() {
    
    // Animace prvků při zobrazení
    const animatedElements = document.querySelectorAll('.animated-element:not(.slide-in-from-left)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
    
    const heroHeadline = document.querySelector('.hero h1');
    if (heroHeadline) {
        setTimeout(() => {
            heroHeadline.classList.add('visible');
        }, 100);
    }

    // Změna pozadí navigace
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            if (!document.body.classList.contains('subpage')) {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Rok v patičce
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Kalkulačka pro interiérové barvy
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        const areaInput = document.getElementById('paint-area');
        const resultDiv = document.getElementById('paint-result');
        const calculate = () => {
            const area = parseFloat(areaInput.value);
            if (isNaN(area) || area <= 0) {
                resultDiv.innerHTML = "Zadejte platnou plochu.";
            } else {
                const consumption = area / 4;
                resultDiv.innerHTML = `Orientační spotřeba barvy: <span>${consumption.toFixed(2)} kg</span>`;
            }
        };
        calculateBtn.addEventListener('click', calculate);
        areaInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); calculate(); } });
    }

    // Kalkulačka pro fasádní barvy
    const facadeCalculateBtn = document.getElementById('facade-calculate-btn');
    if (facadeCalculateBtn) {
        const facadeAreaInput = document.getElementById('facade-paint-area');
        const facadeResultDiv = document.getElementById('facade-paint-result');
        const calculateFacade = () => {
            const area = parseFloat(facadeAreaInput.value);
            if (isNaN(area) || area <= 0) {
                facadeResultDiv.innerHTML = "Zadejte platnou plochu.";
            } else {
                const consumption = area / 3;
                facadeResultDiv.innerHTML = `Orientační spotřeba barvy: <span>${consumption.toFixed(2)} kg</span>`;
            }
        };
        facadeCalculateBtn.addEventListener('click', calculateFacade);
        facadeAreaInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); calculateFacade(); } });
    }

    // Kalkulačka pro podlahové barvy
    const floorCalculateBtn = document.getElementById('floor-calculate-btn');
    if (floorCalculateBtn) {
        const floorAreaInput = document.getElementById('floor-paint-area');
        const floorResultDiv = document.getElementById('floor-paint-result');
        const calculateFloor = () => {
            const area = parseFloat(floorAreaInput.value);
            if (isNaN(area) || area <= 0) {
                floorResultDiv.innerHTML = "Zadejte platnou plochu.";
            } else {
                const consumption = area / 5; // Příklad: 1 kg na 5 m2
                floorResultDiv.innerHTML = `Orientační spotřeba barvy: <span>${consumption.toFixed(2)} kg</span>`;
            }
        };
        floorCalculateBtn.addEventListener('click', calculateFloor);
        floorAreaInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); calculateFloor(); } });
    }

    // Logika pro interaktivní seznam produktů
    const productToggleButtons = document.querySelectorAll('.product-toggle-btn');
    productToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});