// pagination.js
// Handles pagination for the image grid

document.addEventListener('DOMContentLoaded', function () {
  const totalPages = 15;
  let currentPage = 1;

  const imageGrid = document.querySelector('.image-grid');
  const cards = Array.from(document.querySelectorAll('.image-grid .card'));
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'pagination';
  imageGrid.parentNode.appendChild(paginationContainer);

  // Page index element
  const pageIndex = document.getElementById('page-index');

  function renderPagination() {
    paginationContainer.innerHTML = '';
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
      }
    };
    paginationContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      if (i === currentPage) pageBtn.classList.add('active');
      pageBtn.onclick = () => {
        currentPage = i;
        renderPage();
      };
      paginationContainer.appendChild(pageBtn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
      }
    };
    paginationContainer.appendChild(nextBtn);
  }

  function renderPage() {
    // For demo: show only 6 cards per page, repeat if not enough
    const cardsPerPage = 6;
    cards.forEach(card => card.style.display = 'none');
    for (let i = 0; i < cardsPerPage; i++) {
      const idx = ((currentPage - 1) * cardsPerPage + i) % cards.length;
      if (cards[idx]) cards[idx].style.display = '';
    }
    if (pageIndex) {
      pageIndex.textContent = `Page ${currentPage} of ${totalPages}`;
    }
    renderPagination();
  }

  renderPage();
});
