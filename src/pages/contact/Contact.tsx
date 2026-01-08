import { ArrowLeft } from "lucide-react"
import { NavLink } from "react-router"



export const Contact = () => {
  return (
    <div className="contact">
        <NavLink to="/">
          <ArrowLeft className="icono-flecha"/>
        </NavLink>
    </div>
  )
}
