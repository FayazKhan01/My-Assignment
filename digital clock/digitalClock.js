function newTime(){

    var date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
    if (hour == 0){
        hour = 12;
    } if (hour > 12 ){
        // hour = hour -  12 ;
        session = "PM";
    }

    // to add " 0 " before seconds ,
    var ss = sec < 10 ? "0" + sec : sec ;
    var mn = min < 10 ? "0" + min : min ;

    var time = hour + ":" + mn + ":" + ss + ":" + session;

    document.getElementById("clock").innerText = time;
    setInterval(() =>  newTime(), 1000);
}
newTime();