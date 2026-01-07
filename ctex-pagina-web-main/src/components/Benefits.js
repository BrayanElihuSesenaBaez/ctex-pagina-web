import React from 'react';
import { Clock, Medal, GearSix } from "@phosphor-icons/react";

const benefitsList = [
    {
        Icon: Clock,
        title: "Atención Inmediata 24/7",
        text: "Soporte técnico de emergencia para asegurar que su negocio nunca se detenga.",
    },
    {
        Icon: Medal,
        title: "Técnicos de Confianza",
        text: "Personal altamente calificado, honesto y con experiencia en entornos industriales.",
    },
    {
        Icon: GearSix,
        title: "Refacciones Originales",
        text: "Garantizamos el uso de componentes de alta calidad para una mayor durabilidad.",
    },
];

const Benefits = () => {
    return (
        // Añadido pb-32 (padding bottom) para que no se pegue con "¿Quiénes Somos?"
        <section id="beneficios" className="py-24 pb-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 data-aos="fade-up" className="text-4xl font-bold text-ctex-blue mb-6">
                        ¿Por qué elegir a CTEX?
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-gray-600 italic">
                        Nos convertimos en su socio técnico estratégico con capacidad de respuesta inmediata.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {benefitsList.map((benefit, index) => {
                        const Icon = benefit.Icon;
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group p-10 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl-soft transition-all duration-300 border border-transparent hover:border-gray-100 text-center"
                            >
                                <div className="p-5 rounded-2xl inline-flex items-center justify-center bg-ctex-orange/10 mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={48} weight="duotone" className="text-ctex-orange" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{benefit.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Benefits;