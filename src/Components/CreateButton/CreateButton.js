import './CreateButton.css'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'

const CreateButton = ({onCreate}) =>{
    return(
        <>
            <div className='addCard' onClick={onCreate} >
                <h4 >Создать доску <AiOutlineAppstoreAdd/></h4>
            </div>
        </>
    )
}

export default CreateButton;