import Link from "next/link";
import Carousel from "./carousel";


export default function Page() {
  return (
    <section className="bg-[#FCF5FC] text-[#000000] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto a la izquierda */}
        <div>
          <h2 className="text-4xl font-bold text-[#6B056E] mb-4">¿Quiénes somos?</h2>
            <p className="text-lg text-black mb-4">
              Somos un grupo con más de 10 años de experiencia, dedicados a servir a Dios a través del arte.
              Durante este tiempo, hemos demostrado una profunda pasión y compromiso por compartir el mensaje de la fe cristiana, utilizando como medio las distintas expresiones artísticas:
              literario, bello, audiovisual, plástico y escénico.
            </p>
          <h3 className='text-2xl font-bold text-[#6B056E] mt-6'>Nuestro objetivo</h3>
            <p className="text-base">
              Nuestro objetivo es propiciar y fomentar el desarrollo de iniciativas 
              artísticas y culturales que sirvan como una herramienta de formación, inspiración y 
              edificación para niños, jóvenes y adultos, en todas las áreas del arte cristiano.
            </p>
          <h3 className='text-2xl font-bold text-[#6B056E] mt-6'>Misión</h3>
            <p>
              Nuestro propósito es utilizar el arte como una herramienta para compartir el amor y el mensaje de Jesucristo, 
              inspirando y transformando vidas a través de la creatividad y la belleza. 
              Buscamos crear un espacio donde la fe y el arte se unan para glorificar a Dios y servir a la comunidad.
            </p>

            <Link
              href='/equipement'

            >
              <button className="mt-6 bg-[#B557A3] text-white px-6 py-2 rounded-lg hover:bg-[#6B056E] transition-all duration-300">  
                Conoce nuestro equipo
              </button>
            </Link>
        </div>
        {/* Carrusel a la derecha */}
        <div className="w-full">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
