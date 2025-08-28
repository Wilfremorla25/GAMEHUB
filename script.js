document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gameCards = document.querySelectorAll('.card');
  const searchInput = document.getElementById('searchInput');

  let activeGenre = 'all';

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeGenre = btn.getAttribute('data-genre');
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards();
    });
  });

  searchInput.addEventListener('input', filterCards);

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

  // Mostrar / ocultar descripción 
  gameCards.forEach(card => {
    const description = card.querySelector('.description');
    card.addEventListener('click', (e) => {
      // clicks en los hijos afecten
      if (e.target.classList.contains('filter-btn') || e.target.tagName === 'INPUT') return;
      description.style.display = description.style.display === 'block' ? 'none' : 'block';
    });
  });
});
