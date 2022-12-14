import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound () {
  
  const router = useRouter();

  useEffect(()=> {
  setTimeout(() => {  
    router.push('/zimmerle')
  }, 3000000 )
  }, [])

 return <div className="error-wrap">
   
<div className="bg-black" id="error">

 <div className="error-content" id="error-info">
 
 <h6 className="error-text"><span className="w3-tag w3-wide">Sorry That Page Cannot Be Found</span></h6>
 
 <div className="ag-preload"></div>

  <div className="faux">
   <section className="faux-wrap">
    <p style={{ marginBottom: 15 + 'px' }}>It Looks like you stumbled into the pantry</p>
    <div className="faux-info">
      <div className="zee-circle"><Link href="/zimmerle">Z</Link></div>
    </div>
   </section>
  </div>

 </div>
</div> 

</div>
}