<script lang="ts" setup>
    import logoItem from '@/assets/images/logo-item.svg';
    import webdesignItem from '@/assets/images/webdesign-item.svg';
    import developmentItem from '@/assets/images/development-item.svg';

const services = ref([
    {
        name: "Logos",
        description: "Création de logos uniques et mémorables qui capturent l'essence de votre marque. Mon expertise en design garantit un logo professionnel qui se démarque.",
        imgSrc: logoItem,
        alt: "logo item"
    },
    {
        name: "Web Design",
        description: "Design de sites web élégants et fonctionnels, optimisés pour l'expérience utilisateur. Je crée des interfaces intuitives et attrayantes pour renforcer votre présence en ligne.",
        imgSrc: webdesignItem,
        alt: "webdesign item"
    },
    {
        name: "Developpement",
        description: "Développement complet de sites internet et maintenance, en utilisant les dernières technologies. Je conçois des sites performants, sécurisés, SEO Friendly et parfaitement adaptés à vos besoins.",
        imgSrc: developmentItem,
        alt: "development item"
    },
])

</script>

<template>
    <div class="container">
        <h2 class="mb-5">Mes services</h2>

        <div class="skills-grid row row-cols-1 row-cols-md-3 g-4">

            <div  v-for="service, index in services" :key="index" class="col">
                <div class="card align-items-center border border-black rounded p-5">
                    <div class="container-image">
                        <img v-bind:src="service.imgSrc" class="card-img-top" :alt="service.alt">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">{{ service.name }}</h5>
                        <p class="card-text">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-image {
        height: 100px;
        width: 100px;

        img {
            object-fit: cover;
        }
    }

    .card {
        max-width: 320px;
    }

</style>