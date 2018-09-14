import { WordGroup } from './WordGroup.js';

export class WordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleUnit: null,
      selectedWords: []
    }
  }

  toggleWord = (word) => {
    
    this.setState(prevState => {
      let newState;
      
      if (prevState.selectedWords.includes(word)) {
        newState = prevState.selectedWords.slice(0);
        let index = newState.indexOf(word);
        newState.splice(index, 1);
      } else {
        newState = prevState.selectedWords.concat(word);
      }
      
      return {selectedWords: newState};
    });
  }
  
  deselectWords = (words) => {
    this.setState(prevState => ({
      selectedWords: prevState.selectedWords.filter(word => !words.includes(word))
    }));
  }
  
  selectWords = (words) => {
    // filter new words against already selected words
    const newWords = words.filter(word => !this.state.selectedWords.includes(word));
    
    this.setState(prevState => ({
      selectedWords: prevState.selectedWords.concat(newWords)
    }));
  }

  handleClick = (e) => {
    const unit = this.props.units.find(unit => {
      return unit.unit === parseInt(e.target.dataset.unit);
    });
    
    if (!unit) return;
    
    this.setState({
      visibleUnit: unit
    });
  }
  
  getWordGroupVisibility = () => {
    return this.state.visibleUnit === 'null' ? 'hidden': '';
  }
  
  render() {
    let wordGroup = '';
    
    // conditionally render word group
    if (this.state.visibleUnit) {
      wordGroup = <WordGroup className="getWordGroupVisibility()" unit={this.state.visibleUnit} selectWords={this.selectWords} deselectWords={this.deselectWords} toggleWord={this.toggleWord} selectedWords={this.state.selectedWords} />
    }
    
    return (
      <div className="word-selector">
        {this.props.units.map((unit, i) => <button key={i} data-unit={unit.unit} onClick={this.handleClick}>Unit {unit.unit}</button>)}
        {wordGroup}
      </div>
    );
  }
}