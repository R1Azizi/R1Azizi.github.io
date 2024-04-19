const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const inputY = document.getElementById('inputY');
const radioX = document.getElementById('radioX');
const radioY = document.getElementById('radioY');
const equationText = document.getElementById('equation');
const coordinatesText = document.getElementById('coordinates');

function updateEquation() {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const y = parseFloat(inputY.value);

    if (!isNaN(a) && !isNaN(b)) {
        equationText.textContent = `y = ${a}x + ${b}`;
        
        const xCoordinate1 = 0;
        const yCoordinate1 = b;
        const xCoordinate2 = (b === 0) ? 0 : -b/a; 

        coordinatesText.innerHTML = `[ x: ${xCoordinate1}, y: ${yCoordinate1} ] : طول از مبدا <br>[ x: ${xCoordinate2}, y: 0 ] : عرض از مبدا `;

    } else {
        equationText.textContent = "y = ax + b";
        coordinatesText.innerHTML = "[ x: 0, y: 0 ] : طول از مبدا <br>[ x: 0, y: 0 ] : عرض از مبدا ";
    }

    if (!isNaN(y) && radioY.checked) {
        equationText.textContent = equationText.textContent.replace(/y/g, y);
        
        
        const x = (!isNaN(a) && a !== 0) ? (y - b) / a : "Undefined";
        coordinatesText.innerHTML += `<br>x = ${x}`;
    }

    if (!isNaN(parseFloat(inputY.value)) && radioX.checked) {
        const newX = !isNaN(a) ? a * parseFloat(inputY.value) : "Undefined";
        equationText.textContent = equationText.textContent.replace(/(\d+)x/g, newX);
        const newpX = parseFloat(inputY.value);
        const newY = a * newpX + b;
        coordinatesText.innerHTML += `<br>y = ${newY}`;
    }
    
}


inputA.addEventListener('input', updateEquation);
inputB.addEventListener('input', updateEquation);
inputY.addEventListener('input', updateEquation);

radioX.addEventListener('change', function() {
    if (radioX.checked) {
        inputY.value = "";
        coordinatesText.innerHTML = "[ x: 0, y: 0 ] : طول از مبدا <br>[ x: 0, y: 0 ] : عرض از مبدا ";
        updateEquation();
    }
});

radioY.addEventListener('change', function() {
    if (radioY.checked) {
        inputY.value = "";
        equationText.textContent = "y = ax + b";
        updateEquation();
    }
});


