function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');

    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    const convertBtn = document.getElementById('convert');

    let inputUnitInMeters = 0;
    let outputUnitInMeters = 0;

    convertBtn.addEventListener('click', () => {

        switch (inputUnits.value) {
            case 'km':
                inputUnitInMeters = 1000;
                break
            case 'm':
                inputUnitInMeters = 1;
                break;
            case 'cm':
                inputUnitInMeters = 0.01;
                break;
            case 'mm':
                inputUnitInMeters = 0.001;
                break;
            case 'mi':
                inputUnitInMeters = 1609.34;
                break;
            case 'yrd':
                inputUnitInMeters = 0.9144;
                break;
            case 'ft':
                inputUnitInMeters = 0.3048;
                break;
            case 'in':
                inputUnitInMeters = 0.0254;
                break;
        }
        switch (outputUnits.value) {
            case 'km':
                outputUnitInMeters = 1000;
                break
            case 'm':
                outputUnitInMeters = 1;
                break;
            case 'cm':
                outputUnitInMeters = 0.01;
                break;
            case 'mm':
                outputUnitInMeters = 0.001;
                break;
            case 'mi':
                outputUnitInMeters = 1609.34;
                break;
            case 'yrd':
                outputUnitInMeters = 0.9144;
                break;
            case 'ft':
                outputUnitInMeters = 0.3048;
                break;
            case 'in':
                outputUnitInMeters = 0.0254;
                break;
        }

        let fIn = (inputDistance.value * inputUnitInMeters);
        let sIn = (outputUnitInMeters);

        outputDistance.value = (fIn / sIn);

    })

}