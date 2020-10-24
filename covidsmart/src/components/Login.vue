<template>
  <div class="login">

    <div class="row">
      <div style="width: 240px"></div>
      
      <div class="col" style="margin-top:60px">
        <div >
          <h1 style="font-weight: bold; margin-top: 40px; font-size: 60px; color: white;" class="title">Hello,<br> Welcome Back</h1>
          
        </div>

        <div style="height: 50px"></div>
        
      <div class="form" >
          <div class="col">
            <ul style="list-style-type: none;">
              <li><input type="text" placeholder="Email" class="input" v-model = "email" style="color: white"></li>

              <div style="height: 70px"></div>

              <li><input type="password" placeholder="Password" class="input" v-model="password" style="color: white"></li>

              <li><p style="color: red">{{ feedback }}</p></li>

              <div style="height: 50px"></div>
              <div style="height: 50px"></div>
              <li><button class="inputbtn" @click = "loginWithEmail()">Sign In</button></li>
              <div style="height: 30px"></div>
              <li><h5 style="color: black; margin-left: 0px; color: white">Don't have an account? <strong><u class="signup">
                <router-link :to="{ name: 'Signup' }" style="color: #21178E">
                  Sign Up!
                </router-link>
                </u></strong></h5></li>
            </ul>
          </div>
      </div>
      </div>
      
    </div>
  
   </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      feedback: null,
      authError: false,
    }
  }, 
  methods: {
    loginWithEmail(){
      if(this.email && this.password){
        this.feedback = null
        this.authError = false

        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(err => {
          console.log(err)
          this.authError = true

          this.feedback = "Credentials are incorrect"
        }).then(user => {
          console.log(this.authError)
          if(this.authError == false){
            
            this.$router.push('/dashboard')
          }
        })
      } else {
        this.feedback = "You cannot leave fields blank"
      }
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

body{
    overflow-x:hidden;
}

.login .wave{
  position:fixed;
  bottom:0px;
  left: 0px;
}

.login .loginimg {
  width: 800px;
  z-index: 999;
  margin-left:180px;
  margin-top: 120px
}

.login .input{
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

.login .inputbtn{
  border: none;
  background-color:#21178E ;
  color: white;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
}

.login .signup:hover{
  cursor: pointer;
  
}


</style>
