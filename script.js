'use strict';
let show_modal = document.querySelectorAll('.show-modal');

function remove_modal(){
    document.querySelector('.modal').classList.remove('hidden')
    document.querySelector('.overlay').classList.remove('hidden')
}

function add_modal(){
    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')
}

for (let i = 0; i < show_modal.length; i++) {
    show_modal[i].addEventListener('click', remove_modal)
}

document.querySelector('.close-modal').addEventListener('click', add_modal)


document.querySelector('.overlay').addEventListener('click', add_modal)

document.addEventListener('keydown',(e)=>{
    if(e.key=='Escape' && !document.querySelector('.modal').classList.contains('hidden'))
    {
        add_modal();
    }
})

