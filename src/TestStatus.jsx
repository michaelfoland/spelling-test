export class TestStatus extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="test-status">
        Item #{this.props.currentItem + 1} of {this.props.totalItems}
      </div>
    );
  }
}