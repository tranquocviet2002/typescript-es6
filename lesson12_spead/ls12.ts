let FallColor = (...color: string[]) => {
    for (let i in color) {
        document.write("Màu : "+color[i]+"</br>");

    }
}


let color = ["red","blue","black","pink"];
FallColor(...color);