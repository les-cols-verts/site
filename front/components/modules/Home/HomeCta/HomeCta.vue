<template>
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
      text="Nous contacter"
      href="https://www.lescolsverts.com/contact/"
    ></app-link>
  </section>
</template>
<script>
import AppLink from '@/components/common/Link/AppLink';

export default {
  name: 'HomeCta',
  components: { AppLink },
};
</script>
<style scoped>
.links {
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  margin-bottom: 1em;
}

@media only screen and (min-width: 1024px) {
  .links {
    max-width: 50vw;
    text-align: center;
    margin-bottom: 0;
    margin-right: 1em;
  }
}
</style>
