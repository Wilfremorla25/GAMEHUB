const filterButtons = document.querySelectorAll('.filter-btn');
const gameCards = document.querySelectorAll('.card');
const searchInput = document.getElementById('searchInput');
let activeGenre = 'all'; // Guardar el filtro activo

// Filtrar por género
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    activeGenre = btn.getAttribute('data-genre');

    // Indicador de botón activo
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    filterCards();
  });
});

// Filtrar por búsqueda
searchInput.addEventListener('input', () => {
  filterCards();
});

// Función combinada de filtrado
function filterCards() {
  const query = searchInput.value.toLowerCase();

  gameCards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const genres = card.getAttribute('data-genres').split(',');

    const matchesGenre = activeGenre === 'all' || genres.includes(activeGenre);
    const matchesSearch = name.includes(query);

    card.style.display = matchesGenre && matchesSearch ? 'block' : 'none';
  });
}
