import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/Products';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
    const showcaseProducts = products.slice(0, 3);

    return (
        <section id="catalogo" className="py-20 bg-gray-50 text-center">
            <div className="container mx-auto px-4">
                <h2 data-aos="fade-up" className="text-4xl font-bold text-ctex-blue mb-4">3. Catálogo Destacado</h2>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                    Conoce nuestros equipos de alta eficiencia más vendidos.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {showcaseProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                // En ProductShowcase.js
                <div className="mt-16" data-aos="zoom-in" data-aos-delay="400">
                    <Link
                        to="/catalogo"
                        className="inline-block bg-ctex-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition"
                    >
                        Ver Catálogo Completo y Fichas Técnicas
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;

