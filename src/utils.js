import moment from "moment";

import { FIRST_HOUR_RATE, DEFAULT_HOUR_RATE } from "./constants";

// 0 h 0 min => 0 => 0*10 + 0*5 + 0*5
// 0 h 10 min => 10 => 1*10 + 0*5 + 0*5
// 1 h 0 min=> 10 => 1*10 + 0*5 + 0*5
// 1 h 10 min => 10 + 5 => 1*10 + 0*5 + 1*5
// 2 h 0 min=> 10 + 5 => 1*10 + 1*5 + 0*5
// 2 h 10 min => 10 + 5 + 5 => 1*10 + 1*5 + 1*5
// 3 h 0 min=> 10 + 5 + 5 => 1*10 + 2*5 + 0*5
// 3 h 10 min => 10 + 5 + 5 + 5 => 1*10 + 2*5 + 1*5
// 4 h 0 min=> 10 + 5 + 5 + 5 => 1*10 + 3*5 + 0*5

export const getSummary = (startTime) => {
  const parkedTimeInMinutes = moment.duration(
    moment().diff(startTime, "minutes") //to test => .add(60, "minutes")
  );
  const hoursParkedTime = Math.floor(parkedTimeInMinutes / 60);
  const minutesParkedTime = parkedTimeInMinutes % 60;
  const sumToPay =
    (hoursParkedTime || minutesParkedTime ? 1 : 0) * FIRST_HOUR_RATE +
    ((hoursParkedTime || 1) - 1) * DEFAULT_HOUR_RATE +
    (hoursParkedTime && minutesParkedTime ? 1 : 0) * DEFAULT_HOUR_RATE;
  return { hoursParkedTime, minutesParkedTime, sumToPay };
};

export const getSummaryMessage = (
  carNumber,
  hoursParkedTime,
  minutesParkedTime,
  sumToPay
) =>
  `${
    hoursParkedTime || minutesParkedTime
      ? `Your car ${carNumber} has stayed for ${
          hoursParkedTime ? `${hoursParkedTime} hours ` : ""
        } ${hoursParkedTime && minutesParkedTime ? "and " : ""} ${
          minutesParkedTime ? `${minutesParkedTime} minutes ` : ""
        }and you have to pay ${sumToPay} RON.`
      : "You haven't stayed enough to pay."
  }`;
