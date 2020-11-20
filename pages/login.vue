<template>
  <section class="container">
    <div class="row">
      <h1 class="main-title custom-col">
        login
      </h1>
    </div>
    <div class="row">
      <form class="custom-form custom-col">
        <div class="form-block">
          <input type="email" class="form-field" placeholder="email">
        </div>
        <div class="form-block">
          <input type="password" class="form-field" placeholder="password">
        </div>
        <button type="submit" class="btn btn-blue">login</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  layout: 'empty'
}
</script>

<style scoped>
.row {
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
