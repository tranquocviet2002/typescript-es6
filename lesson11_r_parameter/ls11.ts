let allColor = (...color: string[]) => {
    for (let i in color) {
        console.log(color[i]);

    }
}
allColor("red");
allColor("red","blue");
allColor("red","blue","black");