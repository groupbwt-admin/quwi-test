<template>
  <div class="custom-col notification-wrapper success-wrapper">
    <img src="~/assets/images/success-icon.svg" class="notification-icon" alt="success icon">
    <div class="notification-block">
      <div class="notification">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'successMessage',
  props: {
    successMessage: String
  }
}
</script>
