<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/">L'Hamidou</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
                    </li>                    
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>



<style>

    .navbar-brand {
        font-family: "Inter", sans-serif;
        font-weight: 700;
    }

</style>