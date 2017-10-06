import { dataset } from './utils'
import { material } from '../components/react-chartjs'

const chart = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [{
    label: 'Skip first dataset',
    borderColor: material[10],
    backgroundColor: material[10],
    pointBackgroundColor: material[10],
    data: [
      NaN,
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1)
    ]
  },
  {
    label: 'Skip mid dataset',
    borderColor: material[5],
    backgroundColor: material[5],
    pointBackgroundColor: material[5],
    data: [
      dataset(1),
      dataset(1),
      NaN,
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1)
    ]
  },
  {
    label: 'Skip last dataset',
    borderColor: material[1],
    backgroundColor: material[1],
    pointBackgroundColor: material[1],
    data: [
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      dataset(1),
      NaN
    ]
  }],
  options: {
    title: {
      display: true,
      text: 'Chart.js Radar Chart - Skip Points'
    },
    elements: {
      line: {
        tension: 0.0
      }
    },
    scale: {
      beginAtZero: true
    }
  }
}

export default chart
