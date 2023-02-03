// Homepage Button Event

$('#unhappy').on('click', function () {
  // Change background colour on click
  $('.jumbo-style').css('background-color', '#39a0ca');

  // Smooth scroll to card content
  var contentReveal = document.querySelector('#card-reveal');
  contentReveal.scrollIntoView();

  // Reveal content cards
  $('div.to-show').show();
});

$('#sad').on('click', function () {
  $('.jumbo-style').css('background-color', '#f6f5f3');

  var contentReveal = document.querySelector('#card-reveal');
  contentReveal.scrollIntoView();

  $('div.to-show').show();
});

$('#normal').on('click', function () {
  $('.jumbo-style').css('background-color', ' #fa625f');

  var contentReveal = document.querySelector('#card-reveal');
  contentReveal.scrollIntoView();

  $('div.to-show').show();
});

$('#good').on('click', function () {
  $('.jumbo-style').css('background-color', '#feda6a');

  var contentReveal = document.querySelector('#card-reveal');
  contentReveal.scrollIntoView();

  $('div.to-show').show();
});

$('#happy').on('click', function () {
  $('.jumbo-style').css('background-color', '#DCC7AA');

  var contentReveal = document.querySelector('#card-reveal');
  contentReveal.scrollIntoView();

  $('div.to-show').show();
});
