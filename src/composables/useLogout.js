import { ref } from "vue"
import { auth } from '@/firebase/config'
let error=ref(null)

let signOut=async()=>{
    try{
        let res=await auth.signOut();
        return res;
    }catch(err){
        error.value=err.message;
    }
}
let useLogout=()=>{
    return {error,signOut}
}

export default useLogout