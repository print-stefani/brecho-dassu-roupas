// script.js

const carrinho = {
  items: [],
  total: 0,
};

function adicionarAoCarrinho(nomeItem, precoItem) {
  const item = {
    nome: nomeItem,
    preco: precoItem,
  };

  carrinho.items.push(item);
  carrinho.total += precoItem;
  atualizarTextoCarrinho();

  console.log(`Item "${nomeItem}" adicionado ao carrinho. Total: R$ ${carrinho.total.toFixed(2)}`);
}

function atualizarTextoCarrinho() {
  const carrinhoTotalSpan = document.getElementById('carrinhoTotal');
  carrinhoTotalSpan.textContent = `R$ ${carrinho.total.toFixed(2)}`;
}

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

    if (cardText.toLowerCase().includes(searchTerm)) {
      cardItem.style.display = 'block';
      found = true;
    } else {
      cardItem.style.display = 'none';
    }
  }
  MenssageError.style.display = found ? 'none' : 'block';
}

const queroEsseButtons = document.querySelectorAll('.card-item button[type="button"]');
queroEsseButtons.forEach(button => {
  button.addEventListener('click', function() {
    const cardItem = this.closest('.card-item');
    const nomeItem = cardItem.querySelector('h3').textContent.trim();
    const precoItem = parseFloat(cardItem.querySelector('.card-content button').dataset.price);

    adicionarAoCarrinho(nomeItem, precoItem);
  });
});

function exibirCarrinho() {
  // Aqui você pode adicionar lógica para exibir o carrinho, se necessário
  console.log(carrinho);
}

document.addEventListener('DOMContentLoaded', function() {
  // Adiciona um ouvinte de evento ao botão de pesquisa
  document.getElementById('searchButton').addEventListener('click', searchButton);
});
