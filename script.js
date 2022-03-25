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
    if(isEmpty())
    {
        addSingleCell(); //adding a single cell if both columns and rows are zero
        return;
    }
    //Ohterwise adding row
    let row = tb.insertRow();
    for(i = 0; i < numCols; i++)
    {
        let cell = row.insertCell();
        cell.onclick = ()=>{changeColor(cell)}; //Adding onclick event to every new cell
    }    
    numRows++;
}

/// Add a column
function addC() {
    if(isEmpty())
    {
        addSingleCell(); //Adding a single cell if both columns and rows are zero
        return;
    }
    //Ohterwise adding column to every row
    for(i = 0 ; i < numRows; i++)
    {
        let cell = document.createElement("td");
        cell.onclick = ()=>{changeColor(cell)}; //Adding onclick event to every new cell
        tb.rows[i].appendChild(cell); //Adding column to ith row
    }
    numCols++;
}

// Remove a row
function removeR() {
    if(numRows == 0)
    {
        return;
    }
    tb.deleteRow(-1); //removing rows from end
    numRows--;
}

// Remove a column
function removeC() {
    if(numCols == 0)
    {
        return;
    }
    for(i = 0 ; i < numRows; i++)
    {
        tb.rows[i].deleteCell(-1); //removing column from last
    }
    numCols--;
}

// Set global variable for selected colors
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cols = getColumnsFromGrid()
    for(i = 0 ; i < numCols*numRows; i++)
    {
        // Adding color to only uncolored rows
        if(!cols[i].style.backgroundColor) 
        {
            cols[i].style.backgroundColor = colorSelected; 
        }
    }
}

// Fill all cells
function fillAll(){
    let cols = getColumnsFromGrid()
    for(i = 0 ; i < numCols*numRows; i++)
    {
        cols[i].style.backgroundColor = colorSelected;            
    }         
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}