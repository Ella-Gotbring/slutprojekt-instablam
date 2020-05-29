<template>
  <div class="wrapper">
    <div class="content">
      <h2>First take a photo and then add some filters</h2>

      <Camera />
      <footer>
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </footer>
    </div>
  </div>
</template>

<script>
import Camera from "@/components/Camera.vue";
export default {
  name: "Home.vue",
  components: {
    Camera
  }
};
</script>

<style scoped>
.wrapper {
  margin: auto;
  width: 100%;
  height: 100vh;
}
.content {
  width: 100%;
  display: flex;
  flex-flow: column;
}
h2 {
  margin: auto;
}
.camera {
  margin: auto;
  width: 100px;
}
footer {
  margin: auto;
  width: 100%;
}
@media screen and (min-width: 800px) {
  footer {
    display: none;
  }
  
}
</style>
