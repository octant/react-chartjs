import React, { Component } from 'react'

import ReactChartjs from './components/react-chartjs'
import {
  bar,
  bubble,
  combo,
  doughnut,
  line,
  pie,
  polarArea,
  radar
} from './charts'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ReactChartjs config={bar} />
        <ReactChartjs config={bubble} />
        <ReactChartjs config={combo} />
        <ReactChartjs config={doughnut} />
        <ReactChartjs config={line} />
        <ReactChartjs config={pie} />
        <ReactChartjs config={polarArea} />
        <ReactChartjs config={radar} />
      </div>
    )
  }
}

export default App
