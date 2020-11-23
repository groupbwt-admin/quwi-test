<template>
  <div class="container">
    <div v-for="projectsList of projects"
         :key="projectsList.id">
      <div v-for="project in projectsList"
           :key="project.id">
        <a href="#"
           @click.prevent="openProject(project)">
          <div class="project">
            <div class="row">
              <div class="icon-block">
                <img :src="project.logo_url" alt="project icon" class="icon">
              </div>
              <div class="title-block">
                <div class="title">
                  {{ project.name }}
                </div>
              </div>
              <div class="status-block">
                <div v-if="project.is_active"
                     class="status active">
                  active
                </div>
                <div v-else
                     class="status">
                  not active
                </div>
              </div>
              <div class="frequency-block">
                <div class="title">
                  time this week
                </div>
                <div class="title">
                  this month
                </div>
                <div class="title">
                  total
                </div>
              </div>
              <div class="time-block">
                <div class="time">
                  {{ project.spent_time_week }}
                </div>
                <div class="time">
                  {{ project.spent_time_month }}
                </div>
                <div class="time">
                  {{ project.spent_time_all }}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  methods: {
    openProject(project) {
      this.$router.push('/projects/' + project.id)
    }
  },
  computed: {
    projects() {
      return this.$store.getters['projects/projects']
    }
  },
  async fetch({store}) {
    if (store.getters['projects/projects'].length === 0) {
      await store.dispatch('projects/fetchProjectList')
    }
  }
}
</script>

<style scoped>
.row {
  align-items: center;
  -webkit-align-items: center;
}
</style>
