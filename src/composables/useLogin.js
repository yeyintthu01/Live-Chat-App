import { ref } from "vue"
import { auth } from "../firebase/config"

let error=ref(null)

let signIn=async(email,password)=>{
    try {
        let res=await auth.signInWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("Cann't login account")
        }
        return res;
    }catch(err){
        console.log(err.message)
    }
}

let useLogin=()=>{
    return {error,signIn}
}

export default useLogin;