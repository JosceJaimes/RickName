import React, { Component } from 'react';
import './App.css';
import CharacterList from './Componentes/CharacterList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CharacterList />
        </header>
      </div>
    );
  }
}

export default App;