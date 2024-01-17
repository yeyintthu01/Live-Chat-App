import { ref } from "vue"
import { auth } from "../firebase/config"

let error=ref(null)

let signIn=async(email,password)=>{
    try {
        let res=await auth.signInWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("Cann't login account")
        }
        
        console.log(res)
        return res
    }catch(err){
        if(err.code === 'auth/internal-error')
            error.value = 'email or password invalid'
         else error.value=err.message
        console.log(err.code)
    }
}

let useLogin=()=>{
    return {error,signIn}
}

export default useLogin;