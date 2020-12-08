<template>
  <header class="app-header">
    <Logo />
    <h1 class="title">
      Les Cols verts&#160;: pollinisateurs<br />d'agriculture urbaine
    </h1>
    <div class="donation"></div>
  </header>
</template>

<script>
import Logo from './components/Logo';

export default {
  components: { Logo },
};
</script>

<style>
.app-header {
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
}

.title {
  display: block;
  font-size: 16px;
  color: #35495e;
  letter-spacing: 1px;
}

.donation {
  display: none;
}

@media only screen and (min-width: 640px) {
  .title {
    font-size: 30px;
  }
}

@media only screen and (min-width: 1024px) {
  .title {
    font-size: 40px;
  }

  .donation {
    display: block;
    width: 250px;
  }
}
</style>
