import Swiper from 'swiper'

new Swiper('.swiper-container',{
  loop:true,
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
  },
})