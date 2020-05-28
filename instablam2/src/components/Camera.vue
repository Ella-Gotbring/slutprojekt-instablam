<template>
  <div>
    <div class="button">
      <button @click="takePhoto">Take a photo</button>
    </div>
    <video id="me" class="camera"></video>
    <canvas id="photo" v-show="imgUrl"></canvas>
    <CamanJS :imgUrl="imgUrl" />
  </div>
</template>

<script>
import CamanJS from "@/components/CamanJS.vue";
export default {
  components: {
    CamanJS
  },
  data() {
    return {
      stream: {},
      imgUrl: "",
      oldValue: ""
    };
  },
  mounted() {
    this.getMedia();
  },
  methods: {
    renderCaman() {
      this.Caman("#photo", this.imgUrl, function() {
        this.render();
      });
    },
    async takePhoto() {
      console.log(this.stream);
      const mediaTrack = this.stream.getVideoTracks()[0];
      console.log(mediaTrack);
      const captureImg = new ImageCapture(mediaTrack);
      const photo = await captureImg.takePhoto();
      console.log(photo);
      const imgUrl = URL.createObjectURL(photo);
      console.log(imgUrl);
      this.imgUrl = imgUrl;

      this.$refs.photo = imgUrl;
      setTimeout(() => {
        this.renderCaman();
      }, 3000);
    },
    async getMedia() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        const videoElem = document.querySelector("#me");
        videoElem.srcObject = this.stream;
        videoElem.addEventListener("loadedmetadata", () => {
          videoElem.play();
        });
        console.log(this.stream);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
</style>