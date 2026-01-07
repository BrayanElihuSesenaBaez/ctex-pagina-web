import React from 'react';

const LocationMap = () => {
    const locations = [
        { state: "Veracruz", cities: "Xalapa (Sede), Puerto de Veracruz, Coatzacoalcos", highlight: true },
        { state: "Oaxaca", cities: "Puerto Escondido, Salina Cruz", highlight: false },
        { state: "Puebla", cities: "Puebla, Tehuacán", highlight: false },
        { state: "Tabasco", cities: "Villahermosa", highlight: false }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
                        Cobertura en el Sureste de México 🇲🇽
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto italic">
                        "Atención prioritaria en el estado de Veracruz y presencia estratégica en puntos clave del corredor industrial."
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                    {/* LISTADO TÉCNICO DE SEDES */}
                    <div className="lg:col-span-2 space-y-4">
                        {locations.map((loc, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-xl border-l-4 transition-all ${
                                    loc.highlight
                                        ? 'bg-blue-50 border-ctex-blue shadow-sm'
                                        : 'bg-gray-50 border-gray-200'
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-gray-800">{loc.state}</h3>
                                    {loc.highlight && <span className="text-[10px] bg-ctex-orange text-white px-2 py-0.5 rounded-full uppercase">Sede Central</span>}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{loc.cities}</p>
                            </div>
                        ))}

                    </div>

                    {/* MAPA REAL DE GOOGLE CON TUS PUNTOS */}
                    <div className="lg:col-span-3 h-[400px] lg:h-auto min-h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                        <iframe
                            title="CTEX Operación Sureste"
                            /* ESTA ES LA URL DE INSERCIÓN CORRECTA */
                            src="https://www.google.com/maps/d/embed?mid=1-s4N5dAEdeNsxgl3M8HVGnPcWQ-liug&ehbc=2E312F"
                            width="100%"
                            height="100%"
                            className="border-none"
                            loading="lazy"
                        ></iframe>

                        {/* Indicador flotante */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 pointer-events-none">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest italic">Puntos de atención estratégica</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;


