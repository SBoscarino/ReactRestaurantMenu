import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './Layout.js'
import Desserts from './Desserts.js';
import Appetizers from './Appetizers.js';
import Entrees from './Entrees.js';



class App extends Component {
  constructor(){
    super();

    this.state = {
      allAppetizers: [],
      allEntrees: [],
      allDesserts: []
    }
  }

componentDidMount(){
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => {
    return results.json();
  }).then(data => {
    console.log(data)
    this.setState({allAppetizers: data[0].Appetizers, allEntrees: data[0].Entrees, allDesserts: data[0].Desserts})
  })
}

  render() {
    return (
      <BaseLayout>
        <Appetizers allAppetizers={this.state.allAppetizers} />
        <Entrees allEntrees={this.state.allEntrees} />
        <Desserts allDesserts={this.state.allDesserts} />
      </BaseLayout>
    );
  }
}

export default App;
