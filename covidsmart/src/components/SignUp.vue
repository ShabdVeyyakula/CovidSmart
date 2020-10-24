<template>
  <div class="login">

    <div class="row">
       <div style="width: 200px"></div>
      <div class="col" style="margin-top:60px">
        <div>
          <h1 style="font-weight: bold; margin-top: 40px; font-size: 60px; color: white;" class="title">Hello,<br> Welcome</h1>
          
        </div>

        <div style="height: 30px"></div>
        
      <div class="form">
          <div class="col">
            <ul style="list-style-type: none;">
              <li><input type="text" placeholder="Email" class="input" v-model="email" style="color: white"></li>
              <div style="height: 50px"></div>
               <li><input type="text" placeholder="Display Name" class="input" v-model="name" style="color: white"></li>
              <div style="height: 50px"></div>
              <li><input type="password" placeholder="Password" class="input" v-model="password" style="color: white"></li>
              <div style="height: 50px"></div>
              <li><input type="password" placeholder="Repeat Password" class="input" v-model="repeatPassword" style="color: white"></li>
              <div style="height: 50px"></div>
              
              <li><button class="inputbtn" @click = "signUpWithEmail()">Sign Up</button></li>

              <li><p style="margin-top: 20px; font-weight: 700; color: red">{{ feedback }}</p></li>
            </ul>
            
            
            
          </div>
      </div>
      </div>
      
    </div>
  
   </div>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue'
import init from '@/firebase'

export default {
  name: 'Signup',

  data () {
    return {
      feedback: null,
      email: null,
      password: null,
      name: null,
      repeatPassword: null,
      authError: false
    }
  },
  methods: {
        signUpWithEmail(){
      if(this.email && this.password && this.repeatPassword && this.name){

        if(this.password == this.repeatPassword){
        this.feedback = null
        this.authError = false

        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(err => {
          console.log(err)

          this.feedback = err.message

          this.authError = true
        }).then(usr => {

          if(this.authError == false){
          console.log("Success")

          var user = firebase.auth().currentUser;

          console.log(user)

          user.updateProfile({
            displayName: this.name
          }).then(() => {
               this.$router.push('/login')
          })

          }

        })
        } else {
          this.feedback = "Password and repeat password don't match"
        }
        
      } else {
        this.feedback = "You cannot leave fields blank"
      }

      firebase.firestore().collection('Users').doc(this.email).set({
        name: this.name,
        email: this.email,

      })


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

body{
    overflow-x:hidden;
}

.login1 .wave{
  position:fixed;
  bottom:0px;
  left: 0px;
}

.login1 .loginimg {
  width: 800px;
  z-index: 999;
  margin-left:180px;
  margin-top: 120px
}

.login1 .input{
  border-right: none;
  border-left: none;
  border-top: none;
  font-weight: bold;
  border-width: 0.2px;
  border-color: #9998983d ;
  width: 400px;
  resize: vertical;
  height: 40px;
  background-color: transparent;
  z-index: 999;
}

.login1 .inputbtn{
  border: none;
  background-color:#21178E ;
  color: white;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
}




</style>
