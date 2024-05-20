import styled from "styled-components";


 export const cores = {
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
background-image: linear-gradient(to left, ${cores.carnationPink}, ${cores.lspisLazuli}, ${cores.licorice});
justify-content: space-between;

`

export const ImgTitulo = styled.img`
width: 270px;
height: 75px;

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
padding: 10px;

`
export const TituloPersonagem = styled.h1`
color: ${cores.carnationPink};
display: flex;
justify-content: center;
align-items: center;
padding: 20px;


`
export const CardSobre = styled.img`
width: 350px;
height: 520px;
border-radius:10px ;


`
export const TextSobre = styled.p`
color: white;
width: 500px;
height: 150px;
display: inline-block;
padding-left: 30px;
font-size: 20px;
align-items: center;
display: flex;
border: solid ${cores.carnationPink} ;
border-radius:20px 0 20px 0 ;
margin-left: 10px;

`

export const TituloSobre = styled.h1`
color: ${cores.carnationPink};
justify-content: center;
align-items: center;
display: flex;
padding: 50px;

`
export const ContainerSobre = styled.div`
display: flex;
justify-content: center;

`