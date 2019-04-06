import {Route} from 'react-router';
import Layout from './components/navigation/Layout';
import Home from './components/home/Home';
import * as React from 'react';
import User from './components/user/User';

export default () => (
    <Layout>
        <Route exact path='/' component={Home}/>
        <Route path='/fetch-data/' component={User}/>
    </Layout>
);