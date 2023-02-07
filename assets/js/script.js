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

} );


var inputQuery = "Guided Meditation";

// TODO: Add id #youtube to the element that will create in the page for video content
$( '#youtube' ).on( 'click', function( e ) {
    e.preventDefault();
    
    var youtubeAPIKey = "AIzaSyDC1IfJn2liffdgTxvXNLpHKPTRKS41WU8",
        youtubeQueryURL;

    youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + inputQuery + "&type=video&key=" + youtubeAPIKey;

    // AJAX call to the YouTube Data API 
    $.ajax( {
        url: youtubeQueryURL,
        method: "GET",

        // Extract the video ID and title of each video In the success callback function through loop
        success: function( data ) {

            var items = data.items;

            for ( var i = 0; i < items.length; i++ ) {

                var videoId = items[i].id.videoId,
                    videoTitle = items[i].snippet.title;

                // Create HTML element and embed the video
                var videoEmbed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                $("body").append("<h3>" + videoTitle + "</h3>" + videoEmbed);

            }

        }

    } );

} );

$( '#wikipedia' ).on( 'click', function( e ) {
    e.preventDefault();

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        data: {
          action: "query",
          list: "search",
          srsearch: inputQuery,
          format: "json"
        },
        dataType: "jsonp",

        success: function(response) {

            var results = response.query.search;

          for (var i = 0; i < 3 && i < results.length; i++) {
            var result = results[i];
            var articleTitle = encodeURIComponent(result.title);

            // Create HTML element
            $("body").append("<h3><a href='https://en.wikipedia.org/wiki/" + articleTitle + "'>" + result.title + "</a></h3>");
            $("body").append("<p>" + result.snippet + "</p>");
          }
        }

    });

} );

$( '#deezer' ).on( 'click', function( e ) {
    e.preventDefault();

    $.ajax({
        url: "https://api.deezer.com/search/track",
        data: {
          q: inputQuery,
          limit: 3,
          output: "json"
        },
        success: function( response ) {
            var tracks = response.data;
            for ( var i = 0; i < tracks.length; i++ ) {
                var track = tracks[i];

                // Create HTML element and embed the deezer widget
                $("body").append("<h3>" + track.title + "</h3>");
                $("body").append("<p>" + track.artist.name + "</p>");
                var audioEmbed = '<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/' + track.id + '" width="250" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>';
                $( "body" ).append( audioEmbed );
            }

        }

    });

} );