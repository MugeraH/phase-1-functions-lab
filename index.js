function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  let res = distanceFromHqInBlocks(distance);

  return res * 264;
}

function distanceTravelledInFeet(distance, destination) {
  if (distance > destination) {
    return (distance - destination) * 264;
  }
  return (destination - distance) * 264;
}

function calculatesFarePrice(start, destination) {
  let res = distanceTravelledInFeet(start, destination);

  if (res > 2500) {
    return "cannot travel that far";
  }

  if (res < 400) {
    return 0;
  } else if (res >= 400 && res <= 2000) {
    return (res - 400) * 0.02;
  } else {
    return 25;
  }
}
