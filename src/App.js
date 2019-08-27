import React from 'react';
import {CardList} from './components/card-list/card-list.components';
import './App.css' ;
import {SearchBox} from './components/search-box/search-box.components';

class App extends React.Component{
//Use constructor to set states
  constructor(){
    super(); //Use this to allow states to be used in the application

    this.state = {
      celebs: [
        //from ComponentDidMount(), users are adde here
        //and (this.state.celebs) renders it to the page
      ],
      searchField:''


    };

  }


  componentDidMount(){ //this is from the React.Component lifecycle and it runs after the page has loaded
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({celebs: users})) //adds data to celebs object
  }



  render() {
    //#the return only shows the final output of what we want, so any other code work should be done outside of it

    //Assign values to this.state's  objects to use in this render() function;
  const celebs = this.state.celebs;
  const searchField = this.state.searchField;
  //better still easier way is of assiginmenr : const {Celebs, SearchField} = this.state

  const filteredCelebs = celebs.filter(indv =>
      indv.name.toLowerCase().includes(searchField.toLowerCase()) //this shows celebs name that includes whats in the search field
    );


    return (
      <div className="App">
        <h1>Celeber Stars</h1>
          <SearchBox
            placeholder = 'search celebs'
            handleChange = {e => this.setState({searchField : e.target.value})}
        />  {/*onChange, updates when there is a change in the text field and shows current input
                it also, recalls the render function which runs all code from the top
                */}

        <CardList celebs = {filteredCelebs}/>
    </div>
    )
  }
}

export default App; 
