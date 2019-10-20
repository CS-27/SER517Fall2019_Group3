import React, { Component } from 'react';
class Try extends Component {
  render() {
    const greeting = {
      subject: 'React',
      description: 'Your component library for ...',
    };
    return (
      <div>
        <Greeting greeting={greeting} />
      </div>
    );
  }
}
const Greeting = ({ greeting }) =>
  <div>
    <Title title={`Welcome to ${greeting.subject}`} />
    <Description description={greeting.description} />
  </div>
const Title = ({ title }) =>
  <h1>{title}</h1>;
const Description = ({ description }) =>
  <p>{description}</p>;
export default Try;