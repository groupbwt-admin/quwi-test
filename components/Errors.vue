<template>
  <div class="custom-col error-wrapper">
    <img src="~/assets/images/error-icon.svg" class="error-icon" alt="error icon">
    <div class="error-block">
      <div v-for="(error, index) in errors"
           :key="index"
           class="error">
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
