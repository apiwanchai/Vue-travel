<template>
    
    <v-navigation-drawer
      fixed
      app
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
</template>

<script>
export default {
    name: 'VueTravelSidebar',

    data() {
        return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/home',
        },
      ],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed:{
        drawer:{
            get( ){
                return this.$store.state.drawer
            },
            set(newVal){
                this.$store.commit('set_drawer',newVal)
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>