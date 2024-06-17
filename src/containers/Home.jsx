import React from 'react'

import { Staff } from '../components'

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='bg-gray-100 p-4 rounded-lg w-5/6 h-auto mt-10'>
            <Staff />
        </div>
    </div>
  )
}

export default Home