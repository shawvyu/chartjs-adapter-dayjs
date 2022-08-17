const resolve = require('@rollup/plugin-node-resolve').default;
const terser = require('rollup-plugin-terser').terser;
const pkg = require('./package.json');

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * ${pkg.homepage}
  * (c) ${new Date().getFullYear()} chartjs-adapter-dayjs Contributors
  * Released under the ${pkg.license} license
  */`;

const input = 'src/index.js';
const isoWeekInput = 'node_modules/dayjs/plugin/isoWeek.js'
const quarterOfYearInput = 'node_modules/dayjs/plugin/quarterOfYear.js'
const advancedFormatInput = 'node_modules/dayjs/plugin/advancedFormat.js'
const external = [
  'chart.js',
  'dayjs',
  'dayjs/plugin/isoWeek',
  'dayjs/plugin/quarterOfYear',
  'dayjs/plugin/advancedFormat'
];
const globals = {
  'chart.js': 'Chart',
  'dayjs': 'dayjs',
  'dayjs/plugin/isoWeek': 'dayjs_plugin_isoWeek',
  'dayjs/plugin/quarterOfYear': 'dayjs_plugin_quarterOfYear',
  'dayjs/plugin/advancedFormat': 'dayjs_plugin_advancedFormat',
};

module.exports = [
  {
    input,
    plugins: [
      resolve(),
    ],
    output: {
      name: pkg.name,
      file: pkg.main,
      banner,
      format: 'umd',
      indent: false,
      globals
    },
    external
  },
  {
    input,
    plugins: [
      resolve(),
      terser({
        output: {
          preamble: banner
        }
      })
    ],
    output: {
      name: pkg.name,
      file: pkg.main.replace('.js', '.min.js'),
      format: 'umd',
      indent: false,
      globals
    },
    external
  },
  {
    input,
    plugins: [
      resolve(),
    ],
    output: {
      name: pkg.name,
      file: pkg.module,
      banner,
      format: 'esm',
      indent: false,
    },
    external
  },
  {
    input: isoWeekInput,
    plugins: [
      resolve(),
      terser({
        output: {
          preamble: banner
        }
      })
    ],
    output: {
      name: globals['dayjs/plugin/isoWeek'],
      file: 'dist/' + globals['dayjs/plugin/isoWeek']+'.js',
      format: 'umd',
      indent: false,
      globals
    },
    external
  },
  {
    input: quarterOfYearInput,
    plugins: [
      resolve(),
      terser({
        output: {
          preamble: banner
        }
      })
    ],
    output: {
      name: globals['dayjs/plugin/quarterOfYear'],
      file: 'dist/' + globals['dayjs/plugin/quarterOfYear']+'.js',
      format: 'umd',
      indent: false,
      globals
    },
    external
  },
  {
    input: advancedFormatInput,
    plugins: [
      resolve(),
      terser({
        output: {
          preamble: banner
        }
      })
    ],
    output: {
      name: globals['dayjs/plugin/advancedFormat'],
      file: 'dist/' + globals['dayjs/plugin/advancedFormat']+'.js',
      format: 'umd',
      indent: false,
      globals
    },
    external
  }
];
