const btn = document.querySelectorAll('.btn__wrap label');
const items = document.querySelectorAll('.subtitle');

function showMore () {

    for(let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            this.parentElement.classList.toggle('btn__active');
            this.parentElement.parentElement.children[1].classList.toggle('subtitle__active');
        };
    };
};

showMore()
