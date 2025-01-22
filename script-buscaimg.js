document.addEventListener('DOMContentLoaded', function () {
    // Função para pegar a imagem da página do produto
    async function getImageFromProductPage(url, itemDiv) {
        try {
            // Requisição para pegar o conteúdo da página
            const response = await fetch(url);
            const html = await response.text();

            // Criar um elemento temporário para fazer o parsing do HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Buscar a imagem (ajustar conforme a estrutura HTML da página do produto)
            const img = tempDiv.querySelector('img'); // Supondo que a imagem esteja na primeira tag <img>

            if (img) {
                const imgUrl = img.src;

                // Criar a tag de imagem e inserir no item
                const newImg = document.createElement('img');
                newImg.src = imgUrl;
                newImg.alt = 'Imagem do produto';
                newImg.style.maxWidth = '100%'; // Ajuste de largura para caber no espaço do item
                newImg.style.height = 'auto';

                // Adicionar a imagem ao item
                itemDiv.appendChild(newImg);
            }
        } catch (error) {
            console.error('Erro ao carregar a imagem:', error);
        }
    }

    // Selecionar todos os itens da página
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        // Buscar o link para a página do produto
        const productPageLink = item.querySelector('.paginaproduto a');
        if (productPageLink) {
            const productPageUrl = productPageLink.href;
            // Chamar a função para obter e adicionar a imagem
            getImageFromProductPage(productPageUrl, item);
        }
    });
});
