import React from 'react'
import Clips from '../components/utils/Clips'
import SocialLink from '../components/utils/SocialLink'

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  return (
   <>
   <div className='relative h-auto w-auto flex flex-col'>
    <div className='bg-theme clip-path h-[75vh] lg:h-[65h] md:h-[55vh] sm:h-[50vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
    <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
        <div className='grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-white'>{title}</h1>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-white'>{subtitle}</h1>
                <button className='button-theme bg-slate-200 rounded-xl my-5'>{btntext}</button>
                <div className='grid items-center gap-5 left-[5%]  md:gap-3 absolute top-[33vh] lg:top-[27vh] left=[11%] xl:left-0 w-auto h-auto'>
                    {videos?.map((video, i) => (
                       <Clips 
                       key={i} 
                       img={video.imgsrc}
                       clip={video.clip}
                       /> 
                    ))}
                </div>
                <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-5'>
                    {
                        sociallinks.map((link, i) => (
                            <SocialLink 
                            key={i}
                            icon={link.icon}
                            />
                        ))
                    }
                </div>
        </div>
        <div className='flex items-center mt-12 ml-10'>
            <img 
            src={img} 
            alt="hero-img"
            className='w-auto h-[40vh] lg:h-[30vh] md:h-[20vh] sm:h-[16vh] xsm:h-[19vh] transitions-theme -rotate-[20deg] hover:rotate-0 cursor-pointer object-fill' 
            />
        </div>
    </div>
   </div>
   </>
  )
}

export default Hero