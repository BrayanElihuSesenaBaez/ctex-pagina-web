import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import { products } from '../data/Products';
import { FilePdf, WhatsappLogo, ArrowLeft, Info } from "@phosphor-icons/react";

// --- DISEÑO A: ESTILO INGENIERÍA (Legibilidad Optimizada para RB-100) ---
const DesignEngineering = ({ product, whatsappLink }) => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-12 pt-28">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <button
                    onClick={() => navigate('/catalogo')}
                    className="flex items-center gap-2 text-gray-400 hover:text-ctex-blue transition-colors text-xs font-semibold uppercase tracking-tight"
                >
                    <ArrowLeft size={16} weight="bold" /> Regresar al catálogo
                </button>
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest italic">Ficha Técnica Oficial</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm aspect-square flex items-center justify-center overflow-hidden">
                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-ctex-blue mb-1 tracking-tight">{product.name}</h1>
                        <p className="text-ctex-orange text-sm font-semibold uppercase tracking-wide">{product.brand} • Mod: {product.id}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider border-l-2 border-ctex-orange pl-3">Especificaciones</h2>
                            <ul className="space-y-3">
                                {product.details?.map((detail, i) => (
                                    <li key={i} className="flex flex-col border-b border-gray-50 pb-2">
                                        <span className="text-[10px] font-bold text-ctex-blue uppercase opacity-60">{detail.label}</span>
                                        <span className="text-sm text-gray-700 font-medium">{detail.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider border-l-2 border-ctex-orange pl-3">Descripción</h2>
                            <p className="text-sm text-gray-600 leading-relaxed text-justify">{product.description}</p>

                            {/* BOTONES LIMPIOS OPCIÓN A */}
                            <div className="flex flex-col gap-2 pt-4">
                                <a href={product.manualPdf} target="_blank" rel="noreferrer"
                                   className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-black text-white py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm">
                                    <FilePdf size={18} weight="fill" /> Descargar PDF técnico
                                </a>
                                <a href={whatsappLink} target="_blank" rel="noreferrer"
                                   className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm">
                                    <WhatsappLogo size={18} weight="fill" /> Solicitar informes
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- DISEÑO B: ESTILO INDUSTRIAL (Letras Claras para RB-410) ---
const DesignIndustrialBlocks = ({ product, whatsappLink }) => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-12 pt-28">
            <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-6">
                <div>
                    <span className="text-ctex-orange font-bold text-xs uppercase tracking-widest mb-1 block">Ingeniería en Refrigeración</span>
                    <h1 className="text-4xl font-extrabold text-ctex-blue tracking-tight">{product.name}</h1>
                </div>
                <button onClick={() => navigate('/catalogo')} className="text-xs font-bold text-gray-400 hover:text-ctex-blue flex items-center gap-1 uppercase tracking-tight">
                    <ArrowLeft size={14} /> Volver al catálogo
                </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                    <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 aspect-square flex items-center justify-center sticky top-32">
                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                    </div>
                </div>
                <div className="lg:col-span-7 space-y-8">
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm text-sm">
                        <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 flex items-center gap-2">
                            <Info size={18} className="text-ctex-orange" weight="bold" />
                            <span className="font-bold text-ctex-blue uppercase tracking-wider">Ficha Técnica de Sistema</span>
                        </div>
                        <div className="p-6 grid grid-cols-2 gap-y-5 gap-x-8">
                            {product.details?.map((detail, i) => (
                                <div key={i} className="border-l-2 border-gray-100 pl-4">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">{detail.label}</p>
                                    <p className="text-sm font-bold text-gray-700">{detail.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-base text-gray-600 leading-relaxed border-l-4 border-ctex-orange/30 pl-6">{product.description}</p>

                        {/* BOTONES BALANCEADOS OPCIÓN B */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            {product.manualPdf && (
                                <a href={product.manualPdf} target="_blank" rel="noreferrer"
                                   className="flex-1 flex items-center justify-center gap-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wide transition-all">
                                    <FilePdf size={20} weight="bold" /> Ver Ficha PDF
                                </a>
                            )}
                            <a href={whatsappLink} target="_blank" rel="noreferrer"
                               className="flex-[1.2] flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wide transition-all shadow-md">
                                <WhatsappLogo size={20} weight="fill" /> Contactar Asesoría
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CataloguePage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    if (!productId) return <ProductList />;

    const productData = products.find(p => p.id.toString() === productId);

    if (!productData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl font-black text-gray-200 mb-4 tracking-tighter">ERROR 404</h1>
                <p className="text-gray-500 mb-8 font-medium italic">El modelo solicitado no se encuentra en la base de datos.</p>
                <button onClick={() => navigate('/catalogo')} className="text-xs font-bold text-ctex-blue border-b-2 border-ctex-blue tracking-widest uppercase pb-1">Regresar al inventario</button>
            </div>
        );
    }

    const whatsappBase = "https://wa.me/52228426769?text=";
    const whatsappLink = whatsappBase + encodeURIComponent(`Buen día CTEX, solicito información técnica del equipo: ${productData.name} (ID: ${productData.id}).`);

    return (
        <div className="bg-white min-h-screen">
            <main>
                {productData.id === "enfr-rb-100" ? (
                    <DesignEngineering product={productData} whatsappLink={whatsappLink} />
                ) : (
                    <DesignIndustrialBlocks product={productData} whatsappLink={whatsappLink} />
                )}
            </main>
        </div>
    );
};

export default CataloguePage;