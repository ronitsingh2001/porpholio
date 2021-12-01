const menuBtn =document.querySelector('.menu_btn');
const hamBurger = document.querySelector('.menu_btn_burger');
const nav = document.querySelector('.nav');
const menuNav=document.querySelector('.menu_nav')
const navItem =document.querySelectorAll('.menu_nav_item')


let showMenu=false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItem.forEach(e =>e.classList.add('open'));
        showMenu=true;

    }
    else{
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItem.forEach(e =>e.classList.remove('open'));
        

        showMenu=false;
    }
}