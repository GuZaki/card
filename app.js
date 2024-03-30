const items = document.querySelectorAll('[data-js="preview-item"]')
const paginationButtons = document.querySelectorAll(
  '[data-js="pagination-btn"]'
)

let activeSlide = 0

function showSlide(slideNumber) {
  items.forEach((item, index) => {
    item.classList.toggle('is-active', index === slideNumber)
  })
}

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activeSlide = index
    showSlide(index)
    // TODO: Toggle 'yellow-btn' class by click on paginationButtons
  })
})

showSlide(activeSlide)
