<template>
    <nav class="nav">
      <div class="name-title">
        <h1>Martin Fitzpatrick</h1>
        <h4>Full Stack Software Engineer</h4>
      </div>
      <div class="nav-wrapper">
          <router-link class="router-link" to="/">home</router-link>
          <a href="#contact-id">contact</a>
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
a {
  text-decoration: none;
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
      font-size: 15px;
      text-align: left;
    }
    h4 {
      font-size: 10px;
      text-align: left;
      /* font-size: .7rem; */
    }
    nav {
      font-family:'Open Sans', sans-serif;
      display: flex;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 99;
      /* align-items: space-between; */
      justify-content:space-between; 
      padding: 0px 30px 0px 10px;
      background-color: #f3f3f3;
      border-bottom: rgba(231, 231, 231, 0.5) solid 2px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px;
    }
    .name-title{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    gap: 10px;
    color:black;
    /* width: 30%; */
    }
    .nav-wrapper{
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 5px 50px 5px 0px;
    }
    
  }
</style>