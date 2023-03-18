<template> 
<div class="container">
    <div>
    <h2> Hello! 👋 </h2>
    <p> welcome back. </p>
</div>
<form>
    <label for="username"> Email </label>
    <input type="text" class="email" v-model="email" placeholder="Enter email"> 

    <label for="password"> Password </label>
    <input type="password" class="passW" v-model="password" placeholder="Enter password"> 
    <p v-if="errMsg"> {{ errMsg }} </p>
    
    <button @click.prevent= "login"> Login </button>
    <button @click.prevent= "loginWithGoogle"> Login with Google </button>

    <router-link to="/" class="p" > Don't have an account? Sign up.</router-link>
</form>
</div>
</template>


<script setup>
    import { ref } from "vue";
    import {
            getAuth, 
            signInWithEmailAndPassword,
            GoogleAuthProvider,
            signInWithPopup} from "firebase/auth"
    import { useRouter } from "vue-router";

    const email = ref("")
    const password = ref("")
    const router = useRouter()

    const errMsg = ref()



    const login = () => {
        // .value is needed because of ref()
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("successfully registered" + data)
                router.push('/products')
            })
            .catch((error) => {
                console.log(error.code);
                switch (error.code) {
                    case "auth/invalid-email":
                        errMsg.value = "Invalid email"
                        break;
                    case "auth/user-not-found":
                        errMsg.value = "Sorry, we can't find an account with this email"
                        break;
                    case "auth/wrong-password":
                        errMsg.value = "Incorrect password"
                        break;
                    default:
                        errMsg.value = "Email or password was incorrect"
                        break;
                }
            })

    }
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
            signInWithPopup(getAuth(), provider)
            .then((result) => {
               console.log(result.user);
               router.push("/products")
            })
            .catch((error) => {
               console.log(error)
            })

    }
</script>


<style>

</style>