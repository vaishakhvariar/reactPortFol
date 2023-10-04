import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoV from '../../assets/images/logo-v1.png';
// import LogoSub from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faGithub, faInstagram, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoV} alt='Logo for Website' />
            {/* <img className='sub-logo' src={LogoSub} alt='Logo Sub' /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/vaishakhvariar/'> 
                    <FontAwesomeIcon icon={(faLinkedin)} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/vaishakhvariar'> 
                    <FontAwesomeIcon icon={(faGithub)} color='#4d4d4e' />
                </a>
            </li>
           
            <li>
                <a target='_blank' rel='noreferrer' href='https://vvariarwrites.wordpress.com/'> 
                    <FontAwesomeIcon icon={(faBlogger)} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href=' https://www.instagram.com/vaishakh_variar/'> 
                    <FontAwesomeIcon icon={(faInstagram)} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;