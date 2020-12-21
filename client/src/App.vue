<template>
    <Hero />
    <InputBox />
    <Documentation />
</template>

<script>
import InputBox from "./components/InputBox.vue";
import Hero from "./components/Hero.vue";
import Documentation from "./components/Documentation.vue";

export default {
    name: "App",
    components: {
        InputBox,
        Hero,
        Documentation,
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
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
