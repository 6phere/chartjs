import { SixphereLitElement, html } from '@sixphere/lit-element'
import Chart  from "chart.js"


class ChartJS extends SixphereLitElement {

    constructor() {
        super()
        
        this.width = 0
        this.height = 0
        this.__data = {}
        this.__options = {}

        this.updateComplete.then(this.initChart.bind(this))
    }

    static get properties() {
        return {
            width: { type: Number },
            height: { type: Number },
            data: { type: Object },
            options: { type: Object },
        }
    }

    get data() {
        return this.__data
    }

    set data(data) {
        this.__data = data

        if (this.isInitialised()) {
            this.chart.data = data
            this.chart.update()
        }
    }

    get options() {
        return this.__options
    }

    set options(options) {
        this.__options = options

        if (this.isInitialised()) {
            this.chart.options = options
            this.chart.update()
        }
    }

    isInitialised() {
        return !!this.chart
    }

    async initChart() {
        this.chart = new Chart(this.$refs.canvas, {
            type: this.type,
            data: this.data,
            options: this.options,
        })
    }

    get type() {
        return ''
    }

    renderCanvas() {
        return html`
            <div>
                <canvas ref="canvas" width="${this.width}" height="${this.height}"></canvas>
            </div>
        `
    }

    render() {
        return this.renderCanvas()
    }
}

export default ChartJS