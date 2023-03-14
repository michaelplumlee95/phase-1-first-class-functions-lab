// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => {
    return fare => {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, selection) => {
    if (selection === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else if (selection === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}