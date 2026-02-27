const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white text-center">
        <div>
            <img src="/src/assets/banner-footerc.png" alt="Footer Image ATM" className="w-full h-auto" />
        </div>
        <div>
        <p>&copy; {new Date().getFullYear()} ATM Guayaquil. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
export default Footer;