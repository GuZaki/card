const items = document.querySelectorAll('[data-js="preview-item"]')
const paginationButtons = document.querySelectorAll(
  '[data-js="pagination-btn"]'
)

const tabs = document.querySelectorAll('[data-js="tabs"]') /*???*/
const tabsNav = document.querySelectorAll('[data-js="tabs-nav"]')
const tabsContent = document.querySelectorAll('[data-js="tabs-content"]')
const btnRead = document.querySelectorAll('[data-js="btn-read"]')

const minusBtn = document.querySelector('[data-js="btn-minus"]')
const plusBtn = document.querySelector('[data-js="btn-plus"]')
const count = document.querySelector('[data-js="count"]')
const price = document.querySelector('[data-js="price"]')
const totalPrice = document.querySelector('[data-js="total-price"]')

let activeSlide = 0
let activeBtn = 0
let activeTab = 0

function showSlide(slideNumber) {
  items.forEach((item, index) => {
    item.classList.toggle('is-active', index === slideNumber)
  })
}

function btnIsActive(slideNumber) {
  paginationButtons.forEach((item, index) => {
    item.classList.toggle('yellow-btn', index === slideNumber)
  })
} /*button?*/

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activeSlide = index
    showSlide(index)

    activeBtn = index
    btnIsActive(index)
  })
})

showSlide(activeSlide)

/*считаем цену*/
function countTotalPrice() {
  totalPrice.innerHTML = count.innerHTML * price.innerHTML
}

function counter() {
  minusBtn.addEventListener('click', () => {
    if (count.innerHTML > 0) {
      count.innerHTML--
      countTotalPrice()
    }
  })

  plusBtn.addEventListener('click', () => {
    if (count.innerHTML >= 0) {
      count.innerHTML++
      countTotalPrice()
    }
  })
}

counter()

/*переключаем табы*/
function showTab(slideNumber) {
  tabsNav.forEach((item, index) => {
    item.classList.toggle('subtitle-active', index === slideNumber)
  })
}

function showText(slideNumber) {
  tabsContent.forEach((item, index) => {
    item.classList.toggle('text-active', index === slideNumber)
  })
}

function showBtn(slideNumber) {
  btnRead.forEach((item, index) => {
    item.classList.toggle('btn-active', index === slideNumber)
  })
}

tabsNav.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    activeTab = index
    showTab(index)
    showText(index)
    showBtn(index)
  })
})

// function textCut() {
//   tabsContent.forEach((tab) => {
//     let newText = tab.innerHTML.slice(0, 180)
//     tab.innerHTML = `${newText}...`
//   })
// }

// textCut()

// btnRead.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     newText = tabsContent.innerHTML
//     // console.log(btn);
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  // Обрезаем текст до 100 символов при загрузке страницы и сохраняем полный текст в атрибуте data-full-text
  const textElements = document.querySelectorAll('[data-js="tabs-content"]')
  textElements.forEach((textElement) => {
    const originalText = textElement.textContent.trim()
    const maxLength = 100
    if (originalText.length > maxLength) {
      const truncatedText = originalText.slice(0, maxLength) + '...'
      textElement.textContent = truncatedText
      textElement.dataset.fullText = originalText
      textElement.classList.add('text-collapsed')
    }
  })

  // Получаем все кнопки "read more"
  const btnReads = document.querySelectorAll('[data-js="btn-read"]')

  // Обрабатываем каждую кнопку
  btnReads.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Находим текстовый элемент, который нужно показать/скрыть
      const textElement = btn.previousElementSibling

      // Если текст уже обрезан, показываем его полностью
      if (textElement.classList.contains('text-collapsed')) {
        textElement.textContent = textElement.dataset.fullText
        textElement.classList.remove('text-collapsed')
        btn.textContent = 'read less'
      } else {
        // Обрезаем текст до максимальной длины и сохраняем полный текст в атрибуте data-full-text
        const originalText = textElement.textContent
        const maxLength = 100
        const truncatedText = originalText.slice(0, maxLength) + '...'
        textElement.textContent = truncatedText
        textElement.classList.add('text-collapsed')
        btn.textContent = 'read more'
      }
    })
  })
})
