import cls from './Profile.module.scss'
import { fire } from '../../Services/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {FaRegUserCircle} from 'react-icons/fa'


const Profile = ({onSignOut}) =>{

    const [user] = useAuthState(fire.auth())

    return(
        <>
            <div className={cls.profile} onClick={onSignOut}>
                {
                    user.photoURL ? (
                        <img src={user.photoURL} alt=''/>
                    ) : (
                        <FaRegUserCircle className={cls.icon}/>
                    )
                }
            </div>
        </>
    )
}
export default Profile;

