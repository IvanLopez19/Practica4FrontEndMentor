import logo from '../Assets/logo.svg';
import image from '../Assets/illustration-mockups.svg';
import '../Estilos/style.css'

function Encabezado(){
    return(
        <div className='encabezado'>
            <img className='logo' src={logo}/>
            <img className='image' src={image}/>
        </div>
    )
}

export default Encabezado;