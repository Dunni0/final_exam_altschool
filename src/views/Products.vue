<template> 
<div class="wrapper"> 
     <div class="minC" v-for="product in products" :key="product.id">
       <router-link class="p"
       :to="{ params: {id: product.id, slug: `${product.title.split(' ').join('-')}-details`}}">
       <p> Product: {{ product.title }} </p>
       <p> Brand: {{ product.brand }}</p>
       <p> Category: {{ product.category }}</p>
       <p> In Stock: {{ product.stock }}</p>

       </router-link>
     </div>
</div>
</template>

<script>
export default
{ name: "Products",
 data(){
    return{
        products: null,
    }
 },

 created(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        this.products = data.products
    })

    .catch(error => console.log(error))
 }
 }

</script>

<style>

.wrapper{
    width: 30rem;
    max-width: 100%; 
    margin: 2rem auto;
    padding: 1rem;
    box-shadow: 2px 2px 4px black;
    border-radius: 0 2rem 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
}

.minC{
    box-shadow: 1px 1px 2px black;
}

.p{
    text-decoration: none;
    color: rgba(6, 56, 31, 0.541);
    font-weight: bold;
}

</style>


