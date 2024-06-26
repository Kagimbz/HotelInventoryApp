import { Calculator } from "./calc"

describe('calc', () => {
    it('should add 2 numbers', () => {
        const calc = new Calculator();
        expect(calc.add(2, 4)).toBe(6);
    })
})