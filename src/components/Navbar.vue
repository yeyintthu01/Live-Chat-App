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
export default {
    setup(){
        let {user}=getUser()
        console.log(user.value)
        let {error,signOut}=useLogout()
        let logout=async()=>{
            await signOut()
        }
        
        return {logout,error,user}
    }
}
</script>

<style>

</style>