<template>
    <section class="documentation">
        <h2>API Usage</h2>
        <div class="documentation-inner">
            <div class="doc-half">
            <p>
                You can use the SITENAME API by sending a POST request containing a
                valid URL to SITENAME.com/api/url
            </p>
            <p class="code-wrap">
<pre>
clientURL: "https://dev.to/harshhhdev/ui-design-trend-of-2021-4fb7"
date: "Mon Dec 21 2020 15:04:10 GMT-0500 (Eastern Standard Time)"
shortURL: "http://localhost:3000/Z0NIpN1xm"
slug: "Z0NIpN1xm"
__v: 0
_id: "5fe0ffbae0b9b7fe3800ad38"
</pre>
            </p>
            </div>
            <div class="doc-half">
                <p>Image here</p>
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
.documentation {
    background: #eee;
    padding: 2rem;
    flex: 1;
}

.documentation-inner {
    display: flex;
}
.doc-half {
    width: 50%;
}
.code-wrap {
    border: 1px solid grey;
    padding: 1rem;
}
h2 {
    text-align: center;
}
p {
    margin: 1rem 0;
}
</style>
