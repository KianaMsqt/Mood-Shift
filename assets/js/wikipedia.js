var inputQuery = 'Guided Meditation';

$( document ).ready( function() {

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
  
        for (var i = 0; i < 6 && i < results.length; i++) {
          var result = results[i];
          var articleTitle = encodeURIComponent(result.title);
  
          // Create HTML element
          $('#articleContainer').append(
            '<div class="col-sm-6 mb-3"><div class="card h-100"><h3><a href="https://en.wikipedia.org/wiki/' +
              articleTitle +
              '" target="_blank">' +
              result.title +
              '</a></h3>'+
              '<div class="card-body">' +
              result.snippet +
              '</div>' +
              '</div></div>'
          );
        }
      },
    });
  });
  