<template>
<div>
   <nav>
        <v-app-bar flat class="px-16 ml-0" style="background-color: #00bcd4;">
          <v-app-bar-title>
            <h2 class="white--text pl-3" style="font-weight: bold;">Service
            <span class="yellow--text">Hub</span></h2>
            <!--style="color: #ffeb3b"-->
          </v-app-bar-title>
          <v-spacer></v-spacer>

          <v-row>
            <v-dialog
              v-model="dialog"
              max-width="300"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="yellow--text mr-3"
                  text
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon small>mdi-logout</v-icon>Log in
                </v-btn>
              </template>
              <v-card class="pa-5">
                <v-card-title class="subtitle-1 pl-2">
                 Do you want to log out?
                </v-card-title>
                <!--<v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                --><v-card-actions class="">

                  <v-btn
                    color="green darken-1 white--text " small
                    @click="dialog = false"
                  >
                    Yes
                  </v-btn>
                  <v-btn
                    color="red darken-1 white--text"
                    @click="dialog = false" small
                  >
                    No
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-btn icon class="yellow--text mr-3 " to="#Services"><v-icon>mdi-cart</v-icon><v-badge color="yellow black--text" content="1"></v-badge></v-btn>
          </v-app-bar>
      </nav>

</div>
</template>
<script>
import Features from "@/components/RestaurantLandingPage/Features";


export default {
name: "Navbar",
components:{
  Features
},
  data () {
    return {
      dialog: false,
    }
  }
}
</script>

<style scoped>

</style>
