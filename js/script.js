$(document).ready(function () {
   $('.item__burger').click(function (event) {
      $('.item__burger,.item__list,.sms').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
console.lag('CУкааа');