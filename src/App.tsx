// client/src/App.tsx

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import { HeroarrowNavigator } from "./components/global/HeroarrowNavigator";
import { MainNavigationIndicator } from "./components/global/MainNavigationIndicator";
import PageTransition from "./components/global/PageTransition";
import { ScrollIndicator } from "./components/global/ScrollIndicator";
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

// Lazy imports - submenú Productos
const CalViva= lazy(() => import("./components/Paginas/cal-viva"));
const CalAgricola= lazy(() => import("./components/Paginas/cal-agricola"));
const PiedraCaliza = lazy(() => import("./components/Paginas/piedra-caliza"));
const CarbonAntracita = lazy(() => import("./components/Paginas/carbon-antracita"));
const CarbonCisco = lazy(() => import("./components/Paginas/carbon-cisco"));
const OperacionMaquinaria = lazy(() => import("./components/Paginas/operacion-con-maquinaria-pesada"));
const TransporteLogistico = lazy(() => import("./components/Paginas/transporte-logistico-especializado"));
const OxidodeCalcio = lazy(() => import("./components/Paginas/suministro-de-oxido-de-calcio"));



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
              <ScrollIndicator color="text-white/30" />
            </div>

            <Inicio />

            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-300" />
            </div>
            <LaEmpresa />
            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CalViva />
            </Suspense>

            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CalAgricola />
            </Suspense>

            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <PiedraCaliza />
            </Suspense>

            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CarbonAntracita />
            </Suspense>

            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <CarbonCisco />
            </Suspense>

            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <OperacionMaquinaria />
            </Suspense>

            <MainNavigationIndicator />
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
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <TransporteLogistico />
            </Suspense>

            <MainNavigationIndicator />
            <HeroarrowNavigator />
          </Layout>
        }
      />
                 {/* Servicios-Industriales/suministro-de-oxido-de-calcio */}
      <Route
        path="/Servicios-Industriales/suministro-de-oxido-de-calcio"
        element={
          <Layout page="suministro-de-oxido-de-calcio" showVideo={false} logo={siteLogo} brandName="">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-zinc-100" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <OxidodeCalcio />
            </Suspense>

            <MainNavigationIndicator />
            <HeroarrowNavigator />
          </Layout>
        }
      />
      {/* Ruta antigua para compatibilidad */}
      <Route path="/sobre-nosotros" element={<Navigate to="/la-empresa" replace />} />


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
