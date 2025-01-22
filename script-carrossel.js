let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.seta-esquerda');
const nextButton = document.querySelector('.seta-direita');

// Função para atualizar a exibição do slide
function changeSlide() {
  // Adiciona a classe 'show' ao slide atual
  slides.forEach((slide, index) => {
    slide.classList.remove('show');
    if (index === currentIndex) {
      slide.classList.add('show');
    }
  });
}

// Função para mover para o slide anterior
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  changeSlide();
});

// Função para mover para o slide seguinte
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  changeSlide();
});

// Inicia o carrossel exibindo o primeiro slide
changeSlide();
