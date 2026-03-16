// client/src/App.tsx

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import { HeroarrowNavigator } from "./components/global/HeroarrowNavigator";
import PageTransition from "./components/global/PageTransition";
import Layout from "./components/layout/layout";
import { useGTMPageView } from "./hooks/useGTMPageView";
import useParallaxEffect from "./hooks/useParallaxEffect";
import LogoCalera from "@/assets/logo-caldera-cushuro.png";

const siteLogo = import.meta.env.VITE_IMG_URL
  ? `${import.meta.env.VITE_IMG_URL}/img-inicio/logo/logo-caldera-cushuro.png`
  : LogoCalera;

// Lazy imports
const Inicio = lazy(() => import("./components/Paginas/inicio"));
const LaEmpresa = lazy(() => import("./components/Paginas/la-empresa"));
const Operaciones = lazy(() => import("./components/Paginas/responsabilidad-social"));

// Lazy imports - submenú Productos
const CalViva= lazy(() => import("./components/Paginas/cal-viva"));
const CalAgricola= lazy(() => import("./components/Paginas/cal-agricola"));
const PiedraCaliza = lazy(() => import("./components/Paginas/piedra-caliza"));
const CarbonAntracita = lazy(() => import("./components/Paginas/carbon-antracita"));
const CarbonCisco = lazy(() => import("./components/Paginas/carbon-cisco"));
const OperacionMaquinaria = lazy(() => import("./components/Paginas/operacion-con-maquinaria-pesada"));
const TransporteLogistico = lazy(() => import("./components/Paginas/transporte-logistico-especializado"));
const MedioAmbiente = lazy(() => import("./components/Paginas/medio-ambiente"));
const ResponsabilidadSocial = lazy(() => import("./components/Paginas/responsabilidad-social"));
const Contacto = lazy(() => import("./components/Paginas/contacto"));
const Formulario = lazy(() => import("./components/Paginas/formulario"));



function AppRoutes() {
  const location = useLocation();

  useGTMPageView();

  return (
    <Routes location={location} key={location.pathname}>
      {/* INICIO */}
      <Route
        path="/"
        element={
          <Layout page="inicio" showVideo logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
             
            </div>

            <Inicio />

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
  {/* LA EMPRESA */}
      <Route
        path="/la-empresa"
        element={
          <Layout page="la-empresa" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            
            </div>
            <LaEmpresa />
            
            <HeroarrowNavigator />
          </Layout>
        }
      />
      {/* Productos/cal-viva */}
      <Route
        path="/Productos/cal-viva"
        element={
          <Layout page="cal-viva" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CalViva />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
    
 {/* Productos/cal-agricola */}
      <Route
        path="/Productos/cal-agricola"
        element={
          <Layout page="cal-agricola" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
             
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CalAgricola />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />

 {/* Productos/piedra-caliza */}
      <Route
        path="/Productos/piedra-caliza"
        element={
          <Layout page="piedra-caliza" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
           
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <PiedraCaliza />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
       {/* Productos/carbon-antracita */}
      <Route
        path="/Productos/carbon-antracita"
        element={
          <Layout page="carbon-antracita" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CarbonAntracita />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
           {/* Productos/carbon-cisco */}
      <Route
        path="/Productos/carbon-cisco"
        element={
          <Layout page="carbon-cisco" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
             
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CarbonCisco />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />

                 {/* Servicios-Industriales/operacion-con-maquinaria-pesada */}
      <Route
        path="/Servicios-Industriales/operacion-con-maquinaria-pesada"
        element={
          <Layout page="operacion-con-maquinaria-pesada" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <OperacionMaquinaria />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
                 {/* Servicios-Industriales/transporte-logistico-especializado */}
      <Route
        path="/Servicios-Industriales/transporte-logistico-especializado"
        element={
          <Layout page="transporte-logistico-especializado" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
             
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <TransporteLogistico />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
                

       {/* medio-ambiente/MedioAmbiente */}
      <Route
        path="compromiso-ambiental-y-social/medio-ambiente"
        element={
          <Layout page="medio-ambiente" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <MedioAmbiente />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
       {/* responsabilidad-social/ResponsabilidadSocial */}
      <Route
        path="compromiso-ambiental-y-social/responsabilidad-social"
        element={
          <Layout page="responsabilidad-social" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <ResponsabilidadSocial />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />
 {/* responsabilidad-social/contacto */}
      <Route
        path="contacto"
        element={
          <Layout page="contacto" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
           
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <Contacto />
            </Suspense>

            
            <HeroarrowNavigator />
          </Layout>
        }
      />

      <Route
        path="formulario"
        element={
          <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
            <Formulario />
          </Suspense>
        }
      />

      {/* Ruta antigua para compatibilidad */}
      <Route path="/sobre-nosotros" element={<Navigate to="/la-empresa" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />


    </Routes>
  );
}

function App() {
  useParallaxEffect([], {
    parallaxFactor: 0.2,
    debounceDelay: 10,
    threshold: 100,
  });

  return (
    <div className="app">
      <Router>
        <PageTransition />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
