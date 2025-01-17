# S2-PRACTICE-Basic-JS-Syntax
### Code Challenges 

### Introduction

Good job! You’ve learned the basic syntax of JavaScript. Now, it's time to solve some problems and enhance your skills.

Each challenge is structured the same way:

- **Goal**: What the function should accomplish
- **Inputs**: The parameters that the function accepts
- **Output**: The return value of the function

### Example: Challenge 1

In this example, you will create a function that generates a rectangle string based on the given width and height.

```js
function challenge1(width, height) {
  let rectangleString = '';
  // Your code goes here
  return rectangleString;
}
```
### Challenge 1 - Easy

### Task:
Draw a rectangle in the console using stars (`*`).

### Input:

- `width` (number): The width of the rectangle (positive integer).
- `height` (number): The height of the rectangle (positive or negative integer).

### Output:

- The function should output a rectangle made of stars (`*`) based on the `width` and `height`.

### Example:

1. **Input**:
   - `width = 3`
   - `height = 4`

   **Output**:
   ```plaintext
   ***
   ***
   ***
   ***
   ```
2. **Input**:
   - `width = 5`
   - `height = 2`

   **Output**:
   ```plaintext
   *****
   ***** 
   ```
3. **Input**:
   - `width = 5`
   - `height = -2`

   **Output**:
   ```plaintext
   
   ```
### Solution:
```js
function challenge1(width, height) { 

    let rectangleString = ''; 
    
     // Your code 
    if (width <= 0 || height <= 0) {
        return rectangleString;
    }
    for (let i = 0; i < height; i++) {
        rectangleString += '*'.repeat(width) + '\n';
    }
     return rectangleString; 
}
console.log("Draw a rectangle in the console using stars:");

console.log("width: 3  height: 4");
console.log(challenge1(3, 4)); 

console.log("width: 5  height: 2");
console.log(challenge1(5, 2)); 

console.log("width: 5  height: -2");
console.log(challenge1(5, -2)); 
```
