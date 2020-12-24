<template>
  <section id="Services" class="py-16 grey lighten-4">
    <v-navigation-drawer
      sticky
      permanent
      class="float-right"
      width="320px"
      height="auto"
      v-if="drawer"
    >
      <div class=" ma-5">
        <span class="body-1 font-weight-bold">Cart <span v-if="deleting">(1)</span><span
          v-if="!deleting">(0)</span></span>
        <v-btn icon class="float-right" style="margin-top: -6px" @click="drawer=!drawer">
          <v-icon class="black--text">mdi-close</v-icon>
        </v-btn>
      </div>
      <template v-slot:prepend>
      </template>

      <v-divider class="mx-5"></v-divider>
      <div class="px-5 pt-5 pb-0">

        <span>Your Items</span>
        <span style="font-size: 13px;" class="float-right">Subtotals: <span v-if="deleting">1000</span><span
          v-if="!deleting">0</span>$</span>
      </div>
      <v-card flat style="border:1px solid #ddd" class="ma-5" v-if="deleting">
        <v-card-title><span class="subtitle-1 font-weight-bold"> Restaurant Service </span>
          <v-spacer></v-spacer>


          <span><v-btn icon @click="deleting=!deleting"><v-icon>mdi-delete</v-icon></v-btn></span></v-card-title>
        <v-card-subtitle> service 1</v-card-subtitle>
        <v-card-text class="pb-0">Price: <span class="float-right font-weight-bold">50$</span></v-card-text>
        <v-card-text>VAT: <span class="float-right font-weight-bold">5$</span></v-card-text>
        <v-card-text class="black--text">Total: <span class="float-right font-weight-bold">55$</span></v-card-text>
      </v-card>
      <p class="ma-5 text-center" v-if="!deleting">There is no item in your cart</p>
      <div class="ma-5">


        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                block
                class="a black white--text"
                v-if="deleting"
                v-bind="attrs"
                v-on="on"

              >
                <v-icon>mdi-cart</v-icon>
                Checkout
              </v-btn>
            </template>
            <v-card style="background-color: #00bcd4;">
              <v-toolbar
                dark
                color=""
                tile
              >
                <v-btn
                  icon
                  dark
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <h3>Transactions</h3>
              </v-toolbar>
              <v-row justify="center">
                <v-col class="pa-16">
                  <h2 class="text-center mb-5 white--text">Service <span class="yellow--text">Hub</span></h2>
                  <v-img class="mx-auto mb-10"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/600px-Windows_Settings_app_icon.png"
                         width="150px" height="150px"></v-img>
                  <div class="text-center font-weight-bold" style="font-size: 16px">
                    <p class="target-justify white--text" v-for="(n,index) in 5" :key="n">{{ index + 1 }}. Lorem Ipsum
                      is
                      simply dummy text of the printing and typesetting industry. </p>

                  </div>
                </v-col>
                <v-col>
                  <v-form class="pa-16">
                    <v-text-field label="Transaction ID" class="black--text" outlined>
                    </v-text-field>

                    <v-text-field label="Transaction Number" class="black--text" outlined>
                    </v-text-field>
                    <v-btn class="black" dark>
                      <NuxtLink to="/profile"> Send</NuxtLink>
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog>
        </v-row>


        <v-btn block outlined class="mt-3 black--text" @click="drawer=!drawer">Continue To Shopping</v-btn>

      </div>
    </v-navigation-drawer>


    <h2 class="display-3 text-center font-weight-bold" style="color: #00bcd4;">Pricing</h2>
    <p style="font-size:18px" class="mt-3 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.</p>
    <v-row class="mx-auto">
      <v-col v-for="(n,index) in 3" :key="n">
        <div class="container">
          <div class="card mx-auto">
            <div class="circle">
              <h2>0{{ index + 1 }}</h2>
            </div>
            <div class="content mx-auto">
              <v-list dense class="list ">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text" style="border-bottom: 1px solid #ddd"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-btn
                class="a pb-7"
                @click="(drawer=!drawer) && (deleting=true)"
              >
                <v-icon>mdi-cart</v-icon>
                Add to Cart
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <!--<v-card tile dense class="ma-16 pa-10">-->
      <pricing-table/>
<!--
    </v-card>-->
  </section>
</template>

<script>
import pricingTable from "@/components/pricingTable";
export default {
  components:{pricingTable},
  name: "LandingPageGetService",
  data: () => ({
    deleting: true,
    hide: true,
    drawer: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    item: 1,
    items: [
      {text: 'Real-Time', icon: 'mdi-clock'},
      {text: 'Audience', icon: 'mdi-account'},
      {text: 'Conversions', icon: 'mdi-flag'},
    ],
    items2: [
      {title: 'Home', icon: 'mdi-home-city'},
      {title: 'My Account', icon: 'mdi-account'},
      {title: 'Users', icon: 'mdi-account-group-outline'},
    ],
    country: ['Bangladesh', 'India', 'Nepal', 'Japan']
  })
}
</script>


<style scoped>
.container .card {
  position: relative;
  width: 300px;
  height: 420px;
  background-color: #fff;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.container .card .circle {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  clip-path: circle(180px at center 0);
  text-align: center;
}

.container .card .circle h2 {
  color: #fff;
  font-size: 4.5em;
  padding: 30px 0;
}

.container .card .content {
  position: absolute;
  bottom: 10px;
  padding: 20px;
  text-align: center;
}

.container .card .content .list {
  color: #666;
  width: 260px;
}

.container .card .content .a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border-radius: 40px;
  text-decoration: none;
  margin-top: 20px;
}

.container .card:nth-child(1) .circle,
.container .card:nth-child(1) .content .a {
  background-color: #00bcd4;
}

.container .card:nth-child(2) .circle,
.container .card:nth-child(2) .content .a {
  background-color: #00bcd4;
}

.container .card:nth-child(3) .circle,
.container .card:nth-child(3) .content .a {
  background-color: #00bcd4;
}

</style>
