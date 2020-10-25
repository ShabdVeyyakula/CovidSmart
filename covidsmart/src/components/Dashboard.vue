<template>
  <div>
    <Sidebar />
    <div id="container-body-main">
      <h1
        style="z-index: 9999; position: relative; font-size: 35px; margin-left: 70%"
        class="badge badge-danger">COVID Hotspots <br> <p style = 'font-size: 15px; margin-top: 2px; margin-bottom: -3px'>{{ county }}</p></h1>

                <div style="height: 600px; width: 350px; background-color: white; position: relative; margin-left: 76%; z-index: 9999; margin-top: 40px" class="userStats">

                  <div>
                              <div class="col" style="border-radius: 30px" >
            <center>
              <h3 style="padding-top: 50px; font-weight: 300; font-family: 'Roboto', sans-serif;">Trip Report</h3>

              
              <center>
                <div class="row" style="margin-left: 28px; margin-top: 30px">
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #febad3; border-radius: 10px">
                    <center>
                      <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">31</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px">Trip Total</h6>
                    </center>
                  </div>
                </center>
                <div style="width: 34px"></div>
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #8fbcff; border-radius: 10px">
                    <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">18</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px">High Risk Trips</h6>
                  </div>
                </center>
                <div class="tripsComplete"></div>
              </div>
              <div class="mostEncounters shadow" style="width: 280px; height: 100px; background-color: #9c6dff; margin-top: 40px; border-radius: 10px">
                <center>
                  <div class="col">
                    <h3 style="padding-top: 10px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">{{ county }}</h3>
                    <h5 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 20px">Hot Spot</h5>
                  </div>
                </center>
              </div>
              </center>
              <div class="row" style="margin-left: 28px; margin-top: 30px">
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #ffe071; border-radius: 10px">
                    <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">13</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px">Time</h6>
                  </div>
                </center>
                <div style="width: 34px"></div>
                <center>
                  <div class="rating shadow" style="height: 120px; width: 120px; background-color: #67eba3; border-radius: 10px">
                    <h1 style="padding-top: 16px; font-weight: 300; font-family: 'Roboto', sans-serif; color: white">73</h1>
                    <h6 style="color: white; font-weight: 300; font-family: 'Roboto', sans-serif; margin-top: 10px; font-size: 14px">Rating</h6>
                  </div>
                </center>
                <div class="tripsComplete"></div>
              </div>
            </center>

          </div>
                  </div>
        </div>
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
        zoom: 13,
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