<template>
  <v-app>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>User profile</v-card-title>
      <v-img :src="users[0].imgSrc"></v-img>
      <v-card-title>{{users[0].name}}</v-card-title>
      <v-card-text>{{users[0].email}}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="logout">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template> 

<script>
export default {
  name: "user",
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    logout () {
      this.$router.push("/");
    }
  }
};
</script>