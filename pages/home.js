import Head from 'next/head'
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Board from './components/Board';
import Event from './components/Event';
import Footer from './components/Footer';

export default function Home() {
        return (
        <div>    

          <div>
            <Head>
              <title>Zimmerle Eats</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
              <meta charSet="UTF-8"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge;"/>
            </Head>
          </div>
            <Navbar />
            <Splash />
            <About /> 
            <Services />
            <Gallery />
            <Board />
            <Event />
            <Footer /> 
      </div>    
        
  )
}
