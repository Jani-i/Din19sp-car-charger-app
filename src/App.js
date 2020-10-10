import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data.json';
//import Locations from './components/Locations';
import Marker from './components/Marker';
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
      searchFieldString: ""
    }
  }

  onSearchFieldChange = (event) => {
    console.log("yep");
    console.log(event.target.value)
    this.setState({searchFieldString: event.target.value})
}

  render()
  {
    return (
      <>
      <input type="text" className="searchbar" onChange={this.onSearchFieldChange} value={this.state.searchFieldString} />
      <Header/>
      <Marker locations={this.state.locations.filter((location) => location.name.includes(this.state.searchFieldString))}/>
      </>
    )
  }
}
export default App;
