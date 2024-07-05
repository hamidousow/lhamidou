<script lang="ts" setup>

    const show = ref(false)


</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <NuxtLink class="navbar-brand climate-crisis-navbar-brand" to="/">L'Hamidou</NuxtLink>
            <div class="nav-menu-icon" @click="show = !show">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </div>
            <Transition name="fade">
                <div v-if="show" class="nav-menu menu-open">
                    <div class="nav-menu-close position-absolute top-0 end-0 mt-3 me-3" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" @click="show = !show">
                        <span class="nav-menu-close-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#151515">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </span>
                    </div>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link active climate-crisis-navbar-menu" aria-current="page" to="/"  @click="show = !show"
                            >Home</NuxtLink>
                        </li>                    
                        <li class="nav-item">
                            <NuxtLink 
                            class="nav-link climate-crisis-navbar-menu" 
                            to="/contact"
                            @click="show = !show"                            
                            >Contact</NuxtLink>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    </nav>
</template>



<style>

    .nav-menu {
        top: 0;
        left: 0;            
    }

    .menu-open {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        width: 100%;
        background-color: var(--clr-green);
        z-index: 999;
        transition: .9s;
    }
    .menu-open a {
        text-align: center;
    }

    .navbar-brand {
        font-family: "Inter", sans-serif;
        font-weight: 700;
    }
    
    .navbar-brand {
        font-size: 1.25rem;
        margin-right: 1rem;
        text-decoration: none;
        white-space: nowrap;
    }

    .nav-link {
        font-weight: 500;
        transition: opacity .15s;
        will-change: opacity;   
    }

    .nav .nav-link {
        color: #0e0e0e;
    }


    .climate-crisis-navbar-brand {
        font-family: "Climate Crisis", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "YEAR" 1979;
    }

    .climate-crisis-navbar-menu {
        font-family: "Climate Crisis", sans-serif;
        font-optical-sizing: auto;
        font-size: 38px;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "YEAR" 1979;
        color: var(--clr-black)
    }

    /*transition*/

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }



</style>