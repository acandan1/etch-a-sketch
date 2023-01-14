const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      cell.addEventListener('mouseover', (event) => {
        cell.style.backgroundColor = 'black';
      });
      container.appendChild(cell).className = "grid-item";
    };
  };

makeRows(16, 16);

const button = document.getElementById('pop-up');

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

button.addEventListener('click', (event) => {
    openForm();
});


const applyButton = document.getElementById("btn");
applyButton.addEventListener('click', (event) => {
    console.log("hey");
    let inputValue = document.getElementById("inputVal").value;
    if (inputValue <= 100 && inputValue >= 1) {
        makeRows(inputValue, inputValue);
    }
});

