import React from 'react'
import './Board.css'
function Board() {
  return (
    <div>
      <div className='w-330 h-140  mt-[20px] ml-[20px] rounded-[15px] border-solid border-2 border-[#e6dede] custom'>
        <div className='w-full h-30 border-b-2 border-[#e6dede] flex justify-center items-center text-2xl font-bold'>SCORE BOARD</div>
        <div className='w-full h-110 flex justify-around items-center'>
          <div className='w-150 h-90 bg-[#f5f5f5] rounded-[10px] flex flex-col justify-center items-center border-solid border-2 border-[#e6dede]'>
            <div className='text-lg font-semibold mb-2'>TEAM A</div>
            <div className='text-5xl font-bold'>0</div>
          </div>
          <div className='w-150 h-90 bg-[#f5f5f5] rounded-[10px] flex flex-col justify-center items-center border-solid border-2 border-[#e6dede]'>
            <div className='text-lg font-semibold mb-2'>TEAM B</div>
            <div className='text-5xl font-bold'>0</div>
          </div>
          <div className='w-150 h-90 bg-[#f5f5f5] rounded-[10px] flex flex-col justify-center items-center border-solid border-2 border-[#e6dede]'>
            <div className='text-lg font-semibold mb-2'>TEAM C</div>
            <div className='text-5xl font-bold'>0</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
