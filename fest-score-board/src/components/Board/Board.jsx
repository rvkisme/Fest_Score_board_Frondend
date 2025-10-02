import React from "react";
import "./Board.css";
function Board({scores = []}) {
    const scoreData = scores
    
    return (
        <div className="w-full h-auto flex items-center justify-center ">
            <div className="w-full max-w-[330px] md:max-w-[500px] mt-5 ml-5 rounded-[15px] border-2 border-[#e6dede] custom">
                <div className="w-full h-30 border-b-2 border-[#e6dede] flex justify-center items-center text-2xl font-bold">
                    GRAND TOTAL
                </div>
                <div className="w-full h-110 flex justify-around items-center p-1 ">
                    {scoreData.map((data, index) => (
                        <div
                            key={index}
                            className="w-[90px] sm:w-[120px] md:w-[150px] h-[8`0px] sm:h-[100px] md:h-[120px] bg-[#f5f5f5] rounded-[10px] flex flex-col justify-center items-center border-solid border-2 border-[#e6dede]"
                        >
                            <div className="text-lg font-semibold mb-2">{data.team}</div>
                            <div className="text-5xl font-bold">{data.score}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;

