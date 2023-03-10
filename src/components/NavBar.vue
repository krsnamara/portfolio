<template>
    <nav class="nav">
      <div class="name-title">
        <h1>Martin Fitzpatrick</h1>
        <h4>Full Stack Software Engineer</h4>
      </div>
      <div class="nav-wrapper">
          <router-link class="router-link" to="/">home</router-link>
          <router-link class="router-link" to="/projects">projects</router-link>
          <!-- <router-link class="router-link" to="/resume">resume</router-link> -->
          <router-link class="router-link" to="/blog">blog</router-link>
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
  padding-right: 80px;
}
.name-title{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color:black;
  }

  @media only screen and (max-width: 450px){
    h1{
      text-align: left;
    }
    h4 {
      text-align: left;
      /* font-size: .7rem; */
    }
    .name-title{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    color:black;
    /* width: 30%; */
    }
    .nav-wrapper{
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 5px 0px 5px 0px;
    }
  }
</style>