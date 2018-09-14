export class WordGroup extends React.Component {
  handleClick = (e) => {
    this.props.selectWord(e.target.dataset.word);
  }
  
  isSelected = (word) => {
    return (this.props.selectedWords.includes(word) ? 'selected' : '');
  }
  
  render() {
    console.log('rendering word-group; selectedWords =',this.props.selectedWords);
    return (
      <div className="word-group">
        {this.props.words.map((word, i) => 
          <span className={'word ' + this.isSelected(word)} data-word={word} onClick={this.handleClick} key={i}>{word}</span>)}
      </div>	
    );
  }
}