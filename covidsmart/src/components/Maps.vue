<template>
  <div>
    <Sidebar />
    <div id="container-body-main">
      <h1
        style="z-index: 9999; position: relative; font-size: 35px; margin-left: 70%"
        class="badge badge-primary">Encounter History</h1>

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
      map: null
    };
  },

  methods: {
    renderMap() {
      var map = new google.maps.Map(document.getElementById("map1"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 14,
        maxZoom: 25,
        minZoom: 3,
        streetViewControl: true
      });

            firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var email = user.email;

          firebase.firestore().collection("Logs").where("email", "==", email).onSnapshot(snapshot => {
              snapshot.forEach(doc => {
                var data = doc.data();
                console.log(data);

                var encounterLocations = data["coords"];


                 var markers = [

      ]

            for(let i = 0; i <= encounterLocations.length; i++){

          if(encounterLocations[i] != undefined){

            var latitude = encounterLocations[i]['lat']
            var longitude = encounterLocations[i]['lng']

            if(latitude != undefined && longitude != undefined){
              //var myLatlng = new google.maps.LatLng({lat: Number(latitude), lng: Number(longitude)});
              var latLng = new google.maps.LatLng(Number(latitude), Number(longitude));

              var marker = new google.maps.Marker({
                position: latLng
              });

              markers.push(marker)
            }
          }

      }

      console.log(markers)


// Path for cluster icons to be appended (1.png, 2.png, etc.)
const imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";

// Enable marker clustering for this map and these markers
const markerClusterer = new MarkerClusterer(map, markers, {imagePath: imagePath});
      

              });
            });
        }
      });

    
    },

    getCurrentLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);


      } 
    },

    showPosition(position){
      console.log(position.coords)
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      this.renderMap();
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