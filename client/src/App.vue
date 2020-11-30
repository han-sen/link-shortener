<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <InputBox />
</template>

<script>
import InputBox from "./components/InputBox.vue";

export default {
    name: "App",
    components: {
        InputBox,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
