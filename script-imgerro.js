<script>
  document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll("#filtro .item img");
    const imagemSubstituta = "https://raw.githubusercontent.com/turckdobrasil/lp/refs/heads/main/produtos/semimagem.svg";

    imagens.forEach(function (img) {
      // Se a imagem já tiver erro de carregamento (ex: em cache quebrado)
      if (!img.complete || img.naturalWidth === 0) {
        img.src = imagemSubstituta;
      }

      // Listener para futuros erros
      img.onerror = function () {
        this.onerror = null; // evita loop se a imagem substituta também falhar
        this.src = imagemSubstituta;
      };
    });
  });
</script>
