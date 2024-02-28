<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios';

const props = defineProps<{
  isPlayingMusic: boolean
}>() 

const fullName = ref('')
const email = ref('')
const message = ref('')

// Toast notification state
const showToast = ref(false);
const toastMessage = ref('');

function submitEmailForm() {
    const formData = {
        fullName: fullName.value,
        email: email.value,
        message: message.value,
    };

    // Use Axios to send a POST request
    axios.post('https://formspree.io/f/mleqnwnp', formData)
        .then(response => {
            toastMessage.value = 'Email sent successfully!';
            showToast.value = true;
            setTimeout(() => showToast.value = false, 5000);
            
            fullName.value = '';
            email.value = '';
            message.value = '';
        })
        .catch(error => {
            toastMessage.value = 'Failed to send email.';
            showToast.value = true;
            setTimeout(() => showToast.value = false, 5000);
        });
}

</script>

<template>
    <section id="contact">
        <div class="header fade-in">
            <h2 class="title fade-in-delay-1">Let's Connect!</h2>
            <div class="form-content fade-in-delay-2">
                <p>Whether you're interested in discussing a project, exploring collaboration opportunities, or just want to say hello, I'd love to hear from you. Feel free to reach out, and let's start a conversation about technology, creativity, and everything in between.</p>
            </div>
        </div>
        <div class="body">
            <h2 class="title fade-in-delay-5">Send me a message &#8595;</h2>

            <form class="email-form">
                <div v-if="showToast" class="toast-notification">
                    {{ toastMessage }}
                </div>
                <div class="input-group">
                    <label for="full-name" class="fade-in-delay-1">Your Name</label>
                    <input name="full-name" type="text" placeholder="Enter your name" class="fade-in-delay-2" v-model="fullName"/>
                </div>

                <div class="input-group">
                    <label for="email" class="fade-in-delay-1">Your Email Address</label>
                    <input name="email" type="email" placeholder="xyz@xyz.com" class="fade-in-delay-3" v-model="email"/>
                </div>

                <div class="input-group">
                    <label for="message" class="fade-in-delay-1">Message</label>
                    <textarea name="message" placeholder="Whatever you'd like!" class="fade-in-delay-4" v-model="message"></textarea>
                </div>
                <div class="footer">
                    <button @click="submitEmailForm" type="button" class="light-round-btn fade-in-delay-5">Send<i class="fa-regular fa-paper-plane"></i></button>
                </div>
            </form>
        </div>

        <div class="social-media-container">
            <h3 class="fade-in-delay-1">Or, visit me on social media</h3>
            <div class="icons">
                <div class="fade-in-delay-1">
                    <a href="https://www.linkedin.com/in/richardtduong/" target="_blank"><img class="main" src="/img/icons/linkedin.svg" /></a>
                </div>
                <div class="fade-in-delay-2">
                    <a href="https://www.instagram.com/rdtherde/?hl=en" target="_blank"><img src="/img/icons/instagram.svg" /></a>
                </div>
                <div class="fade-in-delay-3">
                    <img src="/img/icons/spotify.svg" />
                </div>
                <div class="fade-in-delay-4">
                    <img src="/img/icons/soundcloud.svg" />
                </div>
                <div class="fade-in-delay-5">
                    <img src="/img/icons/youtube.svg" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

section#contact {
    flex-basis: 45%;
    height: max-content;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}

section#contact .header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section#contact .header .title {
    color: var(--thirty);
    font-size: 1.5rem;
}

input, textarea {
    padding: 1rem;
    border: 2px solid var(--ten);
    border-radius: 10px;
}

textarea {
    height: 200px;

    resize: vertical; 
    min-height: 100px;
    max-height: 250px;
    font-family: 'Roboto', sans-serif;
}

section#contact .body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section#contact .body .title {
    color: var(--thirty);
    font-size: 1.35rem;
}

section#contact form.email-form {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section#contact form.email-form .input-group {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

section#contact form.email-form .input-group label {
    font-size: 1.1rem;
    font-weight: 500;

    color: var(--darker);
}

section#contact form.email-form .footer{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

section#contact form.email-form .footer button{
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
}

section#contact .social-media-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

section#contact .social-media-container h3 {
    font-size: 1.1rem;
    color: var(--neutral);
}

section#contact .social-media-container .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 1rem;
}
section#contact .social-media-container .icons img {
    cursor: pointer;
    height: 3rem;
}

section#contact .social-media-container .icons img.main {
    z-index: 9999;
}

section#contact .toast-notification {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    top: 35%;
    left: 15%;
    width: 70%;
    padding: 8px;
    background-color: var(--ten);
    color: var(--sixty);

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px var(--ten) solid;

    border-radius: 5px;
    z-index: 10000;
    transition: all 0.5s ease-in-out;
}

</style>