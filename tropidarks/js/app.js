$(document).ready(function () {

    $('#icon').click(function () {
      $('#small-nav').slideToggle()
    })

    $(window).resize(function () {
        if ($(window).height() > 900) {
            $('#small-nav').hide()

          }

    })
     $('.contemporary').click(function () {
      console.log('something is happening');
      $('#art').slideToggle()
    })

    $(window).resize(function () {
        if ($(window).height() > 900) {
            $('#small-nav').hide()

          }

    })
    

})
