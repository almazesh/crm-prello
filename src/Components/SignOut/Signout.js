import {FaSignOutAlt} from 'react-icons/fa'
import './Signout.css'

const Signout = ({onSignout}) =>{
    return(
        <>
            <div className='signout'>
                 <button onClick={onSignout}><FaSignOutAlt/></button>
            </div>
        </>
    )
}
export default Signout;