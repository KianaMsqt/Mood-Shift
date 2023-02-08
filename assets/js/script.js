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

  // Show stored data on the page
});

var inputQuery = 'Guided Meditation';

$('#wikipedia').on('click', function (e) {
  e.preventDefault();

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    data: {
      action: 'query',
      list: 'search',
      srsearch: inputQuery,
      format: 'json',
    },
    dataType: 'jsonp',

    success: function (response) {
      var results = response.query.search;

      for (var i = 0; i < 3 && i < results.length; i++) {
        var result = results[i];
        var articleTitle = encodeURIComponent(result.title);

        // Create HTML element
        $('body').append(
          "<h3><a href='https://en.wikipedia.org/wiki/" +
            articleTitle +
            "'>" +
            result.title +
            '</a></h3>'
        );
        $('body').append('<p>' + result.snippet + '</p>');
      }
    },
  });
});

$('#deezer').on('click', function (e) {
  e.preventDefault();

  $.ajax({
    url: 'https://api.deezer.com/search/track',
    data: {
      q: inputQuery,
      limit: 3,
      output: 'json',
    },
    success: function (response) {
      var tracks = response.data;
      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];

        // Create HTML element and embed the deezer widget
        $('body').append('<h3>' + track.title + '</h3>');
        $('body').append('<p>' + track.artist.name + '</p>');
        var audioEmbed =
          '<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/' +
          track.id +
          '" width="250" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>';
        $('body').append(audioEmbed);
      }
    },
  });
});

