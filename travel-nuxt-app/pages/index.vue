<template>
  <div class="pa-16">
    <h1 class=" text-center mt-3" >Travel In Bacelona</h1>
    <v-carousel
    cycle
    height="700"
    class="mb-0 px-16 mt-5"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(src, i) in imageList"
      :key="i"
     
    >
    <v-img :src="src" max-height="700" aspect-ratio="1.4" contain></v-img>
    </v-carousel-item>
  </v-carousel>
  <h1 class="mt-5 text-center">Want To see More Plase Login</h1>
</div>
  
</template>

<script>
export default {
  name: 'IndexPage',
  layout:'Guest',
   data(){
    return {
      imageList: [
        require("../assets/img/01.jpg"),
        require("../assets/img/02.jpg"),
        require("../assets/img/03.jpg"),
        require("../assets/img/04.jpg"),
        require("../assets/img/05.jpg"),
        require("../assets/img/06.jpg"),
      ],
    }
    
  },
 
  
}
</script>
<style>
.parallax {
   background-attachment:fixed;
   background-size: 100% auto;
 }
</style>