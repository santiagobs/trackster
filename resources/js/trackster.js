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
      }
    });
  });
};
