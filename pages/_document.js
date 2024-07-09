import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/256/9640/9640502.png" sizes="any" />
        
      <link href="https://unpkg.com/cirrus-ui" type="text/css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />    
      <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" /> 
      <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" /> 
      <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
