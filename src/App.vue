<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/post">Post</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px;
}

.nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 20px;
  font-size: 25px;;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
