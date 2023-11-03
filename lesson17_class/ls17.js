var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.run = function () {
        console.log("runing.......");
    };
    person.prototype.game = function () {
        document.write("Game ");
    };
    return person;
}());
var p1 = new person();
console.log(p1.run() == person.prototype.run());
