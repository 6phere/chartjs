import { SixphereLitElement, html } from '@sixphere/lit-element';
import Chart from 'chart.js';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n            <div>\n                <canvas ref=\"canvas\" width=\"", "\" height=\"", "\"></canvas>\n            </div>\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

class ChartJS extends SixphereLitElement {
  constructor() {
    super();
    this.width = 0;
    this.height = 0;
    this.__data = {};
    this.__options = {};
    this.updateComplete.then(this.initChart.bind(this));
  }

  static get properties() {
    return {
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      data: {
        type: Object
      },
      options: {
        type: Object
      }
    };
  }

  get data() {
    return this.__data;
  }

  set data(data) {
    this.__data = data;

    if (this.isInitialised()) {
      this.chart.data = data;
      this.chart.update();
    }
  }

  get options() {
    return this.__options;
  }

  set options(options) {
    this.__options = options;

    if (this.isInitialised()) {
      this.chart.options = options;
      this.chart.update();
    }
  }

  isInitialised() {
    return !!this.chart;
  }

  initChart() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.chart = new Chart(_this.$refs.canvas, {
        type: _this.type,
        data: _this.data,
        options: _this.options
      });
    })();
  }

  get type() {
    return '';
  }

  renderCanvas() {
    return html(_templateObject(), this.width, this.height);
  }

  render() {
    return this.renderCanvas();
  }

}

class ChartBar extends ChartJS {
  static get is() {
    return 'chartjs-bar';
  }

  get type() {
    return 'bar';
  }

}

class ChartLine extends ChartJS {
  static get is() {
    return 'chartjs-line';
  }

  get type() {
    return 'line';
  }

}

export { ChartBar, ChartJS as ChartBase, ChartLine };
