<template>
    <v-app dark>
        <HeaderGuest></HeaderGuest>
          <Nuxt />
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/',
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire',
          },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
      }
    },
    methods:{
      async logOut(e){
        await this.$auth.logout()
        this.$router.push('/login')
      }
    }
  }
  </script>
  