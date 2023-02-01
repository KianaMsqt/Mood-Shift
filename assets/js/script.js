$( document ).ready( function( e ) {
// $( '#youtube' ).on( 'click', function( e ) {
    // e.preventDefault();
    
    var inputQuery = "Meditation",
        apiKey = "",
        youtubeQueryURL;

    youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search";
    $.ajax( {
        url: youtubeQueryURL,
        method: "GET"
    } ).then( function( response ) {
        console.log( response )
    } );

} );