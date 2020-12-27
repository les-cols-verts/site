<template>
  <footer class="footer">
    <p>Retrouvez les Cols verts sur les réseaux sociaux :</p>
    <span class="links">
      <a href="https://www.facebook.com/Les-Cols-verts-136135993614214">
        <img
          class="img"
          src="../../../static/facebook.png"
          alt="Logo Facebook"
        />
      </a>
      <a href="https://twitter.com/ColsVerts">
        <img class="img" src="../../../static/twitter.png" alt="Logo Twitter" />
      </a>
      <a href="https://www.youtube.com/channel/UCdXNACLTJoefPVLMQiOYGKQ">
        <img class="img" src="../../../static/youtube.png" alt="Logo Youtube" />
      </a>
      <a href="https://www.linkedin.com/company/les-cols-verts">
        <img
          class="img"
          src="../../../static/linkedin.png"
          alt="Logo LinkedIn"
        />
      </a>
      <a href="https://www.instagram.com/lescolsverts/">
        <img
          class="img"
          src="../../../static/instagram.png"
          alt="Logo Instagram"
        />
      </a>
    </span>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  padding: 1em;
  background-color: #fff;
}

.links {
  display: flex;
  justify-content: space-evenly;
  max-width: 600px;
  margin: auto;
  padding-top: 10px;
}

.img {
  width: 3em;
}
</style>
