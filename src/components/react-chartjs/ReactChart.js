import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

class ReactChart extends Component {
  componentDidMount () {
    // const data = {
    //   labels: this.props.labels,
    //   datasets: this.props.datasets
    // }

    // const defaultOptions = {
    //   responsive: true
    // }

    // const options = {...defaultOptions, ...this.props.options || {}}

    // const config = {
    //   type: this.props.type,
    //   data,
    //   options,
    //   ...this.props.root
    // }

    const chart = new Chart(this.canvas.getContext('2d'), this.props.config)

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
  config: PropTypes.object.isRequired
}

export default ReactChart
