<template>
  <nav> 
    <router-link to="/" class="nav"> Sign-up</router-link>
    <router-link to="/login" class="nav"> Login</router-link>
    <router-link to="/Products" class="nav"> Products</router-link>
    <button @click.prevent="handleSignOut" v-if="isLoggedIn"> Sign out</button>
  </nav>
  <router-view/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import {useRouter} from 'vue-router';

    const router = useRouter()
    const isLoggedIn = ref(false)
 
    let auth;
    onMounted(() => {
      auth = getAuth()
       onAuthStateChanged(auth, (user) => {
        if(user){
          isLoggedIn.value = true
        } else{
          isLoggedIn.value = false
        }
       })
    })

    const handleSignOut = () => {
       signOut(auth).then(() => {
        router.push("/")
       })
     }

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 30px;
  background-color: #ffff;
  max-height: 100%;
  padding: 1rem;
}

nav{
  width: 35rem;
  max-width: 100%;
  margin: 1rem auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

.nav{
  margin: 0 auto;
  text-decoration: none;
  transition: transform 0.5;
  transition-duration: 0.2s;
  font-weight: 700;
  font-size: large;
  color: black;
}

.nav:hover{
  transform: translateY(-3px);
}



</style>
