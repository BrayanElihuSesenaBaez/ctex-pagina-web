import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Gear, Trolley, ArrowRight } from "@phosphor-icons/react";

const categories = [
    {
        id: 1,
        title: "Refacciones de Refrigeración",
        categoryName: "Refrigeración",
        description: "Compresores, gases refrigerantes, termostatos y ventiladores de las mejores marcas.",
        Icon: Gear,
        img: "/img/equipo1.jpg",
    },
    {
        id: 2,
        title: "Equipos de Cocción",
        categoryName: "Cocción",
        description: "Venta de quemadores, válvulas de seguridad y termopares industriales.",
        Icon: Package,
        img: "/img/equipo2.jpg",
    },
    {
        id: 3,
        title: "Insumos de Climatización",
        categoryName: "Climatización",
        description: "Filtros, tarjetas electrónicas y refacciones para sistemas tipo paquete y split.",
        Icon: Trolley,
        img: "/img/equipo3.jpg",
    }
];

const FeaturedProducts = () => {
    return (
        <section id="catalogo-destacado" className="py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Cabecera */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-ctex-blue mb-4">
                            Catálogo de Refacciones y Equipos
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Contamos con un amplio stock de componentes originales para asegurar que sus equipos nunca se detengan.
                        </p>
                    </div>
                    {/* LINK LIGADO AL CATÁLOGO GENERAL */}
                    <Link
                        to="/catalogo"
                        className="flex items-center gap-2 text-ctex-orange font-bold hover:gap-4 transition-all"
                    >
                        Ver catálogo completo <ArrowRight weight="bold" />
                    </Link>
                </div>

                {/* Grid de Categorías */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="group bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-ctex-orange shadow-sm">
                                    <cat.Icon size={24} weight="duotone" />
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {cat.description}
                                </p>

                                {/* BOTÓN LIGADO AL CATÁLOGO */}
                                <Link
                                    to="/catalogo"
                                    className="block w-full text-center py-3 border-2 border-ctex-blue text-ctex-blue font-bold rounded-xl hover:bg-ctex-blue hover:text-white transition-colors"
                                >
                                    Consultar Disponibilidad
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner inferior */}
                <div className="mt-16 bg-ctex-blue rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/20">
                    <div>
                        <h4 className="text-2xl font-bold mb-2">¿Busca una pieza específica?</h4>
                        <p className="text-blue-100">Si no la ve en el catálogo, nosotros la conseguimos por usted.</p>
                    </div>
                    <a
                        href="https://wa.me/52228426769?text=Hola,%20busco%20una%20refacción%20específica."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ctex-orange hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
