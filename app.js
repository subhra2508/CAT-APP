'use strict';
const catImg = document.querySelector('.cat-img');
const catQuote = document.querySelector('.cat-quote');
const catContainer = document.querySelector('.section-1');
const newCat = document.querySelector('.new-cat');



const catapp = async function(){
    const catView = await fetch('https://api.thecatapi.com/v1/images/search');
    const [catInfo] = await catView.json();
    catImg.src = catInfo.url;  
}

const catGif = async function(){
    const gifView = await fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat');
    const gifInfo = await gifView.json();
    console.log(gifInfo);
}
 


//https://api.thecatapi.com/images/search?mime_types=gif

newCat.addEventListener('click',function(){
    catapp();
})