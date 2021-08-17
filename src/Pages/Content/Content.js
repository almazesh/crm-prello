import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cls from './Content.module.scss'
import { useAuthState } from 'react-firebase-hooks/auth';
import { fire } from '../../Services/Firebase';
import { getSingleCard, postSingleCard } from '../../API/index';
import {RiTodoFill } from 'react-icons/ri'
import { MdDoneAll } from 'react-icons/md'
import Done from '../../Components/Done/Done';
import Add from '../../Components/Addtask/Add';
import Modaltask from '../../Components/Modaltask/Modaltask';
import { VscRepo } from 'react-icons/vsc'

const Content = () =>{
    const [user] = useAuthState(fire.auth())
    const id = useParams()
    const newId = Object.entries(id)
    const [base , setBase] = useState([])
    const [modalTask , setModalTask] = useState(false)
    const showModalTask = () => setModalTask(prev => !prev)
    useEffect(() =>{
        getSingleCard(`${user.uid}` , `${newId[0][1]}.json`)
        .then(res => res.json())
        .then(r => {
            const data = Object.entries(r[0]).map(item =>{
                return item
            })

            setBase(data)
        })
    } , [user.uid , newId] )

    const sendSingleTask = ( task , setTask) =>{
        if(task.trim() !== ''){
            postSingleCard(
                {
                    title:task,
                },
                `${user.uid}`,
                `${newId[0][1]}`
            )
            .then(res => res.json())
            .then(r => {
                console.log(r)
                setTask('')
            })
        }

    }

    const content = base.map(item =>{
        return item[1]
    })
    
    


  
    return(
        <>
            <div 
                className={cls.root}
                style={{
                    background:`url(${content[0]}) center / cover`, 
                }}
            >
                <div className={cls.dFlex}>
                    <div className={cls.inline}>
                        <h3 className={cls.tasks}><RiTodoFill className={cls.icon}/> Доска</h3>
                        <h1>{content[1]}</h1>
                    </div>
                    <div style={{width:'200px'}}></div>
                    
                    <Add  onShowModalTask={showModalTask}/>

                </div>
                
                <Modaltask onCloseModal={showModalTask} onAddTask={sendSingleTask} onModalTask={modalTask}/>
            </div>
        </>
    )
}

export default Content;