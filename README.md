# Sixphere - Chart.js Web Components


[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]

[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

------------------------------------------------------------------

Web component implementation of charts elements from [Chart.js library](https://www.chartjs.org/). This implementation includes the following charts:

- [Bar chart](https://www.chartjs.org/docs/latest/charts/bar.html)
- [Line chart](https://www.chartjs.org/docs/latest/charts/line.html)


## Install
```bash
npm install '@sixphere/chartjs' --save
```


## HTML API

### Attributes

| Attribute | Values                                                 | Description                                                      |
|-----------|--------------------------------------------------------|------------------------------------------------------------------|
| width     | [Optional] Number - default: 0                         | Chart width                                                      |
| height    | [Optional] Number - default: 0                         | Chart height                                                     |
| data      | [Optional] Object - default: {}                        | Chart data (see [Chart.js reference](https://www.chartjs.org/docs/latest/))                              |
| options   | [Optional] Object - default: {}                        | Chart options (see [Chart.js reference](https://www.chartjs.org/docs/latest/))                           |


## How to use?

### Register as a custom element
```javascript
import { ChartBar, ChartLine } from '@sixphere/chartjs'

CustomElements.define(ChartBar.is, ChartBar)
CustomElements.define(ChartLine.is, ChartLine)
```

# Author

[Sixphere](http://www.sixphere.com "Sixphere") is not only a group of experienced professionals, that keep a huge amount of knowledge, take care about what and how they do their job. They solve their partner problems in an agile way and are aware of their customer needs through emotional intelligence connections.

Sixphere is a simpler way of understanding IT services, based on a strong and well balanced mix-ture of principles.


# License
[MIT License][mit-license-url] © 2019 Sixphere


<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[java-url]: https://www.java.com/en/download
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html
[web-component-tester-url]: https://github.com/Polymer/tools/tree/master/packages/web-component-tester
[lit-element-url]: https://github.com/Polymer/lit-element

<!-- Badges -->
<!-- [follow-me-badge]: https://flat.badgen.net/twitter/follow/Fernando Jiménez?icon=twitter -->

[version-badge]: https://flat.badgen.net/npm/v/@sixphere/chartjs?icon=npm
[lit-element-version-badge]: https://flat.badgen.net/npm/v/lit-element/latest?icon=npm&label=lit-element
[node-version-badge]: https://flat.badgen.net/npm/node/@sixphere/chartjs
[mit-license-badge]: https://flat.badgen.net/npm/license/@sixphere/chartjs

[downloads-badge]: https://flat.badgen.net/npm/dm/@sixphere/chartjs
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@sixphere/chartjs?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@sixphere/chartjs
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@sixphere/chartjs

<!-- Links -->
<!-- [follow-me-url]: https://twitter.com/Fernando Jiménez?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=diwrapper -->

[version-url]: https://www.npmjs.com/package/@sixphere/chartjs
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE

[downloads-url]: https://www.npmtrends.com/@sixphere/chartjs
[packagephobia-url]: https://packagephobia.now.sh/result?p=@sixphere/chartjs
[bundlephobia-url]: https://bundlephobia.com/result?p=@sixphere/chartjs

[circleci-url]: https://circleci.com/gh//diwrapper/tree/master
[daviddm-url]: https://david-dm.org//diwrapper

[codebeat-url]: https://codebeat.co/projects/<codebeat_path>
[codacy-url]: https://www.codacy.com/app/<codacy_path>
[lgtm-url]: https://lgtm.com/projects/g/<lgtm_path>