import { WordGroup } from './WordGroup.js';
import { UnitSelector } from './UnitSelector.js';
import { SelectedWords } from './SelectedWords.js';

export class WordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleChild: 'units',
      visibleUnit: null,
      selectedWords: []
    }
  }
  
  showWords = (unitNumber) => {
    const visibleUnit = this.props.units.find(unit => unit.unitNumber === unitNumber);
    
    this.setState({
      visibleChild: 'words',
      visibleUnit: visibleUnit
    });
  }
  
  toggleWord = (word) => {
    if (this.state.selectedWords.includes(word)) {
      this.deselectWord(word);
    } else {
      this.selectWord(word);
    }
  }
  
  selectWord = (word) => {
    this.setState({
      selectedWords: this.state.selectedWords.concat(word)
    });
  }
  
  deselectWord = (word) => {
    const newWords = this.state.selectedWords.slice(0);
    const index = newWords.indexOf(word);
    newWords.splice(index,1);
    
    this.setState({
      selectedWords: newWords
    });
  }
  
  deselectAll = (words) => {
    this.setState(prevState => ({
      selectedWords: prevState.selectedWords.filter(word => !words.includes(word))
    }));
  }
  
  selectAll = (words) => {
    // filter new words against already selected words
    const newWords = words.filter(word => !this.state.selectedWords.includes(word));
    
    this.setState(prevState => ({
      selectedWords: prevState.selectedWords.concat(newWords)
    }));
  }
  
  closeWordGroup = () => {
    this.setState({
      visibleChild: 'units',
      visibleUnit: null
    });
  }
  
  openVerify = () => {
    this.setState({
      visibleChild: 'verify'
    });
    
    console.log('should open screen to check words now');
  }
  
  render() {
    let content = '';
    if (this.state.visibleChild === 'units') {
      content = <UnitSelector 
                unitNumbers={this.props.units.map(unit => unit.unitNumber)} 
                showWords={this.showWords}/>;
    
    } else if (this.state.visibleChild === 'words') {
      content = 
        <WordGroup 
          unit={this.state.visibleUnit} 
          toggleWord={this.toggleWord} 
          selectAll={this.selectAll}
          deselectAll={this.deselectAll}
          close={this.closeWordGroup}
          selectedWords={this.state.selectedWords}/>
    } 
    
    return (
      <div className="word-selector">
        <h2>Choose some words:</h2>
        {content}
        {(this.state.selectedWords.length > 0 && 
          this.state.visibleChild === 'units') && 
          <SelectedWords words={this.state.selectedWords}/>}
        {(this.state.selectedWords.length > 0 && 
          this.state.visibleChild === 'units') && 
          <button className="start-button" onClick={() => {this.props.startTest(this.state.selectedWords)}}>Start the test!</button>}
      </div>

    );
  }
  
}