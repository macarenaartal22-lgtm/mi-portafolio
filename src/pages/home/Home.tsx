
import { NavLink } from "react-router"
import "./estilus.css"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
// import { TextAlignStart } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"
import { Menu } from "lucide-react"



export const Home = () => {

const [videreMenu, setvidereMenu] = useState(true)

const handleResize = () => {

  if (window.innerWidth <= 640) {
    setvidereMenu (false)
  } else {
    setvidereMenu (true)
  }
}

useEffect (() => {

  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [ ])


  return (
    <>

    <div className="fondo-portada ">

    <Toggle
      className="fixed top-4 sm:hidden"
      onClick={() => setvidereMenu (!videreMenu)}
    >
      <Menu className="size-7"/>
    </Toggle>

      {
        videreMenu && (

          <div className="botones space-y-6 flex flex-col absolute top-20 items-start left-5 gap-4 mt-10 mb-20">
          <Button variant="link">
            <NavLink to="/about">About</NavLink>
          </Button>

      

          <Button variant="link">
            <NavLink to="/work">Work</NavLink>
          </Button>

          <Button variant="link">
            <NavLink to="/moreinfo">More info</NavLink>
          </Button>

          
          
          </div>
        )
      
      }



      <h1 id="titulo" className="titulo flex justify-center">PORTFOLIO</h1>
      <div className="flex items-center justify-center">
      <img  
      className="w-100 h-100 object-cover rounded-full shadow-2xl  " 
      src="/mi-portafolio/imagenes/Iconofoto.PNG" 
      alt="" 
      />
      </div>
   

     </div>

      

      <div className="contact absolute bottom-10 left-10 flex flex-col items-start space-y-1 ">
        <a 
        href="mailto:macarenaartal22@gmail.com" 
        className="text-font-semibold hover:underline"
        >
          Contact
        </a>
        <a 
        href="mailto:macarenaartal22@gmail.com"
        className="text-xs"
        >
        macarenaartal22@gmail.com
        </a>
      </div>

     

    </>
  )
}
