<script>
import { useUserStore } from "@/store/UserStore";
import { mapActions, mapStores, mapWritableState } from "pinia";
import { alphaNum, email, minLength, required } from "vuelidate/lib/validators";

export default {
  name: "LoginForm",
  mounted() {
    this.$refs.pass.classList.remove("is-invalid", "is-valid");
    this.$refs.mail.classList.remove("is-invalid", "is-valid");
  },
  data() {
    return {
      email: "Developer5@gmail.com",
      password: "123456",
    };
  },
  methods: {
    validated(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    ...mapActions(useUserStore, ["login"]),
    async submitForm() {
      // alert("dd")
      this.$v.$touch();
      if (this.$v.$pending || this.$v.error) return
        await this.login(this.email, this.password)
        .then(() => { this.$toasted.success("Login Successful")})
        .catch((err) => this.$toasted.error(err))
        .then(() => {
          if (this.storeName && this.storeToken) this.$router.push("/products");
        });
    },
    resetForm() {
      this.email = "";
      this.password = "";
    },
  },
  computed: {
    ...mapStores(useUserStore),
    ...mapWritableState(useUserStore, {
      storeName: "Name",
      storeToken: "Token",
      storeId: "Id",
      storeEmail: "Email",
    }),
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      alphaNum,
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 col-md-5 m-auto">
        <h1 class="title text-center mb-5">LOGIN</h1>
        <form class="d-flex flex-column gap-4">
          <div class="form-floating">
            <input
              type="email"
              :class="[
                'form-control',
                { 'is-invalid': validated($v.email) },
                { 'is-valid': !validated($v.email) },
              ]"
              id="email"
              placeholder="name@example.com"
              v-model.trim="$v.email.$model"
              ref="mail"
            />
            <label for="email">email</label>
            <div v-if="!$v.email.required" class="invalid-feedback">
              a valid email is required
            </div>
          </div>
          <div class="form-floating">
            <input
              type="password"
              :class="[
                'form-control',
                { 'is-invalid': validated($v.password) },
                { 'is-valid': !validated($v.password) },
              ]"
              id="password"
              placeholder="name@example.com"
              ref="pass"
              v-model.trim="$v.password.$model"
            />
            <label for="password">password</label>
            <div v-if="!$v.password.required" class="invalid-feedback">
              at least 6 charachters long, one uppercase letter and one digit
            </div>
          </div>
          <div class="d-flex gap-4 flex-row">
            <button
              @click.prevent="submitForm"
              class="btn btn-danger rounded rounded-pill"
            >
              submit
            </button>
            <button
              @click.prevent="resetForm"
              class="btn btn-secondary rounded rounded-pill"
            >
              reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  .title {
    font-size: 4rem;
    color: #ff4057;
  }
}
</style>
