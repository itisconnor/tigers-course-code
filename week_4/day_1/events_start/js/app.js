document.addEventListener('DOMContentLoaded', () => {
  console.log('CODESAW IS READYYYYY');

// step 1 grab the element
  const button = document.querySelector('#button')

  // step 2 add event listener (type? click? Submit?)
  button.addEventListener('click', handleButtonClick)

  const textInput = document.querySelector('#input')
  textInput.addEventListener('input', handleInput)

  const select = document.querySelector('#select')
  select.addEventListener('change', handleSelectChange)

  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)

});


//  step 3 function called when the event(click) happens
const handleButtonClick = function(){
  // console.log("Button has been clicked") it shows up in the console
  const resultParagraph = document.querySelector('#button-result')
  resultParagraph.textContent = "Ahoogah! You are press buttan"
}

const handleInput = function(event){
  // console.log("Wow wow wow!!!!!!!") it shows up in the console // event often abbreviated to just e
  // console.log(event.target.value) with the specified .target.value it shows up each individual keystroke
  const resultParagraph = document.querySelector('#input-result')
  resultParagraph.textContent = event.target.value
  // the above makes whatever you type show up below the box
}

const handleSelectChange = function(event){
  // console.log(event.target.value)
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = "You have selected " + event.target.value + ". Please stand by."
}

const handleFormSubmit = function(event){
  event.preventDefault()
  // console.log(event.target.first_name.value)
  // console.log(event.target.last_name.value)
  const resultParagraph = document.querySelector('#form-result')
  resultParagraph.textContent = "OMG it is " + event.target.first_name.value + " freakin' " + event.target.last_name.value + "!!! I am your biggest fan"
}

// preventdefault prevents the page from refreshing, its default thing, when the names are submitted