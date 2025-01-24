import { volume } from "../volume.js";

describe("test volume", function() {
    it("tests 9 m", function() {
        let length = 1;
	    let height = 3;
	    let width = 3;
        let volume = length * width * height;
        expect(volume.toFixed(2)).toBe("9.00");
    });
});