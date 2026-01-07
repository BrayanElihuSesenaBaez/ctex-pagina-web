import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { List, X } from "@phosphor-icons/react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const navigate = useNavigate();

    const navItems = [
        { name: "Inicio", id: "inicio" },
        { name: "Quiénes Somos", id: "sobre-nosotros" },
        { name: "Servicios", id: "servicios" },
        { name: "Catálogo", id: "/catalogo" },
        { name: "Contacto", id: "contacto" }
    ];

    const goToSection = (sectionId) => {
        setOpen(false);

        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        } else {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const whatsappLink =
        "https://wa.me/52228426769?text=Hola,%20me%20interesa%20obtener%20informes%20sobre%20sus%20servicios%20de%20CTEX.";

    // 🚀 Corrección total del scroll (sin jitter, sin loops)
    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const current = window.scrollY;

            if (current > lastScroll && current > 80) {
                setHidden(true); // Bajando → ocultar
            } else {
                setHidden(false); // Subiendo → mostrar
            }

            lastScroll = current;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 bg-gray-900 shadow transition-transform duration-300 ${
                hidden ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <Link to="/" className="text-2xl font-extrabold tracking-wide text-white hover:text-ctex-orange">
                    CTEX
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navItems.map(item => (
                            <li key={item.id}>
                                {item.id.startsWith('/') ? (
                                    <Link to={item.id} className="text-white hover:text-ctex-orange transition">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => goToSection(item.id)}
                                        className="text-white hover:text-ctex-orange transition"
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ctex-orange text-white font-semibold py-2 px-5 rounded-full shadow hover:bg-orange-600 transition"
                    >
                        💬 Contacto Rápido
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden p-2 rounded hover:bg-gray-800 text-white"
                    onClick={() => setOpen(v => !v)}
                >
                    {open ? <X size={24} /> : <List size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800">
                    <div className="px-4 pb-6">
                        <ul className="flex flex-col gap-3 py-4">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    {item.id.startsWith('/') ? (
                                        <Link
                                            to={item.id}
                                            onClick={() => setOpen(false)}
                                            className="block text-white py-2 px-2 rounded hover:bg-gray-800"
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => goToSection(item.id)}
                                            className="w-full text-left text-white py-2 px-2 rounded hover:bg-gray-800"
                                        >
                                            {item.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={whatsappLink}
                            className="block text-center bg-ctex-orange text-white font-semibold py-3 rounded-full shadow"
                            target="_blank"
                            rel="noreferrer"
                        >
                            💬 Contacto Rápido
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
