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
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, ad quasi expedita vitae sint quas qui ut fugiat voluptatibus eaque dolorum, necessitatibus animi magnam? Necessitatibus, asperiores nulla incidunt corrupti ut, cum tenetur dolorum inventore commodi illo consequuntur? Voluptas esse harum adipisci! Obcaecati voluptatum minima beatae vitae. Ad alias recusandae saepe.
  </div>
  <a href="home" className="btn bg-gray-700 text-white">Enter</a>

</div> 

</div>

}
