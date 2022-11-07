import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';

function Navbar() {

    const [heroNavbar, setHeroNavbar] = useState(false);
    const [fixNavbar, setFixNavbar] = useState(false);
    useEffect(()=>{
        function onScrollTransition(){
            const toScrollY = window.scrollY || document.documentElement.scrollTop;

            if(toScrollY > 700){
                setHeroNavbar(true)
            }else{
                setHeroNavbar(false)
            }
            if(toScrollY > 800){
                setFixNavbar(true);
            }else{
                setFixNavbar(false);
            }
        }
        window.addEventListener('scroll', onScrollTransition);
    },[]);
    
 
    return (  
        <>
        <div className={fixNavbar? "nav-container fix-nav-container":'nav-container'}>
            <ul>
                <li><Link className='text-link'>Home</Link></li>
                <li><Link className='text-link'>About</Link></li>
                <li><Link className='text-link'>Resume</Link></li>
            </ul>
            <div className="nav-hero-container">
                <div className={heroNavbar? "hide-img-container hero-img-container":"hero-img-container"}>
                    <img src={require('../assets/header.jpg')} alt='hero'/>
                </div>
                <div className={heroNavbar?"hero-descrip-container" : "hero-descrip-container hide-descrip-container"}>
                    <h5>Baljit Singh</h5>
                    <span>Web developer</span>
                </div>
            </div>
            <ul>
                <li><Link className='text-link'>Portfolio</Link></li>
                <li><Link className='text-link'>Social</Link></li>
                <li><Link className='text-link'>Contact</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;