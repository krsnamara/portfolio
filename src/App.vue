<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <ContactComponent/>
    <TheFooter/>
  </div>
</template>
<script>
import TheFooter from './components/TheFooter.vue';
import NavBar from './components/NavBar.vue';
import ContactComponent from './components/ContactComponent.vue';
export default {
  name: 'myApp',
  components: {
    TheFooter,
    NavBar,
    ContactComponent    
  },
}

</script>

<style>
html{
  scroll-behavior: smooth;
}
body{
  background-color: white;
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  padding: 0px 80px 0px 50px;
  background-color: #f3f3f3;
  border-bottom: rgba(231, 231, 231, 0.5) solid 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a:hover {
  font-weight: bold;
  color: #1b1b1b;
}

nav a.router-link-exact-active {
  /* color: #ffffff; */
  text-decoration: underline;
}
.router-link{
    text-decoration: none;
}
.page {
    margin-top: 8rem!important;
}
@media only screen and (max-width: 450px){
  .page {
      margin-top: 6rem!important;
  }

}
</style>
