export class WordGroup extends React.Component {
  render() {
    console.log('WordGroup.render()');
    console.log('this.props =');
    console.log(this.props);
    
    return (
      <div>
        {this.props.words.map((word, i) => <p key={i}>{word}</p>)}
      </div>	
    );
  }
}