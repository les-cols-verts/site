<template>
  <div class="container">
    <app-header />
    <home />
  </div>
</template>

<script>
import Home from '../components/Home/Home';
import AppHeader from '../components/AppHeader/AppHeader';

export default {
  components: { Home, AppHeader },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  background-color: #def4c6;
}
</style>
