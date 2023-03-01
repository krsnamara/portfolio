<template>
    <nav class="nav">
      <div class="name-title">
        <h1>Martin Fitzpatrick</h1>
        <h4>Full Stack Software Engineer</h4>
      </div>
      <div class="nav-wrapper">
          <router-link class="router-link" to="/">home</router-link>
          <router-link class="router-link" to="/projects">projects</router-link>
          <router-link class="router-link" to="/resume">resume</router-link>
          <router-link class="router-link" to="/contact">contact</router-link>
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
  gap: 15px;
}
.name-title{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color:black;
  }

  @media only screen and (max-width: 450px){
    *{
        box-sizing: border-box;
    }
    .name-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color:black;
    }
    .nav-wrapper{
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 5px 0px 5px 0px;
    }
  }
</style>