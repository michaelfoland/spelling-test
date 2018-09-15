export class SelectedWords extends React.Component {
  render() {
    return (
      <div className="selected-words">
        <h3>Selected words:</h3>
        <div className="selected-words__words">
        {this.props.words.map(word => 
          <span key={word} className="selected-word">{word}</span>
        )}
        </div>
      </div>
    );
  }
}