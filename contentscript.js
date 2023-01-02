let lines = document.querySelectorAll("backgroundtext *")
console.log(lines)
let linesArr = [];

lines.forEach((h2, ind) => {
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
    linesArr.push(-getComputedStyle(h2).getPropertyValue("--i")*100)
    h2.style.marginLeft = `${linesArr[ind]}vw`
})



window.addEventListener('mousemove', event => {
    lines.forEach((h2, ind) => {
        linesArr[ind] += event.movementX/100*getComputedStyle(h2).getPropertyValue("--i")
        h2.style.marginLeft = `${linesArr[ind]}vw`
    })
    
})