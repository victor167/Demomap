document.addEventListener("deviceready", function() {
  ready();
}, false);


function ready(){
  var div = document.getElementById("map_canvas3");
  var map = plugin.google.maps.Map.getMap(div);
  map.one(plugin.google.maps.event.MAP_READY, function() {
    console.log("--> map_canvas3 : ready.");
  });
}