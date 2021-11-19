import './App.css';

import { Route, Routes } from 'react-router-dom';

import { auth } from './components/firebase/firebase.utils';

import { HomePage } from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignUpSignIn from './pages/sign-up-sign-in/sign-up-sign-in';
import React from 'react';

class App extends React.Component{

  constructor() {
    super()

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser : user })
      console.log(user)
    })
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
          <Route path='/signin' element={ <SignUpSignIn />} />
        </Routes>
  
      </div>
    );
  }

}

export default App;
