const quoteContainer = document.getElementById("quote-container");
    const quoteHeading = document.getElementById("quote-heading");
    const quoteText = document.getElementById("quote-text");

    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      quoteText.textContent = randomQuote;
    }

    getRandomQuote();