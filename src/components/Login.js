import React, { Component } from 'react';
import Game from './Game';
import './Login.css';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            value:'',
            isHidden:false
        };
        this.ocli =this.ocli.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ocli(){
   
      this.setState({
            showComponent: true,
            isHidden:true
          });
        }
        handleChange(event) {
          this.setState({showComponent: false});
          
          
        }
        
  render () {

    return (     
         <div class="card bg-info col-3" className="car">
         <div className="divi">
          <h4>X:</h4>    
          <input type="text" name="name1" placeholder="Name of Player X" required ></input>    
          <h4>O:</h4>   
           <input type="text" name ="name2" placeholder="Name of Player O" required></input>   
           </div>    
          <div className="dibi">
          {    
          this.state.isHidden?null:
          <button type="button" className=" btn btn-primary" onClick= {this.ocli} onChange={this.handleChange} /* disabled= {this.state.isHidden} */> Start the Game </button> 
          }   
              {this.state.showComponent?<Game></Game>:null} </div>
        
      </div>
           );
  }
}

export default Login;
