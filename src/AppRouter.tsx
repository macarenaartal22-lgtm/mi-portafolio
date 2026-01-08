import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { About, Contact, Home, Moreinfo, Quote, Work} from "./pages"





export const AppRouter = () => {

  return (
    <BrowserRouter basename = "/mi-portafolio/" > 
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/moreinfo" element={ <Moreinfo/>} />
        <Route path="/work" element={ <Work/>} />

        <Route path="/:id" element={<Quote />}/>

        <Route path="*" element={ <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
