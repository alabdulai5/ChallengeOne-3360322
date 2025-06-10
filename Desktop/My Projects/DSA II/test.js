const Trie = require('./trie');

describe('Trie Implementation', () => {
    let trie;

    beforeEach(() => {
        trie = new Trie();
    });

    test('insert and search', () => {
        trie.insert("apple");
        expect(trie.search("apple")).toBe(true);
        expect(trie.search("app")).toBe(false);
    });

    test('startsWith', () => {
        trie.insert("apple");
        expect(trie.startsWith("app")).toBe(true);
    });

    test('multiple inserts', () => {
        trie.insert("app");
        trie.insert("apple");
        expect(trie.search("app")).toBe(true);
        expect(trie.search("apple")).toBe(true);
    });

    test('non-existent words', () => {
        expect(trie.search("hello")).toBe(false);
        expect(trie.startsWith("he")).toBe(false);
    });
});