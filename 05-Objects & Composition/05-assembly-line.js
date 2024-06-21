function createAssemblyLine() {
    let result = {

        hasClima(object) {
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
        },
        hasAudio(object) {
            object.currentTrack = {
                name: null,
                artist: null
            }
            object.nowPlaying = function () {
                console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
            }
        },
        hasParktronic(object){
            object.checkDistance = function(distance){
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance <= 0.1 || distance < 0.25) {
                    console.log("Beep! Beep!");
                } else {
                    console.log("Beep!");
                }
            }
        }

    }

    return result;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);