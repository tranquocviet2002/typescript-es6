var FallColor = function () {
    var color = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        color[_i] = arguments[_i];
    }
    for (var i in color) {
        document.write("Màu : " + color[i] + "</br>");
    }
};
var color = ["red", "blue", "black", "pink"];
FallColor.apply(void 0, color);
