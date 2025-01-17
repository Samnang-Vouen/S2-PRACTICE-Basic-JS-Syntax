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

### Input and Output
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

### Challenge 2 - Medium

### Task:
Reverse an array.

### Input and Output:

1. **Input:**
   - `array = [14, 15, 16, 20]`

   **Output:**
   ```plaintext
   [20, 16, 15, 14]
   ```
2. **Input:**
   - `array = [5,4,3,2,1]`

   **Output:**
   ```plaintext
   [1,2,3,4,5] 
   ```
3. **Input:**
   - `array = []`

   **Output:**
   ```plaintext
   [] 
   ```
### Challenge 3 - Medium

### Task:
Calculate the average grade from a list of student grades.

### Input and Output:

1. **Input:**
   - `array = [85, 90, 78, 92]`

   **Output:**
   ```plaintext
   86.25
   ```
2. **Input:**
   - `array = [10,20,30]`

   **Output:**
   ```plaintext
   20
   ```
3. **Input:**
   - `array = []`

   **Output:**
   ```plaintext
   0
   ```
### Challenge 4 - Medium

### Task:
Write a function to count how many times a character appears in a string.

### Input and Output:

1. **Input:**
   - `text = "hello world"`
   - `char = 'o'`

   **Output:**
   ```plaintext
   2
   ```
2. **Input:**
   - `text = "aaa bbb a"`
   - `char = 'a'`

   **Output:**
   ```plaintext
   4
   ```
3. **Input:**
   - `text = "abc"`
   - `char = 'd'`

   **Output:**
   ```plaintext
   0
   ```
### Challenge 5 - Hard

### Task:
Count the number of words in a given sentence.

### Input and Output:

1. **Input:**
   - `text = "hello world"`

   **Output:**
   ```plaintext
   2
   ```
2. **Input:**
   - `text = "this is the best day"`

   **Output:**
   ```plaintext
   5
   ```
3. **Input:**
   - `text = "a bb ccc ddddddd e"`

   **Output:**
   ```plaintext
   5
   ```
### Challenge 6 - Hard

### Task:
Simulate a voting system for three candidates (`A`, `B`, and `C`). Count the votes and declare the winner(s).

### Input and Output:

1. **Input:**
   - `votes = ['A', 'B', 'A', 'C', 'A']`

   **Output:**
   ```plaintext
   A is the winner.
   ```
2. **Input:**
   - `votes = [‘A’, ‘B’, ‘B’, ‘C’, ‘A’]`

   **Output:**
   ```plaintext
   A and B are both winners.
   ```
3. **Input:**
   - `votes = []`

   **Output:**
   ```plaintext
   There is not vote yet.
   ```

