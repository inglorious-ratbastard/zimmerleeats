import Head from 'next/head'
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import About from './components/About';
import Board from './components/Board';
import Menu from './components/Menu';
import Event from './components/Event';
import Contact from './components/Contact';
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
            <Contact />
            <Board />
            <Menu />
            <Event />
            <Footer /> 
      </div>    
        
  )
}
