import React from "react"
import {SectionLogin, LabelLogin , InputLogin,FormLogin ,ButtonLogin, H1Login} from './Styles/App'


const Login= () =>{
const [cep, setCep] = React.useState('')
const [email, setEmail] = React.useState('')
const [error, setError] = React.useState(null)

function validaCepEmail(value) {
    if(value.length === 0 ){
        setError("O campo não pode está vazio")
        return false
    }else if(!/\d{5}-\d{3}/.test(value)){
        setError("Verifique as informações ")

    }else{
        setError(null)
        return true
    }
}

// function validaEmail (value){
//     if(value  === '' ){
//         setError("O campo não pode está vazio")
//         return false
//     }else if(!/S+@S+.S+/.test(value)){
//         setError("Digite um Email válido")

//     }else{
//         setError(null)
//         return true
//     }
// }

function handleBlur({target}){
    validaCepEmail(target.value)
}

    return(
      <SectionLogin>
       <H1Login>FAÇA SEU LOGIN</H1Login>
        <FormLogin onSubmit={validaCepEmail}> 

            <LabelLogin htmlFor="cep">CEP</LabelLogin>
            <InputLogin
             type="text"
               id="cep" 
               value={cep}
               onBlur={handleBlur}
               onChange={({target})=> setCep(target.value)}
               />
            <LabelLogin htmlFor="email">EMAIL</LabelLogin>
            
            <InputLogin
             type="text"
               id="email" 
               value={email}
               onBlur={handleBlur}
               onChange={({target})=> setEmail(target.value)}
               />
            

               {error && <p>{error}</p>}
               <ButtonLogin>Enviar</ButtonLogin>
        </FormLogin>
        </SectionLogin>
    )
}

export default Login;