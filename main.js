$(document).ready(function(){
  console.log("sanity")

  $('.phone_us').mask('(000) 000-0000');

  $('#form').on('submit', function (e) {
    e.preventDefault();
    var num = $('.phone_us').val();
    console.log(num.replace(/[^0-9&&^.]/g, ""));
  })
});
