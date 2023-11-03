var person = {
    ma : 10101,
    ten : function(){
        setTimeout(()=>console.log(this.ma)
        ),1000
    },
    age : 21,
}
person.ten();