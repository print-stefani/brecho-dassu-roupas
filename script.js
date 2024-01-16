// script.js

// Função para realizar a filtragem dos cards
function searchButton() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const cardWrapper = document.getElementById('cardWrapper');
    const cardItems = cardWrapper.getElementsByClassName('card-item');
    const MenssageError = document.getElementById('MenssageError');
  
    let found = false;

    for (const cardItem of cardItems) {
      const cardContent = cardItem.querySelector('.card-content');
      const cardText = cardContent.textContent || cardContent.innerText;
  
      // Verifica se o texto do card contém a palavra-chave
      if (cardText.toLowerCase().includes(searchTerm)) {
        cardItem.style.display = 'block';
        found = true;
      } else {
        cardItem.style.display = 'none';
      }
    }
    MenssageError.style.display = found ? 'none' : 'block';

  }
  
  // Adiciona um ouvinte de evento ao botão para chamar a função de pesquisa
  document.getElementById('searchButton').addEventListener('click', searchButton);
  