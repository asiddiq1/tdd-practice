import reverseString from "./reverseString"

test('reverses cat to tac', () => {
  expect(reverseString("cat")).toBe("tac");
});


test('reverses dog to god', () => {
    expect(reverseString("dog")).toBe("god");
  });

  test('reverses test to tset', () => {
    expect(reverseString("test")).toBe("tset");
  });
  