import { ref } from "vue"
import { auth } from '@/firebase/config'
let error=ref(null)

let signOut=async()=>{
    try{
        let res=await auth.signOut();
        return res;
    }catch(err){
        error.value=err.message;
        console.log(error.value)
    }
}
let useLogout=()=>{
    return {error,signOut}
}

export default useLogout