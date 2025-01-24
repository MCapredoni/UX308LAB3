import { convertMetersToYards } from "../convertMetersToYards.js";

describe("test convertMetersToYards", function() {
    it("tests 275 m", function() {
        let meters = 275;
        let yards = convertMetersToYards(meters);
        expect(yards.toFixed(2)).toBe("251.37");
    });
});