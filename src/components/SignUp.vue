<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="displayname" v-model="displayName">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <div v-if="error" class="error">{{error}}</div>
        <button>Submit</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from "../composables/useSignup"
import {useRouter} from "vue-router"
export default {
    setup(props,context){
        let displayName=ref("")
        let email=ref("")
        let password=ref("")
        let router=useRouter()
        
        let {error,createAccount}=useSignup()
        let signUp=async()=>{
            let res=await createAccount(email.value,password.value,displayName.value)
            if(res){
                // context.emit("enterChatroom")
                router.push("/chatroom")
            }
        }
        return {displayName,email,password,signUp,error}
    }
}
</script>

<style>

</style>