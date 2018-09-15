export class TestEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEntry: '',
    }
  }

  playAudio = () => {
    console.log('TestEntry: PLAY AUDIO FOR',this.props.currentWord.toUpperCase());  
  }
  
  
  handleChange = (e) => {
    this.setState({
      userEntry: e.target.value
    });
  }
  
  submitAnswer = (e) => {
    this.props.submitAnswer(this.state.userEntry);
    this.setState({
      userEntry: ''
    });
  }
  
  render() {
    return (
      <div className="test-entry">
        <input type="text" value={this.state.userEntry} onChange={this.handleChange}></input>
        <button
          className="play-audio-btn"
          type="button"
          role="button" 
          onClick={this.playAudio}>
          Play audio        
        </button>
        <button
          className="next-item-btn"
          type="button"
          role="button" 
          onClick={this.submitAnswer}>
          Submit
        </button>
      </div>
    );
  }
  
}