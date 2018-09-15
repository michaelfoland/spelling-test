export class UnitSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="unit-selector">
        {this.props.unitNumbers
       .map(unitNumber => 
        <button 
          className="unit-button"
          key={unitNumber} 
          onClick={() =>{ this.props.showWords(unitNumber)}}
          data-target={unitNumber}>
            Unit {unitNumber}
       </button>
      )}
    
      </div>    
    );
    
  }
}