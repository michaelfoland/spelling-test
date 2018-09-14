import { WordGroup } from './WordGroup.js';

export class WordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleWords: [],
      selectedWords: []
    }
  }

  selectWord = (word) => {
    if (this.state.selectedWords.includes(word)) return; // bail if word is already included
    
    this.setState(prevState => ({
      selectedWords: prevState.selectedWords.concat(word)
    }));
  }

  
  handleClick = (e) => {
    const unit = this.props.units.find(unit => {
      return unit.unit === parseInt(e.target.dataset.unit);
    });
    
    let words = [];
    
    if (unit) {
      words = unit.words;
    }
    
    this.setState({
      visibleWords: words
    });
  }
  
  render() {
    return (
      <div className="word-selector">
        {this.props.units.map((unit, i) => <button key={i} data-unit={unit.unit} onClick={this.handleClick}>Unit {unit.unit}</button>)}
        <WordGroup words={this.state.visibleWords} selectWord={this.selectWord} selectedWords={this.state.selectedWords} />
      </div>
    );
  }
}