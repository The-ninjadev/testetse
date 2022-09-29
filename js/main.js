//scroll header

function scrollHeader() {
    const nav = document.getElementById('menu');
    if(this.scrollY >= 50) nav.classList.add('active-scrollheader'); else nav.classList.remove('active-scrollheader')
}

window.addEventListener('scroll', scrollHeader)



const button = document.getElementById("menu-toggle");

const toggle = () => {
  document.body.classList.toggle("menu-toggled");
}

button.onclick = () => toggle();

// custom scroll 

window.onscroll = ()=>{
  rollScroll()
}



function rollScroll() {
  screenTop = 0;
  let windScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let heightScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (windScroll / heightScroll) * 100;
  document.getElementById('scroll-bar').style.height = scrolled + '%';
  console.log('rolou')

}


//countdown

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');

const marsTravel = '30 oct 2030';


function countdown() {
  const marsTravelDate = new Date(marsTravel);
  const currentDate = new Date();

  const totalSeconds = (marsTravelDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days ;
  hoursEl.innerHTML = formatTime(hours) ;
  minutesEl.innerHTML = formatTime(minutes) ;
  secondsEL.innerHTML = formatTime(seconds) ;

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000);


//cards effects mouse

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}


// Initialize Swiper slide

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});


//slides

let dotsImg = document.querySelectorAll('.dots-img');
let images = document.querySelectorAll('.slides-img');

document.getElementById('3').classList.add('active-dot')


let i = 0

dotsImg.forEach((item, index)=> {
  item.addEventListener('click', ()=> {
   
    images[0].style.opacity = 0;
    images[1].style.opacity = 0;
    images[2].style.opacity = 0;
    images[3].style.opacity = 0;

    images[index].style.opacity = 1;

    
    dotsImg[0].classList.remove('active-dot')
    dotsImg[1].classList.remove('active-dot')
    dotsImg[2].classList.remove('active-dot')
    dotsImg[3].classList.remove('active-dot')

    dotsImg[index].classList.add('active-dot');



  })
   

})

setInterval(changePl, 5000)

function changePl() {

  images[0].style.opacity = 0;
  images[1].style.opacity = 0;
  images[2].style.opacity = 0;
  images[3].style.opacity = 0;


  images[i].style.opacity = 1;

  dotsImg[0].classList.remove('active-dot')
  dotsImg[1].classList.remove('active-dot')
  dotsImg[2].classList.remove('active-dot')
  dotsImg[3].classList.remove('active-dot')

  dotsImg[i].classList.add('active-dot');

  i++

  if(i == images.length) i = 0

}

