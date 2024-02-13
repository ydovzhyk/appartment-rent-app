<template>
  <div id="app">
    <div class="content">
      <AppHeader />
        <div class="router">
          <router-view></router-view>
        </div>
      <AppFooter />
    </div>
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
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  flex-grow: 1;
}

.router {
  min-height: calc(100vh - 30px);
}

</style>
