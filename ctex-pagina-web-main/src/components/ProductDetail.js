import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhatsappLogo, FilePdf, ArrowLeft } from "@phosphor-icons/react";

const ProductDetail = ({ product }) => {
    const navigate = useNavigate();
    const whatsappBase = "https://wa.me/52228426769?text=";
    const whatsappMessage = encodeURIComponent(
        `Hola CTEX, necesito información sobre el producto: ${product.name} (ID: ${product.id}).`
    );
    const whatsappLink = whatsappBase + whatsappMessage;

    return (
        <div className="product-detail-container container mx-auto px-4 py-12 pt-32 min-h-[70vh]">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <span className="text-ctex-orange font-bold text-sm uppercase tracking-widest">{product.brand}</span>
                    <h1 className="text-4xl font-bold text-ctex-blue">{product.name}</h1>
                </div>
                <button
                    onClick={() => navigate('/catalogo')}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-xl transition-colors font-medium w-fit"
                >
                    <ArrowLeft /> Volver al catálogo
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* 1. IMAGEN DEL PRODUCTO */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 aspect-square flex items-center justify-center overflow-hidden">
                        <img
                            src={product.image} // USAMOS .image NO .imagePlaceholder
                            alt={product.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => { e.target.src = "/img/placeholder-product.webp" }}
                        />
                    </div>
                </div>

                {/* FICHA TÉCNICA Y PDF */}
                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-ctex-orange pl-4 mb-6">
                        Detalles Técnicos
                    </h2>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                        <table className="w-full text-sm text-left text-gray-600">
                            <tbody>
                            {product.details?.map((detail, i) => (
                                <tr key={i} className="border-b last:border-0">
                                    <td className="py-3 font-bold text-ctex-blue w-1/2">{detail.label}:</td>
                                    <td className="py-3">{detail.value}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-ctex-orange pl-4 mb-4">
                        Descripción
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

                    {product.manualPdf && (
                        <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 p-3 rounded-xl text-white">
                                    <FilePdf size={24} weight="fill" />
                                </div>
                                <div>
                                    <p className="text-blue-900 font-black text-sm uppercase">Ficha Técnica</p>
                                    <p className="text-blue-600 text-xs font-medium">Documento PDF Oficial</p>
                                </div>
                            </div>
                            <a
                                href={product.manualPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-700 border-2 border-blue-600 px-4 py-2 rounded-xl text-xs font-black hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            >
                                DESCARGAR
                            </a>
                        </div>
                    )}
                </div>

                {/* 3. CARD PRECIO Y CONTACTO */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-900 p-8 rounded-[2rem] shadow-2xl border-t-8 border-ctex-orange sticky top-32">
                        <div className="text-center mb-8 border-b border-white/10 pb-6">
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-widest block mb-2">Inversión:</span>
                            <div className="text-5xl font-black text-white">
                                ${product.price?.toLocaleString('es-MX')}
                            </div>
                            <p className="text-ctex-orange text-[10px] mt-3 font-bold uppercase">* Precios sujetos a cambio sin previo aviso.</p>
                        </div>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl text-lg transition-all"
                        >
                            <WhatsappLogo size={28} weight="fill" /> COTIZAR AHORA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
