var person2 = /** @class */ (function () {
    function person2(name) {
        this.name = name;
        console.log("".concat(this.name, " L\u00E0 t\u00EAn t\u00F4i"));
    }
    person2.talk = function () {
        console.log('talk method ');
    };
    person2.prototype.run = function () {
        console.log('running........');
    };
    return person2;
}());
// cách dùng 1  :  viết constructor viết trực tiép Tham số
var p2 = new person2("Viet");
person2.talk();
p2.run();
