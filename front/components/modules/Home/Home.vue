<template>
  <main class="homepage">
    <div class="map-cta">
      <HomeCta />
      <div class="map-container">
        <h2 class="map-headline">Retrouvez nos collectifs Cols verts</h2>
        <Map v-if="isOnline" />
      </div>
    </div>
    <highlight />
    <section class="section">
      <p class="team">On ne s'est pas encore présenté...</p>
      <picture>
        <source
          media="(min-width:650px)"
          srcset="../../../static/equipe_xl.jpg"
        />
        <img
          src="../../../static/equipe_xs.jpg"
          alt="Photo d'urbains dans un jardin"
          style="width: auto"
        />
      </picture>
    </section>
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
import Highlight from '@/components/modules/Home/Highlight/Highlight';

export default {
  components: { Highlight, HomeCta, Map },
  computed: {
    isOnline() {
      return process.env.OFFLINE !== 'true';
    },
  },
};
</script>
<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map-cta {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.map-headline {
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 0.5em;
  color: $brown;
  font-size: 1.5em;
}

.team {
  color: $brown;
  font-size: 1.5em;
  margin: 1em;
}

.section {
  margin: 1em;
}

@media only screen and (min-width: 1024px) {
  .map-cta {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: initial;
  }
}
</style>
