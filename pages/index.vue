<template>
<div>
<first-sectiion/>
  <cards/>
<description1/>
  <description2/>
  <features/>
  <youtube/>
</div>
</template>

<script>

import FirstSectiion from "../components/RestaurantLandingPage/FirstSectiion";
import Description1 from "../components/RestaurantLandingPage/Description1";
import Description2 from "../components/RestaurantLandingPage/Description2";
import Features from "../components/RestaurantLandingPage/Features";
import Youtube from "../components/RestaurantLandingPage/Youtube";
import Cards from "../components/RestaurantLandingPage/Cards";



export default {
  name: "Index",
  components:{
    FirstSectiion,
    Cards,
    Description1,
    Description2,
    Features,
    Youtube
  },
  data() {
    return {

      input: "",
     /* images: [
        {
          "url": "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "text": "Do You Need Restaurant Service?"
        },
        {
          "url": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "text": "Do You Need Medical Shop Service?"
        },
        {
          "url": "https://images.unsplash.com/photo-1540340061722-9293d5163008?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "text": "Do You Need Super Shop Service?"
        },
      ],*/
      model: 0,

    }
  }
}
</script>

<style scoped>
/*
#jumpingbtn {
  animation-name: jump;
  animation-duration: 10s;
  transition: ease;
}

@keyframes jump {
  0% {
    transform: scale(1)
  }
  10% {
    transform: scale(1.3)
  }
  20% {
    transform: scale(1)
  }
  30% {
    transform: scale(1.3)
  }
  40% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.3)
  }
  60% {
    transform: scale(1)
  }
  70% {
    transform: scale(1.3)
  }
  80% {
    transform: scale(1)
  }
  90% {
    transform: scale(1.3)
  }
  100% {
    transform: scale(1)
  }
}
*/

</style>
