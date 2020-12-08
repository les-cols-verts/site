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
      text="Nous Contacter"
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
  max-width: 50vw;
}

@media only screen and (min-width: 1024px) {
  .links {
    text-align: center;
  }
}
</style>
