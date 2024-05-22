
import { 
     CardSobre,
      ContainerSobre,
       TituloSobre,
       LinkYoutube,
       LinkH1,
       DivLink,
       IconPlay,
       ContainerLinkETextSobre, 
       TextSobre
     
       } from "./Styles/App";
import cardImg from './img/CelebrityCard.jpg'
import iconPlay from './img/iconplay.png'



const Sobre = ()=>{
    return(
        <>
        <TituloSobre>SOBRE</TituloSobre>
    <ContainerSobre>
       <CardSobre src={cardImg} alt="" />
       
       <ContainerLinkETextSobre>
       
       <DivLink>
       <LinkYoutube href="https://www.youtube.com/watch?v=1UjzpEnpIqM"><LinkH1> <IconPlay src={iconPlay} alt="" />Acesse Para Mais</LinkH1></LinkYoutube>
       </DivLink>
       
       <TextSobre>
        Minissérie |
       Temporadas: 1 |
       Episódios: 12 |
       Drama |
       Classificação : +16

       </TextSobre>
       
       </ContainerLinkETextSobre>
    </ContainerSobre>
   
        </>
    )
}
export default Sobre;