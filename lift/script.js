function moveLift(floor) {
    const lift = document.getElementById("lift");

    const floorPositions = {
        'G': 0,
        '1': 85,
        '2': 170,
        '3': 255
    };

    lift.style.bottom = floorPositions[floor] + "px";
}
