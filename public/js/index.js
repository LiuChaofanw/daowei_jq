$('#header .header_item>a').hover(function () {
  $(this).addClass('active')
},function () {
  $(this).removeClass('active')
})



$(function () {
  var $header = $('#header')
  $(window).scroll(function () {
    if (($(this).scrollTop() >= 71)) {
      $header.addClass('active')
    } else {
      $header.removeClass('active')
    }
  })
})