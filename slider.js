class Slider {
  constructor(containerElement) {
    this.containerElement = containerElement /*?*/
    this.slides = containerElement.querySelectorAll('[data-js="preview-item"]')
    this.paginationButtons = containerElement.querySelectorAll('[data-js="pagination-btn"]')
    this.activeSlide = 0

    this.init()
  }

  init() {
    this.paginationButtons.forEach((button, index) => {
      button.addEventListener('click', () =>
        this.onPaginationButtonClick(index)
      )
    })

    this.showSlide(this.activeSlide) // Show initial slide
  }

  onPaginationButtonClick(slideNumber) {
    this.activeSlide = slideNumber
    this.showSlide(slideNumber)
  }

  showSlide(slideNumber) {
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === slideNumber)
    })
  }

  
}

const sliderContainer = document.querySelector('[data-js="slider"]')
const slider = new Slider(sliderContainer)
