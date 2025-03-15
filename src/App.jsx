import React, { useState } from 'react'

const App = () => {
  const [color, Setcolor] = useState('#000')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 bg-blue-600 h-20'>
      
          <div className='flex flex-wrap gap-5 '>
         <button onClick={()=>Setcolor("#fff")} className='bg-white m-5 p-2 rounded'>Light</button>
         <button onClick={()=>Setcolor("#000")} className='bg-white m-5 p-2 rounded'>Dark</button>
          </div>
       
      </div>
    </div>
  )
}

export default App