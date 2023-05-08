import React from 'react'

const Footer = ({footerAPI: { titles, links }}) => {
  return (
    <>
    <footer className='bg-theme py-7'>
        <div className='nike-container text-slate-200'>
            <div className='grid items-center place-items-center grid-cols-3 max-w-[80vw] w-full m-auto md:max-w-none md:gap-5'>
                {titles.map((item, i) => (
                    <div key={i} className='grid items-center'>
                        <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{item.title}</h1>
                    </div>
                ))}
                {links.map((list, i) => (
                    <ul key={i} className='grid items-center text-center gap-1 mt-2'>
                        {list.map((link, i) => (
                            <li key={i} className='text-sm sm:text-xs'>{link.link}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer