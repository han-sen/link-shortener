<template>
    <section class="documentation">
        <h2>Documentation</h2>
        <p>
            You can use the SITENAME API by sending a POST request containing a
            valid URL to SITENAME.com/api/url
        </p>
    </section>
</template>

<script>
export default {
    name: "Documentation",
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
.documentation {
    height: 300px;
    background: #eee;
}
</style>
