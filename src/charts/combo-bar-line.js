import { dataset } from './utils'
import { material } from '../components/react-chartjs'

const chart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    type: 'line',
    label: 'Dataset 1',
    borderColor: material[1],
    borderWidth: 2,
    fill: false,
    data: dataset(7, 10)
  },
  {
    type: 'bar',
    label: 'Dataset 2',
    backgroundColor: material[2],
    data: dataset(7, 10),
    borderColor: 'white',
    borderWidth: 2
  },
  {
    type: 'bar',
    label: 'Dataset 3',
    backgroundColor: material[3],
    data: dataset(7)
  }],
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Combo Bar Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: true
    }
  }
}

export default chart
