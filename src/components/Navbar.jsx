import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  useGSAP(()=>{
    const navTween=gsap.timeline({
      scrollTrigger:{
        trigger:".nav",
        start:"bottom top",

      }

    });
    navTween.fromTo('.nav',{
      backgroundColor:'transparent',backdropFilter:'blur(0px)',},{
        backgroundColor:'#00000050',
        backdropFilter:'blur(10px)',
        duration:1,
        ease:'power2.out'

    })
  })




  return (
    <nav className='nav'>
      <div>
        <a href="#home" className='flex items-center gap-2'>
          <img src="/images/logo.png" alt="" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link)=>{
            return (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>)
          })}

        </ul>
        
      </div>
      
    </nav>
  )
}

export default Navbar
