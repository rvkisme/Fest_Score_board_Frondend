import React, { useState, useEffect, useMemo } from "react";
import Board from "../Board/Board";
import CategoryScore from "../CategoryScore/CategoryScore";
import API from "../../api/axios";

import "./carousel.css";

const Carousel = () => {
  // ------------------ All category data ------------------
  const subjunior = {
    category: "Sub Junior",
    programs: [
      { name: "ഖിറാഅത്ത്‌", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "അറബിക് ഗാനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "അറബിക് കഥപറയല്‍", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഗാനം മലയാളം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പ്രസംഗം മലയാളം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "മധുര മലയാളം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഇംഗ്ലീഷ് കഥപറയല്‍", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഇംഗ്ലീഷ് ഗദ്യവായന", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഇംഗ്ലീഷ് പദപ്പയറ്റ്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഉര്‍ദു ഗാനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഉര്‍ദു പ്രസംഗം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഉര്‍ദു ഗദ്യവായന", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഹിഫ്ള്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "അറബിക് പദപ്പയറ്റ്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "മലയാളം കഥപറയല്‍", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "കവിതാലാപനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "വാങ്ക്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
    ],
    createdAt: "2025-09-30T17:00:00.000Z",
  };
  
  const senior = {
    category: "Senior",
    programs: [
      { name: "ഖിറാഅത്ത്‌", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഹിഫ്ള്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "അറബിക് ഗാനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഉര്‍ദു ഗാനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "മാപ്പിളപ്പാട്ട്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പ്രസംഗം മലയാളം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പ്രസംഗം ഇംഗ്ലീഷ്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പ്രസംഗം അറബിക്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പ്രസംഗം ഉര്‍ദു", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ന്യൂസ് റിപ്പോര്‍ട്ടിംഗ്[ENG]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "തസ്വരീഫ്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
    ],
    createdAt: "2025-09-30T17:00:00.000Z",
  };
  
  const super_senior = {
    category: "Super Senior",
    programs: [
      { name: "പ്രസംഗം അറബിക്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പ്രസംഗം മലയാളം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പ്രസംഗം ഉര്‍ദു", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "വഅള്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "അറബിക് ഗാനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഉര്‍ദു ഗാനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ലൈവ്റിപ്പോര്‍ട്ടിംഗ്[ARB]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പാടിപ്പറയല്‍", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പിക്ക് ആന്‍റ് ടോക്[ENG]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "മാപ്പിളപ്പാട്ട്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "Live Translation[ENG]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പദ്യം ചൊല്ലല്‍[URD]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "PPT[ENG]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഖിറാഅത്ത്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "Announcement", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഖുതുബ", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
    ],
    createdAt: "2025-09-30T17:00:00.000Z",
  };
  
  const general = {
    category: "General",
    programs: [
      { name: "സംഘഗാനം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "മാലപ്പാട്ട്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഖാസീദ പാരായണം", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "മുഷാഅറ", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഖാവ്വാലി", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "മുനാളറ", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "ഗ്രൂപ്പ്‌ ക്വിസ്", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "സംഭാഷണം[ARB]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "സംഭാഷണം[ENG]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പത്രനിര്‍മാണം[MAL]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പത്രനിര്‍മാണം[ARB]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പത്രനിര്‍മാണം[ENG]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
      { name: "പത്രനിര്‍മാണം[URD]", score: { f: 100, s: 200, t: 300 }, grade: { A: "A", B: "B" } },
    ],
    createdAt: "2025-09-30T17:00:00.000Z",
  };
  
  // --------------------------------------------------------

  const [scores, setScores] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch scores from API
  useEffect(() => {
    API.get("/getScore")
      .then((res) => setScores(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Slides (memoized)
  const slides = useMemo(
    () => [
      <div className="flex items-center justify-center h-full">
        <CategoryScore data={subjunior} />
      </div>,
      <div className="flex items-center justify-center h-full">
        <CategoryScore data={senior} />
      </div>,
      <div className="flex items-center justify-center h-full">
        <CategoryScore data={super_senior} />
      </div>,
      <div className="flex items-center justify-center h-full">
        <CategoryScore data={general} />
      </div>,
      <div className="flex items-center justify-center h-full">
        {scores.length > 0 ? (
          <Board scores={scores} />
        ) : (
          <p className="text-lg font-semibold">Loading scores...</p>
        )}
      </div>,
    ],
    [scores]
  );

  // Autoplay (30s per slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-[80rem] h-[38rem] mt-5 mx-auto overflow-hidden rounded-2xl shadow-lg border-2 border-gray-950">
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
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-black/80" : "bg-black/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
