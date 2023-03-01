<template>
    <nav class="nav">
      <div class="name-title">
        <h1>Martin Fitzpatrick</h1>
        <h4>Full Stack Software Engineer</h4>
      </div>
      <div class="nav-wrapper">
          <router-link class="router-link" to="/">home</router-link> |
          <router-link class="router-link" to="/resume">resume</router-link> |
          <router-link class="router-link" to="/contact">contact</router-link> |
          <router-link class="router-link" to="/projects">projects</router-link>
      </div>
  </nav>
</template>

<script>

</script>

<style scoped>
h1 {
  text-transform: uppercase;
}
h1 + h4 { 
  margin-top: -20px; 
}
.nav-wrapper{
  display: flex;
  align-items:center;
}
.name-title{
  display: flex;
  flex-direction: column;
  align-items: start;
  text-emphasis:inherit;
  color:black;
  }

</style>