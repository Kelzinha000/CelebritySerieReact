
import { ImgPersonagens, 
    BoxPersonagens ,
    H1Personagens, 
    ContainerImg,
    TituloPersonagem
} from './Styles/App';
import hari from './img/ha-ri.jpg'
import junKyung from './img/HanJunKyung.jpg'
import jinChaeHee from './img/jinChaeHee.jpg'
import ohMinHye from './img/ohMinHye.jpg'
import yoonSiEun from './img/yoonSiEun.jpg'


const Personagens = () =>{
    return(
        <>
    <TituloPersonagem>PERSONAGENS</TituloPersonagem>
       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={hari} alt="" />
       <H1Personagens>Seori Ha-ri</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>
           
       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={junKyung} alt="" />
       <H1Personagens>Han Jun Kyung</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>

       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={jinChaeHee} alt="" />
       <H1Personagens>jinChaeHee</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>

       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={ohMinHye} alt="" />
       <H1Personagens>Oh Min Hye</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>
           
       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={yoonSiEun} alt="" />
       <H1Personagens>Yoon Si Eun</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>
           
           
     
        </>
    )
}

export default Personagens;
