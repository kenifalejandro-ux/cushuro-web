import { Menu, X, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { PrincipalCase } from "../../data/PrincipalCase";

export const ExperienciasHamburgerNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  if (!PrincipalCase || PrincipalCase.length === 0) return null;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed top-6 right-6 z-[60]">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="w-12 h-12 rounded-full bg-zinc-900/90 text-white border border-white/10 shadow-lg flex items-center justify-center hover:bg-zinc-800 transition-colors"
          aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {open && (
          <div className="mt-3 w-72 rounded-2xl bg-zinc-950/95 border border-white/10 shadow-2xl p-3">
            <div className="px-3 pb-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Navegación
            </div>
            <div className="space-y-2">
              {PrincipalCase.map((section) => (
                <NavLink
                  key={section.id}
                  to={section.path}
                  className={({ isActive }) =>
                    [
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                      isActive ? "bg-white text-zinc-900" : "text-white/80 hover:bg-white/10",
                    ].join(" ")
                  }
                >
                  <span>{section.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
