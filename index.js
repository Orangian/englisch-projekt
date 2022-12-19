let consoleDiv = document.getElementById('console');
let body = document.body;
let nav = document.querySelector('nav');
let divElements = document.querySelectorAll('body>div');
let heIsWatching = document.getElementById('heIsWatching');
let lines = document.querySelectorAll('#heIsWatching *');

let textDivs = [].slice.call(divElements);
textDivs = textDivs.reduce((acc, ele, ind) => {
    if (ind%2 === 1) acc.push(ele);
    return acc;
}, []);
console.log(textDivs);
let width =  window.innerWidth+(window.innerWidth*(divElements.length-1))*0.6;


body.style.width = width;
//scrollbardiv.style.width = window.innerWidth*divElements.length



heIsWatching.style.width = window.innerWidth;
heIsWatching.style.marginLeft = 0;

divElements.forEach(ele => {
  ele.style.width=window.innerWidth*0.6;
});

divElements[0].style.width = window.innerWidth;
const position = document.documentElement;
position.style.setProperty('--x', `${body.scrollLeft*0.1}px`);
nav.style.setProperty('--pagewidth', window.innerWidth);
nav.style.setProperty('--horizwidth', width);


window.addEventListener('wheel', event => {
  event.preventDefault();
  body.scrollLeft += event.deltaY;
});

lines.forEach(h2 => {
    for (let i = 0; i<20; i++) {
        let random = Math.floor(Math.random()*21);
        let tempEle = document.createElement('span');
        if (random === 0) {
            tempEle.textContent = "Down With Big Brother ";
            tempEle.style.color = "#ddd";
            tempEle.style.textShadow = "-1px 1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, -1px -1px 0 #000";
        }
        else if (random <= 4) tempEle.textContent = "Ignorance Is Strength ";
        else if (random <= 8) tempEle.textContent = "War Is Peace ";
        else if (random <= 12) tempEle.textContent = "Freedom Is Slavery ";
        else tempEle.textContent = "Big Brother Is Watching ";
        h2.appendChild(tempEle);
    }
});


window.addEventListener('scroll', event => {
   position.style.setProperty('--x', `${body.scrollLeft*0.1}px`);
   //consoleDiv.textContent = 1/(body.scrollLeft/width);
  
});

addEventListener('resize', resize => {
    let width =  window.innerWidth+(window.innerWidth*(divElements.length-1))*0.6;
    body.style.width = width;
    heIsWatching.style.width = window.innerWidth;
    heIsWatching.style.marginLeft = 0;
    divElements.forEach(ele => {
        ele.style.width = window.innerWidth*0.6;
    });
    divElements[0].style.width = window.innerWidth;
    

});





