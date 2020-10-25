<template>
  <div>
    <Sidebar />
    <div id="container-body-main">
      <h1
        style="z-index: 9999; position: relative; font-size: 35px; margin-left: 70%"
        class="badge badge-danger">COVID Hotspots <br> <p style = 'font-size: 15px; margin-top: 2px; margin-bottom: -3px'>{{ county }}</p></h1>
      <div class="google-map" id="map1"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import firebase from "firebase";
import firebaseInit from '@/firebase.js'

export default {
  name: "Maps",
  components: {
    Sidebar
  },
  data() {
    return {
      lat: 0,
      lng: 0,
      map: null,
      county: null,
    };
  },

  methods: {
    renderMap(county) {

            var map = new google.maps.Map(document.getElementById("map1"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 10,
        maxZoom: 25,
        minZoom: 3,
        streetViewControl: true
      });



            firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var email = user.email;

          console.log(email)

         var markers = []

          console.log(county)

          firebase.firestore().collection("Logs").where("county", "==", "San Joaquin County").onSnapshot(snapshot => {

              snapshot.forEach(doc => {
                var data = doc.data();
                console.log(data);

                var coords = data["coords"];



          if(coords){

            var latitude = coords['lat']
            var longitude = coords['lng']

   
              var latLng = new google.maps.LatLng(Number(latitude), Number(longitude));

              var marker = new google.maps.Marker({
                position: latLng
              });

              console.log(latitude, longitude)

              markers.push(marker)
            
          }


              })
                                        // Path for cluster icons to be appended (1.png, 2.png, etc.)
const imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";

// Enable marker clustering for this map and these markers
const markerClusterer = new MarkerClusterer(map, markers, {imagePath: imagePath});



              
            });
        }
      });



    
    },

    getCurrentLocation(){

      const options = {
      provider: 'google',
      apiKey: 'AIzaSyDtOQLNJPBCPK5QCiwl0jle9yWRFLN3SyQ', // for Mapquest, OpenCage, Google Premier
      formatter: null // 'gpx', 'string', ...
    }




      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      } 
    },

    async showPosition(position) {

      const geocoder = new google.maps.Geocoder();

      console.log(position.coords)
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

        const latlng = {
    lat: parseFloat(this.lat),
    lng: parseFloat(this.lng),
  };

  var county;
  geocoder.geocode({ location: latlng }, (results, status) => {
    if (status === "OK") {
      if (results[0]) {
        console.log(results)

        county = results[2]["address_components"][0]['long_name']

        console.log(county)
        this.county = county

        
      this.renderMap(county);

      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });

      //const res = await geocoder.geocode(latlng);

      //console.log(res)

    },

  },

  mounted() {
    this.getCurrentLocation()
  }
};
</script>

<style>
#container-body-main {
  margin-top: 3%;
}
.google-map {
  width: 86%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0%;
  left: 223px;
  z-index: 99;
}
</style>