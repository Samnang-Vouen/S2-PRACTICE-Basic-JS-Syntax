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