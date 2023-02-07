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

  const buttons = $( ".btn-feeling" );

  buttons.click( function() {

    // Store mood in local storage via getting the text of the clicked button
    const text = $( this ).text().trim();
    
    // Ccurrent date and time
    const currentDate = new Date();
    
    // Format date
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("default", options);
    const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });
    const date = `${formattedDate}`;
    const time = currentDate.toLocaleTimeString();
    
    // Store the day of the week, date, time, and text as a JSON object in the local storage
    localStorage.setItem(currentDate, JSON.stringify({ dayOfWeek, date, time, text }));

  } );


    // Show stored data on the page

    // TODO: It would be on click if we want to show it on a modal 
    // Or should be on document ready if we wwant to show it on another page. In this case we need to check if the elemnt is on the page or not, to prevent errors on the home page.
    $( '#moodTracker' ).on( 'click', function( e ) {

      // Prevent redirecting page after clicking on the button
      e.preventDefault();

        const displayData = $( "#displayTracker" );

        // Iterate over all the keys in the local storage, get the values associated with each key, and parse them from JSON using
        for ( let i = 0; i < localStorage.length; i++ ) {
          const key = localStorage.key( i );
          const value = JSON.parse( localStorage.getItem( key ) );

          const p = $( "<p>" ).html( `You were ${ value.text } at ${ value.dayOfWeek } ${ value.date } ${ value.time }.` );

          displayData.append( p );

        }

    });

} );
