const libraryGrid = document.getElementById("libraryGrid");

      function createBookElement(book) {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        const coverImg = document.createElement("img");
        coverImg.src = book.cover;
        coverImg.alt = book.title;

        const titleElement = document.createElement("div");
        titleElement.classList.add("book-title");
        titleElement.textContent = book.title;

        bookElement.appendChild(coverImg);
        bookElement.appendChild(titleElement);

        bookElement.addEventListener("click", () => {
          window.open(book.pdf, "_blank");
        });

        return bookElement;
      }

      function displayLibrary() {
        libraryGrid.innerHTML = "";

        books.forEach((book) => {
          const bookElement = createBookElement(book);
          libraryGrid.appendChild(bookElement);
        });
      }

      // Initial display
      displayLibrary();