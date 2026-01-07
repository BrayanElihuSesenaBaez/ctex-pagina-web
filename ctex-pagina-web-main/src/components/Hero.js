import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

const WHATSAPP_NUMBER = "52228426769";

const Hero = () => {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hola, necesito atención técnica inmediata para mi negocio."
    )}`;

    return (
        <section
            id="inicio"
            className="relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/img/hero-industrial.jpg')" }}
        >
            {/* OVERLAY OSCURO MÁS PROFUNDO PARA LEGIBILIDAD */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900/40"></div>

            {/* CONTENIDO LIMPIO */}
            <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">

                <h1
                    data-aos="fade-up"
                    className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8 text-white"
                >
                    Expertos en <br />
                    <span className="text-ctex-orange drop-shadow-md">
                        Refrigeración y Cocción
                    </span>
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-3xl mx-auto"
                >
                    Soluciones técnicas de alta especialización para asegurar la <span className="font-bold text-white">continuidad operativa</span> de su negocio.
                </p>

                <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-ctex-orange hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-full text-xl transition-all shadow-2xl transform hover:scale-105"
                    >
                        Solicitar Soporte Técnico
                        <ArrowRight size={24} weight="bold" />
                    </a>
                </div>
            </div>

            {/* INDICADOR DE SCROLL (Opcional, ayuda a la UX) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-1 h-12 bg-gradient-to-b from-ctex-orange to-transparent rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;
