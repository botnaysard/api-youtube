$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyC35CheHbsaKRTE53XLyAedzzkyh9P8XL0',
    q: searchTerm,
    maxResults: 5,
  };

  url = 'https://www.googleapis.com/youtube/v3/search';
  $.getJSON(url, params, function(response){ // function(response) -- naming the object that is returned from the API
    console.log(response);
    var html = "";

    $.each(response.items, function(index,value){ // for an object index will be to the left of the ":", the value to the right
      var returnedId = response.items[index].id.videoId;
      var thumbnaillUrl = '<img src="https://i.ytimg.com/vi/' + returnedId + '/default.jpg">'
      console.log('ID: ' + returnedId + ' thumbnail URL: ' + thumbnaillUrl);
      html += '<p>' + returnedId + thumbnaillUrl + '</p>'; 
      $('#search-results').html(html)
    });

  });
}


//https://i.ytimg.com/vi/0R4N5tesHC0/default.jpg


//https://www.youtube.com/watch?v=
//videoId: L0MK7qz13bU
