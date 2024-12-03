// DOM Elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const shareButton = document.getElementById("share-quote");

// Pre-generated quotes
const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
];

// Function to generate and display a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = `— ${randomQuote.author}`;
}

// Function to share the quote on WhatsApp
function shareOnWhatsApp() {
  const quote = `"${quoteElement.textContent}" ${authorElement.textContent}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quote)}`;
  window.open(whatsappUrl, "_blank");
}

// Event Listeners
newQuoteButton.addEventListener("click", generateQuote);
shareButton.addEventListener("click", shareOnWhatsApp);

// Generate the first quote on page load
generateQuote();
