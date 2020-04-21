import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Pages
import {FormPage} from './Pages/FormPage.js';
import { DetailPage } from './Pages/DetailPage.js';

// Styles
import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={FormPage}/>
        <Route path='/detail/:id' component={DetailPage}/>
      </Switch>
    </div>
  );
}

export default App;
