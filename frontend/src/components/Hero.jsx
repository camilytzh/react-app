import heroImage from '../assets/atm-hero.png';
import { Link } from "react-router-dom";

const Hero = () => {
    const paragraphStyle = "pb-5 text-lg text-justify";
    return (
        <section className="bg-gray-100 py-10">
            <div className='mx-auto px-10 flex flex-col md:flex-row items-center gap-10'>
                <div className='w-full md:w-1/2 flex justify-end'>
                    <img src={heroImage} alt="ATM Hero" className="w-full h-auto rounded-lg"/>
                </div>
                <div className="w-full md:w-1/2">
                    <div className='w-full'>
                        <h2 className="text-3xl md:text-4xl font-extrabold pb-5 text-center md:text-left flex justify-center">SOBRE LA ATM</h2>
                        <p className={paragraphStyle}>La Autoridad de Tránsito y Movilidad de Guayaquil (ATM) es la entidad encargada de planificar, regular, controlar y gestionar la movilidad, el tránsito y el transporte en el cantón Guayaquil.</p>
                        <p className={paragraphStyle}>Su labor se orienta a garantizar una movilidad segura, eficiente e inclusiva, mediante la aplicación de la normativa vigente, el uso de tecnología, la gestión de datos y la implementación de políticas públicas enfocadas en la reducción de siniestros de tránsito y la mejora continua del servicio a la ciudadanía.</p>
                        <p className={paragraphStyle}>La ATM trabaja de manera articulada con instituciones locales y nacionales para construir una ciudad con mejor calidad de vida, orden vial y respeto por las normas de tránsito.</p>
                        <div className='flex justify-center'>
                            <Link to="/institucion" className='bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-blue-300 hover:scale-105 transition'>Conoce más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;