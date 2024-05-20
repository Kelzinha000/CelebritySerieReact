
import { TextSobre, CardSobre, ContainerSobre, TituloSobre } from "./Styles/App";
import cardImg from './img/CelebrityCard.jpg'

const Sobre = ()=>{
    return(
        <>
        <TituloSobre>SOBRE</TituloSobre>
    <ContainerSobre>
        
       <CardSobre src={cardImg} alt="" />
       <TextSobre>
       Seo A-ri conquista sucesso, fama e poder nas redes sociais da noite para o dia. Mas logo descobre que o glamoroso mundo dos influenciadores pode ter consequências mortais.
       </TextSobre>
       
    </ContainerSobre>

        </>
    )
}
export default Sobre;