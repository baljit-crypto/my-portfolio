import {GrGoogle} from 'react-icons/gr';
import {  FaFacebookF,
    FaTwitter,
    FaInstagram,} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
function Header() {
    return (
     <>
     <div className="header-container">
        <div className="social-icons"><ul>
      <li><Link><IconContext.Provider value={{color:'#3b5998 ',className:"myReact-icons"}}>
       <FaFacebookF />
       </IconContext.Provider></Link></li>
        <li><IconContext.Provider value={{color:'#bb001b',className:"myReact-icons"}}>
            <Link to='#' onClick={(e)=>{
            window.location.href = 'mailto:baljitsingh4068@gmail.com'
        }}><GrGoogle/>
        </Link>
        </IconContext.Provider></li>
          <li><Link><IconContext.Provider value={{color:'#8a3ab9',className:"myReact-icons"}}>
       <FaInstagram />
       </IconContext.Provider></Link></li>
        <li><Link><IconContext.Provider value={{color:'#00acee',className:"myReact-icons"}}>
       <FaTwitter />
       </IconContext.Provider></Link></li>
        </ul></div>
        <div className="title"><h1>My Name is Baljit Singh</h1>
        <span>Frontend Web Developer</span></div>
     </div>
    </>);
}

export default Header;