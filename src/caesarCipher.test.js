import caesarCipher from "./caesarCipher";

test('cipher cat', () => {
    expect(caesarCipher("cat", 1)).toBe("dbu");
  });
  
  
test('cipher dog', () => {
    expect(caesarCipher("dog", 2)).toBe("fqi");
    });
  
test('cipher attack', () => {
    expect(caesarCipher("attack", 3)).toBe("dwwdfn");
});

test('cat punctuation', () => {
    expect(caesarCipher("cat!", 1)).toBe("dbu!");
});

test('cat case sensitive', () => {
    expect(caesarCipher("Cat!", 1)).toBe("dbu!");
});

test('test z to a', () => {
    expect(caesarCipher("zebra", 1)).toBe("afcsb");
});

