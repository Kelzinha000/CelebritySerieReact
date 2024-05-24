import styled from "styled-components";


 export const cores = {
   licorice: ' hsl(349, 48%, 9%)',
   amethyst: ' hsl(268, 36%, 57%)',
   carnationPink : ' hsl(332, 100%, 80%)',
   midNigthBue: ' hsl(240, 59%, 31%)',
   lspisLazuli: ' hsl(211, 43%, 38%)',
   white: '#fff',
   whiteBabyBlue :'#ddf5ff'
}

export const Nav = styled.nav`
margin: 0;
padding: 25px;
background-image: linear-gradient(to left, ${cores.carnationPink}, ${cores.lspisLazuli}, ${cores.licorice});
justify-content: space-between;


`


export const ImgTitulo = styled.img`
width: 270px;
height: 75px;
padding-left:50px

` 

export const ContainerImg = styled.section`
display: inline-block;
justify-content: center;
align-items: center;

& :hover{
   background-color: #a5a5a5 ; 
   transition: 0.1s;
   

}
`
 


export const BoxPersonagens = styled.div`
text-align: center;
padding: 10px;
background-color:${cores.whiteBabyBlue};
margin: 10px;
border-radius: 20px 0 25px 0;
border: solid 3px ${cores.licorice};



`
export const ImgPersonagens = styled.img`
width: 250px;
height: 250px;
border-radius: 20px 0 25px 0;
border: solid 3px ${cores.licorice};

`

export const H1Personagens = styled.h1`
color: ${cores.midNigthBue};
padding: 10px;
`
export const TituloPersonagem = styled.h1`
color: ${cores.carnationPink};
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
letter-spacing: 6px;


`
export const CardSobre = styled.img`
width: 370px;
height: 540px;
border-radius:10px ;
margin-bottom:30px;


`
export const TextSobre = styled.div`
color: white;
width: 550px;
height: 150px;
display: flex;
padding-left: 30px;
padding-right: 30px;
font-size: 20px;
align-items: center;
border: solid ${cores.carnationPink} ;
border-radius:20px 0 20px 0 ;
margin-left: 10px;

`

export const TituloSobre = styled.h1`
color: ${cores.carnationPink};
justify-content: center;
display: flex;
padding: 50px;
letter-spacing: 6px;

`

export const ContainerSobre = styled.p`
display: flex;
justify-content: center;


`
export const ContainerLinkETextSobre = styled.div`
display: flex;
flex-direction: column;
padding-left: 20px;
gap: 30px;


`

export const LinkYoutube = styled.a`
display: flex;
`
export const LinkH1 = styled.h1`
   color: ${cores.white};
   font-size:30px;
   
`
export const DivLink = styled.div`
border: solid 2px ${cores.white};
width: 350px;
height: 50px; 
border-radius: 0 20px  0 20px;
background-image:linear-gradient(to left,${cores.carnationPink},${cores.midNigthBue});
margin: 20px;
margin-left :80px;


& :hover{
   transition:0.1s;
   color: ${cores.lspisLazuli};
  
}

`
export const IconPlay = styled.img`
width: 20px;
height: 22px;
padding-right: 4px;
`

export const HomeBackground = styled.img`

`
export const TextoHome = styled.h1`
color:${cores.white};
margin-top: 50px;


`
export const TextoHomeSerie = styled.p`
color: white;
width: 550px;
height: 250px;
display: flex;
padding-left: 30px;
padding-right: 30px;
font-size: 25px;
align-items: center;
border: solid ${cores.carnationPink} ;
border-radius:20px 0 20px 0 ;
margin-left: 10px;
border-left-width:10px;
border-bottom-width:10px;
margin-top:30px;

`
export const SectionHome = styled.section`
display:flex;
justify-content: space-between;
margin-left:100px;
font-size: 30px;
`
export const CentralizarPersonagens = styled.section`
justify-content: center;
align-items: center;
margin-left: 90px;
`
export const H1Pagina404 = styled.h1`
background-image: linear-gradient(to bottom, ${cores.carnationPink}, steelblue, turquoise);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 150px;
`
export const ContainerPagina404 = styled.div`
justify-content: center;
display: flex;

`
export const SectionLogin = styled.section`
justify-content: center;
align-items: center;
display: block;
display: flex;
margin:  50px 500px ;
max-width: 600px;
gap: 70px;
margin-bottom: 20%;


`
export const H1Login = styled.h1`
color: white;
font-size: 70px;

`
export const LabelLogin = styled.label`
  display: flex;
 


`

export const InputLogin  = styled.input`
 border-radius: 0 25px 0 25px;
    border-color:hsl(332, 100%, 80%) ;
    padding: 5px;
    width: 200px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.548);
    margin: 10px;
  ` 
   

  export const button = styled.button`
  
  height: 30px;
    width: 80px;
    color: white;
    display: block;
    background-color: hsl(332, 100%, 80%) ;
   `
export const ButtonLogin = styled.button`
 background-color: ${cores.carnationPink};
 margin: 20px;
 color: white;
 width: 140px;
 height: 40px;
 border-radius: 10px;
 border: none;
 justify-content: center;
 align-items: center;
 margin-left:30px;

 &:hover{
 background-color: hsl(120, 27%, 52%) ;
 cursor: pointer;
 } 
`
export const FormLogin = styled.form`
 background-color: rgba(240, 248, 255, 0.578);
;
height: 300px;
width: 450px;
justify-content: center;
align-items: center;
padding: 40px;
border-radius:10px;
`


// export const DivFooter = styled.footer`
// background-image:linear-gradient(to left,${cores.carnationPink},${cores.midNigthBue});
// align-items: end;
// `