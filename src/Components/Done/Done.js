import './Done.scss'
import { useEffect, useState } from 'react';
import { getSingleFinish } from '../../API';
import { useAuthState } from 'react-firebase-hooks/auth';
import { fire } from '../../Services/Firebase';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading'
const Done = ({title , icon , long , onBase  ,onSend}) =>{
    const [base , setBase] = useState(null)
    const [user] = useAuthState(fire.auth())
    const id = useParams()
    const newId = Object.entries(id)

    useEffect(() =>{
        const data = onBase.map(item =>{
            getSingleFinish(
                `${user.uid}`,
                `${newId[0][1]}`,
                `${item.id}`
            )
            .then(res => res.json())
            .then(r => {
                if(r){
                    const dataId = Object.entries(r).map(item =>{
                        return item[1]
                    })

                    setBase(dataId)
                }else{
                    setBase([])
                }
            })
        })

    } , [user.uid, newId, onSend])


    return (
        <>  
            <div className='done'>
                <div style={long} className='cardDone'>
                    <h4 >{title} <p>{icon}</p></h4>
                </div>
                <div className='cardBody'>
                    <div className='cardContent'>
                    {
                       base?.length === 0 ? (
                           <i className='doneCenter'>Empty</i>
                       ) : base ? (
                            base.map(item =>{
                                console.log(item)
                                return(
                                   <div key={item.id}>
                                        <p>{item.title}</p>
                                   </div>

                                )
                            })
                       ) : (
                           <div className="doneCenter"><Loading /></div>
                       )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Done;