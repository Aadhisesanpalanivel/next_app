"use client"
import Home1 from '@/Components/Home';
import Login from '@/Components/Login';

import {signOut,useSession} from 'next-auth/react'
export default function Home(){
  const{data:session}=useSession();
  if(session){
    return(
      <>
      <Home1/>
      <p>your email is {session.user.name}</p>
      <img src={session.user.image}></img>
    <button onClick={()=>signOut()}>SIGNOUT</button>
    </>
  )}
  return(
    <div>
    <Login/>
    </div>
  )
}