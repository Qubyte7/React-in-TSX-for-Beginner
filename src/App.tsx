import React from 'react';
import './App.css';
import {Person} from './Components/Person'
import { Countries } from './Components/Person';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Provider } from 'react-redux';
import { Store } from './Store';


function App() {
  return (
    <div>
      <Provider store={Store}> 
      {/* this works like AppContext and Value here is represented by store */}
      <Router >
      <h5><Person name="Innocent" email="tearracy@gmail.com" age={12} isMarried={true} friend={["kayumba","ettiene","terry"]} country={Countries.canada}/></h5>
        <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
