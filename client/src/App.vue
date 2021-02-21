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
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
    margin: 0;
    padding: 0;
}
body {
    line-height: 1;
    background: #1b1b1b;
}
#app {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
