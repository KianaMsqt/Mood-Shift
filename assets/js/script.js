// Homepage Button Event

$( '.btn-feeling' ).on( 'click', function() {
  $( '.to-show-step-2' ).show();
} )

$( '.btn-result' ).on( 'click', function() {
  $( '.to-show-step-3' ).show();
  var step3Reveal = document.querySelector('#multimedia');
  step3Reveal.scrollIntoView();
} );

$('#unhappy').on('click', function () {
  // Change background colour on click
  $('.jumbo-style').css('background-color', '#39a0ca');

  // Smooth scroll to card content
  var contentReveal = document.querySelector('#card-reveal');
  // Reveal content cards
  // $('div.to-show').css('display', 'flex');
  contentReveal.scrollIntoView();

});

$('#sad').on('click', function () {
  $('.jumbo-style').css('background-color', '#f6f5f3');

  var contentReveal = document.querySelector('#card-reveal');
  // $('div.to-show').css('display', 'flex');
  contentReveal.scrollIntoView();

});

$('#normal').on('click', function () {
  $('.jumbo-style').css('background-color', ' #fa625f');

  var contentReveal = document.querySelector('#card-reveal');
  // $('div.to-show').css('display', 'flex');
  contentReveal.scrollIntoView();

});

$('#good').on('click', function () {
  $('.jumbo-style').css('background-color', '#feda6a');

  var contentReveal = document.querySelector('#card-reveal');
  // $('div.to-show').css('display', 'flex');
  contentReveal.scrollIntoView();

});

$('#happy').on('click', function () {
  $('.jumbo-style').css('background-color', '#DCC7AA');

  var contentReveal = document.querySelector('#card-reveal');
  // $('div.to-show').css('display', 'flex');
  contentReveal.scrollIntoView();

});

$(document).ready(function () {
  const buttons = $('.btn-feeling');

  buttons.click(function () {
    // Store mood in local storage via getting the text of the clicked button
    const text = $(this).text().trim();

    // Ccurrent date and time
    const currentDate = new Date();

    // Format date
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = currentDate.toLocaleDateString('default', options);
    const dayOfWeek = currentDate.toLocaleString('default', {
      weekday: 'long',
    });
    const date = `${formattedDate}`;
    const time = currentDate.toLocaleTimeString();

    // Store the day of the week, date, time, and text as a JSON object in the local storage
    localStorage.setItem(
      currentDate,
      JSON.stringify({ dayOfWeek, date, time, text })
    );
  });

});


