<template>
  <v-app >
    <navbar/>
    <v-main>
      <nuxt/>
    </v-main>
    <page-footer/>
  </v-app>
</template>

<script>
import Navbar from "../components/RestaurantLandingPage/Navbar";
import PageFooter from "../components/RestaurantLandingPage/PageFooter";


export default {
  name:"RestaurantLandingPage",
  components:{Navbar,PageFooter}
}
</script>
<style scoped>
</style>
