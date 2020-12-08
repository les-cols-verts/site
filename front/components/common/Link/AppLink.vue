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
<style scoped>
.link {
  background-color: #0d8544;
  color: #fff;
  margin: 1em;
  padding: 1em 2em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 2em;
}

.link:hover,
.link:focus {
  background-color: #ffbb02;
}
</style>
