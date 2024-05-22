
import { ImgPersonagens, 
    BoxPersonagens ,
    H1Personagens, 
    ContainerImg,
    TituloPersonagem,
    CentralizarPersonagens
} from './Styles/App';
import hari from './img/ha-ri.jpg'
import junKyung from './img/HanJunKyung.jpg'
import jinChaeHee from './img/jinChaeHee.jpg'
import ohMinHye from './img/ohMinHye.png'
import yoonSiEun from './img/yoonSiEun.jpg'
import Angela from './img/Angela.jpg'
import jina from './img/ji-na.jpg'
import jinTaejeon from './img/jinTae-jeon.jpg'
import yoonjeongSun from './img/yoonJeong-sun.jpg'



const Personagens = () =>{
    return(
        <>
    <TituloPersonagem>PERSONAGENS</TituloPersonagem>
    
       <CentralizarPersonagens>
       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={hari} alt="" />
       <H1Personagens>Seo A-ri</H1Personagens>
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
       <ImgPersonagens src={yoonSiEun} alt="" />
       <H1Personagens>Yoon Si Eun</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>

       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={yoonjeongSun } alt="" />
       <H1Personagens>Yoon jeong-sun </H1Personagens>
       </BoxPersonagens>
       </ContainerImg>

       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={jinChaeHee} alt="" />
       <H1Personagens>Jin Chae-Hee</H1Personagens>
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
       <ImgPersonagens src={Angela} alt="" />
       <H1Personagens>Angela</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>

       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={jina} alt="" />
       <H1Personagens>Ji-na</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>

       <ContainerImg>
       <BoxPersonagens >
       <ImgPersonagens src={jinTaejeon} alt="" />
       <H1Personagens>Jin Tae-jeon</H1Personagens>
       </BoxPersonagens>
       </ContainerImg>
           
       </CentralizarPersonagens>
       
     
        </>
    )
}

export default Personagens;
