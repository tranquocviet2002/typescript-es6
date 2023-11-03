var AraayColor= ["red","Blue","pink","green"];

// Dùng bình thường
// in là dùng lấy index của mảng, muốn lấy nọi dung thì cần log mảng rồi tới index
for(let indext in AraayColor){
    console.log(AraayColor[indext]);
    
}
 
 console.log("-----------Dùng OF-----------------");
// cách dùng lấy nội dung mảng dùng of
for(let item of AraayColor){
    console.log(item);
    
}
console.log("-----------Dùng OF tách lấy từ chữ thành mảng-----------------");

var name2 = "Việt";
for(let char of name2){
    console.log(char);
    
}