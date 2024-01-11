let hoursEl=document.querySelector('#hour');
let minutesEl=document.querySelector('#minutes');
let secondsEL=document.querySelector('#seconds');
let ampmEl=document.querySelector('#ampm');

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s= new Date().getSeconds()
    let apmpm= 'AM'

    if(h> 12){
        h = h - 12
        apmpm ='PM'

    }else{

        apmpm='AM'
    }

    hoursEl.innerHTML=h;
    minutesEl.innerHTML=m;
    secondsEL.innerHTML=s;
    ampmEl.innerHTML=apmpm;

    setTimeout(() => {
        updateClock()
    },1000)
}

updateClock()








