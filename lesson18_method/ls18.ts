class person2{
    constructor(name) {
        this.name = name;
        console.log(`${this.name} Là tên tôi`);
    }
    static talk(){
        console.log('talk method ');
        
    }
    run(){
        console.log('running........');
        
    }

}
// cách dùng 1  :  viết constructor viết trực tiép Tham số
let p2 = new person2("Viet");
// khi khai báo static thì gọi trưc tiếp  
person2.talk();
// nếu gọi run() thì gọi như static
p2.run();



