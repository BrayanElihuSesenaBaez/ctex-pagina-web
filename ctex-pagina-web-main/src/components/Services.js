import React, { useState } from 'react';
import { Wrench, Buildings, MagnifyingGlass, FileText, Check } from "@phosphor-icons/react";

const servicesData = [
    {
        id: 'mantenimiento',
        name: 'Mantenimiento',
        icon: Wrench,
        title: '2.1 Mantenimiento Especializado',
        subtitle: 'Enfoque preventivo y correctivo para la continuidad operativa.',
        groups: [
            {
                groupTitle: "refrigeracion-comercial",
                items: [
                    'Cámaras frías y cuartos de congelación',
                    'Congeladores y enfriadores de mostrador',
                    'Mesas frías y vitrinas',
                    'Fabricadores de hielo',
                    'Sistemas de conservación'
                ]
            },
            {
                groupTitle: "aire-acondicionado",
                items: [
                    'Mini Split residencial y comercial',
                    'Tipo paquete',
                    'Sistemas VRF / VRV',
                    'Unidades de precisión'
                ]
            },
            {
                groupTitle: "coccion-comercial",
                items: [
                    'Hornos (mixtos, convección, panadería, pizza)',
                    'Estufas y planchas industriales',
                    'Freidoras de alta capacidad',
                    'Salamandras',
                    'Parrillas y equipos a gas'
                ]
            }
        ]
    },

    {
        id: 'instalacion',
        name: 'Instalación',
        icon: Buildings,
        title: '2.2 Instalación Profesional',
        subtitle:
            'Procesos realizados según criterios técnicos estandarizados y lineamientos de seguridad industrial.',
        items: [
            'Instalación de cámaras frías completas',
            'Líneas de refrigeración y condensación',
            'Equipos de aire-acondicionado acondicionado en cualquier capacidad',
            'Instalación de hornos, estufas y equipos de cocción'
        ]
    },

    {
        id: 'diagnostico',
        name: 'Diagnóstico',
        icon: MagnifyingGlass,
        title: '2.3 Diagnóstico Técnico Avanzado',
        subtitle:
            'Metodologías instrumentadas para obtener datos de alta precisión para decisiones técnicas fundamentadas.',
        items: [
            'Detección de fugas de refrigerante',
            'Medición eléctrica y calibración',
            'Limpieza profunda profesional'
        ]
    },

    {
        id: 'programas',
        name: 'Programas Integrales',
        icon: FileText,
        title: '2.4 Programas de Mantenimiento Integral',
        subtitle:
            'Rutinas sistemáticas de inspección y registro operativo para fortalecer auditorías internas y externas.',
        items: [
            'Planes mensuales, trimestrales y semestrales',
            'Bitácoras digitales para auditoría',
            'Reportes técnicos detallados',
            'Estrategias de eficiencia energética'
        ]
    }
];

const Services = () => {
    const [activeTab, setActiveTab] = useState(servicesData[0].id);

    return (
        <section id="servicios" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">

                <h2 data-aos="fade-up" className="text-4xl font-bold text-ctex-blue text-center mb-10">
                    2. Servicios Profesionales
                </h2>

                <div className="flex justify-center border-b border-gray-300 mb-8 gap-6 flex-wrap">
                    {servicesData.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            className={`inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold transition ${
                                activeTab === tab.id
                                    ? 'border-b-4 border-ctex-orange text-ctex-blue'
                                    : 'text-gray-600 hover:text-ctex-orange'
                            }`}
                        >
                            <tab.icon size={18} />
                            {tab.name}
                        </button>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-xl shadow-xl">
                    {servicesData.map(tab =>
                        activeTab === tab.id ? (
                            <div
                                key={tab.id}
                                data-aos="fade-in"
                                data-aos-duration="600"
                            >
                                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                                    {tab.title}
                                </h3>

                                <p className="text-xl text-gray-600 mb-6 italic">
                                    {tab.subtitle}
                                </p>

                                {tab.groups ? (
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {tab.groups.map((group, gIndex) => (
                                            <div
                                                key={gIndex}
                                                data-aos="fade-up"
                                                data-aos-delay={gIndex * 150}
                                            >
                                                <h4 className="text-xl font-bold text-ctex-blue mb-3">
                                                    {group.groupTitle}
                                                </h4>

                                                <ul className="space-y-2 text-lg text-gray-700">
                                                    {group.items.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-3"
                                                            data-aos="fade-left"
                                                            data-aos-delay={index * 80}
                                                        >
                                                            <Check
                                                                size={20}
                                                                weight="duotone"
                                                                className="text-ctex-orange mt-1"
                                                            />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : (

                                    <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700">
                                        {tab.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                                data-aos="fade-up"
                                                data-aos-delay={index * 100}
                                            >
                                                <Check
                                                    size={20}
                                                    weight="duotone"
                                                    className="text-ctex-orange mt-1"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
