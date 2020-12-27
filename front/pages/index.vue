<template>
  <div class="container">
    <app-header />
    <home />
    <Footer />
  </div>
</template>

<script>
import Home from '../components/modules/Home/Home';
import AppHeader from '../components/modules/AppHeader/AppHeader';
import Footer from '../components/modules/Footer/Footer';

export default {
  components: { Home, AppHeader, Footer },
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
