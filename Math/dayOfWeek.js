/**
 * LC 1185
 * Given a date, return the corresponding day of the week for that date.
 * The input is given as three integers representing the day, month and year respectively.
 * Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 *
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const months = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const isLeapYear = (year) => {
    // If the year is divisible by 4 but not by 100, it's a leap year
    if (year % 4 == 0 && year % 100 != 0) return true;
    // If the year is divisible by 400, it's a leap year (even if it's a century year)
    if (year % 400 == 0) return true;
    // Otherwise, it's not a leap year
    return false;
  };

  if (isLeapYear(year)) {
    months[2] = 29;
  }

  // Count total days given year
  // 1971, Jan 1 was friday, index 5, but starting from index 0, diff of 4 days
  let sum = 4;
  for (let i = 1971; i < year; i++) {
    if (isLeapYear(i)) {
      sum += 366;
    } else {
      sum += 365;
    }
  }

  // Add days up to month in given year
  for (let i = 1; i < month; i++) {
    sum += months[i];
  }

  // Add day of month to sum
  sum += day;

  const weekDayIndex = sum % 7;

  return weekDay[weekDayIndex];
};

console.log(dayOfTheWeek(31, 8, 2019));
console.log(dayOfTheWeek(18, 7, 1999));
console.log(dayOfTheWeek(15, 8, 1993));

// Time Complexity:
// Checking isLeapYear is O(1)
// Looping through years for count is dependent upon the diff between input year - 1971, which would be O(Y - 1971) == O(Y)
// Looping through months, worst case it from 1-12 (december) ans is fixed range => O(1)
// Overall: O(Y)

// Space complexity:
// Fixed arrays for both months and weekdays, call it O(1)
// Temp variable for index is O(1)
// Overall: O(1)
