// Code your solution in this files
let selectedDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}
console.log(returnFirstTwoDrivers(selectedDrivers));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
}

console.log(returnLastTwoDrivers(selectedDrivers));


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers[0]);
console.log(selectingDrivers[1]);

function createFareMultiplier(integer) {
   return function (fare) {
    return fare * integer
    }
}

console.log(createFareMultiplier(2)(4));

const fareDoubler = function (integer) {
   return createFareMultiplier(2)(integer)
}

console.log(fareDoubler(5));

const fareTripler = function (integer) {
    return createFareMultiplier(3)(integer)
 }

 console.log(fareTripler(5));

 function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
 }