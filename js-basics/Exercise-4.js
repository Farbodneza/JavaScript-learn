function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit)
        console.log('ok');
    else {
        let point = Math.floor((speed - speedLimit) / 5);
        if (point >= 12)
            console.log('License suspended');
        else
            console.log(point);
    }
}

checkSpeed(78);