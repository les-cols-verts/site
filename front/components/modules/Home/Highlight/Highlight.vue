<template>
  <div class="highlight">
    <a
      href="/mooc"
      class="link"
      :style="{ backgroundImage: `url(${require('~/static/mooc.jpg')})` }"
    >
      <span class="tile__overlay">
        <span class="tile__button button button--lowercase button--primary">
          Mooc Agricultures Urbaines
        </span>
      </span>
    </a>
    <a
      href="/incubateur"
      class="link"
      :style="{ backgroundImage: `url(${require('~/static/incub.jpg')})` }"
    >
      <span class="tile__overlay">
        <span class="tile__button button button--lowercase button--primary">
          Incubateur de porteurs de projets
        </span>
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Highlight',
};
</script>
<style lang="scss" scoped>
.highlight {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.link {
  width: 595px;
  height: 333px;
  margin: 20px;
}

.tile__overlay:hover {
  background-color: rgba(0, 0, 0, 0.6);
  transition: background-color 1s;
}

.tile__overlay {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.link:hover .tile__button {
  transform: translateY(600%);
  transition: transform 0.5s;
}

.tile__button {
  position: absolute;
  display: table;
  background: $darkGreen;
  color: $white;
  padding: 0.8em 1.5em;
  margin: -50px auto auto;
}

/*@media only screen and (min-width: 1024px) {*/
/*  .link {*/
/*    width: 45%;*/
/*  }*/
/*}*/
</style>
