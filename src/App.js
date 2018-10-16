// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import {Login} from './components/Login'
import {Shop} from './container/Shop';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component{
  constructor(){
    super();
    this.state = {isLogin:false,userid:''};
  }
  isAuth(loginState, uid=''){
    this.setState({isLogin:loginState,userid:uid});
  }
  render(){
    return(
    <div className="container">
    {this.state.isLogin?<Shop userid={this.state.userid}/>:<Login updateLoginStatus={this.isAuth.bind(this)}/>}
    
    </div>);
  }
}
