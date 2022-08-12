# chartjs-adapter-dayjs

## Overview

This adapter allows the use of day.js with Chart.js. day.js is a very heavy library and thus not recommended for client-side development. However, it was previously the only library supported by Chart.js and so continues to be supported. You may prefer [chartjs-adapter-date-fns](https://github.com/chartjs/chartjs-adapter-date-fns) for a minimal bundle size or [chartjs-adapter-luxon](https://github.com/chartjs/chartjs-adapter-luxon) for larger bundle size with additional functionality included such as i18n and time zone support.

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **3.0.0** or later and [dayjs](https://day.js.org/) **1.8.0** or later.

**Note:** once loaded, this adapter overrides the default date-adapter provided in Chart.js (as a side-effect).

## Installation

### npm

```
npm install dayjs chartjs-adapter-dayjs --save
```

```javascript
import { Chart } from 'chart.js';
import 'chartjs-adapter-dayjs';
```


## Configuration

Read the [Chart.js documention](https://www.chartjs.org/docs/latest) for possible date/time related options. For example, the time scale [`time.*` options](https://www.chartjs.org/docs/latest/axes/cartesian/time.html#configuration-options) can be overridden using the [dayjs formats](https://day.js.org/docs/en/display/format).

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

```
> npm install
```

The following commands will then be available from the repository root:

```
> gulp build            // build dist files
> gulp build --watch    // build and watch for changes
> gulp lint             // perform code linting
```

## License

`chartjs-adapter-moment` is available under the [MIT license](LICENSE.md).
