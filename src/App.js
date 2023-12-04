import React from 'react';
import Indexpage from './components/pages/Indexpage';
import AddProductform from './components/pages/addProductform';
import AddTiendaform from './components/pages/addTiendaform';
import Login from './components/pages/login';
import UserProfile from './components/userProfile';
import UpdateProduct from './components/pages/updateProduct';
import {
  browserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Indexpage />} />
          <Route path="/addProduct" element= {<AddProductform />}/>
          <Route path="/updateProduct" element= {<UpdateProduct />}/>
          
          <Route path="/addTienda" element= {<AddTiendaform />}/>
          <Route path="/login" element= {<Login />}/>
          <Route path="/user" element= {<UserProfile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
