
var apracticeType = document.getElementById('practice-type');
var delaytime;

function numDigits() {
    // Get the selected value and update numDigits
    return parseInt(document.getElementById('num-digits').value);
}

function numRows() {
    // Get the selected value and update numDigits
    return parseInt(document.getElementById('num-rows').value);
}

function problemAmount() {
    // Get the selected value and update numDigits
    return parseInt(document.getElementById('problem-amount').value);
}

function level() {
    // Get the selected value and update numDigits
    return document.getElementById('level-select').value;
}

document.getElementById('start-button').addEventListener('click', function(event) {
    // Prevent the default button click behavior
    event.preventDefault();

    // Hide the form
    document.getElementById('practice-form').style.display = 'none';
    document.getElementById('moz').style.display = 'none';

    // Change the background color of the page to white
    document.body.style.backgroundColor = 'white';

    // Show the footer
    document.getElementById('footer').style.display = 'block';

    startCountdown(3000, function() {
        // Callback function executed after countdown ends
        startQ(); // Start the Q after countdown ends
    });
});

document.getElementById('stop-button').addEventListener('click', function(event) {
    // Prevent the default button click behavior
    event.preventDefault();

    // Reload the page to reset to initial state
    location.reload();
});

var twoDigitNumbers = [];
var oneDigitNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var threeDigitNumbers = [];

for (var i = 100; i <= 999; i++) {
    // Push each number to the array
    threeDigitNumbers.push(i);
}

for (var i = 10; i <= 99; i++) {
    // Push each number to the array
    twoDigitNumbers.push(i);
}

function giveNumber() {
    
    if (numDigits() == 2){
        var randomIndex = Math.floor(Math.random() * twoDigitNumbers.length);
        var randomNumber = twoDigitNumbers[randomIndex];
        var result = randomNumber * updateRandomSign();
    }
    if (numDigits() == 3){
        var randomIndex = Math.floor(Math.random() * threeDigitNumbers.length);
        var randomNumber = threeDigitNumbers[randomIndex];
        var result = randomNumber * updateRandomSign();
    }
    if (numDigits() == 1){
        var randomIndex = Math.floor(Math.random() * oneDigitNumbers.length);
        var randomNumber = oneDigitNumbers[randomIndex];
        var result = randomNumber * updateRandomSign();
    }
    

    return result;
}

var randomSign;

// Function to update the sign with a 25% chance for -1
function updateRandomSign() {
    // Generate a random number between 0 and 1
    var randomNum = Math.random();

    // If the random number is less than or equal to 0.25, set the sign to -1,
    // otherwise set it to 1
    if (randomNum <= 0.15) {
        return -1;
    } else {
        return 1;
    }
}

function startCountdown(duration, callback) {
    var timerDisplay = document.getElementById('timer');
    var startTime = new Date().getTime(); // Get the current time in milliseconds
    var endTime = startTime + duration; // Calculate the end time

    // Update the timer display every millisecond until the end time is reached
    var interval = setInterval(function() {
        // Calculate the remaining time
        var currentTime = new Date().getTime();
        var remainingTime = endTime - currentTime;

        // If the remaining time is less than or equal to 0, stop the timer and execute the callback
        if (remainingTime <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = ""; // Clear the display
            timerDisplay.style.display = "none"; // Hide the display
            if (callback) {
                callback(); // Execute the callback function
            }
            return;
        }

        // Convert remaining time to seconds and milliseconds
        var seconds = Math.floor(remainingTime / 1000);
        var milliseconds = remainingTime % 1000;

        // Add leading zeros if necessary
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(3, '0');

        // Update the timer display
        timerDisplay.textContent = seconds + ":" + milliseconds;
    }, 1); // Update every millisecond
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function startQ() {
    document.getElementById('number-container').style.display = 'block';

    // Set the delay time based on the selected level
    if (level() == 'easy') {
        delaytime = 1700;
    } else if (level() == 'normal') {
        delaytime = 1000;
    } else if (level() == 'hard') {
        delaytime = 600;
    } else if (level() == 'expert') {
        delaytime = 450;
    }

    var numIterations = numRows();
    var count = 0;
    var sum = 0;
    var prcount = 0;

    // Function to display the next problem
    function displayNextProblem() {
        if (prcount < problemAmount()) {
            // Display the numbers for the current problem
            displayNextNumber();
        }
    }

    // Function to display the next number for the current problem
    function displayNextNumber() {
        if (count < numIterations) {
            document.getElementById('timer').style.display = 'none';
            document.getElementById('number-container').style.display = 'block';
            var number = giveNumber();
            document.getElementById("number-container").textContent = number;
            sum += number; // Accumulate the sum
            count++;
            setTimeout(displayNextNumber, delaytime);
        } else {
            // Hide the number container and show the timer
            document.getElementById('number-container').style.display = 'none';
            document.getElementById('timer').style.display = 'block';

            // Start the countdown for 3 seconds
            startCountdown(3000, function() {
                // Hide the timer and show the sum
                document.getElementById('timer').style.display = 'none';
                document.getElementById('number-container').style.display = 'block';
                document.getElementById('number-container').textContent = sum;

                sleep(2000).then(() => {
                    document.getElementById('number-container').style.display = 'none';
                    document.getElementById('timer').style.display = 'block';
                });

                startCountdown(3000, function() {
                    prcount++;
                    sum = 0; // Reset the sum for the next problem
                    count = 0; // Reset the count for the next problem
                    displayNextProblem();
                    });
            });
        }
    }

    // Start displaying problems
    displayNextProblem();
}



