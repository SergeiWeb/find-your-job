const burgerMenuBtn = document.querySelector('.button-burger')
const menu = document.querySelector('.navbar')
const closeMenuBtn = document.querySelector('.navbar-close')

burgerMenuBtn.addEventListener('click', event => {
	event.preventDefault()

	if (!menu.classList.contains('is-open')) {
		menu.classList.add('is-open')
	} else {
		menu.classList.remove('is-open')
	}
})

closeMenuBtn.addEventListener('click', event => {
	event.preventDefault()

	menu.classList.remove('is-open')
})
