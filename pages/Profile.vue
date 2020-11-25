<template>
<div>

  <div class="pa-10 white--text text-center black"> <!--style="background-color: #00bcd4;"-->
    <h2 class="white--text" style="font-weight: bold;">Service
      <span class="yellow--text">Hub</span></h2>Restaurant Profile Form</div>
  <v-row>
    <v-col></v-col>
    <v-col cols="6">
      <v-text-field label="Outlet Name" width="300" class="mt-10 black--text" outlined></v-text-field>
      <v-text-field label="Address" width="300" class="black--text" outlined></v-text-field>
      <v-text-field label="Postal Code" width="300" class="black--text" outlined></v-text-field>
      <v-text-field label="First Name" width="300" class="black--text" outlined></v-text-field>
      <v-text-field label="Last Name" width="300" class="black--text" outlined></v-text-field>
      <v-text-field label="Contact Number" width="300" class="black--text" outlined></v-text-field>
      <v-text-field label="Email" width="300" class="black--text" outlined></v-text-field>
      <v-btn  class="mb-16 mx-auto black white--text">Submit Form</v-btn>

    </v-col>
    <v-col></v-col>
  </v-row>
</div>
</template>

<script>
export default {
name: "Profile",
  layout: "PageProfile"
}
</script>

<style scoped>

</style>
