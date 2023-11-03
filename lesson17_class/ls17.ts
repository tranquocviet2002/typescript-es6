class person{
    run(){
        console.log("runing.......");
    }
    game(){
        document.write("Game ");
    }
}
let p1 = new person();
console.log(p1.run()==person.prototype.run());
