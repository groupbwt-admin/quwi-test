<template>
  <div class="container">
    <div v-for="project of projects"
         :key="project.id">
      <a href="#"
         @click.prevent="openProject(project)">
        <div class="project">
          <div class="row">
            <div class="icon-block">
              <img src="~assets/images/quwi.png" alt="project icon" class="icon">
            </div>
            <div class="title-block">
              <div class="title">
                {{ project.title }}
              </div>
            </div>
            <div class="status-block">
              <div class="status">
                {{ project.active }}
              </div>
            </div>
            <div class="frequency-block">
              <div class="title">
                {{ project.week }}
              </div>
              <div class="title">
                {{ project.month }}
              </div>
              <div class="title">
                {{ project.total }}
              </div>
            </div>
            <div class="time-block">
              <div class="time">
                {{project.weekTime}}
              </div>
              <div class="time">
                {{ project.monthTime}}
              </div>
              <div class="time">
                {{ project.totalTime}}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data: () => ({
    projects: [
      {
        id: Date.now(),
        title: "udimi",
        status: "active",
        week: "time this week",
        month: "time this week",
        total: "total",
        weekTime: "00:00:00",
        monthTime: "00:00:00",
        totalTime: "00:00:00"
      },
      {
        id: Date.now(),
        title: "quwi android",
        status: "active",
        week: "time this week",
        month: "time this week",
        total: "total",
        weekTime: "00:00:00",
        monthTime: "00:00:00",
        totalTime: "00:00:00"
      }
    ]
  }),
  methods: {
    openProject(project) {
      this.$router.push("/projects/" + project.id)
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
