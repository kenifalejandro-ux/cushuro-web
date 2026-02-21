// client/src/App.tsx

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/layout";
import { ScrollIndicator } from "./components/global/ScrollIndicator";
import logoZincel from "@/assets/logo-zincel-black.svg";
import { PortfolioProgressIndicator } from "./components/global/PortfolioProgressIndicator";
import { MainNavigationIndicator } from "./components/global/MainNavigationIndicator";
import { PortfolioArrowNavigator } from "./components/global/PortfolioArrowNavigator";
import { HeroarrowNavigator } from "./components/global/HeroarrowNavigator";
import PageTransition from "./components/global/PageTransition";

const siteLogo = import.meta.env.VITE_IMG_URL
  ? `${import.meta.env.VITE_IMG_URL}/img/logo/logo-caldera-cushuro.png`
  : logoZincel;


// Lazy imports
const Inicio = lazy(() => import("./components/Paginas/inicio"));
const Servicios = lazy(() => import("./components/Paginas/Servicios"));
const Portfolio = lazy(() => import("./components/Paginas/Portfolio"));
const SobreNosotros = lazy(() => import("./components/Paginas/sobre-nosotros"));
const PreciosWeb = lazy(() => import("./components/Paginas/precios-web"));
const PuertaDelValle = lazy(() => import("./components/Paginas/puerta-del-valle"));
const IntiPintay = lazy(() => import("./components/Paginas/inti-pintay"));
const TiestoCoffee = lazy(() => import("./components/Paginas/tiesto-coffee"));
const Bkars = lazy(() => import("./components/Paginas/bkars"));
const Experiencias = lazy(() => import("./components/Paginas/experiencias"));


// Lazy imports - submenú servicios
const DesarrolloWeb = lazy(() => import("./components/Paginas/desarrolloweb"));
const DisenoUIUX = lazy(() => import("./components/Paginas/disenouiux"));
const Branding = lazy(() => import("./components/Paginas/branding"));
const Modelado3D = lazy(() => import("./components/Paginas/modelado3d"));

// Hooks

import { useGTMPageView } from "./hooks/useGTMPageView";
import useParallaxEffect from "./hooks/useParallaxEffect";

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

      {/* SERVICIOS */}
      <Route
        path="/Servicios"
        element={
          <Layout page="servicios" showVideo logo={siteLogo} brandName="">
             <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-emerald-300" />
            </div>
            <Servicios />
            <MainNavigationIndicator />
            <HeroarrowNavigator />
          </Layout>
        }
      />
    {/* servicios/desarrolloweb */}
      <Route
        path="/servicios/desarrollo-web"
        element={
          <Layout page="desarrolloweb" showVideo={false} logo={siteLogo} brandName="">
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-amber-500" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <DesarrolloWeb />
              </Suspense>
            
            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />
       {/* servicios/disenouiux */}
      <Route
        path="/servicios/diseno-ui-ux"
        element={
          <Layout page="disenouiux" showVideo={false} logo={siteLogo} brandName="">
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-amber-500" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <DisenoUIUX />
              </Suspense>
            
            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />

       {/* servicios/branding */}
      <Route
        path="/servicios/branding"
        element={
          <Layout page="branding" showVideo={false} logo={siteLogo} brandName="">
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-amber-500" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <Branding />
              </Suspense>
            
            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />

 {/* servicios/Modelado3D */}
      <Route
        path="/servicios/modelado-3d"
        element={
          <Layout page="modelado3D" showVideo={false} logo={siteLogo} brandName="">
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-amber-500" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <Modelado3D />
              </Suspense>
            
            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />

      {/* PORTFOLIO */}
      <Route
        path="/Portfolio"
        element={
          <Layout page="portfolio" showVideo logo={siteLogo} brandName="">
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-cyan-500"/>
            </div>
            <Portfolio />
            <MainNavigationIndicator />
            <HeroarrowNavigator />
          </Layout>
        }
      />

      {/* SOBRE NOSOTROS */}
      <Route
        path="/sobre-nosotros"
        element={
          <Layout page="sobrenosotros" showVideo={false} logo={siteLogo} brandName="">
             <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-yellow-400" />
            </div>
            <SobreNosotros />
            <MainNavigationIndicator />
            <HeroarrowNavigator />
             
          </Layout>
        }
      />

       {/* PRECIOS WEB */}
      <Route
        path="/precios-web"
        element={
          <Layout page="precios-web" showVideo={false} logo={siteLogo} brandName="">
             <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-white" />
            </div>
            <PreciosWeb />
            <MainNavigationIndicator />
            <HeroarrowNavigator />
             
          </Layout>
        }
      />

      {/* EXPERIENCIAS */}
      <Route
        path="/experiencias"
        element={
          <Layout 
          page="experiencias" 
          showVideo={false} 
          logo={siteLogo} 
          hideNavs={true} /*// <--- Oculta Navbar y HeroHeader para esta página*/
          brandName="Zincel"
          
          >
             <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-white" />
            </div>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <Experiencias />
            </Suspense>
            
          </Layout>
        }
      />


      {/* ===================== */}
      {/* SUBPÁGINAS PORTFOLIO */}
      {/* ===================== */}

      <Route
        path="/Portfolio/puerta-del-valle"
        element={
          <Layout page="puerta-del-valle" showVideo={false} logo={siteLogo} brandName="">
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-amber-500" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <PuertaDelValle />
              </Suspense>
            
            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />

      <Route
        path="/Portfolio/tiesto-coffee"
        element={
          <Layout page="tiesto-coffee" showVideo={false} logo={siteLogo} brandName="">
               <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-red-700" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <TiestoCoffee />
              </Suspense>
          

            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />

      <Route
        path="/Portfolio/inti-pintay"
        element={
          <Layout page="inti-pintay" showVideo={false} logo={siteLogo} brandName="">
               <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-yellow-400" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <IntiPintay />
              </Suspense>
           

            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />


      <Route
        path="/Portfolio/bkars"
        element={
          <Layout page="bkars" showVideo={false} logo={siteLogo} brandName="">
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <ScrollIndicator color="text-amber-600" />
            </div>
              <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
                <Bkars />
              </Suspense>
          

            <PortfolioProgressIndicator />
            <PortfolioArrowNavigator />
          </Layout>
        }
      />
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
