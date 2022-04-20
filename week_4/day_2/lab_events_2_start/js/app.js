document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const newItemForm = document.querySelector('#new-item-form')
    newItemForm.addEventListener('submit', handleFormSubmit)
    const Button = document.querySelector('#button')
Button.addEventListener('click', handleButtonClick)
const textInput = document.querySelector('#input')
textInput.addEventListener('input', handleInput)

})

const handleFormSubmit = function(event){
    event.preventDefault()

 const gameListItem = createGameListItem(event.target)
 const gameList = document.querySelector('#vodyu-gammer') 
   gameList.appendChild(gameListItem)

}

const createGameListItem = function(formData){

    const gameListItem = document.createElement('li')
    gameListItem.classList.add('#game-list-item')

    const title = document.createElement('h2')
    title.textContent = formData.title.value
    gameListItem.appendChild(title)

    const publisher = document.createElement('h3')
    publisher.textContent = formData.publisher.value
    gameListItem.appendChild(publisher)

    const genre = document.createElement('p')
    genre.textContent = formData.genre.value
    gameListItem.appendChild(genre)

    return gameListItem

}
const handleButtonClick = function(){
    const resultParagraph = document.querySelector('#button-result')
     resultParagraph.textContent = "yay!!!! games!!!!"
}

const handleInput = function(event){
    const resultParagraph = document.querySelector('#input-result')
resultParagraph.textContent = event.target.value
}
