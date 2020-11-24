<template>
  <div>
    <Project :project="project"/>
  </div>
</template>

<script>
import Project from '@/components/Project'

export default {
  components: {
    Project
  },
  async fetch({store, params}) {
    await store.dispatch('projects/fetchProject', params)
  },
  computed: {
    project() {
      return this.$store.getters['projects/project']
    }
  }
}
</script>
