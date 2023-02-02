// TODO: Add id #youtube to the element that will create in the page for video content
$( '#youtube' ).on( 'click', function( e ) {
    e.preventDefault();
    
    var inputQuery = "Meditation",
        apiKey = "AIzaSyDC1IfJn2liffdgTxvXNLpHKPTRKS41WU8",
        youtubeQueryURL;

    youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + inputQuery + "&type=video&key=" + apiKey;

    // AJAX call to the YouTube Data API 
    $.ajax( {
        url: youtubeQueryURL,
        method: "GET",

        // Extract the video ID and title of each video In the success callback function through loop
        success: function( data ) {

            var items = data.items;

            for (var i = 0; i < items.length; i++) {

                var videoId = items[i].id.videoId,
                    videoTitle = items[i].snippet.title;

                // Create HTML element and embed the video
                var videoEmbed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                $("body").append("<h3>" + videoTitle + "</h3>" + videoEmbed);

            }

        }
    } );

} );
