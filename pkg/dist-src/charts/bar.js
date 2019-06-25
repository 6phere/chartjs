import ChartJS from "./base.js";

class ChartBar extends ChartJS {
  static get is() {
    return 'chartjs-bar';
  }

  get type() {
    return 'bar';
  }

}

export default ChartBar;