import { TestStatus } from './TestStatus.js';
import { TestEntry } from './TestEntry.js';
import { TestControls } from './TestControls.js';
// import { shuffle } from 'lodash.shuffle';

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0,
      userAnswers: []
    }
  }

  nextItem = () => {
    this.setState(prevState => ({currentItem: prevState.currentItem + 1}));
  }
  
  logAnswer = (answer) => {
    console.log('received answer',answer,'from <TestEntry />');
    this.setState(prevState => ({
      userAnswers: prevState.userAnswers.concat(answer)
    }));
    this.nextItem();
  }
    
  render() {
    return (
      <div className="test">
        <TestStatus 
          currentItem={this.state.currentItem}
          totalItems={this.props.words.length}/>
        <TestEntry
          currentWord={this.props.words[this.state.currentItem]}
          submitAnswer={this.logAnswer}/>
        <TestControls />
      </div>
    );
  }
}



