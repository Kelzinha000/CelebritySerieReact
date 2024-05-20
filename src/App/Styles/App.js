import styled from "styled-components";


const cores = {
   licorice: ' hsl(349, 48%, 9%)',
   amethyst: ' hsl(268, 36%, 57%)',
   carnationPink : ' hsl(332, 100%, 80%)',
   midNigthBue: ' hsl(240, 59%, 31%)',
   lspisLazuli: ' hsl(211, 43%, 38%)',
   white: '#fff'
}

export const Nav = styled.nav`
margin: 0;
padding: 30px;
background-image: linear-gradient(-90deg, ${cores.carnationPink}, ${cores.lspisLazuli}, ${cores.licorice});


`

export const ImgTitulo = styled.img`
width: 270px;
height: 72px;
` 
export const ContainerImg = styled.section`
float: left;

& :hover{
   background-color: #a5a5a5 ; 
   transition: 0.1s;

} `


export const BoxPersonagens = styled.div`
text-align: center;
padding: 10px;
justify-content: center;
align-items: center;
background-color: ${cores.white};
margin: 10px;


`
export const ImgPersonagens = styled.img`
width: 250px;
height: 250px;

`

export const H1Personagens = styled.h1`
color: ${cores.midNigthBue};

`
export const TituloPersonagem = styled.h1`
color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
font-size: 40px;

`
export const TextSobre = styled.p`
color: white;
`

