import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

class ReactChart extends Component {
  componentDidMount () {
<<<<<<< HEAD
=======
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

>>>>>>> 369b57a1190fc52ec769245d59dcbcf0e882858a
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
