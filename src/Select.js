import React from "react";

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    console.log(3);
    this.setState(
      {
        selectedItem: event.target.value
      },
      () => {
        console.log("new state: " + this.state.selectedItem);
      }
    );
    console.log("prev state: " + this.state.selectedItem);
  }

  render() {
    return (
      <div className="select-wrapper">
        <select className="widget-select" onChange={this.handleOnChange}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    );
  }
}
