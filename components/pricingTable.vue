<template>
  <div class="ma-16">
    <v-simple-table>
      <template v-slot:default>
        <thead style="background: #00bcd4">
        <tr>
          <th class="text-left">
            <h3>Features</h3>
          </th>
          <th class="text-center">
            <h3>Basic</h3>
            <h1>BDT. {{priceOfBasic}}</h1>
            <span></span>
            <v-btn outlined color="white">Get started now</v-btn>
          </th>
          <th class="text-center">
            <h3>Advance</h3>
            <h1>BDT. {{ priceMedium }}</h1>
            <v-btn outlined color="white">Get started now</v-btn>
          </th>
          <th class="text-center pa-5">
            <h3>Premium</h3>
            <h1>BDT. {{ pricePremium }}</h1>
            <v-btn outlined color="white">Get started now</v-btn>
          </th>

        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(service,index) in ALlSingleService" :key="index"
        >
          <td>{{ service.serviceName }} {{ service.servicePrice }}</td>
          <td align="center">
            <v-icon v-if="index<=4" color="green lighten-2">mdi-check-circle</v-icon>
            <v-icon v-else small> mdi-minus</v-icon>
          </td>
          <td align="center">
            <v-icon v-if="index<=6" color="green lighten-2">mdi-check-circle</v-icon>
            <v-icon v-else small> mdi-minus</v-icon>
          </td>
          <td align="center">
            <v-icon color="green lighten-2">mdi-check-circle</v-icon>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <P>{{PRICE}}</P>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "pricingTable",
  apollo: {
    ALlSingleService: gql`
    query getAllSingleService{
        ALlSingleService{
            serviceName
            parentType
            servicePrice
        }
    }`
  },
  computed: {
    // const ALlSingleService = new Array()
    priceOfBasic() {
      let price = 0;
      let ALlSingleService = new Array()
      ALlSingleService.map(( service, index ) => {
        if (index <= 4) {
          price += service.servicePrice
        }
      });
      return price;
    },
    priceMedium() {
      let price = 0;
      let ALlSingleService = new Array()
      ALlSingleService.map(( service, index ) => {
        if (index <= 6) {
          price += service.servicePrice
        }
      });

      return price;
    },
    pricePremium() {
      let price = 0;
      const ALlSingleService = []
      ALlSingleService.map(( service, index ) => {
        if (index <= 6) {
          price += service.servicePrice
        }
      });
      return price;
    },
    PRICE() {
    }
  }

}
</script>

<style scoped>

</style>
