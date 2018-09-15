export class WordGroup extends React.Component {
  /*
  handleWordClick = (e) => {
    this.props.toggleWord(e.target.dataset.word);
  }
  
  handleButtonClick = (e) => {
    const { action } = e.target.dataset;
    
    if (action === 'select') {
      this.props.selectWords(this.props.unit.words);
    }
    else if (action === 'deselect') {
      this.props.deselectWords(this.props.unit.words);
    }
  }
  
  isSelected = (word) => {
    return (this.props.selectedWords.includes(word) ? 'selected' : '');
  }
  */
  
  getClassName(word) {
    return (this.props.selectedWords.includes(word) ? 'selected' : '');
  }
  
  render() {
    return (
      <div className="word-group">
        <div className="word-group__heading">
          <h3>
            Unit {this.props.unit.unitNumber}
          </h3>            
          <button className="plain-button" onClick={this.props.close}>go back</button>

        </div>
        <div className="word-group__meta-buttons">
          <button className="plain-button" onClick={() => { this.props.selectAll(this.props.unit.words) }}>Select all</button>
          <button className="plain-button" onClick={() => { this.props.deselectAll(this.props.unit.words) }}>Deselect all</button>
        </div>
        <div className="word-group__word-buttons">
          {this.props.unit.words.map(word => 
            <button 
              key={word} 
              data-word={word}
              onClick={() => {this.props.toggleWord(word)}}
              className={this.getClassName(word)}>
                {word}
            </button>
          )}
          
        </div>
        
      </div>
    );
  }
}