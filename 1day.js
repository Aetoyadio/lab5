/**
*   Calculate the area of a rectangle.
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length + width) * 2;
    return perimeter;
}


//

function main() {
    const PI = Math.PI;
     let r = readLine();
     // Print the area of the circle:
     let area = PI * r * r;
     console.log(area);
     // Print the perimeter of the circle:
     let perimeter = 2 * PI * r;
     console.log(perimeter);
}

