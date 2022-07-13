import React from "react" 
import Typewriter from 'typewriter-effect';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
             
          </div>
          <p>© 2022 <Typewriter 
                   options={{
                    strings: ['Jefferson Itas  by Wetkay.'],                    
                    autoStart: true, 
                    loop: 75, 
                  }}
                 />  
                 </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
