<template>
  <div id="app">
    <AppHeader />
    <div class="content">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
  margin-bottom: 40px;
}
</style>
