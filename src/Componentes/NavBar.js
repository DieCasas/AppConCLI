import '../App.css'
import Icono from './Icono'
const NavBar = () => {
    return (
        <nav>
            <div>
            <Icono />
            </div>
            <div class="containerLista">  
                <ul class="lista">
                    <div>
                        <li>Comidas</li>
                        <i class="fa-solid fa-angle-down futuroAbrirModal"></i>
                    </div>    
                    <li>Ofertas</li>
                    <li>Nosotros</li>
                </ul>
            </div> 
            
        </nav>
    )
}
export default NavBar ;