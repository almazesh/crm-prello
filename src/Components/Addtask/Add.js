import {RiCalendarTodoFill} from 'react-icons/ri'
import {FcAddDatabase } from 'react-icons/fc'
import { useEffect, useState } from 'react'
import './Add.scss'
import Draggable  from 'react-draggable';
import { useAuthState } from 'react-firebase-hooks/auth';
import { fire } from '../../Services/Firebase';
import { useParams } from 'react-router';
import { getSingleTaskCard, postFinishCard } from '../../API';
import Loading from '../Loading/Loading';
import {CgSmileSad } from 'react-icons/cg'
import { AiOutlineFileDone , AiFillDelete } from 'react-icons/ai'
import { VscRepo } from 'react-icons/vsc'
import Done from '../Done/Done';
import {MdDoneAll} from 'react-icons/md'


const Add = ( {onShowModalTask } ) =>{
    const [base , setBase] = useState(null)
    const [status , setStatus] = useState(() => {
        return ( <VscRepo className='doIcon'/> )
    })
    const [user] = useAuthState(fire.auth())
    const id = useParams()
    const newId = Object.entries(id)
    const [taskId , setTaskId] = useState([])
    const [text , setText] = useState('')
    useEffect(() =>{
        getSingleTaskCard(
            `${user.uid}`,
            `${newId[0][1]}`
        )
        .then(res => res.json())
        .then(r => {
            if(r){
                const data = Object.entries(r).map(item =>{
                    const id = item[0]
                    return {
                        ...item[1],
                        id
                    }
                })
                setBase(data)
                setTaskId(data)
            }else{
                setBase([])
                setTaskId([])
            }

        })
    } , [ user.uid  ,newId  , text])
 

    const finish = (id) =>{
        const data = base.map(item =>{
            if(item.id === id){
                postFinishCard(
                    {
                        id:item.id,
                        title:item.title
                    },
                    `${user.uid}`,
                    `${newId[0][1]}`,
                    `${item.id}`
                    
                    
                )
                .then(res => res.json())
                .then(r => {
                    setText(r)
                })
            }
        })

        
    }
    return( 
        <>
            <div className='done2'>
                <div className='cardDone2'>
                    <div className='add'  onClick={onShowModalTask}>
                        <FcAddDatabase className='addIcon'/>
                    </div>
                    <h4>Задача <RiCalendarTodoFill className='taskIcon'/></h4>
                   
                </div>
                <div className='cardBody2'>
                    <div className='scroll'>
                        <div className='contentTask'>
                            {
                                base?.length === 0 ? (
                                    <p><CgSmileSad className='centerIcon'/></p>
                                ) : base ? (
                                        base.map(item =>{
                                            return(
                                            <Draggable key={item.id}>
                                                    <div    className='taskCard'>
                                                        <h3>{item.title}</h3>
                                                            
                                                        <div className='taskContent'>
                                                            <div>   
                                                                {status}
                                                            </div>

                                                            <AiOutlineFileDone className='doneIcon' 
                                                             onClick={() =>{
                                                                finish(item.id)
                                                             }}   
                                                            />
                                                            <AiFillDelete className='deleteIcon' />
                                                        </div>
                                                    </div>
                                            </Draggable>
                                            )
                                        })
                                ) : (
                                <div className='centerLoading'>
                                        <Loading />
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Done onSend={text} onBase={taskId} title='Выполнено' icon={<MdDoneAll />}/>
        </>
    )
}

export default Add;