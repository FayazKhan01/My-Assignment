function tipCalculator(){
    let billAmount = document.getElementById("billAmount").value; 
    let percentage = document.getElementById("percentage").value; 

    let tip = ( billAmount /100 ) * percentage ;
    document.getElementById("tip").value = tip; 
    let total = tip + Number(billAmount);   
    document.getElementById("total").value = total; 
}
console.log(tipCalculator());
tipCalculator();
