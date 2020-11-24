<template>
  <div class="custom-col notification-wrapper error-wrapper">
    <img src="~/assets/images/error-icon.svg" class="notification-icon" alt="error icon">
    <div class="notification-block">
      <div v-for="(error, index) in errors"
           :key="index"
           class="notification">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Errors',
  props: {
    errors: Object
  }
}
</script>
