import { useRouter } from "next/navigation";

const Navbar=()=>{
     const router=useRouter();
    return(
       
        <div className="div1">
          <div> <p>Interv</p></div>
           <div>
            <li onClick={()=>router.push('/Home')}>Home</li>
            <li onClick={()=>router.push('/Login')}>Login</li>
            <li onClick={()=>router.push('/Signup')}>Signup</li>

           </div>
        </div>

    )
}
export default Navbar;