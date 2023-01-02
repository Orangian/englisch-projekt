let consoleDiv = document.getElementById('console');
let body = document.body;
let nav = document.querySelector('nav');
let divElements = document.querySelectorAll('body>div');
let heIsWatching = document.getElementById('heIsWatching');
let lines = document.querySelectorAll('#heIsWatching *');
let anchors = document.querySelectorAll('submenu a')
let icon = document.querySelector('menu>a')

let textDivs = [].slice.call(divElements);
textDivs = textDivs.reduce((acc, ele, ind) => {
    if (ind%2 === 1) acc.push(ele);
    return acc;
}, []);
console.log(textDivs);
let width =  window.innerWidth+(window.innerWidth*(divElements.length-1))*0.6;
let anchorArr = []
divElements.forEach((cur, ind) => {
    if (ind%2===0) {
        anchorArr.push(window.innerWidth+(window.innerWidth*ind*0.6)-window.innerWidth*0.2)
    }
})


body.style.width = width;




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
  //event.preventDefault(); This causes infinite errors as one scrolls in Chrome, severely degrading performance. Firefox simply ignores this, as it sees that it is invalid.
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
        else if (random <= 3) tempEle.textContent = "Ignorance Is Strength ";
        else if (random <= 6) tempEle.textContent = "War Is Peace ";
        else if (random <= 9) tempEle.textContent = "Freedom Is Slavery ";
        else if (random <= 12) {
            tempEle.textContent = "Remember Remember The Fifth of November "
            tempEle.style.color = "#64001D"
        }
        else tempEle.textContent = "Big Brother Is Watching ";
        h2.appendChild(tempEle);
    }
});

anchors.forEach((ele, ind) => {
    ele.addEventListener('mousedown', event => {
        body.scrollLeft = anchorArr[ind]
      

    })
    consoleDiv.textContent = anchors.length
})

icon.addEventListener('mousedown', event => {
        body.scrollLeft = 0
    })

window.addEventListener('scroll', event => {
   position.style.setProperty('--x', `${body.scrollLeft*0.1}px`);
   //consoleDiv.textContent = 1/(body.scrollLeft/width); //this line is a calculation for the ratio in the css at which to display shadow so don't delete it
  
});

addEventListener('resize', resize => {
    let width =  window.innerWidth+(window.innerWidth*(divElements.length-1))*0.6;
    body.style.width = width;
    heIsWatching.style.width = window.innerWidth;
    heIsWatching.style.marginLeft = 0;
    anchorArr = []
    divElements.forEach((ele, ind) => {
        ele.style.width = window.innerWidth*0.6;
        if (ind%2===0) {
            anchorArr.push(window.innerWidth+(window.innerWidth*ind*0.6)-window.innerWidth*0.2)
        }
    });
    divElements[0].style.width = window.innerWidth;
    

});
let href =window.location.href.replace(/.*\?/, '')
params = new URLSearchParams(href)
try {
    body.scrollLeft = anchorArr[parseInt(params.get('anchorNum'))] //anchornum is basically the content page number u want to reference in the content htmls refer to stuff like index.html?anchorNum=1 and it will link to the first anchor
} catch {
//    console.log('not a valid input')
}



