import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const whatsappBase = "https://wa.me/52228426769?text=";
    const whatsappMessage = encodeURIComponent(`Hola CTEX, estoy interesado en el producto: ${product.whatsappProduct}. ¿Podrían darme más información?`);
    const whatsappLink = whatsappBase + whatsappMessage;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 h-full flex flex-col">
            <div className="bg-gray-100 h-48 flex items-center justify-center p-4">
                <div className="text-gray-600 text-sm italic">{product.imagePlaceholder}</div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block bg-ctex-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase">
          {product.category}
        </span>

                <h3 className="text-xl font-bold text-ctex-blue mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

                <div className="mt-4 flex gap-3">
                    <Link to={`/catalogo/${product.id}`} className="flex-1 text-center bg-gray-800 text-white py-2 rounded-full font-medium hover:bg-gray-700 transition">
                        Ver ficha
                    </Link>

                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-ctex-whatsapp text-white py-2 rounded-full font-medium hover:bg-green-700 transition">
                        📝 Pedir informes
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
