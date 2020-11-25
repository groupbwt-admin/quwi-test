<template>
  <div class="empty-wrapper">
    <Nuxt class="content"/>
  </div>
</template>

<script>
export default {
  name: 'empty',
  middleware: 'auth'
}
</script>
