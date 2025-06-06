import React, { useContext, useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
    // const [userData, setUserData] = useContext(AuthContext)
    
    const [completed,setCompleted] = useState(data.taskCount.completed)
    const [failed,setFailed] = useState(data.taskCount.failed)
    // const handleCompleted=()=>{
    //     const data = userData
    //     console.log(data)
    //     data.taskCount.completed =data.taskCount.completed + 1
    //     setUserData(data)
    // }
    // const handleFailed=()=>{
    //     const data = userData
    //     console.log(data)
    //     data.taskCount.failed =data.taskCount.failed + 1
    //     setUserData(data)
    // }
    // handleCompleted('hii')
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} handleCompleted={setCompleted} handleFailed={setFailed} Completed={completed} Failed={failed}/>
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList;