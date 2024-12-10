// Slider con Flechas
function sliderWithArrows(sliderSelector) {
    const slider = document.querySelector(`${sliderSelector} .slides`);
    const prevBtn = document.querySelector(`${sliderSelector} .prev-btn`);
    const nextBtn = document.querySelector(`${sliderSelector} .next-btn`);
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    const showSlide = (index) => {
        slider.style.transform = `translateX(-${index * 100}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
}

// Slider con Puntos
function sliderWithDots(sliderSelector) {
    const slider = document.querySelector(`${sliderSelector} .slides`);
    const dotsContainer = document.querySelector(`${sliderSelector} .dots-container`);
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };
}

// Slider Automático
function autoSlider(sliderSelector) {
    const slider = document.querySelector(`${sliderSelector} .slides`);
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    const showSlide = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        currentIndex = (currentIndex + 1) % slides.length;
    };

    setInterval(showSlide, 3000);
}

// Inicializar los Sliders
sliderWithArrows('.slider-arrows');
sliderWithDots('.slider-dots');
autoSlider('.slider-auto');
