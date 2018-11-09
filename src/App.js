import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './courses';

import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

//creates instance of apollo client with endpoint for queries
const client = new ApolloClient({
    uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});



//wrap app in appollo provider - to connect intance of apollo client 

class App extends Component {

    componentDidMount() {
        window.introAnimation()
    }
  render() {
      return (
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
                    
                      <Courses /> 
                  </header>
                 
              </div>
     </ApolloProvider>
    );
  }
}

export default App;
