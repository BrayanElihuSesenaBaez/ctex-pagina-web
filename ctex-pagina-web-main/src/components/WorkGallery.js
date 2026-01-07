import React, { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const technicalProjects = [
    {
        id: 1,
        title: "Instalación y Montaje",
        images: [
            "/img/proyectos-realizados/IMG-20251218-WA0015.webp",
            "/img/proyectos-realizados/IMG-20251218-WA0023.webp",
            "/img/proyectos-realizados/IMG-20251218-WA0113.webp",
            "/img/proyectos-realizados/IMG-20251218-WA0172.webp"
        ]
    },
    {
        id: 2,
        title: "Mantenimiento Mecánico",
        images: [
            "/img/proyectos-realizados/IMG-20251219-WA0059.webp",
            "/img/proyectos-realizados/IMG-20251218-WA0107.webp",
            "/img/proyectos-realizados/IMG-20251219-WA0070.webp"
        ]
    },
    {
        id: 3,
        title: "Diagnóstico Eléctrico",
        images: [
            "/img/proyectos-realizados/IMG-20251218-WA0018.webp",
            "/img/proyectos-realizados/IMG-20251218-WA0065.webp",
            "/img/proyectos-realizados/IMG-20251218-WA0151.webp",
            "/img/proyectos-realizados/IMG-20251219-WA0063.webp"
        ]
    },
    {
        id: 4,
        title: "Reparaciones en Campo",
        images: [
            "/img/proyectos-realizados/IMG-20251219-WA0057.webp",
            "/img/proyectos-realizados/IMG-20251218-WA0102.webp"
        ]
    },
];

const brandPresence = [
    {
        id: 1,
        title: "Nuestras Instalaciones",
        images: [
            "/img/proyectos-realizados/TC1.webp",
            "/img/proyectos-realizados/TC2.webp",
            "/img/proyectos-realizados/TC3.webp",
            "/img/proyectos-realizados/TC4.webp"
        ]
    }
];

const ProjectCarousel = ({ images, title, onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full cursor-pointer" onClick={() => onClick(currentIndex)}>
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`${title} - ${i}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
                        i === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg text-center px-4 drop-shadow-md uppercase tracking-wide">
                    {title}
                </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full border border-white/10">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

const WorkGallery = () => {
    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]);
    const [index, setIndex] = useState(0);

    const handleOpenGallery = (project, imgIndex) => {
        setSlides(project.images.map(src => ({ src })));
        setIndex(imgIndex);
        setOpen(true);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* --- SECCIÓN 1: TRABAJOS TÉCNICOS --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-ctex-blue mb-4 tracking-tight">
                        Especialización en Campo
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        Galería técnica de instalaciones, diagnósticos y mantenimientos realizados.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {technicalProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-3xl shadow-lg h-80 border border-gray-200 bg-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <ProjectCarousel images={project.images} title={project.title} onClick={(imgIndex) => handleOpenGallery(project, imgIndex)} />
                        </div>
                    ))}
                </div>

                {/* --- SECCIÓN 2: PRESENCIA DE MARCA */}
                <div className="bg-ctex-blue rounded-[3rem] p-12 text-white overflow-hidden relative shadow-2xl">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter text-ctex-orange">Presencia en Proyecto</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Documentación de nuestra identidad corporativa en entornos reales de trabajo.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                                    <p className="text-sm uppercase text-blue-200 font-bold tracking-widest">Cobertura Regional</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {brandPresence.map((project) => (
                                <div key={project.id} className="group relative overflow-hidden rounded-3xl shadow-2xl h-80 border-4 border-white/20">
                                    <ProjectCarousel images={project.images} title={project.title} onClick={(imgIndex) => handleOpenGallery(project, imgIndex)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        * Imágenes reales protegidas por la identidad de marca CTEX.
                    </p>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
        </section>
    );
};

export default WorkGallery;