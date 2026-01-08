import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Instagram, Linkedin, Loader2, MapPin, MessageCircle, Phone, X } from "lucide-react"
import { NavLink } from "react-router"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useState } from "react"


export const Moreinfo = () => {

const [estLoading, setEstLoading] = useState<boolean>(false);


const mittereSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEstLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    setEstLoading(false);
    
    alert("Formulario enviado!");

    window.location.reload();
} 

  return (
    <div className="moreinfo">
        <NavLink to="/">
          <ArrowLeft className="icono-flecha"/>
        </NavLink>


    <section id="contactus" className="w-full py-12 bg-gray-100">

        <div className="container mx-auto max-w-5xl px-4">

          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-8">MORE INFO</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            {/* Mapa de Google Maps */}
            <div className="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-square">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.362755252682!2d-0.3440323!3d39.4837227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488259073375%3A0xfb410ba707ca33c9!2sUPV%20-%20Facultad%20de%20Bellas%20Artes%20BBAA!5e0!3m2!1ses!2ses!4v1765225334139!5m2!1ses!2ses" 
              className="w-full h-full rounded-lg" 
              style={{border:0}} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
            </div>

            {/* Formulario */}
            <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">
              <form  
              className="space-y-6 bg-[rgb(229,240,255)] p-8 rounded-lg shadow-lg aspect-square"
              onSubmit={mittereSubmit}
              >

                <div className="space-y-2">
                  
                <Label htmlFor="nomen">Name</Label>
                <Input id="nomen" required/>

                </div>
                
                <div className="space-y-2">
              
                <Label htmlFor="mail">Mail</Label>
                <Input id="mail" required/>

                </div>

                <div className="space-y-2">

                 <Label htmlFor="mensaje">Message</Label>
                <Input id="mensaje" required/>

                </div>

                <div className="space-y-2">

                </div>

                <Button 
                type="submit"
                className="w-full bg-[rgb(64,118,188)] hover:bg-[rgb(45,86,138)] text-white text-md"
                disabled={estLoading}
                >
                    {
                    estLoading ? (<Loader2 className="mr-2 h-4 w-4 animate-spin" />) 
                    : null
                    }

                    {
                    estLoading 
                    ? "Sending..."
                    : "Send"
                    }
                    
                </Button>
              
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-blue-200 text-gray py-12">
        <div className="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

          <div className="space-y-4 text-center md:text-left">

            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            
            <div className="space-y-2">
              <p className="flex items-center gap-2 justify-center md:justify-start">

                <Phone className="w-5 h-5"/>
                +34 635 96 93 93

              </p>
             
              <p className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin className="w-5 h-5"/>
                Facultad de Bellas Artes, UPV, Valencia, España

              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4 text-center md:text-left text-gray-400">
            <h3 className="text-xl font-bold text-white">Follow me</h3>
            <div className="flex gap-8 justify-center">
        
              <X className="x-10 h-10 hover:text-white"/>
             <Instagram className="x-10 h-10 hover:text-white"/>
              <Linkedin className="x-10 h-10 hover:text-white"/>
              <MessageCircle className="x-10 h-10 hover:text-white"/>
              
            </div>
          </div>
        </div>
      </footer>


    </div>


  )
}
