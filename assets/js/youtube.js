var inputQuery = "Guided Meditation";

$( document ).ready( function() {

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
                var videoEmbed = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                $("#videoContainer").append( '<div class="col-sm-6 mb-3"><div class="card h-100">' + videoEmbed + '<div class="card-body"><h5 class="card-title">' + videoTitle + '</h5></div></div></div>');

            }

        }

    } );

} );