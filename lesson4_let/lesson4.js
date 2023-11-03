//cách viết bị lỗi
var b = 1;
var c = 2;
if (b == 1) {
    var b = 10;
    var c_1 = 20;
}
console.log(b);
console.log(c);
// cách viết ts
function age(num) {
    var a = 10;
    if (num === "".concat(a)) {
        document.write("số truyền vào bằng số A");
    }
    else {
        document.write("số truyền vào Khác số A");
    }
}
age("10");
