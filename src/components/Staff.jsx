import React, { useEffect, useState } from 'react'

const BlankCell = ({ isLine }) => {
  return (
    <div className=' bg-gray-300 hover:bg-slate-700 w-10 h-4  flex justify-center items-center'>
        {isLine && <div className='w-full h-0.5 bg-black'></div>}
    </div>
  )
}

const Staff = () => {
  return (
    <div>
        {Array.from({length: 9}, (_, i) => i).map((row) => {
            return (
                <div key={row} className='flex'>
                    {Array.from({length: 9}, (_, i) => i).map((cell, index) => {
                        console.log(row);
                        return (
                            <BlankCell key={index} isLine={row % 2 === 0} />
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Staff