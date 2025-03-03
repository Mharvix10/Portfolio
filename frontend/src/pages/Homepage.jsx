import {useState, useRef} from 'react'
import ProfielImage from '../assets/newProfile.jpg'
import Navbar from '../components/Navbar'
import ReactImage from '../assets/react.svg'
import ExpressImage from '../assets/express.png'
import NodeImage from '../assets/node.png'
import TailwindImage from '../assets/tailwind.png'
import MongodbImg from '../assets/mongodb.png'
import ReduxImg from '../assets/redux.png'
import Project1 from '../assets/project1mock.png'
import Project2 from '../assets/projectmockup2.png'
import Xlogo from '../assets/xlogo.png'
import Iglogo from '../assets/iglogo.jpg'
import Fblogo from '../assets/facebookLogo.png'
import Whatsapplogo from '../assets/whataspplogo.jpg'
import Webdevicon from '../assets/webdevicon.png'
import {motion, AnimatePresence, useScroll} from 'motion/react'
import axios from 'axios'
import {MdMenu, MdClose} from 'react-icons/md'

function Homepage() {
  const [show, setShow] = useState(false)
  const homeRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()
  const projectRef = useRef()
  const [data, setData] = useState({
    name: '',
    email: '',
    message:''
  })

  const {name, email, message} = data


  const onInputChange=(e)=>{
    e.preventDefault()
    setData((prev)=>(
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  const submitForm=async()=>{
    try {
      console.log('form submission')
       const response = await axios.post('https://portfolio-server-fcc4.onrender.com/form',data)
       console.log('data sent to the server')
    } catch (error) {
      console.log(error)
    }
  }

  const openWa =()=>{
    window.open('https://wa.me/2348107167329', '_blank', 'noopener, noreferrer')
  }

  const openIG =()=>{
    window.open('https://www.instagram.com/mharvix_keys', '_blank', 'noopener, noreferrer')
  }

  const openX =()=>{
    window.open('https://x.com/AkinolaMarvel?t=rvWBq0loStXOLEN6wBBbxg&s=09', '_blank', 'noopener, noreferrer')
  }

  const openFb =()=>{
    window.open('https://www.facebook.com/share/157vcC1eff/', '_blank', 'noopener, noreferrer')
  }
  

  const visitproject1=(project)=>{
    window.open('https://shopify-two-bay.vercel.app/', '_blank', 'noopener,noreferrer')
  }

  const visitproject2=(project)=>{
    window.open('https://new-haven-of-wisdom-site-1.onrender.com', '_blank', 'noopener,noreferrer')
  }


  const visitproject3=(project)=>{
    window.open('https://csc-ai.vercel.app', '_blank', 'noopener,noreferrer')
  }

  const visitproject4=(project)=>{
    window.open('https://house-marketplace-lyart-six.vercel.app/', '_blank', 'noopener,noreferrer')
  }

  const downloadCV=()=>{
    window.open('https://drive.google.com/file/d/1CcMJ9Wocs2FRzJxiTAio5YQGNrVAbvv8/view?usp=drive_link', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
        {/* navbar */}
          <div className="navbar sticky top-0">
              <div className="bg-dark flex justify-between items-center px-4 md:px-20 h-16 border-b-2 border-blue-950 ">
      
                  <section className='left'>
                  <h2 className='text-white text-2xl'>Portfolio.</h2>
                  </section>
      
      
                  <section className='right text-white hidden md:block'>
                      <ul className='flex justify-between'>
                          <li onClick={()=>{homeRef.current?.scrollIntoView({behavior:'smooth'})}} className='ml-4 hover: cursor-pointer transition hover:text-blue-300'>
                          Home
                          </li>
                          <li onClick={()=>{aboutRef.current?.scrollIntoView({behavior:'smooth'})}} className='ml-4 hover: cursor-pointer transition hover:text-blue-300'>
                          About
                          </li>
                          <li onClick={()=>{projectRef.current?.scrollIntoView({behavior:'smooth'})}} className='ml-4 hover: cursor-pointer transition hover:text-blue-300'>
                          Projects
                          </li>
                          <li onClick={()=>{contactRef.current?.scrollIntoView({behavior:'smooth'})}} className='ml-4 hover: cursor-pointer transition hover:text-blue-300'>
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
                    <motion.div className='bg-blue-300/40 backdrop-blur-sm z-20 pt-10 fixed w-screen h-48' initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{type:'tween', duration:0.5}} exit={{opacity:0,y:-100}}>
                      <ul className='flex flex-col items-center w-full text-2xl font-bold'>
                        <li onClick={()=>{homeRef.current?.scrollIntoView({behavior:'smooth'}); setShow(false)}}>Home</li>
                        <li onClick={()=>{aboutRef.current?.scrollIntoView({behavior:'smooth'}); setShow(false)}}>About</li>
                        <li onClick={()=>{projectRef.current?.scrollIntoView({behavior:'smooth'}); setShow(false)}}>Projects</li>
                        <li onClick={()=>{contactRef.current?.scrollIntoView({behavior:'smooth'}); setShow(false)}}>Contact</li>
                      </ul>
                      <MdClose className='bg-red-950 block mx-auto mt-2 rounded-full p-2' onClick={()=>{setShow(prev=>!prev)}} size={50} color='white'/>
                  </motion.div>
                  )
                }
              </AnimatePresence>
          </div>

      {/* landing page */}

        <div ref={homeRef} className="landingPage bg-dark mx-auto">
            <div className='main h-full grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 px-4 lg:px-20'>
              <section className='text-white mt-10 flex flex-col items-center'>
                <p className='text-xl'>
                  Hi, I am <br />
                  <span className='text-5xl'>Akinola Marvellous</span> <br />
                  and I am a <span className='text-blue-300'>fullstack web developer.</span> <br />
                  <span className='text-sm'>
                    I am going to turn your idea <br />
                    into a reality.
                  </span>

                  <span className='mt-6 w-full flex justify-around'>
                    <img className='w-10 h-10 rounded-full transition hover:rotate-180 cursor-pointer' onClick={openFb} src={Fblogo} alt="" />
                    <img className='w-10 h-10 rounded-full transition hover:rotate-180 cursor-pointer' onClick={openWa} src={Whatsapplogo} alt="" />
                    <img className='w-10 h-10 rounded-full transition hover:rotate-180 cursor-pointer' onClick={openX} src={Xlogo} alt="" />
                    <img className='w-10 h-10 rounded-full transition hover:rotate-180 cursor-pointer' onClick={openIG} src={Iglogo} alt="" />
                  </span>
                </p>

                <button className='bg-green-600 w-6/12 md:w-9/12 h-10 rounded-md mt-10 md:mt-40 hover:bg-green-700 transition' onClick={downloadCV}>Download my CV</button>
              </section>
              

              <section className=''>
                <img className='profilePic h-72 w-72 md:h-[400px] md:w-[400px] block mx-auto rounded-full shadow-md shadow-slate-700' src={ProfielImage}/>
              </section>

            </div>


        </div>




        <motion.div 
        ref={aboutRef}
        initial={{opacity:0.5, y:100}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{type:'tween', duration:0.5, delay:0.1}}
         className="mt-1 flex flex-col justify-around md:flex-row w-full py-10 shadow-md shadow-slate-300">
            <section className='self-center md:w-4/12'>
                  <img className='profilePic hidden md:h-60 w-60 md:block mx-auto rounded-full brightness-75' src={ProfielImage}/>
            </section>

            <section className='text-white pt-4 w-12/12 md:w-8/12 px-10'>
              <h2 className='mb-2'>About Me</h2>
              <h3 className='mb-1'>
                Fullstack <span className='text-blue-200'>Developer</span>
              </h3>
              <p className='text-lg mt-4'>
                Hello, I am Akinola Marvellous. I am a web developer and I am very 
                passionate and dedicated to my work. With 3 years experience as a
                professional web developer, I have acquired the necessary skills and knowledge
                required for me to make your project a succeses. I enjoy every step of the 
                development process and collaborating with my team.
              </p>

              <section className='grid grid-cols-3 w-9/12 text-lg mt-8 gap-2'>
                <section>Phone</section> <section>: </section> <section>+234-810-716-7329</section>
                <section>Gmail</section> <section>: </section> <section>marvel10cent</section>
                <section>Language</section> <section>: </section> <section>English</section>
                <section>Freelance</section> <section>: </section> <section>Available</section>
              </section>
            </section>
        </motion.div>




        <motion.div
            initial={{opacity:0.5, y:100}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{type:'tween', duration:0.5, delay:0.1}}
            className='p-4 md:p-20 bg-dark w-full py-10'>
          <header className='text-white text-center mb-4'>
            <h2>OUR SERVICES</h2>
          </header>

          <div className='text-white justify-between items-center flex flex-col md:flex-row gap-2'>
            <section className='card'>
              <h3 className='mb-4'>Web Development</h3>
              <p className='text-lg'>
                We will build your entire website from scratch to deployment.
                We are going to build both the frontend and the server of your website
                for full functionality.
              </p>
              <img className='block mx-auto w-30 h-30' src={Webdevicon} alt="" />
            </section>
            <section className='card'>
              <h3 className='mb-4'>Web Redesign</h3>
              <p className='text-lg'>
                We will help you redesign your old website to a modern website using modern tools like
                ReactJs, TailwindCSS, Redux, ExpressJs, NodeJS, MongoDB, MySQL.
              </p>
              <img className='block mx-auto w-30 h-30' src={Webdevicon} alt="" />
            </section>
            <section className='card'>
              <h3 className='mb-4'>Web animation</h3>
              <p className='text-lg'>
                We will help you add cool animation to your website using the modern tool,
                Framer Motion, which is a powerful tool for adding animation that will be
                almost impossible to do using just CSS.
              </p>
              <img className='block mx-auto w-30 h-30' src={Webdevicon} alt="" />
            </section>
          </div>
        </motion.div>





      {/* services section */}
        <motion.div
                ref={projectRef} 
                initial={{opacity:0.5, y:100}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{type:'tween', duration:0.5, delay:0.1}}
        className='w-full px-20 py-10 text-white'>
          <h2 className='text-center mb-8'>Latest Projects</h2>

          <div className="text-white mb-8 justify-between items-center flex flex-col md:flex-row gap-4">
            <section className='project1 card2 w-full md:w-5/12 px-0 md:blur-sm hover:blur-none transition'>
              <img className='w-full' src={Project1} alt="" />
              <button onClick={visitproject3} className='bg-dark w-32 h-12 -mt-4 transition hover:bg-green-950'>Visit website</button> 
              <p className='text-lg'>
                Ai Project
              </p>
              
            </section>


            <section className='project1 card2 w-full md:w-5/12 px-0 md:blur-sm hover:blur-none transition'>
              <img className='w-full' src={Project1} alt="" />
              <button onClick={visitproject1} className='bg-dark w-32 h-12 -mt-4 transition hover:bg-green-950'>Visit website</button> 
              <p className='text-lg'>
                E-Commerce Project
              </p>
              
            </section>

          </div>


          <div className="text-white mb-4 justify-between items-center flex flex-col md:flex-row gap-4">
            <section className="project2 card2 w-full md:w-5/12 px-0 md:blur-sm hover:blur-none transition">
              <img className='w-full' src={Project2} alt="" />
              <button onClick={visitproject2} className='bg-dark w-32 h-12 -mt-4 transition hover:bg-green-950'>Visit website</button>
              <p className='text-lg'>
                Church website
              </p>
              
            </section>

            <section className="project2 card2 w-full md:w-5/12 px-0 md:blur-sm hover:blur-none transition">
              <img className='w-full' src={Project1} alt="" />
              <button onClick={visitproject4} className='bg-dark w-32 h-12 -mt-4 transition hover:bg-green-950'>Visit website</button>
              <p className='text-lg'>
                Real-estate website
              </p>
              
            </section>
          </div>

        </motion.div>





        <motion.div 
                initial={{opacity:0.5, y:100}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{type:'tween', duration:0.5, delay:0.1}}
        className="flex w-full h-60 px-4 bg-gradient-to-br from-blue-900 to-black text-white items-center justify-around">
          <section className='w-8/12'>
            <p className="text-3xl">
              I am available for freelance work
            </p>
          </section>
          <section className='w-4/12'>
            <p className="text-xl underline decoration-red-400 cursor-pointer transition hover:text-[22px]" onClick={openWa}>
              Contact Me
            </p>
          </section>
        </motion.div>





        <motion.div 
                initial={{opacity:0.5, y:100}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{type:'tween', duration:0.5, delay:0.1}}
        className="w-full px-4 py-10 text-white">
            <h2 className='text-center'>Our Tools</h2>
            <div className='flex flex-wrap justify-around mt-4'>
              <img className='toolsIcon' src={ReactImage} alt="icon" />
              <img className='toolsIcon' src={ExpressImage} alt="icon" />
              <img className='toolsIcon' src={NodeImage} alt="icon" />
              <img className='toolsIcon' src={MongodbImg} alt="icon" />
              <img className='toolsIcon' src={TailwindImage} alt="icon" />
              <img className='toolsIcon' src={ReduxImg} alt="icon" />
            </div>

        </motion.div>





        <motion.div 
                ref={contactRef}
                initial={{opacity:0.5, y:100}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{type:'tween', duration:0.5, delay:0.1}}
        className="contactMe bg-black text-white py-20 px-4 md:px-20">
            <header className='mb-10'>
              <h2 className='text-center'>Contact Me</h2>
            </header>

            <section className="flex flex-col md:flex-row w-full gap-8">
              <section className="left w-full md:w-6/12">
                <p className='text-md mb-10'>
                  Please fill out the form in this section to contact me or call between 9AM
                  and 8PM, WAT, MONDAY THROUGH FRIDAY.
                </p>

                <p className='text-md'>
                  We offer high quality services at an affordable price and we offer discount price
                  to start-up company and mid-scale business to help them meet their needs and take 
                  away the barrier of financial setback.
                </p>

                <section className="mt-10">
                  <span>Email:</span> <span>marvel10cent@gmail.com</span> <br />
                  <span>Phone:</span> <span>+234 810 716 7329</span> <br />
                  <span>Email:</span> <span>marvel10cent@gmail.com</span> <br />
                </section>
              </section>

              <section className="right w-full md:w-6/12">
                <input onChange={onInputChange} className='input text-black' name='name' type="text" placeholder='Name' value={name} />
                <input onChange={onInputChange} className='input text-black' name='email' type="text" placeholder='Email' value={email} />
                <textarea onChange={onInputChange} className='input h-40 text-black' placeholder='Message' name="message" id="" value={message}></textarea>
                <button onClick={submitForm} className='input bg-green-600 hover:bg-green-700'>Send Message</button>
              </section>
            </section>
            
        </motion.div>

    </>
  )
}

export default Homepage