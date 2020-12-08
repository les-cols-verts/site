<template>
  <main class="homepage">
    <picture>
      <source
        media="(min-width:650px)"
        srcset="../../../static/agriculture_urbaine_xl.jpg"
      />
      <img
        src="../../../static/agriculture_urbaine_xs.jpg"
        alt="Photo d'urbains dans un jardin"
        style="width: auto"
      />
    </picture>
    <HomeCta />
  </main>
</template>

<style>
.homepage {
  margin-top: 20px;
}
</style>
<script>
import HomeCta from '@/components/modules/Home/HomeCta/HomeCta';

export default {
  components: { HomeCta },
};
</script>
<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
