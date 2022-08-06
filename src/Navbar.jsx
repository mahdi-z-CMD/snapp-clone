import React, { Component , useState , useEffect } from 'react'
import logo from './snappTextLogo.svg'
import './Navbar.css'
import { Menu } from 'react-ionicons'
import { Close } from 'react-ionicons'
const Navbar = () => {
    const icon_menu = document.querySelector(".icon-menu")
    const icon_close = document.querySelector(".icon-close")
    const [arz, setarz] = useState(0)
    let isopen = false
    const open = ()=>{
        if (isopen) {
            isopen = false
            icon_menu.style.display = "block"
            icon_close.style.display = "none"
        } else {
            isopen = true
            icon_menu.style.display = "none"
            icon_close.style.display = "block"
        } 
    }
    useEffect(() => {
        const updateWindowDimensions = () => {
          const newHeight = window.innerWidth;
          setarz(newHeight);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 
      }, []);
    try {
      console.log(arz);
        if (arz >= 863) {
            icon_menu.style.display = "none"
            icon_close.style.display = "none"
         } else {
            icon_menu.style.display = "block"
            icon_close.style.display = "none"
         }
    } catch (error) {
    }
    window.addEventListener("scroll",function(){
      var header=document.querySelector(".navbar");
      header.classList.toggle("sticky",window.scrollY > 0)
    })
    return (
      <>
      <div className="navbar">    
        <ul>
            <li><a href="#"> فرصت‌های شغلی </a></li>
            <li><a href="#">  بلاگ  </a></li>
            <li><a href="#">  باشگاه رانندگان  </a></li>
            <li><a href="#">  ثبت نام راننده اسنپ  </a></li>
            <li><a href="#">  پنل سازمانی  </a></li>
            <li><a href="#">  درباره ما  </a></li>
            <li><a href="#">  تماس با ما  </a></li>
        </ul>
        <img src={logo} alt="snapplogo" />
        <div className="icon-menu">
        <Menu
            color={'#00000'}
            height="35px"
            width="35px"
            onClick={open}
        />
        </div>
        <div className="icon-close">
        <Close
            color={'#00000'}
            height="35px"
            width="35px"
            onClick={open}
        />
        </div>
      </div>
      </>
    )
  }

export default Navbar