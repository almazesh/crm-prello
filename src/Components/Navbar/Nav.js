import { Link } from 'react-router-dom'
import cls from './Nav.module.scss'
import { FcTodoList } from 'react-icons/fc'
// import {fire} from '../../Services/Firebase';
import Profile from '../Profile/Profile'
import { fire } from '../../Services/Firebase'

const Nav = () =>{

    const signOut = () =>{
        let ask = window.confirm('Хотите выйти?')
        if(ask){
            fire.auth().signOut()
        }else{
            return
        }
    }

    return(
        <>
            <div className={cls.root}>
                <div className={cls.dFlex}>
                    <Link to='/'><FcTodoList className={cls.icons}/> Prello</Link>


                    <Profile onSignOut={signOut}/>
                    {/* <Signout onSignout={signOut}/> */}
                </div>
            </div>
        </>
    )
}

export default Nav;