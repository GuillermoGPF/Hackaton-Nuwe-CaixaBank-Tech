import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav>
            <h1>
                <span className='banks'>NeoBanks</span>
            </h1>
            <FontAwesomeIcon icon={faCog} />
        </nav>
    )
}

export default Navbar