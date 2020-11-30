<template>
    <div class="hello">
        <h1>Paste your link below:</h1>
        <input v-model.trim="link" placeholder="long URL here" />
        <button type="submit" @click="sendLink">
            SUBMIT
        </button>
        <p>{{ newURL }}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "InputBox",
    data() {
        return {
            link: "",
            newURL: "",
        };
    },
    methods: {
        sendLink() {
            axios
                .post("http://localhost:3000/api/url", {
                    clientURL: this.link,
                })
                .then((response) => {
                    console.log(response.data);
                    this.newURL = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
