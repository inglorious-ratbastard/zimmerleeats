import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Intro () {
const router = useRouter();

  useEffect(()=> {
    setTimeout(() => {
      router.push('/home');
    }, 60000); 
  }, []); 

return  <div className="land-wrap">
  
 <div className="landing-page" id="landing">

  <header id="land-title">
  <h1 className="font-light">Zimmerle Eats | Chef & Charcutier</h1>
  </header>
  <div id="landmn" className="land-main leading-tight">
    A dedicated local chef, crafting expertly cured meats and thoughtfully prepared meals for intimate home gatherings and fully catered events alike. Drawing on refined technique and bold flavors, each dish is carefully planned, patiently prepared, and finished with purpose. From handcrafted charcuterie to complete menus, every offering reflects care, precision, and pride. Guests experience food that feels personal, memorable, and intentionally made.
  </div>
  <a href="home" className="btn bg-gray-700 text-white">Taste</a>

</div> 

</div>

}
