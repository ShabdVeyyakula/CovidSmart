<template>
  <div id="app" >

    <div class="row" >
    <router-link to="/login"  href="/login" style="text-decoration: none; color: #898989; margin-left: 90%;">Login/Signup</router-link>
    </div>



    <div style="margin-left: 15%;">
      <div style="margin-top: 13%" >
        <h1 style="font-size: 70px; text-align: left; color: #8a8e96; font-weight: 600">Stay Distant, <br> Stay <strong>Safe</strong> </h1>

        <h1 style="text-align: left; color: #9C6DFF; font-weight: 700; margin-top: 2%">CovidSmart</h1>

        <img src = '@/assets/dashboard_pic.png' width="50%" style="position: absolute; margin-top: -20%; margin-left: 0%">

        <img src = '@/assets/analytics.png' width="8%" style="position: absolute; margin-top: 7%; margin-left: 8%">

        <img src = '@/assets/mobile_app.png' width="8%" style="position: absolute; margin-top: 0%; margin-left: -6%">

        <img src = '@/assets/tracker.png' width="8%" style="position: absolute; margin-top: -23%; margin-left: 30%">

        <p style="text-align: left; width: 35%; color: #565c65; font-size: 18px">With CovidSmart keep track of where you go and what people you encounter, so you can keep yourself safe! Get started today!</p>

        <router-link to="/login" style="margin-left: -89%; margin-top: 1%" class="start-btn" tag="button">Get started</router-link>
      </div>
    </div>

  
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.start-btn{
  background-color: #9C6DFF;
  color: white;
  height: 45px;
  width: 160px;
  border-radius: 2px;
  border: none;
  outline: none;
  transition: 0.3s;

}

.start-btn:hover{
  background-color: #7841ec;
  color: white;
  border-radius: 20px;
}

.start-btn:focus{
  outline: none;
  border: none;

}
</style>
