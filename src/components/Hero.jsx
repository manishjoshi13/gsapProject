import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef=useRef()
    const isMobile=useMediaQuery({maxWidth:760})
    let startval=isMobile? 'top 50%':"center 60%"
    let endval=isMobile?'170% top':'bottom top'

    useGSAP(()=>{
        const heroSplit=new SplitText(".title",{type:'chars,words'});
        const paragraphSplit= new SplitText(".subtitle",{type:"lines"})
        heroSplit.chars.forEach((char)=>{
            char.classList.add('text-gradient')
        })
        const tl=gsap.timeline()
        tl.from(heroSplit.chars,{
            yPercent:100,
            duration:1,
            ease:"expo.out",
            stagger:0.06
        })
        tl.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06
        },"=-0.5")
        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub:true
            }
        })
        .to('.left-leaf',{
            y:-200
            
        },"leaf")
        .to('.right-leaf',{
            y:200
            
        },"leaf")
        let videotl=gsap.timeline({
            scrollTrigger:{
                trigger:"video",
                start:startval,
                end:endval,
                scrub:2,
                pin:true
                
            }
        })
        videoRef.current.onloadedmetadata=()=>{
            videotl.to(videoRef.current,{
            currentTime:videoRef.current.duration,
            pin:true
        })
        }
        
        

    })



  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>
            Mojito
        </h1>
        <img src="/images/hero-left-leaf.png" className='left-leaf' alt="left-leaf" />
        <img src="/images/hero-right-leaf.png" className='right-leaf' alt="right-leaf" />
        <div className='body'>
        <div className='content'>
            
            <div className='space-y-5 hidden md:block'>
                <br />
                <br />
                <p>Cool. Crisp. Classic.</p>
                <p className='subtitle'>
                    Sip The Spirit <br/>of Summer
                </p>


            </div>
            <div className="view-cocktails">
                <p className='subtitle'>
                    Every Cocktaile in our menu is a blend of premium ingredients ,creative flavour and timeless recipe-designed to delight you taste
                </p>
                <a href="cocktails" id="">View Cocktails</a>
            </div>

        </div>
        </div>
    </section>
    <div className="video absolute inset-0">
        <video src="/videos/output.mp4" muted playsInline preload='auto' ref={videoRef}></video>
    </div>
    </>
  )
}

export default Hero
