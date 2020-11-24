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
      <div v-if="errors.length !== 0 && errorsVisible">
        <Errors :errors="errors"/>
      </div>
    </div>
  </section>
</template>

<script>
import Errors from '@/components/Errors'

export default {
  name: 'login',
  layout: 'empty',
  components: {
    Errors
  },
  data: () => ({
    email: '',
    password: '',
    errors: [],
    errorsVisible: false
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
        this.errorsVisible = true
        this.errors = e.response.data.first_errors
        setTimeout(() => {
          this.errorsVisible = false
        }, 2000)
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
