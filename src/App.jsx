import { words } from './words.js';
import { WordSelector } from './WordSelector.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: words
    }
  }
  
  render() {
    return (
    <div className="app">
      <WordSelector units={this.state.words} />
    </div>
    );
  }
}



const targetNode = document.querySelector('#react-container');
ReactDOM.render(<App />, targetNode);