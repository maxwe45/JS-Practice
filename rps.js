

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