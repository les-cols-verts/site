<template>
  <main class="homepage">
    <picture>
      <source
        media="(min-width:650px)"
        srcset="../../static/agriculture_urbaine_xl.jpg"
      />
      <img
        src="../../static/agriculture_urbaine_xs.jpg"
        alt="Photo d'urbains dans un jardin"
        style="width: auto"
      />
    </picture>
    <section class="links">
      <app-link
        text="Qui sommes-nous ?"
        href="https://www.lescolsverts.com/collectifs/"
      ></app-link>
      <app-link
        text="Nos dispositifs d'agriculture urbaine"
        href="https://www.lescolsverts.com/services/"
      ></app-link>
      <app-link
        text="Découvrir nos actions nationales"
        href="https://www.lescolsverts.com/collectifs/"
      ></app-link>
      <app-link
        text="Nos actualités"
        href="https://www.lescolsverts.com/blog/"
      ></app-link>
      <app-link
        text="Nous Contacter"
        href="https://www.lescolsverts.com/contact/"
      ></app-link>
    </section>
  </main>
</template>

<style>
.homepage {
  margin-top: 20px;
}
</style>
<script>
import AppLink from '@/components/Link/AppLink';
export default {
  components: { AppLink },
};
</script>
<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.links {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}
</style>
