import './App.css';

import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage';
import Shop from './pages/shop/shop';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/shop' element={ <Shop />} />
      </Routes>

    </div>
  );
}

export default App;
