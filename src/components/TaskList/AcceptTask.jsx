import React, { useState } from 'react'

const AcceptTask = ({data,handleCompleted,handleFailed,Completed,Failed}) => {
    // console.log(data)
    // console.log(handleCompleted)

    const [status,setStatus] = useState('pending')
    
    function completed(){
        setStatus('Completed')
        const com = Completed + 1
        handleCompleted(com)
        
    }
    function failed(){
        setStatus('Failed')
        const fail = Failed + 1
        handleFailed(fail)
    }

 
    
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            
            {status === 'pending' && (<div className='flex justify-between mt-6 '>
                <button onClick ={completed} className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
            <button  onClick ={failed} className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>) }
            {status === 'Failed' && (
            <div className='mt-5'>
            <button className='w-full bg-red-600 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>)}
            { status === 'Completed' && (
            <div className='mt-5'>
            <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Completed</button>
            </div>)}
            
        </div>
  )
}

export default AcceptTask;