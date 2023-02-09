var inputQuery;

// Homepage Button Event

$( '.btn-feeling' ).on( 'click', function() {
  // Reveal content cards
  $( '.to-show-step-2' ).show();

    // Smooth scroll to card content
    var contentReveal = document.querySelector('#card-reveal');
    contentReveal.scrollIntoView();

} );

$( '.btn-result' ).on( 'click', function() {  
  // Reveal content cards
  $( '.to-show-step-3' ).show();
  var step3Reveal = document.querySelector('#multimedia');
  step3Reveal.scrollIntoView();

    // Get data-input-query from buttons and store it in localstorage to use for searching by APIs 
    inputQuery = $( this ).data( 'inputQuery' );
    localStorage.setItem( 'inputQuery', inputQuery );
    
} );

// Change background colour on click
$('#unhappy').on('click', function () {
  $('.jumbo-style').css('background-color', '#39a0ca');
});

$('#sad').on('click', function () {
  $('.jumbo-style').css('background-color', '#f6f5f3');
});

$('#normal').on('click', function () {
  $('.jumbo-style').css('background-color', ' #fa625f');
});

$('#good').on('click', function () {
  $('.jumbo-style').css('background-color', '#feda6a');
});

$('#happy').on('click', function () {
  $('.jumbo-style').css('background-color', '#DCC7AA');
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
