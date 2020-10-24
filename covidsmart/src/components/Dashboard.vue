<template>

    <div>
        <Sidebar />

        <div id="container-body-main" >
            <h1 class="my-4">Dashboard
      </h1>
            <hr>


          <div class="row">

        <div class="col-xl-3 col-md-6 mb-4" style="background-color: #8e9297

">
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

            

            
          </div>

            



        </div>


    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
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