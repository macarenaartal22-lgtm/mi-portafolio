import { NavLink } from "react-router"
import "./estilus.css"
import { ArrowLeft } from "lucide-react"
// import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from 'embla-carousel-autoplay'

const photos = ["9","10","12","14","15","16","Tmoda","Tnaturaleza","Tconstruccion","Tsecuenciacion","cuerpo","Tcuerpoazul","fondorosa","Tmar","gotas","peces","beso","dibujorapido","tinta1","tinta2","tinta3","tinta4"]


export const About = () => {
  return (
    
    <div className="fondo-about bg-[#ebdafc] min-h-screen text-center p-4 flex flex-col items-center justify-between position-relative">

    <div className="about">
       <NavLink to="/">
          <ArrowLeft className="icono-flecha"/>
        </NavLink>
    </div>

   
        <h1 className="tituloabout w-full text-center text-4xl mt-10">About Me</h1>


        <div className="textoabout flex justify-center font-light">
        <div className="max-w-4xlxl grid grid-cols-2 md:grid-cols-2 gap-16 px-4 mb-10 ">

         
        <p className=" text-base sm:text-lg">
        Hola, soy Macarena Artal Cano-Coloma, estudiante de último curso de Bellas Artes en la UPV. Tengo 22 años y vengo de España. Me apasiona el arte, la fotografía y la creación de contenido. He tenido la oportunidad de realizar prácticas gestionando las redes sociales del departamento SPNL de la UPV.

         Tengo un nivel B2 de inglés, y conocimientos básicos de francés y alemán. Siempre busco mejorar y descubrir cosas nuevas.
        </p>
        <p className="text-base sm:text-lg">

        Disfruto diseñando y creando: tengo nociones en diseño web y de apps, conocimientos básicos de Adobe, Photoshop, InDesign, Premiere y manejo avanzado de Canva y CapCut.

        Soy una persona proactiva, extrovertida y curiosa, con muchas ganas de seguir formandome y creciendo. Me inspiran la moda, la cocina, los viajes y, sobre todo, los retos que me permiten aprender y avanzar.
        </p>
        </div>
        </div>

    {/* <div className="flex gap-12 justify-center w-60 width-full mb-10">
       
        <img src="./IMG_0145.jpg" className="object-contain mt-20" alt="" />
    </div> */}

    <section id="videre" className="w-full flex justify-center min-h-[60vh] lg:min-h-[65vh]">


       <Carousel 
       className="w-full max-w-md md:max-w-2xl lg:max-w-4xl"
       plugins ={[Autoplay({delay:2000})]}
       opts={{
            loop:true
       }}
       >
      <CarouselContent>
       {photos.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-[#cfbedf] border-none">
                <CardContent className="flex aspect-6/4 items-center justify-center p-6">

                {/* flex aspect-square items-center justify-center p-6 */}

                 <img 
                 src={`./imagenes/${ photos[index]}.jpg`}
                 alt="" 
                 className="w-full h-full object-cover"
                 />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex justify-center items-center text-white "/>
      <CarouselNext className="hidden md:flex justify-center items-center text-white"/>
    </Carousel>
    </section>

    </div>
  )
}
