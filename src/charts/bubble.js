import { dataset } from './utils'
import { material } from '../components/react-chartjs'

const config = {
  type: 'bubble',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: material[9],
      data: [{
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }]
    },
    {
      label: 'My Second dataset',
      backgroundColor: material[10],
      data: [{
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }, {
        x: dataset(1, 10, 100),
        y: dataset(1, 10, 100),
        r: Math.abs(dataset(1, 10, 100)) / 5
      }]
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Bubble Chart'
    },
    tooltips: {
      mode: 'point'
    }
  }
}

export default config
