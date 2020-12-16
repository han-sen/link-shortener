<template>
    <Hero />
    <InputBox />
</template>

<script>
import InputBox from "./components/InputBox.vue";
import Hero from "./components/Hero.vue";

export default {
    name: "App",
    components: {
        InputBox,
        Hero,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    line-height: 1;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
