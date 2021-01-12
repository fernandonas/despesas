import React from 'react'
import { Route, Switch} from 'react-router-dom'
import SignIn from '../Pages/SignIn/teste'

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path="/" component={SignIn}/>
    </Switch>
)

export default AuthRoutes;
