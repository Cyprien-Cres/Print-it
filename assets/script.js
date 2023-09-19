const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.querySelector('#banner')
const dots = document.querySelector(".dots")
const images = document.querySelectorAll(".banner-img")
const slideCount = slides.length
let selectedIndex = 0

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("div")
  dot.classList.add("dot")
  dots.appendChild(dot)
}

dots.children[0].classList.add("dot_selected")

document.querySelector('.arrow_right').addEventListener ('click', (e) => {
	dots.children[selectedIndex].classList.remove("dot_selected")
	selectedIndex++
	dots.children[selectedIndex].classList.add("dot_selected")
	const imageToChange = document.querySelector(".banner-img")
	if (selectedIndex === 1) {
		imageToChange.src = "./assets/images/slideshow/slide2.jpg"
		document.querySelector('#banner p').innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	} else if (selectedIndex === 2) {
		imageToChange.src = "./assets/images/slideshow/slide3.jpg"
		document.querySelector('#banner p').innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	} else if (selectedIndex === 3) {
		imageToChange.src = "./assets/images/slideshow/slide4.png"
		document.querySelector('#banner p').innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>"
	}
})

document.querySelector('.arrow_left').addEventListener ('click', (e) => {
	dots.children[selectedIndex].classList.remove("dot_selected")
	selectedIndex--
	dots.children[selectedIndex].classList.add("dot_selected")
	const imageToChange = document.querySelector(".banner-img")
	if (selectedIndex === 0) {
		imageToChange.src = "./assets/images/slideshow/slide1.jpg"
		document.querySelector('#banner p').innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>"
	} else if (selectedIndex === 1) {
		imageToChange.src = "./assets/images/slideshow/slide2.jpg"
		document.querySelector('#banner p').innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	} else if (selectedIndex === 2) {
		imageToChange.src = "./assets/images/slideshow/slide3.jpg"
		document.querySelector('#banner p').innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	}
})