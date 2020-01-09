import React from 'react';
import './App.css';
import Board from './components/Board'
import Title from './components/Title'
import Instructions from './components/Instructions'
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
      return (
        <main>
          <Route path='/' exact component={Title} />
          <Route path='/game' component={Board} />
          <Route path='/instructions' component={Instructions} />
        </main>
      )
  }
}

export default App;