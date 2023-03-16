<template> 
    <div class="container">
        <div>
        <h2> Hello! </h2>
        <p> Create an account. </p>
    </div>
    <form>
        <label for="username"> Email </label>
        <input type="text" class="email" v-model="email" placeholder="Enter email"> 
    
        <label for="password"> Password </label>
        <input type="password" class="passW" v-model="password" placeholder="Enter password"> 
        
        <button @click.prevent= "signUp"> Sign Up </button>
        <button @click.prevent= "signUpWithGoogle"> Sign up with Google </button>
    
        <router-link to="/login" class="p" > Have an account? Login.</router-link>
    </form>
    </div>
    </template>
    
    
    <script setup>
        import { ref } from "vue";
        import {
            getAuth, 
            createUserWithEmailAndPassword,
            GoogleAuthProvider,
            signInWithPopup} from "firebase/auth"
        import { useRouter } from "vue-router";
    
        const email = ref("")
        const password = ref("")
        const router = useRouter()
    
    
        const signUp = () => {
            // .value is needed because of ref()
            createUserWithEmailAndPassword(getAuth(), email.value, password.value)
                .then((data) => {
                    console.log("successfully registered" + data)
                    router.push('/products')
                })
                .catch((error) => {
                    console.log(error.code);
                    alert(error.message)
                })
    
        }
        const signUpWithGoogle = () => {
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
    .container{
        /* border: 0.3rem black solid; */
        width: 30rem;
        max-width: 100%; 
        margin: 2rem auto;
        padding: 1rem;
        box-shadow: 2px 2px 4px black;
        border-radius: 0 2rem 0;
    }

    h2{
        color: rgba(15, 75, 45, 0.541);
    }

    p, .p{
        text-decoration: none;
        color: rgba(6, 56, 31, 0.541);
        font-size: small;
    }

    .p{
        transition: transform 0.5;
        transition-duration: 0.2s;
    }
    
    form{
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }
    
    label{
       margin-right: auto;
       margin-bottom: 0.3rem;
       font-weight: 700;
       color: rgba(15, 75, 45, 0.541);
    }
    
    input{
        width: 20rem;
        max-width: 100%;
        padding: 0.5rem;
        border: none;
        box-shadow: 2px 2px 4px black;
        outline: none;
    }

    input::placeholder{
        font-size: small;
        font-style: italic;
        color: rgba(3, 32, 18, 0.541);
    }
    
    .email,
    .passW{
        margin-bottom: 1rem;
    }
    
    button{
        padding: 0.3rem 0.5rem;
        max-width: 100%;
        margin: 0.4rem auto;
        background-color: transparent;
        border-radius: 0.5rem;
        border: none;
        color: white;
        background-color: rgba(15, 75, 45, 0.541);
        /* box-shadow: 2px 2px 4px black; */
        transition: transform 0.5;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    .p:hover,
    button:hover{
        transform: translateX(-4px);
    }
    </style>