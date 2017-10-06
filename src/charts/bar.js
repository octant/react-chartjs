import { dataset } from './utils'
import { material } from '../components/react-chartjs'

const config = {
  type: 'bar',
  data: {
    labels: ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue'],
    datasets: [{
      label: 'Material Colors',
      data: dataset(7),
      backgroundColor: material
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
}

export default config
