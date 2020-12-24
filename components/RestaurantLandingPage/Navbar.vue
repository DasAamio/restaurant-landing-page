<template>
  <div>
    <nav>
      <v-toolbar flat class="px-16 ml-0" style="background-color: #00bcd4;">
        <v-toolbar-title>
            <h2 class="white--text pl-3" style="font-weight: bold;">Service
            <span class="yellow--text">Hub</span></h2>
        </v-toolbar-title>

        <v-spacer></v-spacer>

          <v-btn class="yellow--text" text>Introduction</v-btn>
          <v-btn class="yellow--text" text>Demo</v-btn>
          <v-btn class="yellow--text" text>Pricing</v-btn>
          <v-btn class="yellow--text" text>More</v-btn>
          <v-btn icon class="yellow--text mr-3 " to="">
            <v-icon>mdi-cart</v-icon>
              <v-badge color="yellow black--text" :content="cart"></v-badge>
        </v-btn>
          <login-account/>
      </v-toolbar>
    </nav>
  </div>
</template>
<script>
import Features from "@/components/RestaurantLandingPage/Features";
import CreateAccount from "@/components/CreateAccount";
import LoginAccount from "@/components/LoginAccount";

export default {
  name: "Navbar",
  components: {
    Features,
    CreateAccount,
    LoginAccount
  },
  data() {
    return {
      errorMessages: '',
      cart: 2

    }
  }
}
</script>

<style scoped>

</style>
