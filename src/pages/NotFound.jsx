import {Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export  function NotFound(){
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            //傳入-1則會模擬返回鍵
            //設定state會將此職傳入任何頁面，可以使用useLocation獲取state
            navigate("/",{state:"error not found"})
        },1000)
    },[])
    return (
        // "NotFound"
        //直接重定向
        // <Navigate to="/" />
    //    更好的方法
        <h1>Not Found</h1>
    )
}