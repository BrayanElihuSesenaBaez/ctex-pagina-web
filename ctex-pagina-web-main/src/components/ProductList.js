import React, { useState, useMemo } from 'react';
import { products } from '../data/Products';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, Funnel, Tag, Buildings } from "@phosphor-icons/react";

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeBrand, setActiveBrand] = useState("Todas");
    const [activeSubcat, setActiveSubcat] = useState("Todas");

    // Extraer marcas y subcategorías únicas dinámicamente de los productos
    const brands = ["Todas", ...new Set(products.map(p => p.brand))];
    const subcategories = ["Todas", ...new Set(products.map(p => p.subcategory))];

    // Lógica de filtrado combinada
    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.id.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = activeBrand === "Todas" || p.brand === activeBrand;
            const matchesSub = activeSubcat === "Todas" || p.subcategory === activeSubcat;
            return matchesSearch && matchesBrand && matchesSub;
        });
    }, [searchTerm, activeBrand, activeSubcat]);

    return (
        <section className="container mx-auto px-4 py-12 pt-28 min-h-screen bg-gray-50">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* BARRA LATERAL DE FILTROS (Estilo FoxSteel) */}
                <aside className="w-full lg:w-72 space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="flex items-center gap-2 font-bold text-ctex-blue mb-6 border-b pb-4">
                            <Funnel weight="fill" className="text-ctex-orange" /> Filtros Avanzados
                        </h3>

                        {/* Filtro por Marca */}
                        <div className="mb-8">
                            <label className="flex items-center gap-2 text-xs font-black uppercase text-gray-400 mb-4 tracking-widest">
                                <Buildings /> Marcas
                            </label>
                            <div className="space-y-2">
                                {brands.map(brand => (
                                    <button
                                        key={brand}
                                        onClick={() => setActiveBrand(brand)}
                                        className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                                            activeBrand === brand
                                                ? "bg-ctex-blue text-white font-bold shadow-md"
                                                : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                    >
                                        {brand}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Filtro por Subcategoría */}
                        <div>
                            <label className="flex items-center gap-2 text-xs font-black uppercase text-gray-400 mb-4 tracking-widest">
                                <Tag /> Categorías
                            </label>
                            <div className="space-y-2">
                                {subcategories.map(sub => (
                                    <button
                                        key={sub}
                                        onClick={() => setActiveSubcat(sub)}
                                        className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                                            activeSubcat === sub
                                                ? "bg-ctex-orange text-white font-bold shadow-md"
                                                : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* CONTENIDO PRINCIPAL: BUSCADOR Y GRID */}
                <div className="flex-1">
                    {/* Barra de Búsqueda */}
                    <div className="relative mb-8 shadow-sm">
                        <MagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                        <input
                            type="text"
                            placeholder="Buscar por modelo o nombre (ej: RB-270)..."
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-ctex-blue outline-none text-lg transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Resultados */}
                    <div className="mb-6 flex justify-between items-center text-sm text-gray-500">
                        <p>Mostrando <span className="font-bold text-ctex-blue">{filteredProducts.length}</span> resultados</p>
                        {(activeBrand !== "Todas" || activeSubcat !== "Todas") && (
                            <button
                                onClick={() => {setActiveBrand("Todas"); setActiveSubcat("Todas");}}
                                className="text-ctex-orange font-bold hover:underline"
                            >
                                Limpiar Filtros
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <Link
                                key={product.id}
                                to={`/catalogo/${product.id}`}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                            >
                                {/* Imagen con Label de Marca */}
                                <div className="h-56 bg-white relative flex items-center justify-center p-6 border-b border-gray-50">
                                    <img
                                        src={product.image || "/img/placeholder-product.webp"}
                                        alt={product.name}
                                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-lg text-[10px] font-black uppercase text-ctex-blue tracking-tighter">
                                        {product.brand}
                                    </div>
                                </div>

                                {/* Info del Producto */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-ctex-orange text-[10px] font-black uppercase tracking-widest mb-2">
                                        {product.subcategory}
                                    </p>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-ctex-blue transition-colors mb-4">
                                        {product.name}
                                    </h3>

                                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-xs font-bold text-gray-400">MODELO: {product.id.toUpperCase()}</span>
                                        <span className="text-ctex-blue font-black text-sm group-hover:translate-x-1 transition-transform">Ver Ficha →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Estado Vacío */}
                    {filteredProducts.length === 0 && (
                        <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
                            <p className="text-gray-400 text-lg italic">No se encontraron productos con esos filtros.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
