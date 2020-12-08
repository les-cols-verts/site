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
    <div class="map-cta">
      <HomeCta />
      <Map />
    </div>
  </main>
</template>

<style>
.homepage {
  margin-top: 20px;
}
</style>
<script>
import HomeCta from '@/components/modules/Home/HomeCta/HomeCta';
import Map from '@/components/modules/Home/Map/Map';

export default {
  components: { HomeCta, Map },
};
</script>
<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.map-cta {
  margin-bottom: 30px;
  margin-top: 30px;
}

@media only screen and (min-width: 1024px) {
  .map-cta {
    display: flex;
    flex-direction: row;
  }
}
</style>
