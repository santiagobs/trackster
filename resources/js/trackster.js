$(document).ready(function() {
  $('#search-btn').click(function(){
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

var API_KEY = 'd8c137cd388aa79c781217664c794df1';
var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
var tracksLen = tracks.track.length;
console.log(tracks);
console.log(tracksLen);
  for (var i = 0; i <= tracksLen; i++) {
    var mediumAlbumArt= tracks.track[i].image[1]["#text"];
    var htmlTrackRow=
    '<div class="row track">'+
      '<a class="col-lg-1 col-lg-offset-1" href='+tracks.track[i].url+'><i class="fa fa-2x fa-play-circle-o"></i></a>'+
      '<p class="col-lg-4">'+tracks.track[i].name+'</p>'+
      '<p class="col-lg-2">'+tracks.track[i].artist+'</p>'+
      '<img src='+mediumAlbumArt+'>'+
      '<p class="col-lg-2">'+tracks.track[i].listeners+'</p>'+
    '</div>';
    $('#search-results').append(htmlTrackRow);
};

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
      success: function(data){
        console.log(data);
        Trackster.renderTracks(data.results.trackmatches);
      }
    });
    });
  };
