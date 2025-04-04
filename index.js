function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // Ensure you return this
    .then(response => response.json())
    .then(data => {
      renderBooks(data); // Pass JSON data to renderBooks()
    })
    .catch(error => console.error("Error fetching books:", error));
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
