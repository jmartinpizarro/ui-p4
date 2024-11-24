const Footer: React.FC = () => {
    return(
        <footer className="bg-darkgrey px-10 h-28 w-full flex justify-between items-center">
            <p className="text-white">© 2024 Javier Martín</p>
            <div className="flex gap-6">
                <a href="#enlace1" className="text-white hover:text-red">Enlace 1</a>
                <a href="#enlace2" className="text-white hover:text-red">Enlace 2</a>
                <a href="#enlace3" className="text-white hover:text-red">Enlace 3</a>
            </div>
        </footer>
    )
}

export default Footer
