<template>
  <div>
    <v-app dark>
        <Sidebar></Sidebar>
      <Header></Header>
     
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
    name: "VueTravelHome",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Header, Sidebar }
};
</script>

<style lang="scss" scoped>
</style>