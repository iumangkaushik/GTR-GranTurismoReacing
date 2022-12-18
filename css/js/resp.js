burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightnav')

burger.addEventlistener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    nav-List.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})