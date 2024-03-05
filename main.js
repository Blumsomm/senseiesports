/* ======= Dropdown Menu ====== */

const toggleBtn = document.querySelector('.toggle-btn')
    const toggleBtnIcon = document.querySelector('.toggle-btn i')
    const dropDownMenu = document.querySelector('.dropdown-menu')

    toggleBtn.onclick = function() {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')

      toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
  // Swiper Sponsership Banner
const swiper1 = new Swiper(".swiper1", {
  // How many slides to show
  slidesPerView: 5,
  // How much space between slides
  spaceBetween: 3,
  // Make the next and previous buttons work
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Make the pagination indicators work
  pagination: {
      el: '.swiper-pagination'
  },
  
  //Responsive breakpoints for how many slides to show at that view
  breakpoints: {
    1024: {
      slidesPerView: 6
    },

    768: {
      slidesPerView: 3
    },

    425: {
      slidesPerView: 2
    },

    320: {
      slidesPerView: 1
    },
      
  }   
}); 


