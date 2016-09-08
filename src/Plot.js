/* global Plotly */
import React from 'react';

class Plot extends React.Component {
  componentDidMount() {
    Plotly.newPlot('plot');
  }

  render() {
    return (
      <div id="plot"></div>
    );
  }
}

export default Plot;