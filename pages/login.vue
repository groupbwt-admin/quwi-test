<template>
  <section class="container-fluid">
    <div class="row position-relative">
      <div class="container">
        <div class="row">
          <h1 class="main-title custom-col">
            login
          </h1>
        </div>
        <div class="row">
          <form
            @submit.prevent="login"
            class="custom-form custom-col">
            <div class="form-block">
              <input v-model="email"
                     type="email"
                     class="form-field"
                     placeholder="email">
            </div>
            <div class="form-block">
              <input v-model="password"
                     type="password"
                     class="form-field"
                     placeholder="password">
            </div>
            <button type="submit" class="btn btn-blue">
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  layout: 'empty',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
.row {
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
