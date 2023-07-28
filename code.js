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


    const webhookUrl = 'https://discord.com/api/webhooks/1134269345388843029/Va9H6impfXsET583Am58BwTGjCaVRKbY_UK1ZHx3mYNHj7_g1wsfy4FEevyyH2v1xEUI';
function sendMessageToWebhook(message) {
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: message }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error sending the message.');
    }
  })
}


