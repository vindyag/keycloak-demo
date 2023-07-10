<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NotePad/>
</template>

<script>
import NotePad from './components/NotePad.vue'

export default {
  name: 'App',
  components: {
    NotePad
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
