$(document).ready(function(){

  $('.phone_us').mask('(000) 000-0000');

  $('#form').on('submit', function (e) {
    e.preventDefault();
    var num = $('.phone_us').val();
    num = num.replace(/[^0-9&&^.]/g, "");
    console.log(num);
  });
});
