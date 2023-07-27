function findDivisors(number) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  
function submitData() {
    const numberInput = document.getElementById("numberInput");
    const inputValue = numberInput.value;
    const divisorsList = findDivisors(inputValue);
    document.getElementById("output").innerText = "شمارنده های عدد : " +divisorsList;
    }