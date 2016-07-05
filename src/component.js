import React, { Component } from 'react';

export const TestComponent1 = React.createClass({
    render() {
      return (
        <div>TestComponent1</div>
      );
    }
});

export const TestComponent2 = () => (
  <div>TestComponent2</div>
);

export class TestComponent3 extends Component {
  render() {
    return (
      <div>TestComponent3</div>
    )
  }
}
