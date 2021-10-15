//program prints out the time every second:

setInterval(function(){
    let d = new Date();                     //code from task
    let time = d.toLocaleTimeString();      //code from task
    console.log(time);                      // code from task
}, 1000);                                   //every second 