
import React, { useState, useEffect } from "react";
import Board from "../Board/Board";
import "./carousel.css";
import CategoryScore from "../CategoryScore/CategoryScore";
const Carousel = () => {
  const subjunior=  {
    "category": "Sub Junior",
  "programs": [
    {
      "name": "ഖിറാഅത്ത്‌",
      "score": { "f": "QUBA", "s": "THAIBA", "t": "MINA" }
    },
    {
      "name": "അറബിക് ഗാനം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "അറബിക് കഥപറയല്‍",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഗാനം മലയാളം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "പ്രസംഗം മലയാളം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "മധുര മലയാളം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഇംഗ്ലീഷ് കഥപറയല്‍",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഇംഗ്ലീഷ് ഗദ്യവായന",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഇംഗ്ലീഷ് പദപ്പയറ്റ്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഉര്‍ദു ഗാനം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഉര്‍ദു പ്രസംഗം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഉര്‍ദു ഗദ്യവായന",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഹിഫ്ള്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "അറബിക് പദപ്പയറ്റ്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "മലയാളം കഥപറയല്‍",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "കവിതാലാപനം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "വാങ്ക്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
  ],
  "createdAt": "2025-09-30T17:00:00.000Z"
}
  const senior=  {
    "category": "Senior",
  "programs": [
    {
      "name": "ഖിറാഅത്ത്‌",
      "score": { "f": "QUBA", "s": "THAIBA", "t": "MINA" }
    },
    {
      "name": "ഹിഫ്ള്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "അറബിക് ഗാനം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ഉര്‍ദു ഗാനം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "മാപ്പിളപ്പാട്ട്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "പ്രസംഗം മലയാളം",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "പ്രസംഗം ഇംഗ്ലീഷ്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "പ്രസംഗം അറബിക്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "പ്രസംഗം ഉര്‍ദു",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "ന്യൂസ് റിപ്പോര്‍ട്ടിംഗ്[ENG]",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
    {
      "name": "തസ്വരീഫ്",
      "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
    },
  
  ],
  "createdAt": "2025-09-30T17:00:00.000Z"
}
const super_senior=  {
  "category": "Super Senior",
"programs": [
  {
    "name": "പ്രസംഗം അറബിക്",
    "score": { "f": "QUBA", "s": "THAIBA", "t": "MINA" }
  },
  {
    "name": "പ്രസംഗം മലയാളം",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പ്രസംഗം ഉര്‍ദു",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "വഅള്",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "അറബിക് ഗാനം",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "ഉര്‍ദു ഗാനം",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "ലൈവ്റിപ്പോര്‍ട്ടിംഗ്[ARB]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പാടിപ്പറയല്‍",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പിക്ക് ആന്‍റ് ടോക്[ENG]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "മാപ്പിളപ്പാട്ട്",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "Live Translation[ENG]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പദ്യം ചൊല്ലല്‍[URD]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "PPT[ENG]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "ഖിറാഅത്ത്",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "Announcement",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "ഖുതുബ",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
],
"createdAt": "2025-09-30T17:00:00.000Z"
}
const general=  {
  "category": "General",
"programs": [
  {
    "name": "സംഘഗാനം",
    "score": { "f": "QUBA", "s": "THAIBA", "t": "MINA" }
  },
  {
    "name": "മാലപ്പാട്ട്",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "ഖാസീദ പാരായണം",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "മുഷാഅറ",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "ഖാവ്വാലി",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "മുനാളറ",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "ഗ്രൂപ്പ്‌ ക്വിസ്",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "സംഭാഷണം[ARB]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "സംഭാഷണം[ENG]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പത്രനിര്‍മാണം[MAL]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പത്രനിര്‍മാണം[ARB]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പത്രനിര്‍മാണം[ENG]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
  {
    "name": "പത്രനിര്‍മാണം[URD]",
    "score": { "f": "MINA", "s": "QUBA", "t": "THAIBA" }
  },
],
"createdAt": "2025-09-30T17:00:00.000Z"
}
  // Instead of image URLs, we put React components here
  const slides = [
    <div className="flex items-center justify-center h-[100]">
      <CategoryScore data={subjunior}/>
    </div>,
    <div className="flex items-center justify-center  h-[100]">
      <CategoryScore data={senior}/>
    </div>,
    <div className="flex items-center justify-center h-[100]">
      <CategoryScore data={super_senior}/>
    </div>,
    <div className="flex items-center justify-center h-[100]">
      <CategoryScore data={general}/>
    </div>,
    <div className="flex items-center justify-center h-[100]">
      <Board/>
    </div>,
  ];
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length); 
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
  // Autoplay (30 seconds per slide)
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 9000);

  return () => clearInterval(interval);
}, [slides.length]);
  return (
    <div className="relative w-[80rem] h-[40rem]  mx-auto overflow-hidden rounded-2xl shadow-lg border-2 border-gray-950">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((component, i) => (
          <div key={i} className="w-full flex-shrink-0">
            {component}
          </div>
        ))}
      </div>
      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        ›
      </button>
      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 ">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-black/80" : "bg-black/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;