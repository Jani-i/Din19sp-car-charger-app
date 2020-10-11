import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data.json';
//import Locations from './components/Locations';
import Marker from './components/Marker';
import Infopicker from './components/Infopicker';
import LoggedInHeader from './components/LoggedInHeader';
//import Finland from './components/Finland';

/*function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}*/

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      locations: data.locations,
      searchFieldString: "",
      loggedIn: false
    }
  }

  onSearchFieldChange = (event) => {
    this.setState({searchFieldString: event.target.value})
  }



  render()
  {
    let view = 
      <>
      <input type="text" className="searchbar" onChange={this.onSearchFieldChange} value={this.state.searchFieldString} />
      <Header />
      <Marker locations={this.state.locations.filter((location) => location.name.includes(this.state.searchFieldString))}/>
      <Infopicker locations={this.state.locations.filter((location) => location.name.includes(this.state.searchFieldString))}/>
      <button onClick={() => this.setState({loggedIn: !this.state.loggedIn})} className="login">Login</button>
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
      return (
        <>
          {view}
        </>
      )
    }
  }

export default App;
