<template>
    <div class="container">
        <Navbar></Navbar>
        <ChatWindow></ChatWindow>
        <NewChatForm></NewChatForm>
    </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import { watch } from 'vue'
import getUser from "../composables/getUser"
import Navbar from '../components/Navbar'
import NewChatForm from '../components/NewChatForm'
import {useRouter} from "vue-router"
export default {
  components: {
    ChatWindow, Navbar, NewChatForm},
      setup(){
        let router=useRouter()
        let {user}=getUser()
        watch(user,()=>{
          if(!user.value){
            router.push("/")
          }
        })
      }
}
</script>

<style>
    nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>