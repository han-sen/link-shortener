<template>
    <section class="hero"><h1>HERO</h1></section>
</template>

<script>
export default {
    name: "Hero",
    data() {
        return {
            link: "",
            newURL: "",
            isActive: false,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
    height: 300px;
    background: red;
}
</style>
