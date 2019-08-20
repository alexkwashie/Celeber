import React from 'react';
import './App.css';

class App extends React.Component{
//Use constructor to set states
  constructor(){
    super(); //Use this to allow states to be used in the application

    this.state = {
      celebs: [

      ]
    };

  }


  componentDidMount(){ //this is from the React.Component lifecycle
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({celebs: users})) //adds data to celebs object
  }



  render() {
    return (
      <div className="App">
        {
          this.state.celebs.map( indv =>
              <h1 key={indv.id}>{indv.name}</h1> //Use 'key={??}' to differentiat between each name
          )
        }
    </div>
    )
  }
}

export default App;
