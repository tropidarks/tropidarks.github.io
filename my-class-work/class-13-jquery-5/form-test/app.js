$(document).ready(function () {

   $('#myForm').submit(function (event) {
    console.log(event)
    event.preventDefault()

    var name = $('#name-input').val()
    $('#target').text(name)
  })
})
