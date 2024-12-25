
function createGrid(size){
    const container=document.querySelector("#container");
    container.innerHTML = "";
  
    const squareSize = 500 / size;
    for (let i = 0; i < size * size; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.style.width = `${squareSize}px`;
      gridSquare.style.height = `${squareSize}px`;
      container.appendChild(gridSquare);
  
      gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = randomColor();
      });
    }  
};
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const resetButton=document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    let size = parseInt(prompt("Enter grid size (maximum 100):", 16));
    if (size > 100) {
      alert("Size too large! Setting to 100.");
      size = 100;
    } else if (size < 1 || isNaN(size)) {
      alert("Invalid size! Setting to default (16).");
      size = 16;
    }
    createGrid(size);
});

//Initialisation
createGrid(16);