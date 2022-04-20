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
    if(winner === "It is super effective congratulations you won at pokemen"){
        const playerScore = document.querySelector('#p-score')
        playerScore.innerHTML++
    }else if(winner === "It was not very effective sorry you have been defeated at pokeman"){
        const computerScore = document.querySelector('#c-score')
        computerScore.innerHTML++
    }
}

const showWinner = function(player, computer, winner){
    const resultDiv = document.querySelector('#winner')
    resultDiv.innerHTML = ''

    const choiceElement = document.createElement('p')
    choiceElement.textContent = "Player used "+player+" attack! Computer used "+computer+" attack!"
    resultDiv.appendChild(choiceElement)

    const winnerElement = document.createElement('h2')
    winnerElement.textContent = winner
    if(winner === "It is super effective congratulations you won at pokemen"){
        winnerElement.classList.add('win')
    }else if(winner === "It was not very effective sorry you have been defeated at pokeman"){
        winnerElement.classList.add('lose')
    }
    resultDiv.appendChild(winnerElement)
}

const play = function(player, computer){
    if(player === "fire" && computer === "ground"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "fire" && computer === "rock"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "fire" && computer === "grass"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "fire" && computer === "ice"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "grass" && computer === "fire"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "grass" && computer === "ice"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "grass" && computer === "ground"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "grass" && computer === "rock"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "rock" && computer === "ground"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "rock" && computer === "grass"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "rock" && computer === "ice"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "rock" && computer === "fire"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "ice" && computer === "fire"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "ice" && computer === "rock"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "ice" && computer === "grass"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "ice" && computer === "ground"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "ice" && computer === "ground"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "ground" && computer === "fire"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "ground" && computer === "rock"){
        return "It is super effective congratulations you won at pokemen"
    }
    if(player === "ground" && computer === "grass"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === "ground" && computer === "ice"){
        return "It was not very effective sorry you have been defeated at pokeman"
    }
    if(player === computer){
        return "oh my goodness a draw?? better click something again!!!!!"
    }
}

const getRandomChoice = function(){
    const choices = ["fire", "grass", "rock", "ice", "ground"]
    const choice = choices[Math.floor(Math.random()*choices.length)]
    return choice
}