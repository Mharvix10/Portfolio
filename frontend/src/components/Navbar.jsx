import { useState, useEffect, useRef } from 'react'
import {MdMenu, MdClose} from 'react-icons/md'
import {motion, AnimatePresence} from 'motion/react'
function Navbar() {
  const [show, setShow] = useState(false)

  return (
    <div className="navbar sticky top-0">
        <div className="bg-dark flex justify-between items-center px-4 md:px-20 h-16 border-b-2 border-blue-950 ">

            <section className='left'>
            <h2 className='text-white text-2xl'>Portfolio.</h2>
            </section>


            <section className='right text-white hidden md:block'>
                <ul className='flex justify-between'>
                    <li className='ml-4 hover: cursor-pointer transition hover:text-blue-300'>
                    Home
                    </li>
                    <li className='ml-4 hover: cursor-pointer transition hover:text-blue-300'>
                    About
                    </li>
                    <li className='ml-4 hover: cursor-pointer transition hover:text-blue-300'>
                    Contact
                    </li>
                </ul>
            </section>

            <section className='right text-white md:hidden'>
              <MdMenu onClick={()=>{setShow(prev=>!prev)}} size={40}/>
            </section>

        </div>

        <AnimatePresence>
          {
            show && (
              <motion.div className='bg-blue-300/40 backdrop-blur-sm z-20 pt-10 fixed w-screen h-40' initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{type:'tween', duration:0.5}} exit={{opacity:0,y:-100}}>
                <ul className='flex flex-col items-center w-full text-2xl font-bold'>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
                </ul>
                <MdClose className='bg-red-950 block mx-auto mt-2 rounded-full p-2' onClick={()=>{setShow(prev=>!prev)}} size={50} color='white'/>
            </motion.div>
            )
          }
        </AnimatePresence>
    </div>

    
  )
}

export default Navbar