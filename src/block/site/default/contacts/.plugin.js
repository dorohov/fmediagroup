function initMap() {  
  var map_container_div_id = 'map-google';
  var cont = $('#' + map_container_div_id);  
  var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
  if(cont.length) {    
    var map_data = JSON.parse(cont.attr('data-map') || '{}');    
    var coordMapOfficeOne = map_data.center;
    var zoomMapOfficeOne = map_data.zoom,
        styleMapOfficeOne = [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#f1ece9"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"color":"#d0d0d0"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"labels","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"color":"#a0a0a0"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#d7a7a7"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.fill","stylers":[{"color":"#c2c2c2"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dcdcdc"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"color":"#e5e1de"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"color":"#d4d4d4"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"color":"#e5e1de"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"color":"#dcdcdc"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#e5e1de"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"color":"#e5e1de"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"color":"#e5e1de"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"color":"#e5e1de"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#8b8987"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"weight":"0.01"},{"color":"#000000"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e2dedb"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}],
        optionsMapOfficeOne = {
          zoom: zoomMapOfficeOne, 
          center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]), 
          styles: styleMapOfficeOne
        }, 
      idOfficeOne = document.getElementById(map_container_div_id),
      mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),
      iconOfficeOne = {   
        path: "M21 0C9.4199 0 0 10.4081 0 23.2031C0 27.5254 1.08348 31.7438 3.13262 35.4033L19.8038 65.0852C20.4951 66.3187 22.1249 66.2998 22.7946 65.0587L39.0402 35.0898C40.9746 31.5078 42 27.397 42 23.2031C42 10.4081 32.5801 0 21 0ZM21 34.8305C15.1264 34.8305 10.4767 29.548 10.4767 23.2031C10.4767 16.8056 15.2099 11.5758 21 11.5758C26.7901 11.5758 31.5233 16.8056 31.5233 23.2031C31.5233 29.4921 26.9361 34.8305 21 34.8305Z M21 15.4688C17.1394 15.4688 14 18.9375 14 23.2031C14 27.4891 17.1338 30.9375 21 30.9375C24.9355 30.9375 28 27.4242 28 23.2031C28 18.9375 24.8606 15.4688 21 15.4688Z", 
        fillColor: '#E60000',
        strokeColor: '#000000',
        fillOpacity: 1,
        //anchor: new google.maps.Point(26,65),
        anchor: new google.maps.Point(21,66),
        strokeWeight: 0,
        scale: 1,
      }; 
      if(map_data.placemarks.length) {
        for(var i = 0; i < map_data.placemarks.length; i++) {
          var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks[i].title,
              //animation: google.maps.Animation.DROP
          });
        }
      }

      /*if(map_data.placemarks2.length) {
        for(var i = 0; i < map_data.placemarks2.length; i++) {
          var iconCoordOfficeOne2 = {lat: map_data.placemarks2[i].coord[0],  lng: map_data.placemarks2[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne2,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks2_title,
          });
        }
      }*/
      
      
      //$(window).on('resize', function() {
      //  google.maps.event.trigger(mapOfficeOne, "resize");
      //  mapOfficeOne.setCenter(OfficeOne);
      //});
      
      $(document.body).on('click.azbn7', '.azbn__office__map__set-center-btn', null, function(event){
        event.preventDefault();
        var btn = $(this);
        var coord = btn.attr('data-coord');
        var coord_arr = coord.split(',');
        console.dir(coord_arr);
        mapOfficeOne.setCenter({
          lat : parseFloat((coord_arr[0] || '').trim()),
          lng : parseFloat((coord_arr[1] || '').trim()),
        });
        
      });
      
    
  }
  
}; 
$(function () {
  $(document.body).on('shown.bs.modal', '.modal', {}, function(event){
    event.preventDefault();
    $(window).trigger('resize');    
  });  
});