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

    .navbar-top {
        align-items: stretch;
        display: flex;
        left: 0;
        min-height: 90px;
        right: 0;
        top: 0;
        width: 100%;
    }
    .navbar-fixed {
        position: fixed;
    }
    .navbar-top .navbar-brand {
        margin-right: 60px;
    }
    .navbar-brand {
        font-size: 1.25rem;
        margin-right: 1rem;
        text-decoration: none;
        white-space: nowrap;
    }
    .navbar-toggle {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
    }
    .navbar-toggle>span {
        background-color: currentColor;
        height: 2px;
        margin-bottom: 3px;
        margin-top: 3px;
        -webkit-transform-origin: center right;
        transform-origin: center right;
        transition: opacity .2s ease-in-out, -webkit-transform .2s ease-in-out;
        transition: transform .2s ease-in-out, opacity .2s ease-in-out;
        transition: transform .2s ease-in-out, opacity .2s ease-in-out, -webkit-transform .2s ease-in-out;
        width: 24px;
        will-change: transform, opacity;
    }

    .nav-link {
        font-weight: 500;
        transition: opacity .15s;
        will-change: opacity;   
    }

    .nav .nav-link {
        color: #0e0e0e;
    }


</style>