import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { NavLink, useNavigate } from "react-router"
import {  proyectos } from "../data"
import { useState } from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  // PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const inPagina = 6;


export const Work = () => {

const navigate = useNavigate();

const [paginaActual, setpaginaActual] = useState<number>(0);

// const [listaProyectos, setListaProyectos] = useState<Proyecto[]>(proyectos.slice(0, 6));

const totalPaginas = Math.ceil(proyectos.length / inPagina);

const inicio = paginaActual * inPagina;

const fin = inicio + inPagina;

const listaProyectos = proyectos.slice(inicio, fin);

  return (
    <div>
        <NavLink to="/">
          <ArrowLeft className="icono-flecha"/>
        </NavLink>

    <h1 className="w-full text-center text-4xl mt-10">
      Work
    </h1>

    <div className="textoabout flex justify-center">
    <div className="max-w-4xl grid grid-cols-1 md:grid.cols-2 gap-8 px-4 mb-10 mt-8">

    <p className="text-base sm:text-lg">Descubre mis proyectos</p>

    </div>
    </div>


    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto ml-20 justify-center">
{/* 
    <Card className="cursor-pointer w-[220px] h-[220px] hover:bg-[#181717] hover:text-white transition-colors">
      
      <CardContent className="flex flex-col items-center justify-center gap-1 h-full px-0">
        <img 
          src="/imagenes/Tsecuenciacion.jpg" 
          className="w-48 h-42 object-contain bg-emerald-950 border-black"
          alt="Proyecto Secuenciacin"
          />
          <h2 className="font-medium text-lg ">Proyecto Secuenciacion</h2>
      </CardContent>
      </Card> */}

{
  listaProyectos.map(items => (
    <Card 
    key={items.id}
    className="cursor-pointer w-[220px] h-[220px] hover:bg-[#181717] hover:text-white transition-colors">
      
      <CardContent 
      onClick={()=>{
        navigate(`/${items.id}`)
      }}

      className="flex flex-col items-center justify-center gap-1 h-full px-0"
      
      >
        <img 
          src={`/imagenes/${ items.imago }`}
          className="w-48 h-42 object-contain bg-emerald-950 border-black"
          alt=""
          />
          <h2 className="font-medium text-lg ">{items.nomen}</h2>
      </CardContent>
      </Card> 
  ))
}


     </div>

      <Pagination className="mt-9 mb-9">
      <PaginationContent className="flex justify-center gap-2">
        <PaginationItem>
          <PaginationPrevious  
            onClick={()=>{
            if (paginaActual > 0) setpaginaActual(paginaActual -1);
          }}
          className={`${
            paginaActual === 0
            ? "pointer-events-none opacity-50"
            : "hover:bg-emerald-950 hover:border hover:border-black hover:text-white"
          }`}
          />
        </PaginationItem>

       
     
        <PaginationItem>
          <PaginationNext 
          onClick={()=>{
            if (paginaActual < totalPaginas - 1) setpaginaActual(paginaActual +1);
          }}
            className={`${
            paginaActual === totalPaginas -1
            ? "pointer-events-none opacity-50"
            : "hover:bg-emerald-950 hover:border hover:border-black hover:text-white"
          }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>


    </div>
  )
}
