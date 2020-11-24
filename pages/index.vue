<template>
  <div class="container">
    <div v-for="projectsList of projects"
         :key="projectsList.id">
      <div v-for="project in projectsList"
           :key="project.id">
        <div @click.prevent="openProject(project)"
             class="cursor-pointer">
          <div class="project">
            <div class="row mx-0">
              <div class="icon-block">
                <img v-if="project.logo_url"
                     :src="project.logo_url"
                     alt="project icon"
                     class="icon">
                <img v-else
                     src="~/assets/images/no-project.png"
                     alt="project icon"
                     class="icon">
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
                  {{ project.spent_time_week ? project.spent_time_week : startTime }}
                </div>
                <div class="time">
                  {{ project.spent_time_month ? project.spent_time_month : startTime }}
                </div>
                <div class="time">
                  {{ project.spent_time_all ? project.spent_time_all : startTime }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  data: () => ({
    startTime: '00:00:00'
  }),
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
    await store.dispatch('projects/fetchProjectList')
  }
}
</script>

<style scoped>
.row {
  align-items: center;
  -webkit-align-items: center;
}
</style>
