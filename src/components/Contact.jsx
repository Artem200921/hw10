import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <h4>{this.props.name}</h4>
        <p>{this.props.number}</p>
        <button type="button" onClick={() => this.props.delete(this.props.id)}>
          D
        </button>
      </li>
    );
  }
}
