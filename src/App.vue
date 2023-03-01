<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <TheFooter/>
  </div>
</template>
<script>
import TheFooter from './components/TheFooter.vue';
import NavBar from './components/NavBar.vue';
export default {
  name: 'myApp',
  components: {
    TheFooter,
    NavBar    
  },
}

</script>

<style>
body{
  background-color: white;
  margin: 0;
  box-sizing: border-box;
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
  align-items: space-between;
  justify-content: space-between; 
  padding: 0px 30px 0px 30px;
  background-color: #f3f3f3;
  border-bottom: rgba(231, 231, 231, 0.5) solid 2px;
  /* border-bottom: hsl(100deg 80% 25% / 0.75); */
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
</style>
