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
import getUser from "../composables/getUser"
import useLogout from "../composables/useLogout"
import {useRouter} from "vue-router"
export default {
    setup(){
        let router=useRouter()
        let {user}=getUser()
        let {error,signOut}=useLogout()
        let logout=async()=>{
            await signOut()
            router.push("/")
        }
        return {logout,error,user}
    }
}
</script>

<style>

</style>