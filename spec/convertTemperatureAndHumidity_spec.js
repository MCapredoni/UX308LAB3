//import { convertTemperatureAndHumidity } from '../convertTemperatureAndHumidity.js'

describe("Test clothing for the weather", function() {
    it("Test clothing for the weather", function() {
        let temperature = -10;
	    let humidity = 90.00;
        let clothing = temperature + humidity;
        if (temperature + humidity >= 80.00){
            clothing = "Winter Jacket";
        }   
        expect(clothing).toBe("Winter Jacket");
    });
  });
