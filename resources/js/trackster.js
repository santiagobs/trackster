$(document).ready(function() {
  $('#search-btn').click(function(){
    Trackster.searchTracksByTitle($('#search-input').val());
  });
  $('#search-input').keydown(function( event ){
    if(event.which == 13){
      Trackster.searchTracksByTitle($('#search-input').val());
    }
  });
});

var API_KEY = 'd8c137cd388aa79c781217664c794df1';
var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  $('#search-results').empty();
  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    var mediumAlbumArt = track.image[1]["#text"];
    var htmlTrackRow =
    '<div class="row track">'+
      '<a class="col-lg-1 col-lg-offset-1" target="_blank" href='+track.url+''+
      '><i class="fa fa-2x fa-play-circle-o"></i></a>'+
      '<p class="col-lg-4">'+track.name+'</p>'+
      '<p class="col-lg-2">'+track.artist+'</p>'+
      '<div class="col-lg-2"><img src='+mediumAlbumArt+'></div>'+
      '<p class="col-lg-2">'+track.listeners+'</p>'+
    '</div>';
    $('#search-results').append(htmlTrackRow);
  }

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $(document).ready(function() {
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+title+'&api_key='+API_KEY+'&format=json',
      dataType: 'jsonp',
      success: function(response){
        Trackster.renderTracks(response.results.trackmatches.track);
      }
    });
    });
  };
