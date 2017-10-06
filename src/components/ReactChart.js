import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

import { material } from './themes'

class ReactChart extends Component {
  componentDidMount () {
    const data = {
      labels: this.props.labels,
      datasets: this.props.datasets.map((dataset) => {
        return {...dataset, backgroundColor: material}
      })
    }

    const defaultOptions = {
      responsive: true
    }

    const options = {...defaultOptions, ...this.props.options || {}}

    const config = {
      type: this.props.type,
      data,
      options
    }

    const chart = new Chart(this.canvas.getContext('2d'), config)

    this.setState({
      chart
    })
  }

  componentDidUpdate () {
    this.state.chart.update()
  }

  render () {
    return (
      <canvas ref={(canvas) => { this.canvas = canvas }} />
    )
  }
}

ReactChart.propTypes = {
  type: PropTypes.string.isRequired,
  colors: PropTypes.object,
  labels: PropTypes.array,
  dataSets: PropTypes.array,
  options: PropTypes.object
}

export default ReactChart
