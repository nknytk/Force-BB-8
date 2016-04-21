var sphero = require("sphero");
var leapjs = require("leapjs");
var util = require("./util");

var rollDistance = 10;
var checkInterval = 100;
var palmPosition = [];
var bb8 = sphero("<YOUR_BB-8's_BLE_ADDRESS>"); // change BLE address accordingly


// Continuously update palm position with Leap Motion
var updatePalmPosition = function (frame) {
  if (frame.hands.length < 1) {
    palmPosition = [];
    return null;
  }

  var position = frame.hands[0].palmPosition;
  var x = position[0];
  var y = -position[2];
  var angleDegrees = util.getDegrees(x, y);
  palmPosition = [x, y, angleDegrees];
}
leapjs.loop({enableGestures: false}, updatePalmPosition);


// Move bb8 to palm direction
var moveToPalmDirection = function () {
  if (palmPosition.length < 3) {
    bb8.stop();
  } else {
    var direction = palmPosition[2];
    console.log(palmPosition);
    bb8.roll(rollDistance, util.spheroDegrees(direction));
  }
}

// Change color to red after collision for 1 sec
var redAtCollision = function (data) {
  console.log("Detected collision:");
  console.log(data);

  var currentTime = util.now();
  if (currentTime > this.last_collision + 1000) {
    bb8.color("red");
    this.last_collision = currentTime;
    setTimeout(function() {bb8.color("green")}, 1000);
  }
}
redAtCollision.last_collision = 0;

// Sleep BB8 when exiting
process.on('exit', function () {
  bb8.sleep(null);
});


// Start
bb8.connect(function() {
  bb8.color("green");
  bb8.on('collision', redAtCollision);
  setInterval(moveToPalmDirection, checkInterval);
});

