<template>
  <div class="highlight">
    <a href="/mooc" class="link">
      <span>Mooc Agricultures Urbaines</span>
      <picture>
        <source
          class="image"
          media="(min-width:650px)"
          srcset="../../../../static/mooc.png"
        />
        <img
          class="image"
          src="../../../../static/mooc.png"
          alt="Mooc Agricultures Urbaines"
        />
      </picture>
    </a>
    <a href="/incubateur" class="link">
      <span>Incubateur de porteurs de projets</span>
      <picture>
        <source
          class="image"
          media="(min-width:650px)"
          srcset="../../../../static/incub.jpg"
        />
        <img
          class="image"
          src="../../../../static/incub.jpg"
          alt="Incubateur de porteurs de projets"
        />
      </picture>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Highlight'
}
</script>
<style scoped>
.highlight {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.link span {
  display: none;
}

.link:hover .image {
  margin-top: -20px;
  padding-top: 20px;
}

.link:hover span {
  display: block;
  background-color: white;
}

.link,
.image {
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .link {
    width: 45%;
  }
}
</style>
