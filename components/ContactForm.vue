<template>
  <div class="form-container col-12 mt-5 mt-lg-0 col-lg-8">
    <form method="POST" action="/contact" @submit.prevent="sendForm()">
        <div class="gh-1 gv-2 row">
        <div class="col-12 col-md-6">
            <input placeholder="Your Name *" type="name" class="form-control form-control" v-model="name">
        </div>
        <div class="col-12 col-md-6">
            <input placeholder="Your Email *" name="email" type="email" class="form-control form-control" v-model="email">
        </div>
        <div class="col-12 col-md-6">
            <input placeholder="Company" type="company" class="form-control form-control">
        </div>
        <div class="col-12 col-md-6" >
            <select class="form-control" v-model="typeProject">
            <option>Type of Project</option>
            <option>Colibri Creative Project</option>
            <option>Colibri Project</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <select class="form-control" v-model="budget">
            <option>Your Budget</option>
            <option>&lt; 10 000</option>
            <option>10-20k</option>
            <option>20-30k</option>
            <option>&gt; 30 000</option>
            </select>
        </div>
        <div class="col-12 col">
            <input placeholder="Title" type="text" class="form-control form-control">
        </div>
        <div class="col-12 col">
            <textarea class="form-control" rows="1" placeholder="Message *"></textarea>
        </div>
        <div class="col-12 col aos-init">
            <button class="btn btn-dark btn-with-ball mt-20" name="button">submit</button>
        </div>
        </div>
    </form>
    </div>
</template>

<script lang="ts" setup>
    const name = ref('')
    const email = ref('')
    const typeProject = ref('')
    const budget = ref('')
    const { $mail } = useNuxtApp();

    class Message {
        name!: string;
        email!: string;
        typeProject!: string;
        budget!: string;

        constructor(name: string, email: string, typeproject: string, budget: string) {}
    }

    

    const contactMsg: Message = new Message(
        name.value, email.value, typeProject.value, budget.value
    )

    async function sendForm() {
        const req = await $fetch('/api/contact', { params : { message: contactMsg }});
        console.log('Votre message a été correctement envoyé.');
    }

</script>
