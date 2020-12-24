<template>
  <div>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="320px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="blue--text mt-8"
          v-bind="attrs"
          v-on="on"
          text
          block

        >
          Create Account?
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="grey lighten-4 orange--text text-lighten-1">Create Account</v-card-title>
        <div class="pa-5">
          <v-text-field
            dense class="pb-0 mb-0"
            color="black"
            type="text"
            label="First Name"
            placeholder="First Name"
            v-model="form.firstName"
            :rules="firstNameRules"
            prepend-inner-icon="mdi-account"
            outlined
            required
          ></v-text-field>
          <v-text-field
            dense color="black"
            type="text"
            label="Last Name"
            placeholder="Last Name"
            v-model="form.lastName"
            :rules="lastNameRules"
            prepend-inner-icon="mdi-account"
            outlined
            required>
          </v-text-field>

          <VuePhoneNumberInput
            class="rounded mb-6"
            v-model="form.phoneNo"
            default-country-code="BD"
            no-validator-state
          />
          <v-text-field
            dense color="black"
            type="email"
            label="Email"
            placeholder="Email"
            v-model="form.email"
            :rules="emailRules"
            prepend-inner-icon="mdi-email"
            outlined
            required
          ></v-text-field>
          <v-text-field
            dense color="black"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            placeholder="Password"
            v-model="form.password"
            :rules="passwordRules"
            prepend-inner-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            outlined
            required
          ></v-text-field>
          <v-text-field
            dense color="black"
            :type="showConfirmPassword ? 'text' : 'password'"
            label="Confirm Password"
            placeholder="Confirm Password"
            v-model="form.confirmPassword"
            :rules="confirmPasswordRules"
            prepend-inner-icon="mdi-lock"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            outlined
            required
          ></v-text-field>

          <v-card-actions>
            <v-btn class="mx-auto" @click="requestSignUp()">Create Account</v-btn>
          </v-card-actions>

        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import phoneValidate from "vn-phone-validator"
import validator from "email-validator"
import gql from 'graphql-tag'

const OWNER_SIGN_UP = gql`
mutation OwnerSignUp($payload: OwnerInput) {
OwnerSignUp(payload: $payload) {
    id
    firstName
    lastName
    email
    phoneNo
    jwt
    msg
  }
}
`

export default {
  components: {VuePhoneNumberInput},
  name: "CreateAccount",
  data: () => {
    return {
      showPassword: false,
      showConfirmPassword: false,
      dialog: false,
      isLoading: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNo: ''
      },

      firstNameRules: [
        v => !!v || 'First Name is required',
        v => v.length >= 3 || 'Name must be greater than 3 characters',
      ],
      lastNameRules: [
        v => !!v || 'Last name is required',
        v => v.length >= 2 || 'Last name must be greater than 2 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length > 8 || "Password length is too short. Minimum length is 8.",
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
/*
        v => !(v.form.password === v.form.confirmPassword && "Password mismatch"),
*/
      ],

    };
  },
  methods: {
    isInputValid() {
      if (!this.form.firstName){
        console.log("First name required")
        return false
      }else if (this.form.firstName.length < 3){
        console.log("First name is too short")
        return false
      }
      if (!this.form.lastName){
        console.log("Last name required")
        return false
      }else if (this.form.lastName.length < 2){
        console.log("Last name is too short")
        return false
      }
      if (!this.form.phoneNo){
        console.log("Phone number is required")
        return false
      }
      else if(!phoneValidate.validate(this.form.phoneNumber, {format: '(xxx) xxx-xxxx'}).isValidate){
        console.log("Invalid phone number")
        return false
      }
      if (!this.form.email) {
        console.log("Email required.")
        return false
      } else {
        if (!validator.validate(this.form.email)) {
          console.log("Invalid email")
          return false
        }
      }
      if (!this.form.password) {
        console.log("Password required.")
        return false
      } else if (this.form.password.length < 8) {
        console.log("Password length is too short. Minimum length is 8.")
        return false
      }
      if (!this.form.confirmPassword) {
        console.log("Confirm password required.")
        return false
      } else if (this.form.confirmPassword !== this.form.password) {
        console.log("Confirm password does not match with password.");
        return false
      }


    },
    requestSignUp: function () {

      if (!this.isInputValid()){
          return;
        }

        this.isLoading = true;

        this.$apollo.mutate({
          mutation: OWNER_SIGN_UP,
          variables: {
            payload: {
              firstName: this.form.firstName,
              lastName: this.form.lastName,
              email: this.form.email,
              phoneNo: this.form.phoneNo,
              password: this.form.password
            }
          }
        })
      .then(res => {
        console.log(res)

        if (res.status === 201){
          console.log("Login Success", res.data);
        }
        else{
          this.isLoading = false;
          console.log("Registered Failed")
        }
      })
      .catch(err => {
        this.log = false
        console.log("admin register error", err);

        if (err.status === 0) {
          console.log("No Internet")
        }
        else{
          console.log("error", err.data.msg)
        }
      })

      }
  }
}
</script>

<style scoped>

</style>
