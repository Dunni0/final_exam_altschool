<template>
    <div class="container">
    <h1>404</h1>
    <p> you didn't break the internet, but we can't find you.</p>
    <router-link to="/" class="p" > Go back. </router-link>
    </div>
</template>


<script setup>  </script>

<style> 
 .container{
        width: 30rem;
        max-width: 100%; 
        margin: 2rem auto;
        padding: 1rem;
        box-shadow: 2px 2px 4px black;
        border-radius: 0 2rem 0;
        color: rgba(15, 75, 45, 0.541);
}

h1{
    font-size: 6rem;
    letter-spacing: 1rem;
}

p{
    font-weight: 700;
    color: rgba(6, 56, 31, 0.541);
}

.p{
    text-decoration: none;
    color: #b8adad;
    font-size: small;
    transition: transform 0.5;
    transition-duration: 0.2s;
}



</style>