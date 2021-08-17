import { Redirect, Route, Switch } from "react-router-dom"
import Content from "../../Pages/Content/Content";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Nav from "../Navbar/Nav";

const Routes = ({user}) =>{
    return(
        <>
            {
                user ? (
                   <>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route exact path="/content" component={Content}/>
                        <Route path="/content/:id" component={Content} />
                        <Redirect to='/' />
                    </Switch>
                   </>
                ) : (
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Redirect to="/login"/>
                    </Switch>
                )
            }
        </>
    )
}

export default Routes;