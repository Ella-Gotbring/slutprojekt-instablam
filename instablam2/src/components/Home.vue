<template>
    <div class="wrapper">
        <div class="content">
            <h2> First take a photo and then add some filters</h2>

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
}
</script>

<style scoped>

</style>
