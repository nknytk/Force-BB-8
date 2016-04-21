exports.now = function () {
  return new Date().getTime();
}

exports.getDegrees = function (x, y) {
  angleDegrees = Math.atan(y/x) * 180 / Math.PI;
  if (x < 0) {
    angleDegrees = 180 + angleDegrees;
  } else if (x > 0 && y < 0) {
    angleDegrees = 360 + angleDegrees;
  }
  return angleDegrees;
}

exports.spheroDegrees = function(degree) {
  if (sdegree < 90) {
    var sdegree = 90 -degree
  } else {
    var sdegree = 450 -degree
  }
  return sdegree
}
