var allColor = function (message) {
    var color = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        color[_i - 1] = arguments[_i];
    }
    for (var i in color) {
        console.log(color[i]);
    }
};
allColor("red");
allColor("red", "blue");
allColor("red", "blue", "black");
var messageSpread = "hello";
var color = ["red", "blue", "black"];
