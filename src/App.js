import React, { Component } from 'react'

import ReactChartjs from './components/ReactChart.js'

class App extends Component {
  dataset (n, min = 0, max = 100) {
    const data = []

    for (let i = 0; i < n; ++i) {
      data.push(Math.floor(Math.random() * 50))
    }
    return data
  }
  render () {
    const labels = ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue']
    const barDatasets = [{
      label: 'Material Colors',
      data: this.dataset(labels.length)
    }]

    const lineDatasets = [{
      label: 'My First dataset',
      borderColor: 'blue',
      data: this.dataset(7),
      fill: false
    },
    {
      label: 'My Second dataset',
      fill: false,
      borderColor: 'red',
      data: this.dataset(7)
    }]

    const lineOptions = {
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    }
    return (
      <div className='App'>
        <ReactChartjs
          type='bar'
          labels={labels}
          datasets={barDatasets}
          options={{title: { display: true, text: 'Chart.js Bar Chart' }}} />
        <ReactChartjs
          type='line'
          labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
          datasets={lineDatasets}
          options={lineOptions} />
      </div>
    )
  }
}

export default App
