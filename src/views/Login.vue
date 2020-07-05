<template>
  <v-app>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>Login Form</v-card-title>
      <v-card-text>
        <v-form v-model="isValid" id="login" @submit.prevent="submitHandler">
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
        <v-btn color="primary" form="login" :disabled="!isValid" type>Login</v-btn>
      </v-card-actions>
      <v-alert v-if="isAlert" type="error">User not found</v-alert>
    </v-card>
  </v-app>
</template>


<script>
export default {
  name: "Login",
  data: () => ({
    email: null,
    password: null,
    isValid: true,
    isAlert: false
  }),
  methods: {
    submitHandler() {
      const formData = {
        email: this.email,
        password: this.password
      };
      if (
        formData.email == this.$store.state.users[0].email &&
        formData.password == this.$store.state.users[0].password
      ) {
        this.$router.push("/user");
      } else {
        this.isAlert = !this.isAlert
        setTimeout(() => {this.isAlert = !this.isAlert}, 500) 
      }
    }
  }
};
</script>
