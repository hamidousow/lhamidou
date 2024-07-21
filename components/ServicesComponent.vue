<script lang="ts" setup>
import IconLogo from "@/components/icons/IconLogo.vue";
import IconDesign from "@/components/icons/IconDesign.vue";
import IconDev from "@/components/icons/IconDev.vue";
</script>

<template>
    <div class="background-grey-light">
        <div class="container pt-60 pb-60">
            <h2 class="color-black text-center">Spécialisé en conception de <span class="special-word color-purple"><strong>logos</strong></span>, en <span  class="special-word color-purple"> <strong> web design </strong> </span> et en <span class="special-word color-purple"> <strong> développement de sites internet </strong>  </span> élégants, performants et SEO friendly.</h2>
            <div class="container-services-cards pt-60">
                <div class="card">
                    <IconLogo />
                    <div class="card-details">
                        <h3 class="card-title">Conception de logos</h3>
                        <p class="card-description">
                            Créez une identité visuelle mémorable avec mon service de conception de logos, où chaque design reflète l'essence et les valeurs de votre marque.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <IconDesign />
                    <div class="card-details">
                        <h3 class="card-title">Web design</h3>
                        <p class="card-description">
                            Transformez votre vision en réalité avec mon service de web design créatif, où chaque pixel est conçu pour captiver et engager votre audience.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <IconDev />
                    <div class="card-details">
                        <h3 class="card-title">Site internet</h3>
                        <p class="card-description">
                            Boostez votre présence en ligne grâce à mon service de développement de site internet sur mesure, alliant performance, sécurité et esthétique pour une expérience utilisateur optimale.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container-cta mt-60">
                <ButtonComponent to="/contact">Passez à l'action 🚀</ButtonComponent>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .special-word {
        font-family: "Fustat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: normal;
    }

    .container-services-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }

    .card {
        width: 200px;
        height: 290px;
        background-color: var(--clr-black);
        /* color: 1px solid var(--clr-green); */
        border-radius: 5px;
        padding: 20px;
        row-gap: 12px;
        display: flex;
        flex-direction: column;
    }

    .card .icon {
        height: 40px;
        fill: var(--clr-green-flash);
    }

    .card-title, .card-description {
        line-height: 120%;
    }

    .card-title {
        font-size: 16px;
        text-align: center;
        color: var(--clr-green-flash);
    }

    .card-description {
        font-size: 14px;
        color: var(--clr-white);
    }

    .container-cta {
        display: flex;
        flex-direction: row;
        justify-content: center;;
    }

    .container-cta a {
        margin: auto;
    }

    @media screen and (min-width: 768px) {
        .container-services-cards {
            flex-direction: row;
            justify-content: center;
            column-gap: 20px;
        }
    }


</style>