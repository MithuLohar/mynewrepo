function Clock() {
    setInterval(() => {
        var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
   var time=`
   <h1> ${hour}:${min}:${sec}</h1>`;
   document.getElementById("template").innerHTML=time;
    }, 1000);
}
Clock();

// setTimeout(() => {
//     console.log("hello time");
// }, 5000);
// setInterval(() => {
//     Clock();
// }, 1000);  
