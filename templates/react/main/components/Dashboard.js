import React, {Component} from 'react';
import '../styles/form.less';
export default class DashBoard extends Component {
  constructor(props){
    super(props);
  }
  render() {
  const  {name, email} = this.props.location.state;
    return (
      <div >
        Welcome {name} to Your dashboard. Your email address is {email}.
      </div>);
}
}
