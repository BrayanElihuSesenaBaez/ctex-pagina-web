import React from 'react';

const Footer = () => {

    // 1. Clientes  Confianza -
    const localClients = [
        { name: "Fogon do Brasil", logo: "/img/logos/fogonlogo.webp" },
        { name: "Merendero La Joya", logo: "/img/logos/lajoya.webp" },
        { name: "La Roma", logo: "/img/logos/RomaGrill.webp" }, // Corregido según tu captura
        { name: "Quesería Morales", logo: "/img/logos/QueseriaMorales.webp" }, // Corregido según tu captura
        { name: "Laboratorio CI-Lab", logo: "/img/logos/ICILAB.webp" }, // Corregido según tu captura
        { name: "Shrimp Lighthouse", logo: "/img/logos/ShrimpLighthouse.webp" }, // Corregido según tu captura
        { name: "Giot Gyot Xalapa", logo: "/img/logos/Guiot.webp" }, // Corregido según tu captura
        { name: "Casino Wintop", logo: "/img/logos/WinpotCasino.webp" }, // Corregido según tu captura
        { name: "La Ferre", logo: "/img/logos/Ferre.webp" }, // Corregido según tu captura
        { name: "Aldo Conti", logo: "/img/logos/AldoConti.webp" },
        { name: "Bola de Oro", logo: "/img/logos/BolaDeOro.webp" } // Corregido según tu captura
    ];

    // 2. Marcas Grandes / Respaldo Técnico
    const majorBrands = [
        { name: "Oxxo", logo: "/img/logos/oxxologo.webp" },
        { name: "Coca-Cola", logo: "/img/logos/coca.webp" },
        { name: "FedEx", logo: "/img/logos/fedex.webp" },
        { name: "Tiendas Neto", logo: "/img/logos/TiendaNeto.webp" },
        { name: "Joyería Bizarro", logo: "/img/logos/logo_bizzarro.webp" },
        { name: "C4", logo: "/img/logos/c4.webp" },
        { name: "Metalfrio", logo: "/img/logos/metalfrio-logo.webp" },
        { name: "Criotec", logo: "/img/logos/criotec-logo.webp" }
    ];



    // Función auxiliar para renderizar los grids de logos
    const LogoGrid = ({ brands, title }) => (
        <div className="mb-12">
            <p className="text-center text-gray-500 uppercase tracking-[0.2em] text-[10px] mb-8 font-bold">
                {title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {brands.map((brand, index) => (
                    <div key={index} className="bg-white/5 p-3 rounded-lg flex items-center justify-center w-28 h-14 md:w-36 md:h-16 border border-white/5 group transition-all duration-300 hover:bg-white/10">
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            title={brand.name}
                            className="max-h-full max-w-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <footer id="contacto" className="bg-gray-900 text-white pt-12 pb-6 border-t-4 border-ctex-orange">
            <div className="container mx-auto px-4">


                {/* SECCIÓN 1: CLIENTES LOCALES */}
                <div className="pt-8 border-t border-gray-800">
                    <LogoGrid
                        brands={localClients}
                        title="Clientes cercanos"
                    />
                </div>

                {/* SECCIÓN 2: MARCAS GRANDES */}
                <LogoGrid
                    brands={majorBrands}
                    title="Clientes grandes"
                />



                {/* SECCIÓN 3: CONTACTO Y CTA */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">
                            CTEX <span className="text-ctex-orange font-light ml-2">Soluciones Técnicas</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-2 text-sm text-gray-400 justify-center md:justify-start">
                            <p className="flex items-center gap-2">📞 <span className="text-gray-200">2282425769 </span></p>
                            <p className="flex items-center gap-2">📞 <span className="text-gray-200">2282155568</span></p>

                            <p className="flex items-center gap-2">📧 <span className="text-gray-200">ctexref@gmail.com</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-red-500 text-[9px] font-black mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            Soporte Crítico 24/7
                        </p>
                        <a
                            href="https://wa.me/52228426769?text=Hola,%20necesito%20soporte%20de%20emergencia."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-[10px] uppercase transition-all shadow-lg hover:shadow-green-900/40 transform hover:-translate-y-1"
                        >
                            Solicitar Servicio Urgente
                        </a>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-12 pt-6 border-t border-gray-800/50 flex justify-between text-[8px] text-gray-600 uppercase tracking-[0.3em]">
                    <p>© 2025 CTEX XALAPA.</p>
                    <p>Ingeniería Térmica Aplicada.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;