function countCharacter(text, char) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }

    return count;
}

console.log("Write a function to count how many times a character appears in a string:");

console.log("Text = \"hello world\" Char = 'o' ");
console.log("Count: ", countCharacter("hello world", 'o'));

console.log("Text = \"aaa bbb a\" Char = 'a' ");
console.log("Count: ", countCharacter("aaa bbb a", 'a'));

console.log("Text = \"abc\" Char = 'd' ");
console.log("Count: ", countCharacter("abc", 'd'));
