<template>
  <v-sheet class="fill-height" align="center" justify="center">
    <v-card class="mt-12 pa-8" max-width="800">
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="name" :rules="nameRules" label="Name" required />
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          @click:append="showPassword = !showPassword"
          required
        />

        <v-btn @click="submitForm">
          Submit
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
import { USER_LOGIN } from "../store/actions.type";

export default {
  name: "Login",
  data: () => ({
    name: "",
    nameRules: [v => !!v || "Name is required"],
    password: "",
    passwordRules: [v => !!v || "Password is required"],
    showPassword: false,
    valid: true
  }),

  methods: {
    submitForm() {
      this.$store.dispatch(USER_LOGIN).then(this.$router.push("/"));
    }
  }
};
</script>

<style lang="scss" scoped></style>
