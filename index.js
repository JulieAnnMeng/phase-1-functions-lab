// Code your solution in this file!
const scubersHq = 42;
const blockFeet = 264;

function distanceFromHqInBlocks(block) {
    return Math.abs(scubersHq - block);
}

function distanceFromHqInFeet(block) {
    let feetTotal = distanceFromHqInBlocks(block) * blockFeet;
    return feetTotal;
}

function distanceTravelledInFeet(start, destination) {
    let blocksTraveled = Math.abs(start - destination);
    let feetTraveled = blocksTraveled * blockFeet;
    return feetTraveled
}

function calculatesFarePrice(start, destination){
    let farePrice;
    let feetTraveled = distanceTravelledInFeet(start, destination);

    if (feetTraveled <= 400){
        farePrice = 0;
    } else if (feetTraveled > 400 && feetTraveled < 2000) {
        farePrice = (feetTraveled - 400) * .02;
    } else if (feetTraveled > 2000 && feetTraveled < 2500) {
        farePrice = 25;
    } else {farePrice = 'cannot travel that far'}

    return farePrice
}