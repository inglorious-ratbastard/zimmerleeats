import Head from 'next/head'
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import About from './components/About';
import Board from './components/Board';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
        return (
        <div>    

            <Head>
      <title>Zimmerle Eats - Private Chef Services</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge;"/>
              
      <link href="https://unpkg.com/cirrus-ui" type="text/css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />    
      <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/styles/eats.css" />    

      <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script> 
            </Head>

            <Navbar />
            
            <Splash />

            <About />

            <Board />

            <Menu />

            <Contact />
    
            <Footer />
            
      </div>    
  )
}
