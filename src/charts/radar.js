import { dataset } from './utils'
import { material } from '../components/react-chartjs'

const chart = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [{
    label: 'My first dataset',
    borderColor: material[10],
    backgroundColor: material[10],
    pointBackgroundColor: material[10],
    data: [
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1)
    ]
  },
  {
    label: 'My second dataset',
    borderColor: material[5],
    backgroundColor: material[5],
    pointBackgroundColor: material[5],
    data: [
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1)
    ]
  }],
  options: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Radar Chart'
    },
    scale: {
      ticks: {
        beginAtZero: true
      }
    }
  }
}

export default chart
