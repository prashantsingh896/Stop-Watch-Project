//variable for holding timer ID
var time = null;
// Ref variable for timer element
var clockRef = document.getElementById('clock');
//minutes and seconds var
var minutes = 0;
var seconds = 0;


/* this block of code selects the element with ID start from DOM and add a even listner 
    and when this element isclicked it starts a timer */
document.getElementById('start').addEventListener('click', ()=>{
    time = setInterval(update,1000);
});


//getting html element with ID stop from DOM and adding even listner to stop time by clearing timer ID when clicked
document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(time);
});

//resetting the timer and setting minutes and seconds variables to 0
document.getElementById('reset').addEventListener('click', ()=>{
    clockRef.innerHTML= "00 : 00";
    minutes=0;
    seconds=0;
    clearInterval(time);
});


//this function is called every 1 second by setTimeInterval, it updates minute and second values and displays on the screen
function update(){

    seconds++;
    //increase minute if seconds reaches 60
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    //reset the clock
    if(minutes==60){
        minutes=0;
        seconds=0;
    }
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    clockRef.innerHTML = ` ${min} : ${sec} `;

}