//Take a variable  in **temperature** as input and output as *convert*ed to **humidity**.
function convertTemperatureToHumidity(temperature){
    let humidity = temperature/1.094;
    return humidity;
}

export {convertTemperatureToHumidity}