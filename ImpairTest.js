import { expect } from "chai";
import { describe, it } from "mocha";

describe("Oddnum", () => {
    it("should return the only number who doesn't repeat less thant twice", () => {
        expect(oddnum([1,1,2,2,3,4,4])).to.equal(3)
    })
    it("should return the only number who doesn't repeat less thant twice", () => {
        expect(oddnum([0])).to.equal(0)
    })
})