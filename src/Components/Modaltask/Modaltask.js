import './Modaltask.scss'
import Draggable  from 'react-draggable';
import {MdLibraryAdd} from 'react-icons/md'
import { useState } from 'react';
const Modaltask = ( {onModalTask , onAddTask ,onCloseModal} ) =>{
    
    const [send , setSend] = useState('')
    

    return(
        <>
            <Draggable>
                <div className={onModalTask ? 'modalTask active' : 'modalTask'}>
                    <div className='addInput'>
                        <input type='text' onChange={(e) => setSend(e.target.value)} placeholder="Add the task" />
                        <MdLibraryAdd className='iconMD' onClick={() =>{
                            onAddTask( send , setSend)
                            onCloseModal()
                        }}/>
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default Modaltask;