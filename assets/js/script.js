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
$( document ).ready( function() {

    // Storing user's mood and date on local storage.
    $( "#saveButton" ).click( function() {

        // Storing current date
        var date = new Date();
        var text = $( "#textInput" ).val();

        localStorage.setItem( "date", date );
        localStorage.setItem( "text", text );

    } );

    // Format the date to Day dd/mm/yyyy hh:mm:ss
    // eg: Thursday 01/01/1970 01:00:00
    var formatDate = function() {
        var date = new Date(localStorage.getItem("date"));
        var formattedDate = date.toLocaleDateString();
        var formattedTime = date.toLocaleTimeString();
        var day = date.toLocaleString('default', { weekday: 'long' });
        console.log(day + " " + formattedDate + " " + formattedTime);
    }

    // Show stored data on the page

    // TODO: It would be on click if we want to show it on a modal 
    // Or should be on document ready if we wwant to show it on another page. In this case we need to check if the elemnt is on the page or not, to prevent errors on the home page.
    $( '#moodTracker' ).on( 'click', function( e ) {
        e.preventDefault();
        $( 'body' ).append( formatDate() );
    });

} );
