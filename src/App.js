import React from 'react';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap'
import MainComponent from './Components/MainComponent'
import {BrowserRouter,Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './Redux/rootReducer'
import thunk from 'redux-thunk'
function App() {
  return (
    <div>
      <Provider store={createStore(rootReducer,applyMiddleware(thunk))}>
      <BrowserRouter>
    <MainComponent/>
    </BrowserRouter>
    </Provider>

    
    </div>
  );
}

export default App;
