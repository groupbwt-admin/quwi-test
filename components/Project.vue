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
    <Form :project="project"/>
  </div>
</template>

<script>
import Form from '@/components/Form'

export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    Form
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
