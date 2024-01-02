document.getElementById('startButton').addEventListener('click', startBreathingExercise);

function startBreathingExercise() {
    let duration = parseInt(document.getElementById('durationInput').value);
    if (!duration) {
        alert("Please enter a valid duration in minutes.");
        return;
    }

    let totalTime = duration * 60; // Convert minutes to seconds
    let chime = document.getElementById('chime');

    let interval = setInterval(() => {
        chime.play();
        totalTime -= 5; // Subtract 5 seconds after each chime

        if (totalTime <= 0) {
            clearInterval(interval);
            alert("Exercise completed!");
        }
    }, 5000); // 5000 milliseconds (5 seconds) interval
}
