import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import CataloguePage from './components/CataloguePage';
import ScrollToTop from "./components/ScrollToTop";
import ScrollOnHome from "./components/ScrollOnHome";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import WorkGallery from "./components/WorkGallery";
import FeaturedProducts from "./components/FeaturedProducts";
import LocationMap from "./components/LocationMap";

const LandingPage = () => (
    <>
        <Hero />              {/* 1. Ventana inicial */}
        <AboutUs />           {/* 2. Quiénes Somos */}
        <LocationMap />       {/* 3. Presencia Nacional */}

        <Benefits />          {/* 4. Valor Agregado */}
        <HomeServices />      {/* 5. Servicios (Reparación, Mantenimiento) */}

        <FeaturedProducts />  {/* 6. Adelanto de Equipos */}
        <WorkGallery />       {/* 7. Especialización en Campo (Pruebas) */}
    </>
);

function App() {
    useEffect(() => {
        // animaciones
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out'
        });
    }, []);

    return (
        <Router>
            <div className="App min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <ScrollToTop />
                    <ScrollOnHome />

                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/catalogo" element={<CataloguePage />} />
                        <Route path="/catalogo/:productId" element={<CataloguePage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;