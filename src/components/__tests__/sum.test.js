// import { sum } from "../sum";

test("Sum function to calculate the sum of two number", () => {
    const sum = (a, b) => {
        return a+b;
    };
 const result = sum(3, 4);

 //Assertion
 expect(result).toBe(7);

});