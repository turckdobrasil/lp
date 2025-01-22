document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('#filtro input');
  var comentarioDiv = document.querySelector('.comentario');  // Referência à div de comentário
  const items = document.querySelectorAll('#filtro .item');  // Apenas itens dentro de #filtro

  // Garante que todos os itens estão inicialmente ocultos
  items.forEach(item => {
    item.style.display = 'none'; // Oculta todos os itens
  });

  if (input) {
    input.addEventListener('keyup', function () {
      const termo = input.value.toLowerCase();

      // Aplica o filtro apenas se houver pelo menos 2 caracteres e o termo for diferente de "sensor"
      if (termo.length >= 2 && termo !== 'sensor') {
        let encontrou = false;
        let itensVisiveis = 0; // Contador de itens visíveis

        items.forEach(item => {
          const campos = ['.categoria', '.partnumber', '.id', '.tags', '.item-tag', '.descricao'];
          let textoItem = '';

          campos.forEach(classe => {
            const elementos = item.querySelectorAll(classe);
            elementos.forEach(elemento => {
              textoItem += elemento.textContent.toLowerCase() + ' ';
            });
          });

          if (textoItem.includes(termo)) {
            item.style.display = 'grid'; // Exibe o item
            encontrou = true;
            itensVisiveis++; // Incrementa o contador de itens visíveis
          } else {
            item.style.display = 'none'; // Oculta o item
          }
        });

        // Se houver pelo menos um item visível, esconde a div .comentario
        if (itensVisiveis > 0) {
          comentarioDiv.style.display = 'none'; // Esconde a div .comentario
        } else {
          comentarioDiv.style.display = ''; // Exibe a div .comentario
        }
      } else {
        items.forEach(item => {
          item.style.display = 'none'; // Oculta todos os itens
        });

        // Exibe a div .comentario se o termo for inválido
        comentarioDiv.style.display = ''; // Exibe a div .comentario
      }
    });
  }
});
