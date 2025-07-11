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

let slideIndex = 0;

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const bannImg = document.querySelector('.banner-img');
const bannText = document.querySelector('#banner p');
const maxSlides = 3;

left.addEventListener('click', () => {
	if(slideIndex > 0)
		slideIndex--;
	else
		slideIndex = maxSlides;
	console.log(slideIndex);
	moveAll(slideIndex);
});

right.addEventListener('click', () => {
	if(slideIndex < maxSlides)
		slideIndex++;
	else
		slideIndex = 0;
	console.log(slideIndex);
	moveAll(slideIndex);
});

slides.forEach((_, index) => {
	const dot = document.createElement('div');
		dot.classList.add('dot');
		dots.appendChild(dot);
	if (index === slideIndex) {
		dot.classList.add('dot_selected');
	}
});

function moveAll(index){
	const move = document.querySelectorAll('.dot');
	move.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i == index);
	});
	bannImg.src = `./assets/images/slideshow/${slides[slideIndex].image}`
	bannText.innerHTML = slides[slideIndex].tagLine;
};