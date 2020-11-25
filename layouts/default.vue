<template>
  <v-app >
    <navbar/>
    <v-content class="scroll">
      <nuxt/>
    </v-content>
    <page-footer/>
  </v-app>
</template>

<script>
import Navbar from "../components/RestaurantLandingPage/Navbar";
import PageFooter from "../components/RestaurantLandingPage/PageFooter";


export default {
  name:"Restaurant Landing Page",
  components:{Navbar,PageFooter}
}
</script>
<style scoped>

.scroll{
  scroll-behavior: smooth;
}
.fade-enter, .fade-leave{
  opacity: 0;
  transform: translateY(-2em);
}
.fade-enter-active, .fade-leave-active{
    transition: all .5s ease;
}
</style>
