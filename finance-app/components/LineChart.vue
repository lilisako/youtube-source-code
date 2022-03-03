<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    values: {
      type: Array,
      default () {
        return []
      }
    },
    labels: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      chartdata: {
        labels: this.labels,
        datasets: [{
          label: 'value',
          fill: false,
          borderColor: '#002D72',
          pointBorderWidth: 2,
          pointHoverBorderWidth: 5,
          data: this.values,
          drawActiveElementsOnTop: false
        }]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales:
        {
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
