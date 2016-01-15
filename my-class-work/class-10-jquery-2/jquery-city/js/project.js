$(document).ready(function () {

  $(".thumb").click(function () {
    var imgSrc = $(this).attrl('src')
    $('#bigimage').attrl ('src', imgSrc)
  })
})


