"use strict";

function getQuote() {
  const res = fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    }).catch(function(error)  {
      console.error('Error in fetching quotes', error);
    });

  return res;
}

async function handleGetQuoteClick() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  const data = await getQuote();
  if(!data){
    return;
  }

  const idx = getRandomNumberBetweenRange(0, data.length);
  quote.innerHTML = data[idx].text;
  author.innerHTML = data[idx].author;
  const r = getRandomNumberBetweenRange(0,255);
  const g = getRandomNumberBetweenRange(0,255 );
  document.body.style.backgroundColor = `rgba(${r},${g},${idx},0.3)`
}

function getRandomNumberBetweenRange(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
