import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data.json';
import Marker from './components/Marker';
import Infopicker from './components/Infopicker';
import LoggedInHeader from './components/LoggedInHeader';
import axios from 'axios';


class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      locations: data.locations,
      searchFieldString: "",
      usernameString: "",
      passwordString: "",
      loggedIn: false,
      loggingIn: false,
      registering: false
    }
  }

  


  onSearchFieldChange = (event) => {
    this.setState({searchFieldString: event.target.value})
  }

  onUsernameChange = (event) => {
    this.setState({usernameString: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({passwordString: event.target.value})
  }

  //user dude, pass 12345
  ProcessLogin = () => {
    axios.post('http://localhost:4000/login', 
                {},
                { auth: {
                  username: this.usernameString,
                  password: this.state.passwordString
                }})
      .then(response => {
        console.log('login success');
        this.setState({loggedIn: true, loggingIn: false})
        
      })
      .catch(error => console.log(error));
  }

  render()
  {
    let view = 
      <>
      <input type="text" className="searchbar" onChange={this.onSearchFieldChange} value={this.state.searchFieldString} />
      <Header />
      <Marker locations={this.state.locations.filter((location) => location.name.includes(this.state.searchFieldString))}/>
      <Infopicker locations={this.state.locations.filter((location) => location.name.includes(this.state.searchFieldString))}/>
      <button onClick={() => this.setState({loggingIn: true})} className="login">Login</button>
      </>
      
      if(this.state.loggedIn){
        view = 
        <>
        <input type="text" className="searchbar" onChange={this.onSearchFieldChange} value={this.state.searchFieldString} />
        <LoggedInHeader />
        <Marker locations={this.state.locations.filter((location) => location.name.includes(this.state.searchFieldString))}/>
        <Infopicker locations={this.state.locations.filter((location) => location.name.includes(this.state.searchFieldString))}/>
        <button onClick={() => this.setState({loggedIn: !this.state.loggedIn})} className="login">Log out</button>
        </>
      }
      if(this.state.loggingIn){
        view = 
        <>
        <input type="text" className="username" onChange={this.onUsernameChange} value={this.state.usernameString}/>
        <input type="text" className="password" onChange={this.onPasswordChange} value={this.state.passwordString}/>
        
        <button onClick={this.ProcessLogin} className="log_in">Log in</button>
        <button onClick={() => this.setState({loggedIn: false, loggingIn: false, registering: true})} className="register">Register</button>
        </>
      }
      if(this.state.registering){
        view = 
        <>
        <input type="text" className="username"/>
        <input type="text" className="password"/>
        <input type="text" className="email"/>
        
        <button onClick={() => this.setState({loggedIn: false, loggingIn: false, registering: false})} className="register">Register</button>
        </>
      }
      return (
        <>
          {view}
        </>
      )
    }
  }

export default App;
