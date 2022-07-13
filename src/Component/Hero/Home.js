import React from 'react'
import "./Home.css"
import hero from "../pic/H1.svg"
import skill1 from "../pic/autodidacta.png"
import skill2 from "../pic/liderazgo.png"
import skill3 from "../pic/equipo.png"
import {Typewriter} from "react-simple-typewriter"

const Home = () => {
  return (
    <>
    <section className='hero' id='home'>
        <div className="container f_flex top">
            <div className='left top'> 
                <h3>WELCOME! </h3>
                <h1>Hi, I'm <span>Jefferson Itas</span></h1>
                <h2>
                <span >
                <Typewriter words={["Analista de Datos", " Desarrollador Web (FrontEnd)", "Ciberseguridad"]} loop  cursor cursorStyle='>' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
                </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque possimus eius animi magni ad, dolorum porro, ab quo soluta deleniti similique aut quas blanditiis voluptatibus. At harum perferendis corporis dolore?</p>
                <div className="hero_btn d_flex">
                    <div className="col_1">
                    <h4>Búscame en </h4>
                         
                    <div className='button'> 
                        <button className='btn_shadow'><a href="https://www.linkedin.com/in/jeffersonitas96/"> 
                            <i className='fab fa-linkedin'></i></a>
                        </button>
                        <button className='btn_shadow'><a href="https://twitter.com/isjeff96"> 
                            <i className='fab fa-twitter'></i></a>
                        </button>                    
                        <button className='btn_shadow'><a href="https://github.com/Jefferson-ICH/"> 
                            <i className='fab fa-github'></i></a>
                        </button>     
                        <button className='btn_shadow'><a href="https://www.facebook.com/jefferson.javierI"> 
                            <i className='fab fa-facebook'></i></a>
                        </button>
                         
                         
                     </div>
                </div>
                    <div className="col_1">
                        <h4>Habilidades</h4>
                        <button className='btn_shadow'>
                        <img src={skill1} alt='' />
                        </button>
                        <button className='btn_shadow'>
                        <img src={skill2} alt='' />
                        </button>
                        <button className='btn_shadow'>
                        <img src={skill3} alt='' />
                        </button>
                    </div>
                </div>
             </div>
             <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
    </section>
    </>
  )
   
}
export default Home
