import React, { Component } from 'react'

import ReactChartjs from './components/ReactChart.js'

class App extends Component {
  dataset (labels, min = 0, max = 100) {
    const data = []

    for (let i = 0; i < labels.length; ++i) {
      data.push(Math.floor(Math.random() * 50))
    }
    return data
  }
  render () {
    const labels = ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue']
    const datasets = [{
      label: 'Material Colors',
      data: this.dataset(labels)
    }]
    return (
      <div className='App'>
        <ReactChartjs
          type='bar'
          labels={labels}
          datasets={datasets}
          options={{title: { display: true, text: 'Chart.js Line Chart' }}} />
      </div>
    )
  }
}

export default App
