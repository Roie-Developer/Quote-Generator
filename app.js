const quoteContainer = document.getElementById("quote-container");
const newQuoteBtn = document.getElementById("new-quote");
const quoteText = document.getElementById("quote");
const authorQuote = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const loader = document.getElementById("loader");

let apiQuotes = [];
const url = "http://api.forismatic.com/api/1.0/";

//Get quote from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        await newQuoteBtn.dispatchEvent(new Event("click"));
        await loading();
    } catch (error) {
        alert("error", error);
    }
}

//On loading
newQuoteBtn.addEventListener("click", (e) => {
    const rowRandom = Math.floor(Math.random() * 1642);
    if (apiQuotes[rowRandom].text.length > 150)
        quoteText.classList.add("long-quote");
    else {
        quoteText.classList.remove("long-quote");
    }
    if (!apiQuotes[rowRandom].author) authorQuote.textContent = "unknown";
    else authorQuote.textContent = `by ${apiQuotes[rowRandom].author}`;
    quoteText.textContent = apiQuotes[rowRandom].text;
});

//Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorQuote.textContent}`;
    window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener("click", (e) => {
    tweetQuote();
});

// Loading spinner
async function loading() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

getQuotes();