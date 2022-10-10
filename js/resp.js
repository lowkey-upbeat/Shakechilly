burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
cart = document.querySelector('.carrt')


burger.addEventListener('click', ()=>{
  navList.classList.toggle('v-class-resp');
  cart.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})
