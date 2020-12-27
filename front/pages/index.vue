<template>
  <div class="container">
    <app-header />
    <home />
  </div>
</template>

<script>
import Home from '../components/modules/Home/Home';
import AppHeader from '../components/modules/AppHeader/AppHeader';

export default {
  components: { Home, AppHeader },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  background-color: $lightGreen;
}
</style>
