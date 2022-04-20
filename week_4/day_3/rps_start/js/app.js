document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const buttons = document.querySelectorAll('.choice')
    for(let button of buttons){
        button.addEventListener('click', handleChoice)
    }
})



const handleChoice = function(event){
    const playerChoice = event.target.value
    const computerChoice = getRandomChoice()
    const winner = play(playerChoice, computerChoice)
    showWinner(playerChoice, computerChoice, winner)
    addScore(winner)
}

const addScore = function(winner){
    if(winner === "U Won :D"){
        const playerScore = document.querySelector('#p-score')
        playerScore.innerHTML++
    }else if(winner === "U Got Pwned ;__;"){
        const computerScore = document.querySelector('#c-score')
        computerScore.innerHTML++
    }
}

const showWinner = function(player, computer, winner){
    const resultDiv = document.querySelector('#winner')
    resultDiv.innerHTML = ''

    const choiceElement = document.createElement('p')
    choiceElement.textContent = "You chose "+player+". Computer chose "+computer+"."
    resultDiv.appendChild(choiceElement) 

    const winnerElement = document.createElement('h2')
    winnerElement.textContent = winner
    if(winner === "U Won :D"){
        winnerElement.classList.add('win')
    }else if(winner === "U Got Pwned ;__;"){
        winnerElement.classList.add('lose')
    }
    resultDiv.appendChild(winnerElement)
}

const play = function(player, computer){
    if(player === "rock" && computer === "paper"){
        return "U Got Pwned ;__;"
    }
    if(player === "rock" && computer === "scissors"){
        return "U Won :D"
    }
    if(player === "paper" && computer === "scissors"){
        return "U Got Pwned ;__;"
    }
    if(player === "paper" && computer === "rock"){
        return "U Won :D"
    }
    if(player === "scissors" && computer === "rock"){
        return "U Got Pwned ;__;"
    }
    if(player === "scissors" && computer === "paper"){
        return "U Won :D"
    }
    if(player === computer){
        return "OMG a stalemate..."
    }
}

// math floor rounds things to whole numbers
const getRandomChoice = function(){
    const choices = ["rock", "paper", "scissors"]
    const choice = choices[Math.floor(Math.random()*choices.length)]
    return choice
}


