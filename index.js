// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
};

let selectingDrivers = ["", ""];
selectingDrivers[0] = returnFirstTwoDrivers(array);
selectingDrivers[1] = returnLastTwoDrivers(array);
