import React from "react";

export class Filter extends React.Component {
  render() {
    return (
      <>
        <h3>Find your contacts by name</h3>
        <input
          type="text"
          name="filter"
          title="Write to search"
          onChange={this.props.search}
        />
      </>
    );
  }
}
