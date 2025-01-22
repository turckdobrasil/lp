// Seleciona todos os elementos .card que contêm <model-viewer>
const cards = document.querySelectorAll('.card');

// Função para rodar o modelo de 45° a 360° em 5 segundos e depois voltar à posição inicial
function startRotation(modelViewer) {
  let startRotation = 45; // Posição inicial positiva
  const rotationStep = 360 / (5000 / 40); // Incremento para 360° em 5 segundos
  let interval = null; // Variável para armazenar o intervalo ativo

  // Função para iniciar a rotação
  const rotate = () => {
    if (interval) return; // Evita múltiplos intervalos
    interval = setInterval(() => {
      startRotation += rotationStep;
      modelViewer.cameraOrbit = `${startRotation % 360}deg 75deg auto`; // Garante que não ultrapasse 360°

      // Quando atingir 360° ou mais, para a rotação e volta à posição inicial
      if (startRotation >= 360) {
        clearInterval(interval); // Para a rotação
        interval = null; // Reseta o intervalo
        modelViewer.cameraOrbit = `45deg 75deg auto`; // Retorna à posição inicial
      }
    }, 40);
  };

  // Inicia a rotação quando o mouse entra na .card
  modelViewer.parentElement.addEventListener('mouseenter', () => {
    if (!interval) {
      startRotation = 45; // Reseta a rotação para 45° ao passar o mouse
      rotate();
    }
  });

  // Retorna à posição inicial quando o mouse sai da .card
  modelViewer.parentElement.addEventListener('mouseleave', () => {
    if (interval) {
      clearInterval(interval); // Para qualquer rotação em andamento
      interval = null; // Reseta o intervalo
      modelViewer.cameraOrbit = '45deg 75deg auto'; // Retorna à posição inicial
    }
  });
}

// Observa o evento de mouse sobre cada .card
function observeCards() {
  cards.forEach((card) => {
    const modelViewer = card.querySelector('model-viewer');
    if (modelViewer) {
      // Desativa os controles manuais de rotação do model-viewer
      modelViewer.removeAttribute('camera-controls');

      // Inicializa o modelo na posição inicial
      modelViewer.cameraOrbit = '45deg 75deg auto'; 

      // Configura o comportamento de rotação para o model-viewer
      startRotation(modelViewer);
    }
  });
}

// Inicializa a observação
observeCards();
