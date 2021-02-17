<template>
    <section class="documentation">
        <h2>API Usage</h2>
        <div class="documentation-inner">
            <p>
                You can use the SITENAME API by sending a POST request
                containing a valid clientURL to SITENAME.com/api/url
            </p>
            <p>Example Request:</p>
            <p></p>
            <pre>
 axios.post("http://localhost:3000/api/url", {
    body: "https://dev.to/harshhhdev/ui-design-trend-of-2021-4fb7",
 })
</pre
            >
            <p>Example Response:</p>
            <pre>
shortURL: "http://localhost:3000/Z0NIpN1xm"
clientURL: "https://dev.to/harshhhdev/ui-design-trend-of-2021-4fb7"
date: "Mon Dec 21 2020 15:04:10 GMT-0500 (Eastern Standard Time)"
slug: "Z0NIpN1xm"
</pre
            >
        </div>
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
    background: #eee;
    padding: 2rem;
    flex: 1;
    line-height: 1.5;
}

.documentation-inner {
    margin: 0 auto;
    max-width: 960px;
}
pre {
    padding: 1rem;
    background: #bebebe;
}
h2 {
    text-align: center;
}
p {
    margin: 1rem 0;
}
</style>
