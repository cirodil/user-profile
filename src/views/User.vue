<template>
  <v-app>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>User profile</v-card-title>
      <v-img :src="user.imgSrc"></v-img>
      <v-card-title>{{user.name}}</v-card-title>
      <v-card-text>{{user.email}}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="logout">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template> 

<script>
export default {
  props: ['prop'],
  name: "user", 
  computed: {
    user() {
      return this.$store.getters.getUserByEmail(this.$store.state.loggedUserEmail);
    }
  },
  methods: {
    logout () {
      this.$store.commit('setLoggedUserEmail', null);
      this.$router.push("/");
    }
  }
};
</script>