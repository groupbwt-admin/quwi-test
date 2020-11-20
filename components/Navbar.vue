<template>
  <nav class="nav nav-fixed">
    <Logo/>
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">
          projects
        </nuxt-link>
      </li>
      <li class="nav-item">
        <a href="#"
           class="nav-link"
           @click.prevent="logout">
          logout
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Logo from "~/components/Logo"

export default {
  name: "Navbar",
  components: {
    Logo
  },
  methods: {
    logout() {
      this.$router.push("/")
    }
  }
}
</script>

