<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const props = defineProps<{
  isPlayingMusic: boolean
}>() 

</script>

<template>
    <section id="contact">
        <div class="title-container fade-in">
            <h2 class="title">Connect With Me!</h2>
            <div class="body">
                <form class="email-form">
                    <div class="input-group">
                        <label for="subject">Subject</label>
                        <input name="subject" type="text" placeholder="Subject" />
                    </div>

                    <div class="input-group">
                        <label for="message">Message</label>
                        <textarea name="message"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>

section#contact {
    flex-basis: 45%;
    padding-top: 2rem;
    height: max-content;
}

section#contact .title-container .title {
    color: var(--darkest);
    font-size: 3.5rem;
}

textarea {
    height: 100px;
    
    resize: vertical; 
    max-height: 250px;
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

</style>