import './App.css';

import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignUpSignIn from './pages/sign-up-sign-in/sign-up-sign-in';

function App() {
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

export default App;
