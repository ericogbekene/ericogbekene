
const currentDayOfTheWeek = document.querySelector('.currentDayOfTheWeek');
const currentUTCTime = document.querySelector('.currentUTCTime');

function formatWithLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
}

function updateDateTime(){
    const now = new Date();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeek = daysOfWeek[now.getUTCDay()];
            const hours = formatWithLeadingZero(now.getUTCHours());
            const minutes = formatWithLeadingZero(now.getUTCMinutes());
            const seconds = formatWithLeadingZero(now.getUTCSeconds());
            const currentTime = `${hours}:${minutes}:${seconds} UTC`;

            currentDayOfTheWeek.textContent = `Current Day: ${dayOfWeek}`;
            currentUTCTime.textContent = `Current UTC Time: ${currentTime}`;
}
// Update date and time initially
updateDateTime();

// Update date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

// Event listener for the button
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Button Clicked!');
});