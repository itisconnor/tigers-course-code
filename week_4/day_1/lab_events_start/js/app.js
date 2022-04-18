document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const Button = document.querySelector('#button')
Button.addEventListener('click', handleButtonClick)

const Input = document.querySelector('#input')
Input.addEventListener('input', handleInputChange)

const Select = document.querySelector('#select')
Select.addEventListener('change', handleSelectChange)

const Form = document.querySelector('#form')
Form.addEventListener('submit', handleFormSubmit)
})


const handleButtonClick = function(){
 const resultParagraph = document.querySelector('#button-result')
  resultParagraph.textContent = "This has been clicked!"

 
  }
  const handleInputChange = function(event){
    const resultParagraph = document.querySelector('#input-result')
   resultParagraph.textContent = event.target.value
}

const handleSelectChange = function(event){
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = "Your pizza of choice is " + event.target.value
}

const handleFormSubmit = function(event){
    event.preventDefault()
  const resultParagraph = document.querySelector('#form-result')
  resultParagraph.textContent = "Your name is " + event.target.name.value + " and your age is " + event.target.age.value
}

