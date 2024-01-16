<template>
    <nav>
        <div>
            <p>Hi displayed name</p>
            <p class="email">Logged in as email</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import { auth } from '@/firebase/config'
import { ref } from 'vue'
export default {
    setup(){
        let error=ref(null)
        let logout=async()=>{
            try{
                await auth.signOut();
                console.log("user logged out")
            }catch(err){
                error.value=err.message;
                console.log(error.value)
            }
        }
        return {logout}
    }
}
</script>

<style>

</style>