<script lang="ts" setup>

    const isActive = ref(false)
    const activeMenu = ref('active')


</script>

<template>
    <nav class="navbar position-fixed start-0 end-0 bg-body-tertiary">
        <div class="container">
            <NuxtLink class="navbar-brand climate-crisis-navbar-brand" to="/">L'Hamidou</NuxtLink>
            <div class="nav-menu-icon" @click="isActive = !isActive">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </div>
            
            <div                     
                class="nav-menu"
                :class="[isActive ? activeMenu : '']"
            >
                <div class="nav-menu-close position-absolute top-0 end-0 mt-3 me-3"  @click="isActive = !isActive">
                    <span class="nav-menu-close-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </span>
                </div>
                <ul class="menu my-0">
                    <li class="menu-item">
                        <NuxtLink 
                            class="menu-item-link" 
                            aria-current="page" 
                            to="/"  
                            @click="isActive = !isActive"
                        >Home</NuxtLink>
                    </li>                    
                    <li class="menu-item">
                        <NuxtLink 
                            class="menu-item-link" 
                            to="/contact"
                            @click="isActive = !isActive"                          
                        >Contact</NuxtLink>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>
</template>



<style>
    .navbar {
        z-index: 99;
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

    .active-menu {
        display: flex;
    }

    .nav-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;   
        justify-content: center;
        align-items: center;
        height: 100dvh;
        width: 100%;
        z-index: 999;
        transition: .9s;   
        background: var(--clr-black);    
    }
    .nav-menu.active {
        display: flex !important;
    }
    .menu-item-link {
        text-align: center;
        font-family: 'Climate Crisis', sans-serif;
        font-optical-sizing: auto;
        font-size: 38px;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "YEAR" 1979;

        color: var(--clr-green-flash);
    }


    .climate-crisis-navbar-brand {
        font-family: "Climate Crisis", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "YEAR" 1979;
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

    @media screen and (min-width: 768px) {

        .nav-menu-icon {
            display: none;
            visibility: hidden;
        }

        .nav-menu-close {
            display: none;
        }

        .nav-menu {
            display: flex!important;
            position: relative;
            justify-content: flex-end;
            width: auto;
            height: auto;
            background-color: transparent;
        }
        .menu {
            display: flex;
            flex-direction: row;
            column-gap: 16px;
        }
        .menu li {
            list-style-type: none;
        }
        
        .menu-item-link {
            font-size: 16px;
            color: var(--clr-black);        
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-variation-settings: "YEAR" 1979;
            transition: color .7s;

            &:hover {
                
                color: var(--clr-purple);
            }
        }
    }



</style>