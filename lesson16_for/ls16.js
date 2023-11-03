var AraayColor = ["red", "Blue", "pink", "green"];
// Dùng bình thường
// in là dùng lấy index của mảng, muốn lấy nọi dung thì cần log mảng rồi tới index
for (var indext in AraayColor) {
    console.log(AraayColor[indext]);
}
console.log("-----------Dùng OF-----------------");
// cách dùng lấy nội dung mảng dùng of
for (var _i = 0, AraayColor_1 = AraayColor; _i < AraayColor_1.length; _i++) {
    var item = AraayColor_1[_i];
    console.log(item);
}
console.log("-----------Dùng OF tách lấy từ chữ thành mảng-----------------");
var name2 = "Việt";
for (var _a = 0, name2_1 = name2; _a < name2_1.length; _a++) {
    var char = name2_1[_a];
    console.log(char);
}
