import './Modal.css'
import { useState } from 'react';

const Modal = ({onStyle , onShow  , addNewCard}) =>{
    
    const [input , setInput] = useState('')
    const [img , setImg] = useState('')
    
    return (
        <>  
            <div className={onStyle ? 'modal active' : 'modal'}>
                 <div className='dFlex'>
                    <div>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Добавьте заголовок доски"/>
                        <input onChange={(e) => setImg(e.target.value)} value={img} type="text" placeholder="Добавьте тему доски"/>
                    </div>

                    <span onClick={onShow}>&times;</span>
                 </div>
                 <button onClick={() =>{
                     addNewCard(input  , img , setInput , setImg)
                     onShow()
                 }}>Создать доску</button>
            </div>
        </>
    )
}

export default Modal;