import './Account.css'
import {fire} from '../../Services/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import {AiOutlineUser} from 'react-icons/ai'


const Account = () =>{

    const [user] = useAuthState(fire.auth())
    

    return(
        <>
            <div className='acc'>
                <h2><AiOutlineUser className='user'/>{user.displayName}</h2>
            </div>
        </>
    )
}

export default Account;