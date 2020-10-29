let arrows = document.querySelectorAll('.btn__wrap');
let items = document.querySelectorAll('.subtitle');

for(let i = 0; i < arrows.length; i++) {
    arrows[i].onclick = function () {
        // console.log(this.parentElement.children[1].classList.toggle('subtitle__active'))
        this.classList.toggle('btn__active');
        this.parentElement.children[1].classList.toggle('subtitle__active')
    }
}