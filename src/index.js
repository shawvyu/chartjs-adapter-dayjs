"use strict";

import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import advancedFormat from "dayjs/plugin/advancedFormat"
import localizedFormat from "dayjs/plugin/localizedFormat"
import { _adapters } from "chart.js";

dayjs.extend(isoWeek);
dayjs.extend(quarterOfYear);
dayjs.extend(advancedFormat);
dayjs.extend(localizedFormat);


const FORMATS = {
  datetime: "MMM D, YYYY, h:mm:ss a",
  millisecond: "h:mm:ss.SSS a",
  second: "h:mm:ss a",
  minute: "h:mm a",
  hour: "hA",
  day: "MMM D",
  week: "ll",
  month: "MMM YYYY",
  quarter: "[Q]Q - YYYY",
  year: "YYYY",
};

_adapters._date.override(
  typeof dayjs === "function"
    ? {
      _id: "dayjs", // DEBUG ONLY

      formats: function () {
        return FORMATS;
      },

      parse: function (value, format) {
        if (typeof value === "string" && typeof format === "string") {
          value = dayjs(value, format);
        } else if (!(value instanceof dayjs)) {
          value = dayjs(value);
        }
        return value.isValid() ? value.valueOf() : null;
      },

      format: function (time, format) {
        return dayjs(time).format(format);
      },

      add: function (time, amount, unit) {
        return dayjs(time).add(amount, unit).valueOf();
      },

      diff: function (max, min, unit) {
        return dayjs(max).diff(dayjs(min), unit);
      },

      startOf: function (time, unit, weekday) {
        console.log('4444444:',time, unit, weekday)
        time = dayjs(time);
        if (unit === "isoWeek") {
          weekday = Math.trunc(Math.min(Math.max(0, weekday), 6));
          return time.isoWeekday(weekday).startOf("day").valueOf();
        }
        return time.startOf(unit).valueOf();
      },

      endOf: function (time, unit) {
        return dayjs(time).endOf(unit).valueOf();
      },
    }
    : {}
);
