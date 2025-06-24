console.log("testing")
const container = document.querySelector("#container")
container.style.display = "flex"
container.style.width= "1250px"
container.style.height = "1250px"
container.style.flexWrap = "wrap"

function getrandomcolor(){
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);  
  return `rgb(${a},${b},${c})`;
}

function createGrid(gridSize) {
  container.innerHTML = ""; // this removes previous grids
  const heightwidth = 1250 / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.style.width = heightwidth + 'px';
    square.style.height = heightwidth + 'px';
    square.style.boxSizing = 'border-box';
    square.style.border = '1px solid black';
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getrandomcolor(); 
    });
    container.appendChild(square);
  }
}
createGrid(16)

const btn = document.getElementById('btn'); 
btn.addEventListener('click', () => {
  let newsize = prompt("Enter a new grid size (1-100) (default is 16):");
  newsize = parseInt(newsize);
  if (isNaN(newsize) || newsize < 1 || newsize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  createGrid(newsize);
});

