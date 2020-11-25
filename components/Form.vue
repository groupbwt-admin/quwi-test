<template>
  <section class="position-relative">
    <form @submit.prevent="updateProjectName"
          class="container project-details">
      <div class="row">
        <div class="title">name</div>
        <input type="text"
               :value="project.project.name"
               @input="updateInputName"
               class="project-title">
        <button type="submit" class="btn btn-blue">
          ok
        </button>
      </div>
    </form>
    <div v-if="Object.keys(errors).length !== 0 && errorsVisible">
      <Errors :errors="errors"/>
    </div>
    <div v-if="successMessage && successVisible">
      <SuccessMessage :success-message="successMessage"/>
    </div>
  </section>
</template>

<script>
import Errors from '@/components/Errors'
import SuccessMessage from '@/components/SuccessMessage'

export default {
  name: 'Form',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    errorMessage: {
      name: 'This field can not be empty!'
    },
    errorsVisible: false,
    successMessage: '',
    successVisible: false
  }),
  components: {
    Errors,
    SuccessMessage
  },
  methods: {
    clearErrors() {
      setTimeout(() => {
        this.errorsVisible = false
        this.$store.commit('projects/clearErrors')
      }, 1500)
    },
    updateInputName(e) {
      if (e.target.value === '') {
        this.errorsVisible = true
        this.$store.commit('projects/setErrors', this.errorMessage)
        this.clearErrors()
      } else {
        this.$store.commit('projects/updateProjectName', e.target.value)
      }
    },
    async updateProjectName() {
      await this.$store.dispatch('projects/updateProjectName', this.project)
      if ((Object.keys(this.errors).length === 0) && !this.errorsVisible) {
        this.successVisible = true
        this.successMessage = 'Your changes successfully saved!'
        setTimeout(() => {
          this.successVisible = false
          this.$router.push('/')
        }, 1500)
      } else {
        this.errorsVisible = true
        this.clearErrors()
      }
    }
  },
  computed: {
    errors() {
      return this.$store.getters['projects/errors']
    }
  }
}
</script>

<style scoped>
.row {
  align-items: center;
  -webkit-align-items: center;
  margin-bottom: 30px;
}
</style>
