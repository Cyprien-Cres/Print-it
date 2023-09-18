const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.querySelector('.arrow_left').addEventListener ('click', (e) => {
	alert('Arrow left')
})
document.querySelector('.arrow_right').addEventListener ('click', (e) => {
	alert('Arrow right')
})

const dots = document.querySelector('.dots')
const slideCount = slides.length

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}
dots.children[0].classList.add("dot_selected");
