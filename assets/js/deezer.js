var inputQuery = "Guided Meditation";

$(document).ready( function () {

  $.ajax({
    url: 'https://api.deezer.com/search/track',
    data: {
      q: inputQuery,
      limit: 6,
      output: 'json',
    },
    success: function (response) {
      var tracks = response.data;
      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];

        // Create HTML element and embed the deezer widget
        var audioEmbed =
        '<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/' +
        track.id +
        '" width="250" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>';

        $('#audioContainer').append('<div class="col-lg-4 col-md-6 mb-3"><div class="card h-100">' +
                        audioEmbed +
                        '<h3>' +
                         track.title + 
                         '</h3>' +
                         '<div class="card-body">' + track.artist.name + '</div>' +
                         '</div></div>');
      }
    },
  });
});