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

const bannerP = document.querySelector('#banner p')
const dots = document.querySelector(".dots")
const image = document.querySelector(".banner-img")
const slideCount = slides.length
let selectedIndex = 0

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("div")
  dot.classList.add("dot")
  dots.appendChild(dot)
}

const updateSlide = () => {
	dots.children[selectedIndex].classList.remove("dot_selected")
	dots.children[selectedIndex].classList.add("dot_selected")
	image.src = slides[selectedIndex].image
	bannerP.innerHTML = slides[selectedIndex].tagLine
}

dots.children[0].classList.add("dot_selected")

document.querySelector('.arrow_right').addEventListener ('click', (e) => {
	dots.children[selectedIndex].classList.remove("dot_selected")
	if (selectedIndex === slideCount -1) {
		selectedIndex = 0
	} else {
		selectedIndex++
	}
	updateSlide()
})

document.querySelector('.arrow_left').addEventListener ('click', (e) => {
	dots.children[selectedIndex].classList.remove("dot_selected")
	if (selectedIndex === 0) {
		selectedIndex = slideCount - 1
	} else {
		selectedIndex--
	}
	updateSlide()
})