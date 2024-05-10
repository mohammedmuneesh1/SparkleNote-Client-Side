import  { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
export default function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{

        let mounted = true;

        const checkToken = ()=>{
            const token = localStorage.getItem('token')
            if(!token ||  token === 'undefined'){
                setIsLoggedIn(false)
                return navigate('/login')
            }
            setIsLoggedIn(true)

        }

        if(mounted) checkToken();

        return ()=>{
            mounted = false;
        } 
    },[navigate])

    return isLoggedIn && children
}




