<template>
  <v-app>
    <v-card class="mx-auto mt-12" max-width="400">
      <v-card-title>User profile</v-card-title>
      <v-img :src="user.imgSrc"></v-img>
      <v-card-title>{{user.name}}</v-card-title>
      <v-card-text>{{user.email}}</v-card-text>
      <v-card-actions>
      <v-btn color="primary" @click="logoutHandler" class="mx-auto">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template> 

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "user",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutHandler() {
      this.logout()
      this.$router.push({ name: 'login' });
    }
  }
};
</script>