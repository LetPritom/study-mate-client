import React from 'react'

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-18 w-10/12 mx-auto'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className='flex flex-col gap-4'>
          <div className='skeleton h-62 w-52'></div>
          <div className='skeleton h-2 w-18'></div>
          <div className='skeleton h-2 w-18'></div>
          <div className='skeleton h-2 w-22'></div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader