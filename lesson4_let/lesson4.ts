
//cách viết này : biến let không thực thi được vì nó cần phải trong vùng của nó mới gọi được
// chỉ có var

var b = 1;
let c = 2;

if(b==1){
    var b = 10;
    let c = 20;
}
console.log(b);
console.log(c);



// cách viết ts
// cách viết này ưu tiên  hơn vì dễ sửa lỗi dễ code
function age(num: string) {
    let a = 10;

    if (num === `${a}`) {
        document.write("số truyền vào bằng số A")
    }
    else {
        document.write("số truyền vào Khác số A")
    }
}
age(`10`);