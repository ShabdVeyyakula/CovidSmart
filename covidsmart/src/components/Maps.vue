<template>
  <div>
    <Sidebar />
    <div id="container-body-main">
      <h1
        style="z-index: 9999; position: relative; font-size: 35px; margin-left: 70%"
        class="badge badge-primary">Encounter History</h1>

        <div style="height: 600px; width: 350px; background-color: white; position: relative; margin-left: 76%; z-index: 9999; margin-top: 40px" class="userStats">

          <div class="col">
            <center>
              <h3 style="padding-top: 50px; font-weight: 300; font-family: 'Roboto', sans-serif;">User Stats</h3>

              <div class="mostEncounters shadow" style="width: 280px; height: 100px; background-color: #67eba3; margin-top: 40px; border-radius: 10px">
                <center>
                  <div class="col">
                    <h3 style="padding-top: 10px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">Santa Clara</h3>
                    <h5 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 20px">Most Encounters</h5>
                  </div>
                </center>
              </div>
              <center>
                <div class="row" style="margin-left: 28px; margin-top: 30px">
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #ffe071; border-radius: 10px">
                    <center>
                      <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">8.5</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px">Rating</h6>
                    </center>
                  </div>
                </center>
                <div style="width: 34px"></div>
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #9c6dff; border-radius: 10px">
                    <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">6</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px">Trips Complete</h6>
                  </div>
                </center>
                <div class="tripsComplete"></div>
              </div>
              </center>
              <div class="row" style="margin-left: 28px; margin-top: 30px">
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #febad3; border-radius: 10px">
                    <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">13</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px">Trip Average</h6>
                  </div>
                </center>
                <div style="width: 34px"></div>
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #8fbcff; border-radius: 10px">
                    <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">73</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px; font-size: 14px">Most Encounters</h6>
                  </div>
                </center>
                <div class="tripsComplete"></div>
              </div>
            </center>

          </div>
        </div>

      <div class="google-map" id="map1"></div>
    </div>

    <div class="userStats" style="z-index: 9999; height: 50px; width: 90px; background-color: red">
      <h1>HELLO</h1>

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

                var coords = data["coords"];


                 var markers = []


          if(coords != undefined){

            var latitude = coords['lat']
            var longitude = coords['lng']

            if(latitude != undefined && longitude != undefined){
              //var myLatlng = new google.maps.LatLng({lat: Number(latitude), lng: Number(longitude)});
              var latLng = new google.maps.LatLng(Number(latitude), Number(longitude));

              var marker = new google.maps.Marker({
                position: latLng
              });

              markers.push(marker)
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

.userStats {
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);

  border-radius: 30px;

  
}




</style>