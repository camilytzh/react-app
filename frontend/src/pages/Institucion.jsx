const Institucion = () => {
  const aboutUsText = "text-gray-700 text-xs lg:text-sm leading-relaxed mb-2 flex text-justify"; 
  return (
    <div>
      <div className="relative w-full h-64 lg:h-90">
        <img src="/src/assets/about-us-img.png" alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 right-4 lg:right-8 w-11/12 lg:w-2/5 bg-white/90 backdrop-blur-sm p-4 lg:p-8 border-l-8 border-b-8 border-blue-950">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">¿Quiénes somos?</h1>
          <p className={aboutUsText}>
            La Empresa Pública Municipal de Tránsito y Movilidad de Guayaquil, EP (ATM) es la autoridad del cantón Guayaquil encargada de planificar, regular, controlar y gestionar el tránsito, el transporte terrestre y la movilidad.
          </p>
          <p className={aboutUsText}>
            Trabajamos para garantizar una movilidad segura, ordenada, eficiente y sostenible, colocando la protección de la vida y el servicio a la ciudadanía como ejes centrales de nuestra gestión.
          </p>
        </div>
      </div>
    </div>  
  );
}
export default Institucion;