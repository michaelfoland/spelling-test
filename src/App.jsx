import { words } from './words.js';
import { WordSelector } from './WordSelector.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: words,
      step: 'select',
      testWords: []
    }
  }

  startTest = (words) => {
    this.setState({
      step: 'test',
      testWords: words
    });
  }  
  
  render() {
    if (this.state.step === 'test') {
      console.log(this.state.testWords);
    }
    
    return (
    <div className="app">
        {this.state.step === 'select' &&    <WordSelector startTest={this.startTest}    units={this.state.units} />
        }
        
        {this.state.step === 'test' && 
          <div>
            Now there will be a test on:   {this.state.testWords.join(' ')}
          </div>
        }
      </div>
    );
  }
}



const targetNode = document.querySelector('#react-container');
ReactDOM.render(<App />, targetNode);