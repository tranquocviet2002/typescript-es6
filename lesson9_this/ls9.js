var person = {
    ma: 10101,
    ten: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.ma); }), 1000;
    },
    age: 21,
};
person.ten();
