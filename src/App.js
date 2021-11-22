import './App.css';

import { Route, Routes } from 'react-router-dom';

import { auth , createUserProfileDocument} from './firebase/firebase.utils';


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
