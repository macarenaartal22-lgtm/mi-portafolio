import { useNavigate, useParams } from 'react-router';
import './estilus.css';
import { proyectos } from '../data';

export const Quote = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const proyecto = proyectos[Number (id)];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full max-w-[1400px] md:mx-auto my-8 gap-8 px-5 md:px-20">
    <div>
          <h1 className="titulus-quote">
            { proyecto.nomen }
        </h1>

        <div 
        className="info-quote" 
        onClick={()=> navigate('/work') }
        >
        <p className="descriptione">
            {proyecto.descriptione}
        </p>

        <div className="arca-quote">
        <p className="quote"> {proyecto.quote}

        </p>
        </div>
        </div>
        </div>

        <figure className="figure-quote">
            <img src={`/imagenes/${ proyecto.imago}`} alt="" />
        </figure>

    </div>

  
  )
}
