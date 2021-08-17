import cls from './Addbase.module.scss'
import { useEffect, useState } from 'react'
import CreateButton from '../../Components/CreateButton/CreateButton'
import Modal from '../../Components/Modal/Modal'
import { Link } from 'react-router-dom'
import { postCard } from '../../API'
import { useAuthState } from 'react-firebase-hooks/auth';
import { fire } from '../../Services/Firebase';
import { getCard } from '../../API/index';
import {CgSmileSad} from 'react-icons/cg'
import Loading from '../../Components/Loading/Loading'

// const card = [
//     {
//         id:1,
//         title:'Frontend-300',
//         background:'https://wallpaperaccess.com/full/334517.jpg'
//     },
//     {
//         id:2,
//         title:'Frontend-400',
//         background:'https://wonderfulengineering.com/wp-content/uploads/2016/02/blue-wallpaper-25.jpg'
//     },

//     {
//         id:3,
//         title:'My future',
//         background:'https://wallpapercave.com/wp/wp8594976.jpg'
//     },
//     {
//         id:4,
//         title:'Todo',
//         background:'https://cdn.wallpapersafari.com/81/97/5OyBDR.jpg'
//     },
//     {
//         id:5,
//         title:'Todo',
//         background:'https://cdn.wallpapersafari.com/81/97/5OyBDR.jpg'
//     },
//     {
//         id:6,
//         title:'Todo',
//         background:'https://cdn.wallpapersafari.com/81/97/5OyBDR.jpg'
//     },
//     {
//         id:7,
//         title:'Todo',
//         background:'https://cdn.wallpapersafari.com/81/97/5OyBDR.jpg'
//     },

// ]

const Addbase = () =>{
    const [user] = useAuthState(fire.auth())
    const [base , setBase] = useState(null)
    const [text ,setText] = useState('')
    const [modal , setModal] = useState(false)


    useEffect(() =>{
        getCard(`${user.uid}.json`)
        .then(res => res.json())
        .then(r => {    
              if(r){
                const data = Object.entries(r).map(item =>{
                    const id = item[0];
                    return {
                        ...item[1][0] ,
                        id
                    }
                })
                setBase(data)
              }else{
                setBase([])
            }
        })
    }, [user.uid , text  ])

    const showModal = () => {
        setModal(prev => !prev)
    }
    const addTask = ( input , img , setInp , setIm ) =>{
        if(input !== '' && img !== ''){
            postCard(
                [{
                    title:input,
                    background:img
                }],
               `${user.uid}.json`
   
           )
           .then(res => res.json())
           .then(r => {
               console.log(r)
               setIm('')
               setInp('')
               setText(r)
            })
        }else{
            alert('Заполните поля!')
        }

    }
    

    
    return(
        <>
            <div className={cls.root}>
                <h1 >Добавление пространства</h1>

                <div className={cls.dFlex}>
                    <div className={cls.leftSide}>
                        <CreateButton onCreate={showModal} />
                    </div>
                    <div className={cls.rightSide}>
                        <div className={cls.row}>
                            {
                                base?.length === 0 ? (
                                    <p><CgSmileSad className={cls.centerIcon}/> Its empty. Add the task for start a work! </p>
                                ) : base ? (
                                    base.map(item =>{
                                        return (
                                            <Link to={`/content/${item.id}`}>
                                                <div    
                                                    key={item.id}
                                                    className={cls.cards}
                                                    style={{
                                                        background:`url("${item.background}") `,backgroundSize: "cover",
                                                        backgroundPosition: "center"
                                                    }}
                                                >
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </Link>
                                        )
                                    })
                                ) : (
                                   <div className={cls.centerLoading}>
                                        <Loading />
                                   </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <Modal addNewCard={addTask} onShow={showModal} onStyle={modal}/>
            </div>
        </>
    )
}

export default Addbase;