<template>
  <div>
    <section class="container-fluid back-block">
      <div class="container">
        <div class="row">
          <div @click="back"
               class="back-link cursor-pointer">
            back
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container project-details">
        <div class="row">
          <div class="title">name</div>
          <input type="text"
                 :value="project.project.name"
                 @input="updateInputName"
                 class="project-title">
          <div class="btn btn-blue cursor-pointer"
               @click.prevent="updateProjectName">
            ok
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back()
    },
    updateInputName(e) {
      this.$store.commit('projects/updateProjectName', e.target.value)
    },
    async updateProjectName() {
      await this.$store.dispatch('projects/updateProjectName', this.project)
    }
  },
  async fetch({store, params}) {
    if (store.getters['projects/project']) {
      await store.dispatch('projects/fetchProject', params)
    }
  },
  computed: {
    project() {
      return this.$store.getters['projects/project']
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
