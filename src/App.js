import React, {Component} from 'react';
import Scp from "./SCP.js";
import Header from  "./Header.js";
import Footer from "./Footer.js";

class App extends Component{
    render(){
        return(<div>
            <Header />
            <Scp scpinfo={this.state.scpinfo} />
            <Footer />
        </div>);
    }
    
    state = { scpinfo: [] }
    componentDidMount()
    {
    fetch('https://testapi-7981.restdb.io/rest/scpjson', {
        "async": true,
  "crossDomain": true,
  "url": "https://testapi-7981.restdb.io/rest/scpjson",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "6090bae5f2fc22523a42c7d8",
    "cache-control": "no-cache"
  }
    })
    .then(result => result.json())
    .then((data) => {this.setState({scpinfo: data})})
    .catch(console.log);
    }
}

export default App
