<template>
  <div>
    <Sidebar />
    <div id="container-body-main">
      <h1 style="margin-left: -50%; margin-right: -120px" id = 'logs-count'></h1>

      <div id="logs-doc" ></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import firebase from "firebase";
import firebaseInit from "@/firebase.js";

export default {
  name: "Maps",
  components: {
    Sidebar,
  },
  data() {
    return {
      lat: 0,
      lng: 0,
      map: null,
    };
  },

  methods: {
    getLogs() {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          var email = user.email;

          var today = new Date();

          var todayEncounters = 0;

          firebase
            .firestore()
            .collection("Logs")
            .where("email", "==", email)
            .onSnapshot((snapshot) => {
              document.getElementById("logs-doc").innerHTML = ``;

              snapshot.forEach((doc) => {
                var data = doc.data();
                console.log(data);

                var time = new Date(data["time"].seconds * 1000);

                if(time.getDay() >= today.getDay()){
                  todayEncounters += 1
                }

                console.log(todayEncounters)

                var coords = data["coords"];

                var latitude = coords["lat"];
                var longitude = coords["lng"];

                if (latitude != undefined && longitude != undefined) {
                  //var myLatlng = new google.maps.LatLng({lat: Number(latitude), lng: Number(longitude)});
                  var location = {
                    lat: parseFloat(latitude),
                    lng: parseFloat(longitude)
                  };

                  const geocoder = new google.maps.Geocoder();

                  geocoder.geocode({ location: location }, (results, status) => {
                    if (status === "OK") {
                      if (results[0]) {
                        console.log(results);

                        var address =
                          results[1]["address_components"][1]["long_name"];

                            var logHTML = `
             <div class="log-card" style = 'margin-top: 20px'>

                <div class = 'row' style = 'margin-left: 2%; padding-top: 20px;'>
                    <i class="fas fa-exclamation-triangle" style = "color: white; font-size: 30px"></i>

                    <div>

                        <p style = "color: white; margin-left: 20px; margin-top: -5px"> <strong> ${time.getMonth()}/${time.getDay()}/${time.getFullYear()}  - ${time.toLocaleTimeString()} </strong></p>

                        <div class = 'row'>
                          <i class="fas fa-map-marker-alt" style = 'color: white; margin-left: 30px; margin-top: -10px'></i>
                          <p style = "color: white; margin-left: 10px; margin-top: -10px">${address}</p>
                        </div>

                        
                        
                    </div>

                </div>

            </div>
              `;

                  $(logHTML).appendTo("#logs-doc");

                        console.log(address);

                      } else {
                        window.alert("No results found");
                      }
                    } else {
                      window.alert("Geocoder failed due to: " + status);
                    }
                  });

                
                }
              });

              document.getElementById('logs-count').innerHTML = `Encounter Logs <span class = 'badge badge-light'>${todayEncounters} Today</span>`

              console.log(todayEncounters)
            });
        }
      });
    },
  },

  mounted() {
    this.getLogs();
  },
};
</script>

<style>
.log-card {
  background-color: #36393f;
  height: 80px;
  margin-right: 2%;
  border-radius: 10px;
  margin-left: 16%;
}
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