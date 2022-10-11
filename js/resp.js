burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
cart = document.querySelector('.carrt')


burger.addEventListener('click', ()=>{
  navList.classList.toggle('v-class-resp');
  cart.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})


function mufunction(){
  window.scrollTo(0,
          findPosition(document.getElementById("services")));
            }
            function findPosition(obj) {
                var currenttop = 0;
                if (obj.offsetParent) {
                    do {
                        currenttop += obj.offsetTop;
                    } while ((obj = obj.offsetParent));
                    return [currenttop];
                }
}
