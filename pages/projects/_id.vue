<template>
  <div>
    <section class="container-fluid back-block">
      <div class="container">
        <div class="row">
          <a href="#" @click="back" class="back-link">back</a>
        </div>
      </div>
    </section>
    <section>
      <div class="container project-details">
        <div class="row">
          <div class="title">name</div>
          <div class="project-title" contenteditable="true">
            quwi - desktop
          </div>
          <a href="#"
             class="btn btn-blue"
             @click.prevent="updateProjectName">
            ok
          </a>
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
    updateProjectName() {
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
