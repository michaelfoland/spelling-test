import { words } from './words.js';
import { WordSelector } from './WordSelector.js';
import { Test } from './Test.js';
import shuffle from '../node_modules/lodash-es/shuffle.js';

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
      testWords: shuffle(words)
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
          <Test words={this.state.testWords}/>
        }
      </div>
    );
  }
}



const targetNode = document.querySelector('#react-container');
ReactDOM.render(<App />, targetNode);