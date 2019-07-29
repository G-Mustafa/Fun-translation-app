import React from 'react';
import './App.css';
import DataForm from './components/DataForm';
import TextBox from './components/TextBox';
import Footer from './components/Footer';
import Logo from './components/Logo';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text:''
    }
  }

  onSubmit = e => {
    e.preventDefault();
    let text = document.getElementById('text').value;
    const selected = document.getElementById('languages').value;
    text = text.replace(/\s/g,'%20');
    const url = `https://api.funtranslations.com/translate/${selected}.json?text=${text}`;
    fetch(url).then(response => response.json()).then(data => {
      this.setState({text: data.contents.translated});
    });
  }

  render(){
    return (
      <div className='App'>
        <Logo />
        <DataForm onSubmit={this.onSubmit} />
        <TextBox text={this.state.text} />
        <Footer />
      </div>
    );
  }
}

export default App;
