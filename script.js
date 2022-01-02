NetworkTables.addWsConnectionListener(function (connected) {
    console.log("Websocket connected: " + connected);
}, true);

NetworkTables.addRobotConnectionListener(function (connected) {
    console.log("Robot connected: " + connected);
}, true);

NetworkTables.addGlobalListener(function (key, value, isNew) {
    // console.log(key)
    // element = document.getElementById(key);
    // element.innerText = value;
}, true);

setInterval(() => {
        console.log(NetworkTables.getRobotAddress());
        console.log("/SmartDashboard/drivetrain-command")
        document.getElementById("drivetrain_command").innerHTML = NetworkTables.getValue("/SmartDashboard/drivetrain-command");
        document.getElementById("drivetrain_rotation").innerHTML = NetworkTables.getValue("/SmartDashboard/drivetrain-rotation");
        document.getElementById("drivetrain_pose").innerHTML = NetworkTables.getValue("/SmartDashboard/drivetrain-pose");
        document.getElementById("game_time").innerHTML = NetworkTables.getValue("/SmartDashboard/game-time");
        document.getElementById("game_alliance").innerHTML = NetworkTables.getValue("/SmartDashboard/game-alliance");
        document.getElementById("game_period").innerHTML = NetworkTables.getValue("/SmartDashboard/game-period");
    },
    100)

// loadCameraOnConnect({
//     container: '#camera',
//     port: 5800,
//     image_url: '/?action=stream',
//     data_url: '/program.json',
//     attrs: {
//         width: 640,
//         height: 480
//     }
// });
// loadCameraOnConnect({
//     container: '#detections',
//     port: 5800,
//     image_url: '/?action=stream',
//     data_url: '/program.json',
//     attrs: {
//         width: 640,
//         height: 480
//     }
// });