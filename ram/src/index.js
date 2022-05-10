import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state={value:''}
    this.boxChange = this.boxChange.bind(this);
}
boxChange(event){
    this.setState({value: event.target.value})
}  
render() {
  return (
    <div>
      <header className="box">
          <textarea onChange={this.boxChange} value={this.state.value}></textarea>
          <textarea value={this.state.value}></textarea>
      </header>
    </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Box/>)