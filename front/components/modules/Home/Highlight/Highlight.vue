<template>
  <div class="highlight">
    <a
      href="/mooc"
      class="link"
      :style="{
        backgroundImage: `url(${
          IS_DESKTOP
            ? require('~/static/mooc_xl.jpg')
            : require('~/static/mooc_xs.jpg')
        })`,
      }"
    >
      <span class="tile__overlay">
        <span class="tile__button"> Mooc Agricultures Urbaines </span>
      </span>
    </a>
    <a
      href="/incubateur"
      class="link"
      :style="{
        backgroundImage: `url(${
          IS_DESKTOP
            ? require('~/static/incub_xl.jpg')
            : require('~/static/incub_xs.jpg')
        })`,
      }"
    >
      <span class="tile__overlay">
        <span class="tile__button"> Incubateur de porteurs de projets </span>
      </span>
    </a>
  </div>
</template>
<script>
import { IS_DESKTOP } from '@/components/utils/responsive/responsive-utils';

export default {
  name: 'Highlight',
  computed: {
    IS_DESKTOP,
  },
};
</script>
<style lang="scss" scoped>
.highlight {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.link {
  width: 298px;
  height: 167px;
  margin-bottom: 20px;
}

.tile__overlay {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.tile__button {
  position: absolute;
  display: table;
  background: $darkGreen;
  color: $white;
  padding: 0.8em 1.5em;
  margin: 120px auto auto;
  font-size: 0.9em;
}

@media only screen and (min-width: 1024px) {
  .highlight {
    flex-direction: row;
  }

  .link {
    width: 595px;
    height: 333px;
    margin: 20px;
  }

  .tile__button {
    margin: -40px auto auto;
  }

  .link:hover .tile__button {
    transform: translateY(600%);
    transition: transform 2s;
  }

  .link:hover > .tile__overlay {
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 1s;
  }
}
</style>
