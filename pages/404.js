import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router' 

export default function NotFound () {
  
  const router = useRouter();

  useEffect(()=> {
    setTimeout(() => {  
      { router.push('/home') }
    }, 60000); 
  }, []); 

 return <div className="error-wrap u-center">
  
<div className="bg-black" id="error">

 <div className="error-content" id="error-info">
 
 <h6 className="error-text"><span className="err_tx" style={{ fontSize: 15 + 'px', overflow: 'hidden' , whiteSpace: 'nowrap' }}>Sorry That Page Cannot Be Found</span></h6>

   <div className="knives-out"> 
     <div className="wrap">
       <div className="knife">
         <div className="blade"></div>
         <div className="cap"></div>
         <div className="shaft"></div>
       </div>
       <div className="knife">
         <div className="blade"></div>
         <div className="cap"></div>
         <div className="shaft"></div>
       </div>
     </div>
   </div>

  <div className="faux">
   <section className="faux-wrap">
    <p style={{ marginBottom: 15 + 'px', fontSize: 15 + 'px' }}>It looks like you stumbled into the pantry</p>
    <div className="faux-info">
      <div className="zee-circle"><Link href="/home">Z</Link></div>
    </div>
   </section>
  </div>

 </div>
</div> 

</div>
} 
