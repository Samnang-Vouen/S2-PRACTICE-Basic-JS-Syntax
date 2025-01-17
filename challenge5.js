function countWords(text) {
    let words = text.trim().split(/\s+/);
    /* split(/\s+/) splits the string by one or more spaces (using the regular expression \s+).
    trim() ensures that any leading or trailing spaces are removed before splitting. */
    return words.length;
}

console.log("Write a function to count the number of words in a sentence:");

console.log("Text = \"hello world\"");
console.log("Word Count: ", countWords("hello world"));

console.log("Text = \"this is the best day\"");
console.log("Word Count: ", countWords("this is the best day"));

console.log("Text = \"a bb ccc ddddddd e\"");
console.log("Word Count: ", countWords("a bb ccc ddddddd e"));
