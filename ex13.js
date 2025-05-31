/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // Your code here
  let dates = date.split("/")
  let sumDates = "";
  let year = "";
  let day = "";
  let month = "";


  dates.forEach((element, i) => {
    if (i === 0) {
      year = element
    } else if (i === 1) {
      if (element === "01") {
        month = "January"
      } else if (element === "02") {
        month = "February"
      } else if (element === "03") {
        month = "March"
      } else if (element === "04") {
        month = "April"
      } else if (element === "05") {
        month = "May"
      } else if (element === "06") {
        month = "Jun"
      } else if (element === "07") {
        month = "July"
      } else if (element === "08") {
        month = "August"
      } else if (element === "09") {
        month = "September"
      } else if (element === "10") {
        month = "October"
      } else if (element === "11") {
        month = "November"
      } else if (element === "12") {
        month = "December"
      }
    } else {
      if (element.length === 2 && element[0] === "0") {
        if (element[1] === "1" || element === "10") {
          day = element[1] + "st"
        } else if (element[1] === "2") {
          day = element[1] + "nd"
        } else if (element[1] === "3") {
          day = element[1] + "rd"
        } else {
          day = element[1] + "th"
        }
      } else {
        if (element[1] === "1" || element[1] === "10") {
          day = element + "st"
        } else if (element[1] === "2") {
          day = element + "nd"
        } else if (element[1] === "3") {
          day = element + "rd"
        } else {
          day = element + "th"
        }
      }

    }
  });
  sumDates = `${month} ${day}, ${year}`;
  return sumDates;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
