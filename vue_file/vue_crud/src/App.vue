<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="mb-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/about">About</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link active" to="/StudentView">Student</router-link>
        </li>
      </ul>

    </div>
  </div>
</nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
