<template>
  <div class="from-inline">
    <h3>Sign In</h3>
    <div class="form-group">
      <input type="text"
             placeholder="email"
             class="form-control"
             v-model="email"/>

      <input type="password"
             placeholder="password"
             class="form-control"
             v-model="password"/>
      <button class="btn btn-primary" @click="signIn">SignIn</button>
    </div>
    <br>
    <p>{{error.message}}</p>
    <router-link to="/signup">Go to Sign Up</router-link>
  </div>
</template>

<script>
  import { firebaseApp } from "../firebaseApp";
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signIn() {
        firebaseApp.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            this.error = err;
          })
        ;
      }
    }
  }
</script>

