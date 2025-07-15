  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('model-viewer').forEach(viewer => {
      const originalURL = viewer.getAttribute('src');
      fetch(originalURL)
        .then(r => r.blob())
        .then(blob => viewer.setAttribute('src', URL.createObjectURL(blob)));
    });
  });
