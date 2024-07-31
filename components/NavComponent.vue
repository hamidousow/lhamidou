<script lang="ts" setup>

    const isActive = ref(false)
    const activeMenu = ref('active')


</script>

<template>
    <nav class="navbar position-fixed start-0 end-0 bg-body-tertiary">
        <div class="container">
            <NuxtLink class="navbar-brand climate-crisis-navbar-brand" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 975.93 98.21">
                    <title>lhamidou-logo-inline</title>
                    <g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1">
                        <path class="cls-1" d="M50.32,58.69a.2.2,0,0,0,.06.17.21.21,0,0,0,.18.07H97.84V94.57H0V3.64H50.32V58.69Z"/>
                        <path class="cls-1" d="M131.55,47.65,90.94,38.92V3.64h40.61Z"/>
                        <path class="cls-1" d="M203.7,3.64H254V94.57H203.7V65a.24.24,0,0,0-.06-.18.29.29,0,0,0-.19-.07H186.84c-.08,0-.12,0-.12.07V94.57H136.41V3.64h50.31V39.22c0,.05,0,.06.12.06h16.61a.21.21,0,0,0,.25-.24V3.64Z"/>
                        <path class="cls-1" d="M357.44,3.64q2.19,7.51,4.31,15.09T366,33.89q2.13,7.57,4.31,15.16t4.3,15.15l4.24,15.16q2.13,7.58,4.31,15.21H329.07L327,82.69H310.52l-2.06,11.88H256.68q2.19-7.63,4.31-15.21l4.24-15.16q2.11-7.58,4.25-15.15t4.24-15.16q2.13-7.58,4.24-15.16t4.19-15.09ZM312,74.2h13.45a.11.11,0,0,0,.12-.12q-1-5.94-1.75-10.49c-.53-3-1.07-6.26-1.64-9.69s-1.09-6.69-1.58-9.77-1.09-6.55-1.82-10.42h-.12q-1,5.81-1.76,10.42c-.52,3.08-1.07,6.33-1.63,9.77s-1.09,6.66-1.58,9.69-1.05,6.53-1.69,10.49Z"/>
                        <path class="cls-1" d="M531.92,3.64V94.57H485.24V44.13q0-.12-.06-.12h-.12s-.06,0-.06.12L473.11,94.57H442.19q-3-12.6-5.94-25.09t-5.94-25a.12.12,0,0,0-.24,0V94.57H385.82V3.64h64.62q1.81,7.51,3.52,15t3.45,15q1.75,7.53,3.46,15a.24.24,0,0,0,.06.18.07.07,0,0,0,.12,0,.24.24,0,0,0,.06-.18l9.7-45Z"/>
                        <path class="cls-1" d="M536.77,94.57V3.64h50.32V94.57Z"/>
                        <path class="cls-1" d="M664.19,3.64a74.28,74.28,0,0,1,20.19,2.48A50.6,50.6,0,0,1,699.48,13,40.93,40.93,0,0,1,709.8,23.09a43.59,43.59,0,0,1,5.94,12.31,47,47,0,0,1-1.17,30.13A41.68,41.68,0,0,1,705,80.27,46.43,46.43,0,0,1,688.38,90.7q-10.11,3.87-24.19,3.87H591.94V3.64ZM654.5,38.56H640V59.65h14.78a12.77,12.77,0,0,0,4.79-.85,10.15,10.15,0,0,0,5.82-5.69,10.69,10.69,0,0,0,.79-4,10.53,10.53,0,0,0-1.4-5.33A10,10,0,0,0,660.8,40,13,13,0,0,0,654.5,38.56Z"/>
                        <path class="cls-1" d="M823.88,6.31q14.8,6.3,22.19,17.33A44.38,44.38,0,0,1,853.47,49a48.8,48.8,0,0,1-2.3,15,41.83,41.83,0,0,1-7.28,13.45A46.11,46.11,0,0,1,831,88.33a67.26,67.26,0,0,1-18.85,7.27,110.58,110.58,0,0,1-25.41,2.61,117.68,117.68,0,0,1-18.86-1.39,88,88,0,0,1-15.45-3.88,56.19,56.19,0,0,1-12.18-6,46.66,46.66,0,0,1-9.1-7.82A44.17,44.17,0,0,1,724.88,70a41.35,41.35,0,0,1-3.63-10.18A50.94,50.94,0,0,1,720.1,49,48.32,48.32,0,0,1,722,35.4a42.16,42.16,0,0,1,14.79-21.64,56.35,56.35,0,0,1,12.92-7.4,79.17,79.17,0,0,1,16.68-4.73A117.79,117.79,0,0,1,786.78,0Q809.09,0,823.88,6.31ZM779.69,39.46A13,13,0,0,0,775,41.89a9.21,9.21,0,0,0-2.55,3.4,9.84,9.84,0,0,0-.78,3.81,9.5,9.5,0,0,0,1.46,5,10.55,10.55,0,0,0,4.84,4,21.59,21.59,0,0,0,9,1.57,24.65,24.65,0,0,0,5.75-.6,16,16,0,0,0,4.25-1.64A11.11,11.11,0,0,0,799.82,55a8.61,8.61,0,0,0,1.63-2.92,9.84,9.84,0,0,0,.49-3.09,9,9,0,0,0-.79-3.63A9.48,9.48,0,0,0,798.67,42a13.1,13.1,0,0,0-4.61-2.49,23.08,23.08,0,0,0-7.15-1A25.16,25.16,0,0,0,779.69,39.46Z"/>
                        <path class="cls-1" d="M907.42,3.64V51.41a6.14,6.14,0,0,0,.79,3.15,7.25,7.25,0,0,0,2.06,2.25,9.8,9.8,0,0,0,2.91,1.39,11.84,11.84,0,0,0,3.34.49,11.3,11.3,0,0,0,6.3-1.82,6,6,0,0,0,2.78-5.34V3.64h50.33V61a27.18,27.18,0,0,1-5,16.31,40.3,40.3,0,0,1-13.52,11.63,70.48,70.48,0,0,1-19.1,7,102.63,102.63,0,0,1-21.76,2.3A104.73,104.73,0,0,1,899,96.75a78,78,0,0,1-16.24-4.48,55.75,55.75,0,0,1-13.34-7.46,32.91,32.91,0,0,1-9-10.43A27.4,27.4,0,0,1,857.11,61V3.64Z"/>
                    </g></g>
                </svg>
            </NuxtLink>
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
                            class="menu-item-link climate-crisis-regular-font" 
                            aria-current="page" 
                            to="/projects"  
                            @click="isActive = !isActive"
                        >Mes réalisations</NuxtLink>
                    </li>                    
                    <li class="menu-item">
                        <NuxtLink 
                            class="menu-item-link climate-crisis-regular-font" 
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
        margin-right: 1rem;
        width: 120px;
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
        font-size: 21px;
        color: var(--clr-green-flash);
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
            font-size: 17px;
            transition: color .7s;

            &:hover {
                
                color: var(--clr-purple);
            }
        }
    }



</style>