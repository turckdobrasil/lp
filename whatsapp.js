<script>
(function() {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '30px';
  container.style.right = '30px'; // Agora no lado direito
  container.style.zIndex = '2147483647';
  container.style.all = 'initial';
  container.attachShadow({ mode: 'open' });

  container.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
      button {
        all: unset;
        width: 250px;
        padding: 20px;
        background-color: #25D366;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: sans-serif;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: background 0.3s;
      }
      button:hover {
        background-color: #1ebe5b;
      }
      i {
        font-size: 18px;
      }
    </style>
    <button id="whatsBtn">
      <i class="fab fa-whatsapp"></i> WhatsApp
    </button>
  `;

  container.shadowRoot.getElementById('whatsBtn')
    .addEventListener('click', () => {
      window.open('https://wa.me/5511999999999', '_blank');
    });

  document.body.appendChild(container);
})();
</script>
