import React from "react";
const App = () =>{
const [cep, setCep] = React.useState('')
const [error, setError] = React.useState(null)

function validaCep(value){
if(value === ''){
    setError("O campo não pode está vazio")
    
}

}

    return(
    <form onSubmit={validaCep}>
        <label htmlFor="cep">CEP</label>
        <input
         type="text"
         id="cep"
         value={cep}
         onChange={({target})=> setCep(target.value)}
         />
         {error}
        <button>Enviar</button>

    </form>
    )
}

export default App;