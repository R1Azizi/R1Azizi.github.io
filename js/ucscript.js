document.getElementById('practice-type').addEventListener('change', function() {
    const practiceType = this.value;

    // Show/hide relevant form fields based on practice type
    document.getElementById('num-digits-group').style.display = practiceType === 'addition' ? 'block' : 'none';
    document.getElementById('num-rows-group').style.display = practiceType === 'addition' ? 'block' : 'none';
    document.getElementById('multi-digits-group').style.display = practiceType === 'multiplication' ? 'block' : 'none';
    document.getElementById('multiplier-digits-group').style.display = practiceType === 'multiplication' ? 'block' : 'none';
    document.getElementById('dividend-digits-group').style.display = practiceType === 'division' ? 'block' : 'none';
    document.getElementById('divisor-digits-group').style.display = practiceType === 'division' ? 'block' : 'none';
});

document.getElementById('practice-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected options
    const practiceType = document.getElementById('practice-type').value;
    const numRows = parseInt(document.getElementById('num-rows').value);
    const problemAmount = parseInt(document.getElementById('problem-amount').value);
    let numDigits, multiplierDigits;

    if (practiceType === 'addition') {
        numDigits = parseInt(document.getElementById('num-digits').value);
    } else {
        numDigits = practiceType === 'multiplication' ? parseInt(document.getElementById('multi-digits').value) :
                    practiceType === 'division' ? parseInt(document.getElementById('dividend-digits').value) : 2;
        multiplierDigits = practiceType === 'multiplication' ? parseInt(document.getElementById('multiplier-digits').value) : undefined;
    }

    // For now, just log the selected options
    console.log("Practice Type:", practiceType);
    console.log("Number of Rows:", numRows);
    console.log("Number of Digits:", numDigits);
    console.log("Multiplier Digits:", multiplierDigits);
    console.log("Problem Amount:", problemAmount);
});

