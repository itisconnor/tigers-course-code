document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleFormSubmit)

})

const handleFormSubmit = function(event){
  event.preventDefault()

  const readingListItem = createReadingListItem(event.target)
  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(readingListItem)

}


const createReadingListItem = function(formData){

  const readingListItem = document.createElement('li')
  readingListItem.classList.add('reading-list-item')
// createElement is used for actually creating new things as opposed to manipulating existing elements

const title = document.createElement('h2')
title.textContent = formData.title.value
readingListItem.appendChild(title)

const author = document.createElement('h3')
author.textContent = formData.author.value
readingListItem.appendChild(author)

const category = document.createElement('p')
category.textContent = formData.category.value
readingListItem.appendChild(category)

  return readingListItem
}
