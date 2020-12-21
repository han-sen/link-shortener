<template>
    <section class="linkBox">
        <h1>Paste your link below:</h1>
        <div class="input-wrap">
            <input v-model.trim="link" placeholder="long URL here" />
            <button type="submit" @click="sendLink">
                SUBMIT
            </button>
            <button @click="clearForm">
                CLEAR
            </button>
        </div>
        <div id="newURL-wrap" v-bind:class="{ active: isActive }">
            <input
                id="newURL"
                class="urlContainer"
                v-model.trim="newURL"
                disabled
            />
            <button
                v-clipboard="newURL"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
            >
                🔗
            </button>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: "InputBox",
    data() {
        return {
            link: "",
            newURL: "",
            isActive: false,
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
                    this.newURL = response.data.shortURL;
                    this.isActive = true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        onCopy() {
            let testingCodeToCopy = document.querySelector("#newURL");
            testingCodeToCopy.setAttribute("type", "text");
            testingCodeToCopy.select();
        },
        onError() {
            console.log("something went wrong");
        },
        clearForm() {
            this.link = "";
            this.newURL = "";
            this.isActive = false;
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
p {
    margin: 1rem 0;
}

.linkBox {
    margin: 1rem auto;
}

#newURL-wrap {
    opacity: 0;
    margin: 1rem auto;
}

.active {
    color: #2d3e4f;
    display: flex;
    border: 1px solid #bebebe;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 1rem auto;
    background: #eee;
    border-radius: 4px;
    transform: translateY(20px);
    opacity: 0;
    animation: slide-in 1s ease-in-out forwards;
}

.urlContainer {
    border: none;
    color: #2d3e4f;
    font-weight: 700;
    background: transparent;
    width: 90%;
    margin: 1rem auto;
}

.input-wrap {
    margin: 1rem auto;
}

@keyframes slide-in {
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>
