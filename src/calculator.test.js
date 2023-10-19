import calc from "./calculator"

test('add', () => {
    expect(calc.add(1, 1)).toBe(2);
  });
  
  
test('subtract', () => {
    expect(calc.subtract(5, 4)).toBe(1);
});
  
test('divide', () => {
    expect(calc.divide(10, 2)).toBe(5);
});

test('multiply', () => {
    expect(calc.multiply(2, 2)).toBe(4);
    });
      
    