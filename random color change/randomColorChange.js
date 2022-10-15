
const randomColor = () => {

    const bcolor = Math.floor(Math.random() * 12345668).toString(16);
    if (bcolor == 6){
        return true ;
    }else {
        false;
    }
    document.getElementById('clock').style.backgroundColor = "#" + bcolor;
    let c = "#" + bcolor ;
    document.getElementById("show").innerHTML = c ;
    console.log(c);
}
