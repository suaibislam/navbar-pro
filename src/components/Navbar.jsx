import React,{ useRef, useState ,useEffect} from 'react'
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const  [btn, setbtn] = useState(false)
    const useref  = useRef(null)
    const usereful  = useRef(null)

    useEffect(() => {
      const height = usereful.current.getBoundingClientRect().height;
      if(btn){
        useref.current.style.height = `${height}px`;
      }else{
         useref.current.style.height = `0px`;
      }
     
    }, [btn])
    
  return (
    <nav >
        <div className="navbar">
        {/* <div className="nav-text"> */}
        <div className="text text-orange-400 text-3xl font-bold">
            <h1 >Nav <span className='text-lime-500'>Coder</span> </h1>

            <div>
        <button className="icon  text-black" onClick={()=>setbtn(!btn)}>
           <FaBars />
        </button>
        </div>
        </div>
       
        <div className='content' ref={useref}>
            <ul className='content2 '  ref={usereful}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Country</a></li>
            </ul>
        </div>

        <div className="link">
            <ul className='link1 text-2xl text-orange-500'>
                <li><a href="http://localhost:3000"><ImFacebook2/></a></li>
                <li><a href="http://localhost:3000"><IoLogoYoutube/></a></li>
                <li><a href="http://localhost:3000"><FaInstagramSquare/></a></li>
            </ul>
        </div>
        {/* </div> */}
       
      
        </div>
    </nav>
  )
}

export default Navbar












