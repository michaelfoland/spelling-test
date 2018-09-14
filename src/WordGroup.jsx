export class WordGroup extends React.Component {
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
  
  render() {
    return (
      <div className="word-group">
        <div className="word-group__button-container">
          <button role="button" className="word-group__button" onClick={this.handleButtonClick} data-action="select">Select all</button>
          <button role="button" className="word-group__button" data-action="deselect" onClick={this.handleButtonClick}>Deselect all</button>
        </div>
        <div className="word-group__list">
        {this.props.unit.words.map((word, i) => 
          <span className={'word ' + this.isSelected(word)} data-word={word} onClick={this.handleWordClick} key={i}>{word}</span>)}
        </div>
      </div>	
    );
  }
}