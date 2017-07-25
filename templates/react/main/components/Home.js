import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import '../styles/form.less';
import {routeTo} from '../components/RoutesHandlerService'

export default class HomeComponent extends Component {
  constructor(props) {
   super(props);
   this.state = {name: '',email: ''};
   this.handleNameChange = this.handleNameChange.bind(this);
   this.handleEmailChange = this.handleEmailChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
  handleNameChange(event) {
   this.setState({name: event.target.value});
 }
 handleEmailChange(event) {
  this.setState({email: event.target.value});
}

 handleSubmit(event) {
   event.preventDefault();
   const newState =  {name: this.state.name, email: this.state.email };
   routeTo('/dashboard', newState);
}
  render() {
    return (
      <div className= 'main-content'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          </label>
          <input type="text" name="name"  value={this.state.name}  onChange={this.handleNameChange}/>
          <label>
            Email:
          </label>
          <input type="text" name="email"  value={this.state.email}  onChange={this.handleEmailChange}/>
          <input type="submit" value="Submit" className="submit-button"/>
        </form>
      </div>);
  }
}
