import React from "react";
import { Target, Binoculars } from "@phosphor-icons/react";

const AboutUs = () => {
    return (
        <section id="sobre-nosotros" className="bg-white py-20">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* TEXTO BREVE */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-ctex-blue mb-6">
                        ¿Quiénes Somos?
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        CTEX es una empresa especializada en soluciones técnicas de
                        <strong> refrigeración, cocción y climatización</strong> para entornos
                        comerciales e industriales que requieren continuidad operativa.
                    </p>
                </div>

                {/* MISIÓN / VISIÓN */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ctex-orange">
                        <h3 className="text-2xl font-semibold flex items-center mb-4">
                            <Target size={32} className="text-ctex-orange mr-3" />
                            Nuestra Misión
                        </h3>
                        <p className="text-gray-600">
                            Brindar soluciones técnicas confiables mediante mantenimiento,
                            instalación y diagnóstico profesional.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ctex-orange">
                        <h3 className="text-2xl font-semibold flex items-center mb-4">
                            <Binoculars size={32} className="text-ctex-orange mr-3" />
                            Nuestra Visión
                        </h3>
                        <p className="text-gray-600">
                            Ser un referente técnico en soluciones térmicas comerciales e industriales.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
