"use client"
import Login from '@/Components/Login';
import SignUp from '@/Components/SignUp';
import {signIn,signOut,useSession} from 'next-auth/react'
export default function Home(){
  const{data:session}=useSession();
  if(session){
    return(
      <>
      <Home/>
    <button onClick={()=>signOut()}>SIGNIN</button>
    </>
  )}
  return(
    <>
    
    <button onClick={()=>signIn()}>SIGNOUT</button>
    </>
  )
}