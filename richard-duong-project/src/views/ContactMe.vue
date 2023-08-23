<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const props = defineProps<{
  isPlayingMusic: boolean
}>() 

</script>

<template>
    <section id="contact" class="fade-in">
        <div class="title-container">
            <h2 class="title">Want to connect? Fill out the form below!</h2>
        </div>
        <div class="body">
            <form class="email-form">
                <div class="input-group">
                    <label for="subject">Subject</label>
                    <input name="subject" type="text" placeholder="i.e. &quot;hey cool website&quot;" />
                </div>

                <div class="input-group">
                    <label for="message">Message</label>
                    <textarea name="message" placeholder="Whatever you'd like!"></textarea>
                </div>
                <div class="footer">
                    <button type="button" class="light-round-outlined-btn">Submit</button>
                </div>
            </form>
        </div>

        <div class="social-media-container">
            <h3>Or, visit me on social media</h3>
            <div class="icons">
                <div class="fade-in-delay-1">
                    <img src="/src/assets/img/icons/linkedin.svg" />
                </div>
                <div class="fade-in-delay-2">
                    <img src="/src/assets/img/icons/instagram.svg" /> 
                </div>
                <div class="fade-in-delay-3">
                    <img src="/src/assets/img/icons/spotify.svg" />
                </div>
                <div class="fade-in-delay-4">
                    <img src="/src/assets/img/icons/soundcloud.svg" />
                </div>
                <div class="fade-in-delay-5">
                    <img src="/src/assets/img/icons/youtube.svg" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

section#contact {
    flex-basis: 45%;
    padding-top: 2rem;
    height: max-content;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section#contact .title-container .title {
    color: var(--darkest);
    font-size: 1.5rem;
}

input, textarea {
    padding: 1rem;
    border: 2px solid var(--light);
    border-radius: 10px;

}

textarea {
    height: 100px;

    resize: vertical; 
    max-height: 250px;
    font-family: 'Roboto', sans-serif;
}

section#contact form.email-form {
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
}

section#contact .social-media-container .icons img {
    cursor: pointer;
    width: 3rem;
}

</style>