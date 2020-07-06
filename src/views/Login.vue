<template>
  <v-app>
    <v-card class="mx-auto mt-12" max-width="400">
      <v-card-title>Login Form</v-card-title>
      <v-card-text>
        <v-form v-model="isValid">
          <v-text-field
            label="Email"
            v-model="email"
            :rules="[v => !!v || 'Email is required']"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="[v => !!v || 'Password is required']"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
      <v-btn color="primary" :disabled="!isValid" type @click="loginHandler" class="mx-auto">Login</v-btn>
      <v-snackbar v-model="showError">{{ error }}</v-snackbar>
      </v-card-actions>
    </v-card>
  </v-app>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data: () => ({
    email: null,
    password: null,
    isValid: true,
    showError: false,
  }),
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    ...mapActions(["login"]),

    loginHandler() {
      this.login({
        email: this.email,
        password: this.password
      })

      if (this.error) {
        this.showError = true
        return 
      }
      this.$router.push({ name: 'user' }); 
    }
  }
};
</script>
