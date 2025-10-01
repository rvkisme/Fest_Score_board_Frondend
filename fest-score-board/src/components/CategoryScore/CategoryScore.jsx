import React from "react";

function CategoryScoreGrid({ data }) {
  // Assume data.programs is already an array
  const programs = data.programs || [];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] font-semibold mt-[5px] mb-[50px]">
        {data.category}
      </h1>
      <div className="grid grid-cols-5 gap-6">
        {programs.map((program, i) => (
          <div
            key={i}
            className="w-[230px] h-[100px] bg-[#f5f5f5] rounded-[10px] flex flex-col items-center justify-center border-2 border-[#e6dede]"
          >
            <div className="text-[15px] font-semibold">{program.name}</div>
            <div className="text-[12px] font-bold">1st: {program.score?.f}</div>
            <div className="text-[12px] font-bold">2nd: {program.score?.s}</div>
            <div className="text-[12px] font-bold">3rd: {program.score?.t}</div>
          </div>
        ))}
      </div>    
    </div>
  );
}

export default CategoryScoreGrid;
