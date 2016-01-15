$(document).ready(function () {

    $('#icon').click(function () {
      $('#small-nav').slideToggle()
    })

    $(window).resize(function () {
        if ($(window).height() > 900) {
            $('#small-nav').hide()

          }

    })
     $('.row').click(function () {
   
    $(this).find('.wrapper').slideToggle()
 
 })


})

