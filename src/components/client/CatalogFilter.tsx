"use client";

import { useState } from "react";

export function CatalogFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "All Products" },
    { id: "ESSENTIAL_OIL", label: "Essential Oils" },
    { id: "CARRIER_OIL", label: "Carrier Oils" },
    { id: "ORGANIC_OIL", label: "Organic Oils" },
    { id: "AYURVEDIC", label: "Ayurvedic" },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-sm sticky top-28">
      <h3 className="text-xl font-bold font-serif text-ink mb-6">Categories</h3>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => setActiveCategory(category.id)}
              className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-md scale-[1.02]"
                  : "text-sub hover:bg-white/80 hover:text-ink hover:scale-[1.01]"
              }`}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10 pt-8 border-t border-card/50">
        <h3 className="text-xl font-bold font-serif text-ink mb-6">Format</h3>
        <div className="space-y-4 text-sm font-semibold text-sub">
          <label className="flex items-center space-x-4 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-primary/30 rounded checked:bg-primary checked:border-primary transition-colors cursor-pointer" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="group-hover:text-primary-dark transition-colors">10ml Dropper</span>
          </label>
          <label className="flex items-center space-x-4 cursor-pointer group">
             <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-primary/30 rounded checked:bg-primary checked:border-primary transition-colors cursor-pointer" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="group-hover:text-primary-dark transition-colors">100ml Bottle</span>
          </label>
        </div>
      </div>
    </div>
  );
}
