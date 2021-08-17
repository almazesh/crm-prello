import cls from './Login.module.scss'
import {FaRegUserCircle} from 'react-icons/fa'
import {fire , googleProvider} from '../../Services/Firebase'
const Login = () =>{

    const signInWithGoogle = (e) =>{

        fire.auth().signInWithPopup(googleProvider)
        .then(res => res.json())
        .then(r => console.log(r))
    }

    return(
        <>
           <div className={cls.root}>
                <div className={cls.leftHidden}>
                    <div className={cls.leftSide}>

                    </div>
                </div>
                <div className={cls.rightSide}>
                    <div className={cls.card}>
                        <div className={cls.cardContent}>
                            <FaRegUserCircle  className={cls.icon}/>
                            <input type='email' placeholder="Email *"/>
                            <input type='password' placeholder="Password *"/>
                            <button>Login</button>
                            <h5 onClick={signInWithGoogle}>Log with Google</h5>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Login;