document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#filtro input');
  const comentarioDiv = document.querySelector('.comentario');
  const items = document.querySelectorAll('#filtro .item');

  // Mostra os 4 primeiros itens por padrão (sem texto na busca)
  const mostrarItensIniciais = () => {
    items.forEach((item, index) => {
      item.style.display = index < 4 ? 'grid' : 'none';
    });
    comentarioDiv.style.display = 'none';
  };

  mostrarItensIniciais(); // Executa ao carregar a página

  if (input) {
    input.addEventListener('keyup', function () {
      const termos = input.value.toLowerCase().split(' ').filter(Boolean);

      if (termos.length > 0 && !(termos.length === 1 && termos[0] === 'sensor')) {
        let itensVisiveis = 0;

        items.forEach(item => {
          const campos = ['.categoria', '.partnumber', '.id', '.tags', '.item-tag', '.descricao'];
          let textoItem = '';

          campos.forEach(classe => {
            item.querySelectorAll(classe).forEach(elemento => {
              textoItem += elemento.textContent.toLowerCase() + ' ';
            });
          });

          const corresponde = termos.every(termo => textoItem.includes(termo));
          item.style.display = corresponde ? 'grid' : 'none';
          if (corresponde) itensVisiveis++;
        });

        comentarioDiv.style.display = itensVisiveis > 0 ? 'none' : '';
      } else {
        // Se o campo estiver vazio, mostra os 5 primeiros itens
        mostrarItensIniciais();
      }
    });
  }
});
