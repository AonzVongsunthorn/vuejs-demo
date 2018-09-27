<template>
  <div class="from-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input type="text"
             placeholder="email"
             class="form-control"
             v-model="email"/>

      <input type="password"
             placeholder="password"
             class="form-control"
             v-model="password"/>
      <button class="btn btn-primary" @click="signUp">Sign Up</button>
    </div>
    <br>
    <p>{{error.message}}</p>
    <router-link to="/signin">Go to Sign In</router-link>
  </div>
</template>

<script>
  import {firebaseApp} from "../firebaseApp";

  export default {
    data() {

      return {

        email: '',
        password: '',
        error: {
          'message': ''

        }
      }
    },

    methods: {
      signUp() {
        firebaseApp
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            this.error = err;
          })
      }
    }
  }

</script>
