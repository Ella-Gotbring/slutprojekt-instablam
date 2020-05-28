<template>
  <div class="filters" v-show="imgUrl">
    <div class="setting">
      <label for="contrast">Contrast</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="contrast"
        v-on:change="changeContrast"
      />
    </div>
    <div class="setting">
      <label for="brightness">Brightness</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        :value="0"
        id="brightness"
        data-filter="brightness"
        v-on:change="changeBrightness"
      />
    </div>
    <div class="setting">
      <label for="contrast">Contrast</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="contrast"
        v-on:change="changeContrast"
      />
    </div>
    <div class="setting">
      <label for="vibrance">Vibrance</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="vibrance"
        v-on:change="changeVibrance"
      />
    </div>
    <div class="setting">
      <label for="exposure">Exposure</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="exposure"
        v-on:change="changeExposure"
      />
    </div>
    <div class="setting">
      <label for="saturaction">Saturaction</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="saturaction"
        v-on:change="changeSaturaction"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgUrl"],
  methods: {
    changeContrast(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.contrast(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeBrightness(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.brightness(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeVibrance(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.vibrance(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeExposure(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.exposure(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeSaturaction(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.saturaction(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    }
  }
};
</script>

<style scoped>
.filters {
  width: 100%;
  margin: auto;
  padding: 1rem;
}

.setting {
  width: 200px;
}

@media screen and (min-width: 800px) {
  .filters {
    width: 100%;
  }
  input {
    width: 4500px;
    justify-items: center;
  }
}
</style>