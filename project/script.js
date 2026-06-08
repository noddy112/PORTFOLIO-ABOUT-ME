document.querySelectorAll('a').forEach(link => {

link.addEventListener('click', function(e){

if(this.hash !== ''){

e.preventDefault();

const hash = this.hash;

document.querySelector(hash)
.scrollIntoView({
behavior:'smooth'
});

}

});

});

window.addEventListener('scroll', () => {

let cards =
document.querySelectorAll(
'.card,.project-card'
);

cards.forEach(card => {

let position =
card.getBoundingClientRect().top;

let screen =
window.innerHeight;

if(position < screen - 100){
card.style.opacity = "1";
card.style.transform =
"translateY(0)";
}

});

});