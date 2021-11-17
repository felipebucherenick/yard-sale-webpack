import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import PasswordRecoverySentEmail from '@pages/PasswordRecoverySentEmail';
import NewPassword from '@pages/NewPassword';
import CreateAccount from '@pages/CreateAccount';
import MyAccount from '@pages/MyAccount';
import MyAccountEdit from '../pages/MyAccountEdit';
import MyOrders from '@pages/MyOrders';
import MyOrder from '@pages/MyOrder';
import NotFound from '@pages/NotFound';

import '@styles/Global.scss';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/password-recovery" component={PasswordRecovery} />
            <Route
              exact
              path="/password-recovery-sent-email"
              component={PasswordRecoverySentEmail}
            />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/my-account" component={MyAccount} />
            <Route exact path="/my-account-edit" component={MyAccountEdit} />
            <Route exact path="/my-orders" component={MyOrders} />
            <Route exact path="/my-order" component={MyOrder} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
