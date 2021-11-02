import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PasswordRecoverySentEmail from '../pages/PasswordRecoverySentEmail';
import MyOrder from '../pages/MyOrder';
import NewPassword from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import MyOrders from '../pages/MyOrders';
import MyAccount from '../pages/MyAccount'
import '../styles/global.css';


const App = () => {
    return (
        <BrowserRouter>
       
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/my-account' component={MyAccount}/>
                <Route exact path='/my-orders' component={MyOrders}/>
                <Route exact path='/create-account' component={CreateAccount}/>
                <Route exact path='/my-order' component={MyOrder}/>
                <Route exact path='/new-password' component={NewPassword}/>
                <Route exact path='/password-recovery-sent-email' component={PasswordRecoverySentEmail}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        </Layout>
        
        </BrowserRouter>
        
    );
}

export default App;