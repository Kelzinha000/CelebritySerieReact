import {HomeBackground, TextoHome, SectionHome, ContainerLinkETextSobre, TextoHomeSerie } from './Styles/App'
import imgHome from './img/CelebrityBackground.jpg'




const Home = ()=>{
    return(
       <SectionHome>
       
       <ContainerLinkETextSobre>
       <TextoHome>#Alcança_a_fama</TextoHome>
         <TextoHomeSerie >
       Seo A-ri conquista sucesso, fama e poder nas redes sociais da noite para o dia. Mas logo descobre que o glamoroso mundo dos influenciadores pode ter consequências mortais.A estrela em ascensão Park Gyu-young protagoniza este drama dirigido por Kim Cheol-kyu, indicado ao Canneseries.
       </TextoHomeSerie >
       
       </ContainerLinkETextSobre>
         <HomeBackground src={imgHome}  />
      
       </SectionHome>
    )
} 


export default Home;