<template>
  <div class="login">
    <h1>Sign In</h1>
    <form action="#" method="post" class="contact-form">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
        required
      />
      <input
        type="text"
        name="password"
        id="password"
        placeholder="Your password"
        required
      />
      <input type="submit" value="Sign In" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to the Login Page",
    };
  },
};
</script>

<style>

h1 {

}

.login {
  /* background-color: red; */
  margin-top: 30vh;
}

.login input[type="text"],
.login input[type="email"] {
  margin: 10px auto;
  padding: 7px;
  width: 20%;
  display: block;
  border-radius: 4px;
}

*:focus {
  outline: none;
}
</style>