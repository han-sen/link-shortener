<template>
    <section class="documentation">
        <div class="documentation-inner">
            <div class="doc-half">
                <h2>API Usage</h2>
                <p>
                    You can use the SITENAME API by sending a POST request
                    containing a valid URL to SITENAME.com/api/url
                </p>
            </div>
            <div class="doc-half">
                <p>Example Response:</p>
                <pre>
shortURL: "http://localhost:3000/Z0NIpN1xm"
clientURL: "https://dev.to/harshhhdev/ui-design-trend-of-2021-4fb7"
date: "Mon Dec 21 2020 15:04:10 GMT-0500 (Eastern Standard Time)"
slug: "Z0NIpN1xm"
</pre
                >
            </div>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap");
.documentation {
    padding: 2rem;
    flex: 1;
    line-height: 1.5;
    color: #fff;
}

.documentation-inner {
    margin: 0 auto;
    max-width: 60vw;
    display: flex;
}

.doc-half {
    width: 50%;
}

pre {
    font-family: "Roboto Mono", mono;
    padding: 1rem;
    background: #222222;
    border-radius: 2px;
    color: white;
    font-size: 0.8rem;
}
h2 {
    font-weight: bold;
}
p {
    margin: 1rem 0;
}
</style>
