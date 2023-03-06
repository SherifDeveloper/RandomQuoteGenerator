const btnEL = document.getElementById("btn");
const qutoeEl = document.getElementById("quote");
const authorEL = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEL.innerText = "Loading...";
    btnEL.disabled = true;
    qutoeEl.innerText = "Updating...";
    authorEL.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    qutoeEl.innerText = quoteContent;
    authorEL.innerText = "~ " + quoteAuthor;
    btnEL.innerText = "Get a quote";
    btnEL.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    qutoeEl.innerText = "An error happend, try again later";
    authorEL.innerText = "An error happend";
    btnEL.innerText = "Get a quote";
    btnEL.disabled = false;
  }
}

getQuote();

btnEL.addEventListener("click", getQuote);
