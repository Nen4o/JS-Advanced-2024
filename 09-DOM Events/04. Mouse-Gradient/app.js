function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (event)=>{
        let clientWidth = event.currentTarget.clientWidth;
        let offsetX = event.offsetX;
        console.log(clientWidth);
        console.log(offsetX);

        if(offsetX < 0){
            offsetX = 0;
        }

        let percent = Math.floor((offsetX / clientWidth) * 100);
        result.textContent = percent +'%';
    })
}