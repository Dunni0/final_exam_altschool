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
/* .container{
    border: 0.3rem black solid;
    width: 30rem;
    max-width: 100%; 
    margin: 2rem auto;
    padding: 1rem;
}

form{
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

label{
   margin-right: auto;
   margin-bottom: 0.3rem;
}

input{
    width: 20rem;
    max-width: 100%;
    padding: 0.2rem;
}

.email,
.passW{
    margin-bottom: 1rem;
}

button{
    padding: 0.3rem 0 0.3rem;
    max-width: 100%;
    margin: 0.4rem auto;
}  */
</style>