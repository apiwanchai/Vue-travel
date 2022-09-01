<template>
    <div>
    <v-app-bar  fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn class="mr-3" to="/login">
        LogIn
      </v-btn>
      <v-btn to="/register">
        Register
      </v-btn>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'VueTravelHeaderGuest',

    data() {
        return {
            title: 'Guest'
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>