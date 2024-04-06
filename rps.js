

function getComputerChoice() {
    const choice = Math.floor(Math.random() * (2 + 1));
    let choices = ['rock', 'paper', 'scissor'];
    return choices[choice]
}

function moves(hum) {
    comp=getComputerChoice();
    console.log(`Computer: ${comp} Human: ${hum}`)
    if(comp=='rock' && hum=='paper'){return(true)}
    else if(comp=='rock' && hum=='scissor'){return(false)}
    else if(comp=='rock' && hum=='rock'){console.log('Tie')}
    else if(comp=='paper' && hum=='rock'){return(false)}
    else if(comp=='paper' && hum=='scissor'){return(true)}
    else if(comp=='paper' && hum=='paper'){console.log('Tie')}
    else if(comp=='scissor' && hum=='paper'){return(false)}
    else if(comp=='scissor' && hum=='rock'){return(true)}
    else if(comp=='scissor' && hum=='scissor'){console.log('Tie')}
}

function playRound(playerChoice) {
    if (moves(playerChoice)==true){console.log('you win')}
    else if(moves(playerChoice)==false){console.log('you lose:(')}
 }

const container = document.querySelector("#container");

const p1 = document.createElement("p");
p1.classList.add("p1");
p1.style.cssText = "color: red";
p1.textContent = "Hey I'm red!";
container.appendChild(p1);


const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.style.cssText = "color: blue";
h3.textContent = "Hey I'm blue!"
container.appendChild(h3);

const content = document.createElement("div");
content.classList.add("content");
content.setAttribute("style", "display:flex; flexDirection: column; border: solid 5px; borderColor: black; backgroundColor: pink; margin: 50px;");

const h1 = document.createElement("h1");    
h1.classList.add("h1");
h1.textContent = "I am in a div!";
const p = document.createElement("p");
p.classList.add("p");
p.textContent = "ME TOO!";
content.appendChild(h1);
content.appendChild(p);
container.appendChild(content);
