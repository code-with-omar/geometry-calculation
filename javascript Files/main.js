//convert string to number. This function only Triangle and Rectangle
let count = 0;
function transferInteger(event) {
    const stringValue = event.value;
    const tringToInt = parseFloat(stringValue);
    return tringToInt;
}
// convert string to number. This function is used Parallelogram,Rhombus,Pentagon and Ellipse

function transferIntegerValue(event) {
    const stringValue = event.innerText;
    const tringToInt = parseFloat(stringValue);
    return tringToInt;
}
// Area calculate 
function areaCalculate(value1, value2) {
    return value1 * value2;
}
// target triangle
document.getElementById('calculate-triangle').addEventListener('click', () => {
    //find base
    const triangleBase = document.getElementById('triangle-base');
    //call transferInteger() function for convert string to integer
    const triangleBaseValue = transferInteger(triangleBase);

    const triangleHeight = document.getElementById('triangle-height');
    //call transferInteger() function for convert string to integer
    const triangleHeightValue = transferInteger(triangleHeight);
    //called area function for calculate area

    const triangleAreaCalculate = areaCalculate(triangleBaseValue, triangleHeightValue);
    console.log(triangleAreaCalculate)
    const triangle = 0.5 * triangleAreaCalculate;

    displayArea('Triangle', triangle)
})

// same procedure in above calculate-triangle
document.getElementById('calculate-rectangle').addEventListener('click', () => {
    const rectangleBase = document.getElementById('rectangle-weight');
    const rectangleBaseValue = transferInteger(rectangleBase);


    const rectangleHeight = document.getElementById('rectangle-lenght');
    const rectangleHeightValue = transferInteger(rectangleHeight);

    const rectangleAreaCalculate = areaCalculate(rectangleBaseValue, rectangleHeightValue);
    displayArea('Rectangle', rectangleAreaCalculate)
})

document.getElementById('calculate-parallelogram').addEventListener('click', () => {
    const parallelogramBase = document.getElementById('parallelogram-weight');
    const parallelogramBaseValue = transferIntegerValue(parallelogramBase);


    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightValue = transferIntegerValue(parallelogramHeight);

    const parallelogramAreaCalculate = areaCalculate(parallelogramBaseValue, parallelogramHeightValue);
    displayArea('Parallelogram', parallelogramAreaCalculate)
})

document.getElementById('calculate-rhombus').addEventListener('click', () => {
    const rhombusDiagonalOne = document.getElementById('rhombus-digonal-one');
    const rhombusDiagonalOneValue = transferIntegerValue(rhombusDiagonalOne);


    const rhombusDiagonalTwo = document.getElementById('rhombus-digonal-two');
    const rhombusDiagonalTwoValue = transferIntegerValue(rhombusDiagonalTwo);


    const rhombusAreaCalculate = areaCalculate(rhombusDiagonalOneValue, rhombusDiagonalTwoValue);
    const finalArea = 0.5 * rhombusAreaCalculate;

    displayArea('Rhombus', finalArea)

})
document.getElementById('calculate-pentagon').addEventListener('click', () => {
    const pentagonHeight = document.getElementById('pentagon-height');
    const pentagonHeightValue = transferIntegerValue(pentagonHeight);

    const pentagonBase = document.getElementById('pentagon-base');
    const pentagonBaseValue = transferIntegerValue(pentagonBase);

    const pentagonAreaCalculate = areaCalculate(pentagonHeightValue, pentagonBaseValue);
    const finalArea = 0.5 * pentagonAreaCalculate
    displayArea('Pentagon', finalArea)

})

document.getElementById('calculate-ellipse').addEventListener('click', () => {
    const ellipseBase = document.getElementById('ellipse-base');
    const ellipseBaseValue = transferIntegerValue(ellipseBase);

    const ellipseWeight = document.getElementById('ellipse-weight');
    const ellipseWeightValue = transferIntegerValue(ellipseWeight);

    const ellipseAreaCalculate = areaCalculate(ellipseBaseValue, ellipseWeightValue);
    const finalArea = 3.1416 * ellipseAreaCalculate;

    displayArea('Ellipse', finalArea)

})
// Complete calculate here

//Area calculation display
function displayArea(name, area) {
    const calculationFullArea = document.getElementById('calculate-full-area');
    const p = document.createElement('p');
    count = count + 1;
    p.innerHTML = `${count}.<span class="ms-3"></span> ${name}  ${area} <span> cm<sup>2</sup></span> <button class="btn btn btn-success ms-5">Convert</button>`;

    calculationFullArea.appendChild(p);
}