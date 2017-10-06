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
        <ReactChartjs
          type='bar'
          labels={bar.labels}
          datasets={bar.datasets}
          options={bar.options} />
        <ReactChartjs
          type='line'
          labels={line.labels}
          datasets={line.datasets}
          options={line.options} />
        <ReactChartjs
          type='bubble'
          labels={bubble.labels}
          datasets={bubble.datasets}
          options={bubble.options} />
        <ReactChartjs
          type='bar'
          labels={combo.labels}
          datasets={combo.datasets}
          options={combo.options} />
        <ReactChartjs
          type='doughnut'
          labels={doughnut.labels}
          datasets={doughnut.datasets}
          options={doughnut.options} />
        <ReactChartjs
          type='pie'
          labels={pie.labels}
          datasets={pie.datasets}
          options={pie.options} />
        <ReactChartjs
          type='polarArea'
          labels={polarArea.labels}
          datasets={polarArea.datasets}
          options={polarArea.options} />
        <ReactChartjs
          type='radar'
          labels={radar.labels}
          datasets={radar.datasets}
          options={radar.options} />
      </div>
    )
  }
}

export default App
