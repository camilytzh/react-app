const Institucion = () => {
  const aboutUsText = "text-gray-700 text-xs lg:text-sm leading-relaxed mb-2 flex text-justify"; 
  const valueSubtitle = "text-lg font-bold text-gray-800 mb-2";
  const valueDescription = "text-gray-600 text-xs lg:text-sm leading-relaxed";
  const cardStyle = "bg-white p-6 rounded-xl shadow-md text-center border-l-4 border-b-4 border-white hover:border-blue-950 transition-colors duration-300";
  return (
    <div className="bg-gray-100">
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
      <div className="w-full mt-4 px-6 pb-8">
        <h2 className="text-center text-blue-950 font-bold text-2xl mb-4">Nuestros Valores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
          <div className={cardStyle}>
            <h3 className={valueSubtitle}>Transparencia</h3>
            <p className={valueDescription}>Gestión clara, ética y abierta a la ciudadanía.</p>
          </div>
          <div className={cardStyle}>
            <h3 className={valueSubtitle}>Responsabilidad</h3>
            <p className={valueDescription}>Compromiso con los objetivos institucionales y el servicio público.</p>
          </div>
          <div className={cardStyle}>
            <h3 className={valueSubtitle}>Honestidad</h3>
            <p className={valueDescription}>Actuación basada en la verdad y la justicia.</p>
          </div>
          <div className={cardStyle}>
            <h3 className={valueSubtitle}>Servicio a la Ciudadanía</h3>
            <p className={valueDescription}>Soluciones ágiles y accesibles para mejorar la movilidad.</p>
          </div>
          <div className={cardStyle}>
            <h3 className={valueSubtitle}>Seguridad Vial</h3>
            <p className={valueDescription}>La vida como prioridad en cada decisión.</p>
          </div>
        </div>
      </div>
    </div>  
  );
}
export default Institucion;