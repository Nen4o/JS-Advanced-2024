function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', ()=>{
        let hours = daysInput.value * 24;
        let minutes = daysInput.value * 1440;
        let seconds = daysInput.value * 86400;

        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    })

    hoursBtn.addEventListener('click', ()=>{
        let days = hoursInput.value / 24;
        let minutes = hoursInput.value * 60;
        let seconds = minutes * 60;

        daysInput.value = days;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    })

    minutesBtn.addEventListener('click', ()=>{
        let days = minutesInput.value / 1440;
        let hours = minutesInput.value / 60;
        let seconds = minutesInput.value * 60;

        daysInput.value = days;
        hoursInput.value = hours;
        secondsInput.value = seconds;

    })
    
    secondsBtn.addEventListener('click', ()=>{
        let days = secondsInput.value / 86400;
        let hours = secondsInput.value / 3600;
        let minutes = secondsInput.value / 60;

        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
    })
}