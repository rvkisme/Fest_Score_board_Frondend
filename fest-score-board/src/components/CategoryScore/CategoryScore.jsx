import React from "react";

function CategoryScoreGrid({ data }) {
  // Assume data.programs is already an array
  const programs = data.programs || [];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold mt-[3px] mb-[30px]">
        {data.category}
      </h1>
      <div className="grid grid-cols-5 gap-3">
        {programs.map((program, i) => (
          <div
            key={i}
            className="w-[230px] h-[120px] bg-[#f5f5f5] rounded-[10px] flex flex-col items-center justify-center border-2 border-[#e6dede]"
          >
            <div className="text-[15px] font-semibold">{program.name}</div>
            <div className="text-[12px] font-bold mr-[8rem]">1st:{program.score?.f}&nbsp;&nbsp;&nbsp;&nbsp;{program.grade?.A}</div>
            <div className="text-[12px] font-bold mr-[8rem]">2nd:{program.score?.s}</div>
            <div className="text-[12px] font-bold mr-[8rem]">3rd:{program.score?.t}</div>
            <div className="text-[12px] font-bold mr-[8rem]">Grade A:{}</div>
            <div className="text-[12px] font-bold mr-[8rem]">Grade B:{program.grade?.B}</div>
          </div>
        ))}
      </div>    
    </div>
  );
}

export default CategoryScoreGrid;
