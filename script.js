// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

//changes background color of the element
function changeColor(cell)
{
    cell.style.backgroundColor = colorSelected;
}

//Checks if grid is fully empty or not
function isEmpty()
{
    if(numCols == 0 && numRows == 0)
    {
        return true;
    }
    return false;
}

//return every columns from grid
function getColumnsFromGrid()
{
    return document.getElementById("grid").getElementsByTagName("td");
}

//Add Single Cell
function addSingleCell()
{
    let row = tb.insertRow();
    let cell = row.insertCell();
    cell.onclick = ()=>{changeColor(cell)};
    numRows++;
    numCols++;
}

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}