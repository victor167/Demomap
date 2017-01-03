document.addEventListener("deviceready", function() {
  ready();
}, false);

var map;
var div;
function ready(){
  div = document.getElementById("map_canvas3");
  map = plugin.google.maps.Map.getMap(div);
  map.one(plugin.google.maps.event.MAP_READY, function() {
    map_ready();
  });
}

function map_ready(){
  map.moveCamera({
      target: {lat: -12.0601566, lng: -77.1552091},
      zoom: 21
    }, function() {
      //alert("Camera target has been changed");
    });
}