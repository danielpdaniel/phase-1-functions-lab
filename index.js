// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber >= 42){
    return (blockNumber - 42);
    } else return (42 - blockNumber);

}

function distanceFromHqInFeet (blockNumber) {

    return (distanceFromHqInBlocks(blockNumber) * 264);

}

function distanceTravelledInFeet(startBlock, endBlock) {
if (startBlock >= endBlock){
    return ((startBlock - endBlock) * 264);
} else {
    return ((endBlock - startBlock) * 264);
}
}

function calculatesFarePrice(start, destination) {
const distanceInFeet = distanceTravelledInFeet(start, destination)
if (distanceInFeet <= 400){
    return 0;
} else if (distanceInFeet > 400 && distanceInFeet <= 2000){
    return ((distanceInFeet-400) * .02);
} else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
} else if (distanceInFeet > 2500) {
    return 'cannot travel that far';
}
}


distanceFromHqInBlocks();
distanceFromHqInFeet();
distanceTravelledInFeet();
calculatesFarePrice();
