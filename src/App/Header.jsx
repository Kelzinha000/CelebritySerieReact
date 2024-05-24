import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Personagens">Personagens</Link>
            <Link to="/Login">Login</Link>
        </nav>
    )
}

export default Header;