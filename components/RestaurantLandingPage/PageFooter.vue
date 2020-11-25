<template>
  <v-footer
    class="cyan darken-4 pa-10 "
  >
    <v-row class=" py-6" style="border-bottom: 1px solid white">
      <v-col cols="6">
        <h2 class="text-center font-weight-bold white--text mt-1">About Us</h2>
        <p class="text-justify white--text pt-10 px-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

        <div class="my-8" align="center">

          <v-btn href="https://www.facebook.com/consoleIt.io" target="_blank" icon class="white--text">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>

          <v-btn href="https://www.instagram.com/console.it/"  target="_blank" icon class="mx-5 white--text">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn href="https://www.youtube.com/watch?v=4dFKEZ1Bp0A" target="_blank" icon class="mx-5 white--text">
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
          <v-btn href="" target="" icon class="mx-5 white--text">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn href="" target="" icon class="white--text">
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>

        </div>

      </v-col>




      <v-col cols="3">
        <v-list-item>
          <v-list-item-content class="white--text">
            <v-list-item-title><h2 class="mb-8 ml-16">Explore</h2></v-list-item-title>
            <v-list-item-title><a href="" style="line-height: 25px"
                                  class="ml-16 white--text text-decoration-none">
              Home</a></v-list-item-title>
            <v-list-item-title><a href="" style="line-height: 25px" class="ml-16 white--text text-decoration-none">Why
              Us</a></v-list-item-title>
            <v-list-item-title><a href="" style="line-height: 25px" class="ml-16 white--text text-decoration-none">Our
              Services</a></v-list-item-title>
            <v-list-item-title><a href="" style="line-height: 25px"
                                  class="ml-16 white--text text-decoration-none">FAQ</a></v-list-item-title>

            <v-list-item-title><a href="" style="line-height: 25px"
                                  class="ml-16 white--text text-decoration-none">Quick Access</a></v-list-item-title>

            <v-list-item-title><a href="" style="line-height: 25px" class="ml-16 white--text text-decoration-none">Contact
              Us</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>

      <v-col cols="3">
        <v-list-item>
          <v-list-item-content class="white--text">
            <v-list-item-title><h2 class="mb-8">Quick Contact</h2></v-list-item-title>
            <v-list-item-title class="mb-3">
              <v-icon color="white">mdi-phone</v-icon>
              +8801879-149501
            </v-list-item-title>
            <v-list-item-title class="mb-3">
              <v-icon color="white">mdi-message</v-icon>
              contact@consoleit.io
            </v-list-item-title>

            <v-list-item-title class="mb-7">
              <v-icon color="white">mdi-message</v-icon>
              official@consoleit.io
            </v-list-item-title>
            <v-list-item-title><h3 class="mb-4">Office Address</h3></v-list-item-title>
            <v-list-item-title>
              <v-icon color="white">mdi-map-marker</v-icon>
              3rd floor, Rongdhonu-15 <br><span class="ml-7">Chowkidekhi, Sylhet.</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <span class="white--text mt-8">&copy; {{ new Date().getFullYear() }} <a id="footer" class="text-decoration-none" href="https://consoleit.io/#/"
                                                                            target="_blank">Console.IT</a></span>
    <v-spacer></v-spacer>
    <div class="mr-8 mt-8">
      <a id="footer">Privacy Policy</a>
      <a id="footer" class="mx-4">Terms & Conditions</a>
    </div>

  </v-footer>
</template>


<script>
export default {}
</script>

<style scoped>
#footer {
  font-weight: lighter;
  color: white;
}

#footer:hover {
  text-decoration: underline;

}
</style>
