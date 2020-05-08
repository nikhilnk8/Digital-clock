dispTime=()=>{
    let time = new Date();
    let hour = time.getHours() % 12 || 12;
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour<10){
        hour="0"+hour;
    }
    if (min<10){
        min="0"+min;
    }
    if (sec<10){
        sec="0"+sec;
    }

    document.getElementById('clock').innerText= hour+" : "+min+" : "+sec;
    setTimeout(dispTime, 1000)
}

dispTime();
