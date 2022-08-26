import React from 'react';
import './App.css';

//Componentes
import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card'
import Landing from './Componentes/landing'


class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div>
          <NavBar />
        </div>
        <div>
          <Landing />
        </div>
      </div>
    )
  }
}

export default App;
