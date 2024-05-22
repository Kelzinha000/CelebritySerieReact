import { BrowserRouter,
         Routes, 
         Route } from "react-router-dom"
import{Nav,
      ImgTitulo,
    
    } from './Styles/App'
    
import img from "./img/celebrityserie.png"

import Sobre from './Sobre'
import Personagens from './Personagens'
import Home from './Home'
import Header from "./Header"
 import Footer from "./Footer"
import Pagina404 from "./Pagina404"

const App = () =>{
    return(
        <>
        
        <BrowserRouter>
        <Nav>
        <ImgTitulo src={img} /> 
        <Header classname="Links" />
        </Nav> 
       
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/Personagens' element={<Personagens/>}/>
            <Route path='*' element={<Pagina404/>}/>
        </Routes>
        
        
        </BrowserRouter>
    
    <Footer />
        
    
        </>
 )
}

export default App;