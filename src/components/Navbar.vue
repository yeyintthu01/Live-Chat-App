<template>
    <nav v-if="user">
        <div>
            <p>Hi {{user.displayName}}</p>
            <p class="email">Logged in as {{user.email}}</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import { auth } from '../firebase/config'

import useLogout from "../composables/useLogout"
import { ref } from 'vue'
export default {
    setup(){
        let user=ref(auth.currentUser)
        let {error,signOut}=useLogout()
        let logout=async()=>{
            await signOut()
            console.log("user logout")
        }
        auth.onAuthStateChanged((_user)=>{
            user.value=_user
        })
        return {logout,error,user}
    }
}
</script>

<style>

</style>