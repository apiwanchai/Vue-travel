<template>
  <div>
    <v-app-bar  fixed app>
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="logOut()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
  </v-app-bar>
  </div>
</template>

<script>
export default {
    name: 'VueTravelHeader',

    data() {
        return {
      title: 'Vuetify.js',
        };
    },

    mounted() {
        
    },

    methods: {
        async logOut(e){
      await this.$auth.logout()
      this.$router.push('/login')
    },
    toggleDrawer(){
        this.$store.commit('set_drawer',!this.$store.state.drawer)
    }
    },
};
</script>

<style lang="scss" scoped>
</style>