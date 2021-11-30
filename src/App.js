import React from 'react';

import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {setCurrentUser} from './components/redux/user/actions';

import { auth , createUserProfileDocument} from './firebase/firebase.utils';

import { selectCurrentUser } from './components/redux/user/user.selectors';

import { HomePage } from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignUpSignIn from './pages/sign-up-sign-in/sign-up-sign-in';
import Checkout from './pages/checkout/checkout';


class App extends React.Component{



  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {

    const { currentUser} = this.props;

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={ <HomePage />} />
          <Route path='shop/*' element={ <Shop />} />
          <Route exact path='signin' element={ currentUser ? (<Navigate to='/' />) : (<SignUpSignIn />)} />
          <Route exact path='checkout' element={ <Checkout />} />
        </Routes>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
