function calculateCountdown() {
    var eventName = document.getElementById("eventName").value;
    var eventDate = new Date(document.getElementById("eventDate").value);
    var currentDate = new Date();
    
    var difference = eventDate.getTime() - currentDate.getTime();
    
    var daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "";
    if (daysLeft === 0) {
      countdownElement.textContent = "Today is the day of " + eventName + "!";
    } 
    else if (daysLeft > 0) {
      countdownElement.textContent = "There are " + daysLeft + " days left until " + eventName + ".";
    } 
    else {
      countdownElement.textContent = eventName + " has already passed.";
    }
}