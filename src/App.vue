<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about">测试</router-link>
       <router-link to="/about">测试2</router-link>
       <router-link to="/about">测试2</router-link>
      <router-link to="/about">测试2</router-link>
      <router-link to="/about">测试3</router-link>
      <router-link to="/about">测试2</router-link>
      <router-link to="/about">测试4</router-link>
<<<<<<< HEAD
      <router-link to="/about">测试2</router-link>
      <router-link to="/about">测试3333333</router-link>
=======
      <router-link to="/about">测试3</router-link>
      <router-link to="/about">测试4</router-link>
>>>>>>> 8555aed0da92bf93565bc1957a5e26484dace9f3
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
