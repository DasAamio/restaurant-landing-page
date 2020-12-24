<template>
<div>
  <v-dialog
    v-model="dialog"
    max-width="320"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="yellow--text mr-3"
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-icon small>mdi-user</v-icon>
        Log in
      </v-btn>
    </template>
    <v-card class="pa-5 pt-0">
      <v-card-title class="subtitle-1 pl-2 mb-8" style="border-bottom: 1px solid #ccc">
        Login
      </v-card-title>
      <v-form>
        <v-text-field
          color="black mt-5"
          type="email"
          v-model="form.email"
          label="Email"
          placeholder="Email"
          :rules="passwordRules"
          prepend-inner-icon="mdi-account-circle"
          outlined
          required
        >
        </v-text-field>

        <v-text-field
          color="black"
          label="Password"
          type="password"
          :type="showPassword ? 'text' : 'password'"
          v-model="form.password"
          placeholder="Password"
          :rules="passwordRules"
          prepend-inner-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          outlined
        ></v-text-field>
        <v-card-actions class="">
          <v-btn
            color="primary white--text " small
            @click="requestLogin()"
          >
            Login
          </v-btn>
          <v-btn class="blue--text ml-12" text>Forget password?</v-btn>
        </v-card-actions>
        <span>
            <CreateAccount/>
        </span>
      </v-form>
    </v-card>
  </v-dialog>
</div>
</template>

<script>

import gql from 'graphql-tag'

const OWNER_LOGIN = gql`
  mutation OwnerLogin($email: String, $password: String, $deviceToken: String) {
  OwnerLogin(email: $email, password: $password, deviceToken: $deviceToken) {
    firstName
    lastName
    email
    phoneNo
    profilePic
    isEmailVerified
    isPhoneVerified
    billingType
    billingAddress
    jwt
    msg
    code
  }
}
`
export default {

name: "LoginAccount",
 data(){
  return {
    dialog: false,
    showPassword: false,
    text: '',
    form: {
      email: '',
      password: '',
      deviceToken: ''
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length > 8 || "Password length is too short. Minimum length is 8.",
    ],

  }
 },
methods: {
  requestLogin() {
    if (this.form.email && this.form.password) {
      this.$apollo.mutate({
        mutation: OWNER_LOGIN,
        variables: {
          email: this.form.email,
          password: this.form.password,
          deviceToken: this.deviceToken
        }
      })
        .then(res => {
          console.log('res--->', res)

          if (res.status === 200) {
            // console.log("login success", res.body);

            let user = res.body.admin

            console.log('user', user)

            user.jwt = res.body.jwtToken

            console.log('user', user)

            this.$cookies.set(process.env.VUE_APP_USER_COOKIE, user, 900000);
            this.$store.commit('SET_ADMIN_DATA', user)

            this.authenticateUser();

            this.$toasted.show("Login Success", {
              type: "success",
              duration: 2000
            });

            this.$router.push(this.$route.query.redirect || "/dashboard");

          } else {
            console.log("Login failed. Username or Password does not match.");

            this.$toasted.show("Username or password does not matched", {
              type: "error",
              duration: 4000
            });
          }


        }).catch(err => {
        console.log('error', err)
      })
    } else {
      console.log('input all filed')
      }
    }
  }
}
</script>

<style scoped>

</style>
