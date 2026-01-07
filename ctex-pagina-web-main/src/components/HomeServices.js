import React, { useState, useEffect } from "react";
import { Snowflake, Thermometer, CookingPot, CheckCircle, CaretLeft, CaretRight, X } from "@phosphor-icons/react";

const WHATSAPP_NUMBER = "52228426769";

const services = [
    {
        id: "refrigeracion",
        title: "Refrigeración Comercial e Industrial",
        description: "Cámaras frías, cuartos de congelación y sistemas de conservación crítica.",
        Icon: Snowflake,
        whatsappMsg: "Hola CTEX, necesito informes sobre Mantenimiento en Refrigeración.",
        images: [
            "/img/refrigeracion-comercial/IMG-20251218-WA0012.webp",
            "/img/refrigeracion-comercial/IMG-20251218-WA0088.webp",
            "/img/refrigeracion-comercial/IMG-20251218-WA0004.webp",
            "/img/refrigeracion-comercial/IMG-20251218-WA0033.webp",

            "/img/refrigeracion-comercial/IMG-20251218-WA0118.webp",
            "/img/refrigeracion-comercial/IMG-20251218-WA0128.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0105.webp"

        ],
    },
    {
        id: "climatizacion",
        title: "Aire Acondicionado y Climatización",
        description: "Sistemas tipo paquete, VRF/VRV y unidades de precisión para empresas.",
        Icon: Thermometer,
        whatsappMsg: "Hola CTEX, solicito informes para Aire Acondicionado / Climatización.",
        images: [
            "/img/refrigeracion-comercial/IMG-20251218-WA0076.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0111.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0163.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0096.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0044.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0047.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0051.webp",
            "/img/aire-acondicionado/IMG-20251218-WA0052.webp",
            // "/img/aire-acondicionado/IMG-20251218-WA0057.webp",
            "/img/aire-acondicionado/Aire1.webp",
            "/img/aire-acondicionado/Aire2.webp",
            "/img/aire-acondicionado/Aire3.webp",
        ],
    },
    {
        id: "coccion",
        title: "Cocción Comercial",
        description: "Hornos industriales, estufas y freidoras de alta capacidad.",
        Icon: CookingPot,
        whatsappMsg: "Hola CTEX, necesito soporte para equipos de Cocción Comercial.",
        images: [
            "/img/refrigeracion-comercial/IMG-20251218-WA0131.webp",
            "/img/coccion-comercial/IMG-20251219-WA0025.webp",
            "/img/coccion-comercial/IMG-20251218-WA0119.webp",
            "/img/coccion-comercial/IMG-20251218-WA0138.webp",
            "/img/coccion-comercial/IMG-20251219-WA0026.webp",
            "/img/coccion-comercial/IMG-20251219-WA0036.webp",
            "/img/coccion-comercial/IMG-20251219-WA0042.webp",
            "/img/coccion-comercial/IMG-20251219-WA0045.webp",
            "/img/coccion-comercial/IMG-20251219-WA0048.webp",
            "/img/refrigeracion-comercial/IMG-20251218-WA0022.webp",

        ],
    }
];

const ImageCarousel = ({ images, title, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div
            className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-zoom-in h-64 md:h-80"
            onClick={() => onImageClick(images, currentIndex)} // Ahora pasamos todo el array y el índice
        >
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`${title} - ${i}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        i === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

const HomeServices = () => {
    // Estado para la galería modal: { lista de fotos, índice de la foto actual }
    const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 });

    const openLightbox = (images, index) => {
        setLightbox({ isOpen: true, images, index });
    };

    const closeLightbox = () => {
        setLightbox({ ...lightbox, isOpen: false });
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length
        }));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length
        }));
    };

    // Navegación por teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightbox.isOpen) return;
            if (e.key === "ArrowRight") nextImage(e);
            if (e.key === "ArrowLeft") prevImage(e);
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightbox.isOpen, lightbox.index]);

    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-ctex-blue mb-4">
                        Mantenimiento Especializado
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Prevención y corrección para asegurar la continuidad de su negocio.
                    </p>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => {
                        const ServiceIcon = service.Icon;
                        return (
                            <div key={service.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                                <div className="w-full md:w-1/2" data-aos="fade-right">
                                    <ImageCarousel
                                        images={service.images}
                                        title={service.title}
                                        onImageClick={openLightbox}
                                    />
                                </div>
                                <div className="w-full md:w-1/2" data-aos="fade-left">
                                    <div className="inline-flex p-3 rounded-xl bg-ctex-orange/10 mb-6 text-ctex-orange">
                                        <ServiceIcon size={32} weight="duotone" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-ctex-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg">
                                        Solicitar Soporte Técnico
                                        <CheckCircle size={22} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Lightbox con Navegación */}
            {lightbox.isOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Botón Cerrar */}
                    <button className="absolute top-6 right-6 text-white hover:text-ctex-orange transition-colors z-[110]">
                        <X size={40} />
                    </button>

                    {/* Flecha Izquierda */}
                    <button
                        className="absolute left-4 md:left-10 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]"
                        onClick={prevImage}
                    >
                        <CaretLeft size={32} weight="bold" />
                    </button>

                    {/* Imagen Actual */}
                    <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
                        <img
                            src={lightbox.images[lightbox.index]}
                            alt="Vista ampliada"
                            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in duration-300"
                            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic en la foto
                        />
                        {/* Contador inferior */}
                        <div className="mt-4 text-white font-medium bg-black/50 px-4 py-1 rounded-full">
                            {lightbox.index + 1} / {lightbox.images.length}
                        </div>
                    </div>

                    {/* Flecha Derecha */}
                    <button
                        className="absolute right-4 md:right-10 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]"
                        onClick={nextImage}
                    >
                        <CaretRight size={32} weight="bold" />
                    </button>
                </div>
            )}
        </section>
    );
};

export default HomeServices;
