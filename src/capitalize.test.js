import capitalize from "./capitalize";

test('capitalizes cat to Cat', () => {
  expect(capitalize("cat")).toBe("Cat");
});


test('capitalizes twenty two', () => {
    expect(capitalize("twenty Two")).toBe("Twenty Two");
  });

  test('capitalizes test', () => {
    expect(capitalize("test")).toBe("Test");
  });