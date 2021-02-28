<template>
    <section class="linkBox">
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
        <div class="input-wrap">
            <input v-model.trim="link" placeholder="long URL here" />
            <button type="submit" @click="sendLink">
                SUBMIT
            </button>
            <button @click="clearForm">
                CLEAR
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
            linkError: "",
        };
    },
    methods: {
        sendLink() {
            axios
                .post("http://localhost:3000/api/url", {
                    data: this.link,
                })
                .then((response) => {
                    console.log(response.data);
                    this.newURL = response.data.shortURL;
                    this.isActive = true;
                })
                .catch((error) => {
                    console.log(error);
                    this.linkError = error;
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
input,
button {
    padding: 0.5rem;
}
button {
    cursor: pointer;
}

.linkBox {
    margin: 1rem auto;
}

#newURL-wrap {
    opacity: 0;
    margin: 1rem auto;
    color: #2d3e4f;
    display: flex;
    border: 1px solid #bebebe;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 3rem auto;
    background: #eee;
    border-radius: 4px;
    transition: all 1s ease-in-out;
}

.active {
    transform: translateY(100px);
    opacity: 0;
    animation: slide-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
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
    background: #634df6;
    padding: 1rem;
    border-radius: 2px;
    line-height: 1.5;
}

@keyframes slide-in {
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>
