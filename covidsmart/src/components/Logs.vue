<template>
  <div>
    <Sidebar />
    <div id="container-body-main">

        <h1 style="margin-left: -50%">Encounter Logs</h1>

        <div id = 'logs-doc'>

         
        </div>

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
    };
  },

  methods: {
    getLogs() {

            firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var email = user.email;

          firebase.firestore().collection("Logs").where("email", "==", email).onSnapshot(snapshot => {

              document.getElementById('logs-doc').innerHTML = ``

              snapshot.forEach(doc => {
                var data = doc.data();
                console.log(data);

                var time = data['time']

                var coords = data['coords']

                var latitude = coords['lat']
                var longitude = coords['lng']

            if(latitude != undefined && longitude != undefined){
              //var myLatlng = new google.maps.LatLng({lat: Number(latitude), lng: Number(longitude)});
              var latLng = new google.maps.LatLng(Number(latitude), Number(longitude));

              var logHTML = `
             <div class="log-card" style = 'margin-top: 20px'>

                <div class = 'row' style = 'margin-left: 2%; padding-top: 2%'>
                    <i class="fas fa-exclamation-triangle"></i>
                    <p style="color: white">Log</p>
                </div>

            </div>
              `

              $(logHTML).appendTo('#logs-doc');
            }
        

                    })
              
            })




        }
      });
    
    },

  },

  mounted() {
    this.getLogs()
  }
};
</script>

<style>

.log-card{
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