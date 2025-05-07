document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#filtro input');
  const comentarioDiv = document.querySelector('.comentario');
  const items = document.querySelectorAll('#filtro .item');

  items.forEach(item => {
    item.style.display = 'none';
  });

  if (input) {
    input.addEventListener('keyup', function () {
      const termos = input.value.toLowerCase().split(' ').filter(Boolean); // Divide e remove termos vazios

      if (termos.length >= 1 && !(termos.length === 1 && termos[0] === 'sensor')) {
        let itensVisiveis = 0;

        items.forEach(item => {
          const campos = ['.categoria', '.partnumber', '.id', '.tags', '.item-tag', '.descricao'];
          let textoItem = '';

          campos.forEach(classe => {
            item.querySelectorAll(classe).forEach(elemento => {
              textoItem += elemento.textContent.toLowerCase() + ' ';
            });
          });

          // Verifica se todos os termos estão presentes no texto do item
          const corresponde = termos.every(termo => textoItem.includes(termo));

          item.style.display = corresponde ? 'grid' : 'none';
          if (corresponde) itensVisiveis++;
        });

        comentarioDiv.style.display = itensVisiveis > 0 ? 'none' : '';
      } else {
        items.forEach(item => item.style.display = 'none');
        comentarioDiv.style.display = '';
      }
    });
  }
});
