import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {setCurrentUser} from './components/redux/user/actions';

import { auth , createUserProfileDocument} from './firebase/firebase.utils';


import { HomePage } from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignUpSignIn from './pages/sign-up-sign-in/sign-up-sign-in';
import React from 'react';

class App extends React.Component{



  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;
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
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/signin' element={ this.props.currentUser ? (<Navigate to='/' />) : (<SignUpSignIn />)} />
        </Routes>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
