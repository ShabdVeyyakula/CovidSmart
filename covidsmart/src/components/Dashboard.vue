<template>

    <div>
        <Sidebar />

        <div id="container-body-main" >
            <h1 class="my-4">Dashboard
      </h1>
            <hr>


          <div class="row">

        <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-danger shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Encounters(Today)</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{ today }}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-danger shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Hot Spots</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800"> 890 Marcello Avn.</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-danger shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Large Groups</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">2</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div class="card shadow mb-4" style="margin-right: 30px">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">More Stats(out of a 100)</h6>
                </div>
                <div class="card-body">
                  <h4 class="small font-weight-bold">Encounters <span class="float-right">20%</span></h4>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 class="small font-weight-bold">Amount of Large Groups <span class="float-right">20%</span></h4>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 class="small font-weight-bold">You Should get Tested <span class="float-right">20%</span></h4>
                  <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  
                </div>
              </div>



        </div>


    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
var Chart = require('@/vendor/chartJS/Chart.js')
import init from "@/components/init";
import firebase from "firebase";

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
    },
    data() {
        return {
          encountersToday: [],
          today: null,
          data: [],

        }
    },

    beforeMount() {
      this.getTodayEncounters()
    },

    methods: {
      getTodayEncounters() {
        

        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            var name = user.displayName;
            var email = user.email;
            
            

        firebase.firestore().collection('Users').doc(email).get().then(snapshot => {
              
                let data = snapshot.data();
                let today = data['totalencounters']
                this.today = today
                this.encountersToday.push(data)
              

            })

        firebase.firestore().collection('Logs').where('email', '==', email).get().then(snapshot => {
          snapshot.forEach(doc => {
                let data = doc.data();
                this.today = today
                this.data.push(data)

          })
              
                
              

            })
      }
      })
        
      }
    },

    
}
</script>

<style>

#container-body-main{
    margin-left: 253px; 
    margin-top: 3%
}

</style>