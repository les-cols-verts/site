<template>
  <a
    :style="{ backgroundColor: backgroundColor, color: color }"
    class="link"
    :href="href"
  >
    {{ text }}
  </a>
</template>
<script>
export default {
  name: 'AppLink',
  props: {
    color: { type: String, default: () => '' },
    backgroundColor: { type: String, default: () => '' },
    text: { type: String, default: () => '' },
    href: { type: String, default: () => '/' },
  },
};
</script>
<style lang="scss" scoped>
.link {
  background-color: $darkGreen;
  color: $white;
  margin: 0.5em;
  padding: 1em 2em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 2em;
}

.link:hover,
.link:focus {
  background-color: $orange;
}

@media only screen and (min-width: 1024px) {
  .link {
    margin: 1em;
  }
}
</style>
