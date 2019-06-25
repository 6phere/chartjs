import ChartJS from "./base.js";

class ChartLine extends ChartJS {
  static get is() {
    return 'chartjs-line';
  }

  get type() {
    return 'line';
  }

}

export default ChartLine;