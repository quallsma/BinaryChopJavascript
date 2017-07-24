import { expect } from 'chai';
import { binaryChop } from '../src/main';

describe("Binary Chop function", () => {
    describe("Error Handling", () => {
        it("should return -1 for empty array", () => {
            expect(binaryChop(0, [])).to.equals(-1);
        });

        it("should return -1 for number not in array", () => {
            expect(binaryChop(3, [1])).to.equals(-1);
        });
    });

    describe("Return index of given number in array", () => {
        it("should return 0 for single item in array matching number", () => {
            expect(binaryChop(1, [1])).to.equals(0);
        });
        it("should return 1 for middle element in array", () => {
            expect(binaryChop(2, [1, 2, 3])).to.equals(1);
        });
        it("should return 2 for last element in array", () => {
            expect(binaryChop(3, [1, 2, 3])).to.equals(2);
        });
    });
});