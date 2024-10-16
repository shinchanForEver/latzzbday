function updateTimer() {
    // Define the start date (October 2, 2024)
    const startDate = new Date("2023-12-16T17:30:00"); 

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - startDate;

    // Convert the time difference into days, hours, minutes, and seconds
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const millisecondsInAnHour = 1000 * 60 * 60;
    const millisecondsInAMinute = 1000 * 60;

    const days = Math.floor(timeDifference / millisecondsInADay);
    const hours = Math.floor((timeDifference % millisecondsInADay) / millisecondsInAnHour);
    const minutes = Math.floor((timeDifference % millisecondsInAnHour) / millisecondsInAMinute);
    const seconds = Math.floor((timeDifference % millisecondsInAMinute) / 1000);

    // Display the result in the <p> element with id "timer"
    document.getElementById("timer").innerHTML = 
        `${days} DAYS ${hours}:${minutes}:${seconds}`;
}
function updateTimer1() {
    const endDate = new Date("2024-10-19T23:59:59"); //TODO CHANGE THE TIMER WHEN NEED
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = endDate - currentDate;

    // If the time difference is less than or equal to 0, stop the timer
    if (timeDifference <= 0) {
        document.getElementById("timer").innerHTML = "<span id='expired_text'>YESSS YESSS NO VA YESS HAA அழகிய</span>";
        return;
    }

    // Convert the time difference into days, hours, minutes, and seconds
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const millisecondsInAnHour = 1000 * 60 * 60;
    const millisecondsInAMinute = 1000 * 60;

    const days = Math.floor(timeDifference / millisecondsInADay);
    const hours = Math.floor((timeDifference % millisecondsInADay) / millisecondsInAnHour);
    const minutes = Math.floor((timeDifference % millisecondsInAnHour) / millisecondsInAMinute);
    const seconds = Math.floor((timeDifference % millisecondsInAMinute) / 1000);

    // Display the result in the <p> element with id "timer"
    document.getElementById("end_timer").innerHTML = 
        `${hours}:${minutes}:${seconds}`;

    // Update the timer every second
    setTimeout(updateTimer1, 1000);
}

setInterval(updateTimer, 1000);
setInterval(updateTimer1,1000);