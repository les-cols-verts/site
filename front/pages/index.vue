<template>
  <div class="container">
    <div class="app-header">
      <!-- <Logo />-->
      <h1 class="title">
        Les Cols verts : pollinisateurs d'agriculture urbaine
      </h1>
    </div>
    <Homepage />
  </div>
</template>

<script>
import Homepage from '../components/Homepage/Homepage'
export default {
  components: { Homepage },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
